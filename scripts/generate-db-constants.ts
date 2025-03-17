#!/usr/bin/env ts-node
/**
 * Database Schema Constants Generator using TypeScript Compiler API
 * 
 * This script analyzes the Database type definition in supabase.ts
 * and automatically generates schema and table constants using a functional approach.
 * 
 * It's designed to be run in the types package during build/prepare, so the
 * generated constants can be exported alongside the types for use in all services.
 */

import * as ts from 'typescript';
import * as path from 'path';
import * as fs from 'fs';

// Types
type SchemaMap = Map<string, string[]>;
type SchemaConstantsRecord = Record<string, string>;
type TableConstantsRecord = Record<string, Record<string, string>>;

/**
 * Finds the Database type declaration in the source file
 */
function findDatabaseType(sourceFile: ts.SourceFile): ts.TypeAliasDeclaration | ts.InterfaceDeclaration | undefined {
  // Use a recursive function to traverse the AST
  const findNode = (node: ts.Node): ts.TypeAliasDeclaration | ts.InterfaceDeclaration | undefined => {
    // Check if this node is a Database type definition
    if ((ts.isTypeAliasDeclaration(node) || ts.isInterfaceDeclaration(node)) && 
        node.name.text === 'Database') {
      return node;
    }
    
    // Search child nodes recursively
    return ts.forEachChild(node, findNode);
  };
  
  return findNode(sourceFile);
}

/**
 * Extracts schema nodes from the Database type
 */
function extractSchemaNodes(databaseType: ts.TypeAliasDeclaration | ts.InterfaceDeclaration): Map<string, ts.TypeNode> {
  const schemaMap = new Map<string, ts.TypeNode>();
  
  // Handle type alias (export type Database = {...})
  if (ts.isTypeAliasDeclaration(databaseType) && ts.isTypeLiteralNode(databaseType.type)) {
    databaseType.type.members
      .filter(member => 
        ts.isPropertySignature(member) && 
        member.name && 
        ts.isIdentifier(member.name) && 
        member.name.text !== 'public' && 
        member.type
      )
      .forEach(member => {
        const prop = member as ts.PropertySignature;
        const schemaName = (prop.name as ts.Identifier).text;
        schemaMap.set(schemaName, prop.type!);
      });
  }
  
  // Handle interface (interface Database {...})
  if (ts.isInterfaceDeclaration(databaseType)) {
    databaseType.members
      .filter(member => 
        ts.isPropertySignature(member) && 
        member.name && 
        ts.isIdentifier(member.name) && 
        member.name.text !== 'public' && 
        member.type
      )
      .forEach(member => {
        const prop = member as ts.PropertySignature;
        const schemaName = (prop.name as ts.Identifier).text;
        schemaMap.set(schemaName, prop.type!);
      });
  }
  
  return schemaMap;
}

/**
 * Extracts table names from a schema type node
 */
function extractTablesFromSchema(schemaType: ts.TypeNode): string[] {
  // If not a type literal, we can't extract tables
  if (!ts.isTypeLiteralNode(schemaType)) {
    return [];
  }
  
  // Find the Tables property
  const tablesProperty = schemaType.members.find(member => 
    ts.isPropertySignature(member) && 
    member.name && 
    ts.isIdentifier(member.name) && 
    member.name.text === 'Tables'
  ) as ts.PropertySignature | undefined;
  
  // If no Tables property or not a type literal, return empty array
  if (!tablesProperty?.type || !ts.isTypeLiteralNode(tablesProperty.type)) {
    return [];
  }
  
  // Extract table names from the Tables type
  return tablesProperty.type.members
    .filter(member => 
      ts.isPropertySignature(member) && 
      member.name && 
      ts.isIdentifier(member.name)
    )
    .map(member => (member.name as ts.Identifier).text);
}

/**
 * Extracts all schema and table information from the source file
 */
function extractSchemaInfo(sourceFile: ts.SourceFile): SchemaMap {
  const schemaMap = new Map<string, string[]>();
  
  // Find Database type
  const databaseType = findDatabaseType(sourceFile);
  if (!databaseType) {
    console.warn('Could not find Database type definition');
    return schemaMap;
  }
  
  // Extract schemas and tables
  const schemaNodes = extractSchemaNodes(databaseType);
  
  // Extract tables for each schema
  schemaNodes.forEach((schemaType, schemaName) => {
    const tables = extractTablesFromSchema(schemaType);
    schemaMap.set(schemaName, tables);
  });
  
  return schemaMap;
}

/**
 * Generates schema constants (ANALYSIS: 'analysis', etc.)
 */
function generateSchemaConstants(schemaMap: SchemaMap): SchemaConstantsRecord {
  return Array.from(schemaMap.keys()).reduce((acc, schemaName) => {
    acc[schemaName.toUpperCase()] = schemaName;
    return acc;
  }, {} as SchemaConstantsRecord);
}

/**
 * Generates table constants grouped by schema
 */
function generateTableConstants(schemaMap: SchemaMap): TableConstantsRecord {
  return Array.from(schemaMap.entries()).reduce((acc, [schemaName, tables]) => {
    // Convert schema name to PascalCase (analysis -> Analysis)
    const pascalSchemaName = schemaName.charAt(0).toUpperCase() + schemaName.slice(1);
    
    // Convert table names to constants
    acc[pascalSchemaName] = tables.reduce((tableAcc, tableName) => {
      // Convert to UPPER_SNAKE_CASE
      const constName = tableName
        .split('_')
        .map(part => part.toUpperCase())
        .join('_');
      
      tableAcc[constName] = tableName;
      return tableAcc;
    }, {} as Record<string, string>);
    
    return acc;
  }, {} as TableConstantsRecord);
}

/**
 * Generates the content of the constants file
 */
function generateFileContent(
  schemaConstants: SchemaConstantsRecord, 
  tableConstants: TableConstantsRecord
): string {
  return `/**
 * Database Schema and Table Constants
 * 
 * AUTOMATICALLY GENERATED from the Database type definition.
 * DO NOT EDIT THIS FILE MANUALLY.
 * 
 * Generated on: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
 */

import type { Database } from './supabase';

// Schema name constants
export const Schema = ${JSON.stringify(schemaConstants, null, 2)} as const;

// Type to ensure schema values match Database type
export type SchemaName = keyof Database;

// Table name constants organized by schema
export const Table = ${JSON.stringify(tableConstants, null, 2)} as const;

/**
 * Helper function to create a type-safe schema + table reference
 * 
 * @example
 * const { schema, table } = getTableRef(Schema.ANALYSIS, Table.Analysis.PROCESSED_EMAILS);
 * await supabase.schema(schema).from(table).select('*');
 */
export function getTableRef<S extends SchemaName>(
  schema: S, 
  table: string
): { schema: S; table: string } {
  return { schema, table };
}`;
}

/**
 * Main function that orchestrates the entire process
 */
function generateDbConstants(): void {
  try {
    // Paths
    const typesSourcePath = path.resolve(__dirname, '../src/supabase.ts');
    const outputPath = path.resolve(__dirname, '../src/db-constants.ts');
    
    console.log(`Looking for Database type in: ${typesSourcePath}`);
    
    // Check if file exists
    if (!fs.existsSync(typesSourcePath)) {
      console.error(`Error: File not found: ${typesSourcePath}`);
      return;
    }
    
    // Parse TypeScript file
    const program = ts.createProgram([typesSourcePath], {});
    const sourceFile = program.getSourceFile(typesSourcePath);
    
    if (!sourceFile) {
      console.error('Could not process supabase.ts file');
      return;
    }
    
    // Extract schema information (pipeline style)
    const schemaMap = extractSchemaInfo(sourceFile);
    const schemaConstants = generateSchemaConstants(schemaMap);
    const tableConstants = generateTableConstants(schemaMap);
    const fileContent = generateFileContent(schemaConstants, tableConstants);
    
    // Write to file
    fs.writeFileSync(outputPath, fileContent);
    
    // Print stats
    const schemaCount = schemaMap.size;
    const tableCount = Array.from(schemaMap.values())
      .reduce((sum, tables) => sum + tables.length, 0);
    
    console.log(`✅ Generated db-constants.ts with ${schemaCount} schemas and ${tableCount} tables`);
  } catch (error) {
    console.error('Error generating constants:', error);
  }
}

// Run the generator
generateDbConstants();