/**
 * Schema Helper Utilities
 * 
 * This file provides helper types for working with the modularized database schema structure.
 * These utilities make it easier to create consistent domain-specific types.
 */
import type { Database } from '../generated/database';

/**
 * Helper function to create a type-safe schema + table reference
 * 
 * @example
 * const { schema, table } = getTableRef(Schema.ANALYSIS, Table.Analysis.PROCESSED_EMAILS);
 * await supabase.schema(schema).from(table).select('*');
 */
export function getTableRef<S extends keyof Database>(
  schema: S, 
  table: string
): { schema: S; table: string } {
  return { schema, table };
} 