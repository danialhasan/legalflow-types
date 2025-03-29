import { Project, Node, ts } from 'ts-morph';
import * as path from 'path';
import * as fs from 'fs';

// Use NodeJS __dirname directly in CommonJS
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'generated', 'databaseCamel.ts');
const DATABASE_TYPE_PATH = path.join(__dirname, '..', 'src', 'generated', 'database.ts');

// Function to convert snake_case to camelCase
function snakeToCamel(str: string): string {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

// Create a new ts-morph project
const project = new Project({
  tsConfigFilePath: path.join(__dirname, '..', 'tsconfig.json'),
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

// Find the Database interface
const databaseTypeAlias = sourceFile
  .getTypeAliases()
  .find(typeAlias => typeAlias.getName() === 'Database');

if (!databaseTypeAlias) {
  throw new Error('Database type alias not found in the source file');
}

// Create a new source file for the DatabaseCamel interface
const outputFile = project.createSourceFile(
  OUTPUT_FILE,
  `// Generated file - do not modify directly\n\nimport type { Json } from '../index';\n\n`,
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

// Save the file temporarily to get the structure
outputFile.saveSync();
console.log('\n🔄 Processing nodes for camel case conversion...');

// Process all nodes in the file
sourceFile.forEachDescendant(node => {
  if (Node.isPropertySignature(node)) {
    const propertyName = node.getName();
    if (propertyName.includes('_')) {
      // Get the corresponding node in the output file
      const camelCaseNode = outputFile
        .getDescendantsOfKind(ts.SyntaxKind.PropertySignature)
        .find(n => n.getName() === propertyName);

      if (camelCaseNode) {
        const camelCaseName = snakeToCamel(propertyName);
        camelCaseNode.rename(camelCaseName);
      }
    }
  }
});

// Process all property signatures in the output file
outputFile.forEachDescendant(node => {
  if (Node.isPropertySignature(node)) {
    const propertyName = node.getName();
    if (propertyName.includes('_')) {
      const camelCaseName = snakeToCamel(propertyName);
      node.rename(camelCaseName);
    }
  }
});

// Save the file
outputFile.saveSync();

console.log('\n✨ Successfully generated DatabaseCamel types at:');
console.log(`   ${OUTPUT_FILE}\n`); 