import {
  Project,
  Node,
  ts,
  SyntaxKind,
  TypeLiteralNode,
  PropertyAssignment
} from 'ts-morph';
import * as path from 'path';
import * as fs from 'fs';

// Use NodeJS __dirname directly in CommonJS
const OUTPUT_FILE = path.join(
  __dirname,
  '..',
  'src',
  'generated',
  'databaseCamel.ts'
);
const DATABASE_TYPE_PATH = path.join(
  __dirname,
  '..',
  'src',
  'generated',
  'database.ts'
);

// Function to convert snake_case to camelCase
function snakeToCamel(str: string): string {
  // Handle potential edge case: "_typeName" -> "typeName"
  const temp = str.replace(/^_/, '');
  return temp.replace(/_([a-z0-9])/g, (_, letter) => letter.toUpperCase());
}

// Create a new ts-morph project
const project = new Project({
  tsConfigFilePath: path.join(__dirname, '..', 'tsconfig.json')
});

// Check if the type definition file exists
if (!fs.existsSync(DATABASE_TYPE_PATH)) {
  throw new Error(
    `Database type definition file not found at ${DATABASE_TYPE_PATH}`
  );
}

// Add the Database type definition file to the project
console.log('\n🔍 Adding Database type definitions from:');
console.log(`   ${DATABASE_TYPE_PATH}`);
const sourceFile = project.addSourceFileAtPath(DATABASE_TYPE_PATH);

// Find the Database type alias
const databaseTypeAlias = sourceFile
  .getTypeAliases()
  .find((typeAlias) => typeAlias.getName() === 'Database');

if (!databaseTypeAlias) {
  throw new Error('Database type alias not found in the source file');
}

// Create a new source file for the DatabaseCamel interface
const outputFile = project.createSourceFile(
  OUTPUT_FILE,
  `// Generated file - do not modify directly\n\nimport type { Database, Json } from '../index';\n\n`,
  { overwrite: true }
);

// Get the structure of the Database type
const typeText = databaseTypeAlias.getText();

// Create a clone of the type but with a different name
const camelTypeText = typeText.replace(
  'export type Database =',
  'export type DatabaseCamel ='
);

// Add the modified type text to the output file
outputFile.addStatements(camelTypeText);
console.log('\n📄 Initial DatabaseCamel structure created.');

// Find the DatabaseCamel type alias in the new file
const databaseCamelTypeAlias = outputFile
  .getTypeAliases()
  .find((typeAlias) => typeAlias.getName() === 'DatabaseCamel');

if (!databaseCamelTypeAlias) {
  throw new Error(
    'DatabaseCamel type alias could not be created or found in the output file.'
  );
}

// --- NEW STEP 1: Rename Composite Type Aliases ---
console.log('\n🔄 Renaming Composite Type Aliases...');
databaseCamelTypeAlias.getTypeNodeOrThrow().forEachDescendant((node) => {
  // Find properties named "CompositeTypes" which are assigned an ObjectLiteralExpression
  if (Node.isPropertyAssignment(node) && node.getName() === 'CompositeTypes') {
    const compositeTypesObject = node.getInitializerIfKind(
      SyntaxKind.ObjectLiteralExpression
    );
    if (compositeTypesObject) {
      compositeTypesObject.getProperties().forEach((property) => {
        // Ensure we are dealing with PropertyAssignments (key: value) inside CompositeTypes
        if (Node.isPropertyAssignment(property)) {
          const originalName = property.getName();
          if (originalName.includes('_')) {
            const camelCaseName = snakeToCamel(originalName);
            console.log(
              `   - Renaming composite type alias: ${originalName} -> ${camelCaseName}`
            );
            // Rename the key (the composite type alias)
            property.rename(camelCaseName);
          }
        }
      });
    }
  }
});
console.log('✅ Composite Type Aliases renamed.');

// --- STEP 2 (Existing Modified): Rename ALL Property Signatures (includes table columns AND props within composites) ---
console.log('\n🔄 Renaming all Property Signatures...');
let renamedSignaturesCount = 0;
outputFile.forEachDescendant((node) => {
  if (Node.isPropertySignature(node)) {
    const propertyName = node.getName();
    if (propertyName.includes('_')) {
      const camelCaseName = snakeToCamel(propertyName);
      if (propertyName !== camelCaseName) {
        // console.log(`   - Renaming property signature: ${propertyName} -> ${camelCaseName}`); // Optional: very verbose
        node.rename(camelCaseName);
        renamedSignaturesCount++;
      }
    }
  }
  // --- Also handle properties within Composite Types if defined differently (e.g., PropertyAssignment) ---
  // This might be redundant if Composite Type properties ARE PropertySignatures, but safer to include.
  if (Node.isPropertyAssignment(node)) {
    // Check if it's inside a CompositeTypes definition by checking ancestors
    const isInsideCompositeTypes = node
      .getAncestors()
      .some(
        (ancestor) =>
          Node.isPropertyAssignment(ancestor) &&
          ancestor.getName() === 'CompositeTypes'
      );

    if (isInsideCompositeTypes) {
      const propertyName = node.getName();
      if (propertyName.includes('_')) {
        const camelCaseName = snakeToCamel(propertyName);
        if (propertyName !== camelCaseName) {
          // console.log(`   - Renaming composite property assignment: ${propertyName} -> ${camelCaseName}`); // Optional: very verbose
          node.rename(camelCaseName);
          renamedSignaturesCount++; // Count these as well
        }
      }
    }
  }
});
console.log(
  `✅ ${renamedSignaturesCount} Property Signatures/Assignments renamed.`
);

// --- NEW STEP 3: Update Type References to Composite Types ---
console.log('\n🔄 Updating Type References to Composite Types...');
let updatedReferencesCount = 0;
const referencePattern =
  /Database\["([^"]+)"\]\["CompositeTypes"\]\["([^"]+)"\]/g; // Matches Database["schema"]["CompositeTypes"]["type_name"], added 'g' flag for global replace

// Iterate through all TypeNode descendants which might contain the reference
outputFile.forEachDescendant((node) => {
  if (Node.isTypeNode(node)) {
    // Broaden search to any TypeNode
    let nodeText = node.getText();
    let modified = false;

    // Use regex exec to find all matches within the node's text
    let match;
    let updatedText = nodeText;
    while ((match = referencePattern.exec(nodeText)) !== null) {
      const fullMatch = match[0]; // The full matched string like Database["..."]...
      const schemaName = match[1]; // e.g., "analysis"
      const originalTypeName = match[2]; // e.g., "extracted_input_data_type"
      const camelCaseTypeName = snakeToCamel(originalTypeName);

      // Construct the new reference pointing to DatabaseCamel
      const newReferenceText = `DatabaseCamel["${schemaName}"]["CompositeTypes"]["${camelCaseTypeName}"]`;

      if (fullMatch !== newReferenceText) {
        console.log(
          `   - Replacing in node: ${fullMatch} -> ${newReferenceText}`
        );
        // Replace only the matched part within the updatedText accumulator
        updatedText = updatedText.replace(fullMatch, newReferenceText);
        modified = true;
        updatedReferencesCount++; // Count each replacement
      }
    }

    // If any modifications were made to the text, update the node
    if (modified) {
      node.replaceWithText(updatedText);
    }
  }
});
console.log(`✅ ${updatedReferencesCount} Type References updated.`);

// --- NEW STEP 4: Update Type References to Enums ---
console.log('\n🔄 Updating Type References to Enums...');
let updatedEnumReferencesCount = 0;
const enumReferencePattern = /Database\["([^"]+)"\]\["Enums"\]\["([^"]+)"\]/g; // Matches Database["schema"]["Enums"]["enum_name"]

// Iterate through all TypeNode descendants which might contain the enum reference
outputFile.forEachDescendant((node) => {
  if (Node.isTypeNode(node)) {
    // Check any TypeNode
    let nodeText = node.getText();
    let modified = false;

    let match;
    let updatedText = nodeText;
    while ((match = enumReferencePattern.exec(nodeText)) !== null) {
      const fullMatch = match[0]; // The full matched string like Database["..."]...
      const schemaName = match[1]; // e.g., "analysis"
      const originalEnumName = match[2]; // e.g., "canon_block_tag"
      const camelCaseEnumName = snakeToCamel(originalEnumName);

      // Construct the new reference pointing to DatabaseCamel
      const newReferenceText = `DatabaseCamel["${schemaName}"]["Enums"]["${camelCaseEnumName}"]`;

      if (fullMatch !== newReferenceText) {
        console.log(
          `   - Replacing enum reference: ${fullMatch} -> ${newReferenceText}`
        );
        updatedText = updatedText.replace(fullMatch, newReferenceText);
        modified = true;
        updatedEnumReferencesCount++;
      }
    }

    if (modified) {
      node.replaceWithText(updatedText);
    }
  }
});
console.log(`✅ ${updatedEnumReferencesCount} Enum Type References updated.`);

// Save the final file
outputFile.saveSync();

console.log(
  '\n✨ Successfully generated fully camelCased DatabaseCamel types at:'
);
console.log(`   ${OUTPUT_FILE}\n`);
