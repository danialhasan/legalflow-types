/**
 * Schema Helper Types
 * 
 * This file provides helper types for working with the modularized database schema structure.
 * These helpers make it easier to reference tables within specific schemas.
 */
import { Database } from './supabase';

// Schema-specific type helpers
export type SalesSchema = Database['sales']['Tables'];
export type AssistantSchema = Database['assistant']['Tables'];
export type DocumentsSchema = Database['documents']['Tables'];
export type TelephonySchema = Database['telephony']['Tables'];
export type ComplianceSchema = Database['compliance']['Tables'];
export type CoreSchema = Database['core']['Tables'];
export type IntegrationsSchema = Database['integrations']['Tables'];
export type AnalysisSchema = Database['analysis']['Tables'];

// Helper for getting row types from specific schemas
export type SalesTable<T extends keyof SalesSchema> = SalesSchema[T]['Row'];
export type AssistantTable<T extends keyof AssistantSchema> = AssistantSchema[T]['Row'];
export type DocumentsTable<T extends keyof DocumentsSchema> = DocumentsSchema[T]['Row'];
export type TelephonyTable<T extends keyof TelephonySchema> = TelephonySchema[T]['Row'];
export type ComplianceTable<T extends keyof ComplianceSchema> = ComplianceSchema[T]['Row'];
export type CoreTable<T extends keyof CoreSchema> = CoreSchema[T]['Row'];
export type IntegrationsTable<T extends keyof IntegrationsSchema> = IntegrationsSchema[T]['Row'];
export type AnalysisTable<T extends keyof AnalysisSchema> = AnalysisSchema[T]['Row'];

// Helper for getting insert types from specific schemas
export type SalesInsert<T extends keyof SalesSchema> = SalesSchema[T]['Insert'];
export type AssistantInsert<T extends keyof AssistantSchema> = AssistantSchema[T]['Insert'];
export type DocumentsInsert<T extends keyof DocumentsSchema> = DocumentsSchema[T]['Insert'];
export type TelephonyInsert<T extends keyof TelephonySchema> = TelephonySchema[T]['Insert'];
export type ComplianceInsert<T extends keyof ComplianceSchema> = ComplianceSchema[T]['Insert'];
export type CoreInsert<T extends keyof CoreSchema> = CoreSchema[T]['Insert'];
export type IntegrationsInsert<T extends keyof IntegrationsSchema> = IntegrationsSchema[T]['Insert'];
export type AnalysisInsert<T extends keyof AnalysisSchema> = AnalysisSchema[T]['Insert'];

// Helper for getting update types from specific schemas
export type SalesUpdate<T extends keyof SalesSchema> = SalesSchema[T]['Update'];
export type AssistantUpdate<T extends keyof AssistantSchema> = AssistantSchema[T]['Update'];
export type DocumentsUpdate<T extends keyof DocumentsSchema> = DocumentsSchema[T]['Update'];
export type TelephonyUpdate<T extends keyof TelephonySchema> = TelephonySchema[T]['Update'];
export type ComplianceUpdate<T extends keyof ComplianceSchema> = ComplianceSchema[T]['Update'];
export type CoreUpdate<T extends keyof CoreSchema> = CoreSchema[T]['Update'];
export type IntegrationsUpdate<T extends keyof IntegrationsSchema> = IntegrationsSchema[T]['Update'];
export type AnalysisUpdate<T extends keyof AnalysisSchema> = AnalysisSchema[T]['Update'];