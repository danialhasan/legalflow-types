/**
 * Compliance Domain Types
 * 
 * Contains type definitions for the compliance schema tables and related types.
 * These types represent legal compliance data and reporting.
 */
import type { Database } from '../../generated/database';

// Schema type shorthand
export type ComplianceSchema = Database['compliance']['Tables'];

// Table type exports - Row types
export type Citation = ComplianceSchema['citations']['Row'];
export type ComplianceReport = ComplianceSchema['compliance_reports']['Row'];

// Table type exports - Insert types
export type CitationInsert = ComplianceSchema['citations']['Insert'];
export type ComplianceReportInsert = ComplianceSchema['compliance_reports']['Insert'];

// Table type exports - Update types
export type CitationUpdate = ComplianceSchema['citations']['Update'];
export type ComplianceReportUpdate = ComplianceSchema['compliance_reports']['Update']; 