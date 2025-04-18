/**
 * Database Schema and Table Constants
 * 
 * AUTOMATICALLY GENERATED from the Database type definition.
 * DO NOT EDIT THIS FILE MANUALLY.
 * 
 * Generated on: 4/18/2025, 2:10:54 AM
 */

import type { Database } from './database';

// Schema name constants
export const Schema = {
  "ANALYSIS": "analysis",
  "ASSISTANT": "assistant",
  "COMPLIANCE": "compliance",
  "CORE": "core",
  "DOCUMENTS": "documents",
  "INTEGRATIONS": "integrations",
  "SALES": "sales",
  "STORAGE": "storage",
  "TELEPHONY": "telephony"
} as const;

// Type to ensure schema values match Database type
export type SchemaName = keyof Database;

// Table name constants organized by schema
export const Table = {
  "Analysis": {
    "CANON_BLOCKS": "canon_blocks",
    "CLIENT_CONTEXT_GRAPH_CANON_BLOCKS": "client_context_graph_canon_blocks",
    "CLIENT_CONTEXT_GRAPHS": "client_context_graphs",
    "DEAL_CONTEXT_GRAPH_CANON_BLOCKS": "deal_context_graph_canon_blocks",
    "DEAL_CONTEXT_GRAPHS": "deal_context_graphs",
    "EXTRACTED_INPUTS": "extracted_inputs",
    "PROCESSED_CALENDAR_EVENTS": "processed_calendar_events",
    "PROCESSED_EMAIL_THREADS": "processed_email_threads",
    "PROCESSED_EMAILS": "processed_emails",
    "PROCESSED_EVENT_SERIES": "processed_event_series",
    "UNIFIED_ANALYSIS_RESULTS": "unified_analysis_results"
  },
  "Assistant": {
    "AGENT_RECOMMENDATIONS": "agent_recommendations",
    "AGENT_RUN_STEPS": "agent_run_steps",
    "AGENT_RUNS": "agent_runs",
    "AGENTS": "agents",
    "CONVERSATIONS": "conversations",
    "MESSAGES": "messages"
  },
  "Compliance": {
    "CITATIONS": "citations",
    "COMPLIANCE_REPORTS": "compliance_reports"
  },
  "Core": {
    "CLIENT_TYPES": "client_types",
    "ERROR_LOGS": "error_logs",
    "FEEDBACK_REPORTS": "feedback_reports",
    "JOBS": "jobs",
    "SOURCES": "sources",
    "UI_AGENTS": "ui_agents",
    "USER_CLIENT_TYPES": "user_client_types",
    "USER_METADATA": "user_metadata",
    "USER_RANKINGS": "user_rankings",
    "USER_SETTINGS": "user_settings"
  },
  "Documents": {
    "DEAL_DOCUMENTS": "deal_documents",
    "DOCUMENT_CHUNKS": "document_chunks",
    "DOCUMENT_GROUPS": "document_groups",
    "DOCUMENT_METADATA": "document_metadata"
  },
  "Integrations": {
    "EMAIL_ATTACHMENTS": "email_attachments",
    "GOOGLE_CALENDAR_EVENTS": "google_calendar_events",
    "GOOGLE_DATA_JOBS": "google_data_jobs",
    "GOOGLE_EMAILS": "google_emails",
    "GOOGLE_OAUTH_TOKENS": "google_oauth_tokens",
    "GOOGLE_SYNC_STATUS": "google_sync_status",
    "GOOGLE_WEBHOOK_CHANNELS": "google_webhook_channels",
    "GOOGLE_WEBHOOK_NOTIFICATIONS": "google_webhook_notifications"
  },
  "Sales": {
    "CAMPAIGN_LEADS": "campaign_leads",
    "CAMPAIGNS": "campaigns",
    "CLIENT_MAPPINGS": "client_mappings",
    "CLIENTS": "clients",
    "CRMS": "crms",
    "DEALS": "deals",
    "LEAD_DEAL_MATCHES": "lead_deal_matches",
    "LEADS": "leads"
  },
  "Storage": {
    "BUCKETS": "buckets",
    "MIGRATIONS": "migrations",
    "OBJECTS": "objects",
    "S3_MULTIPART_UPLOADS": "s3_multipart_uploads",
    "S3_MULTIPART_UPLOADS_PARTS": "s3_multipart_uploads_parts"
  },
  "Telephony": {
    "CALL_EVENTS": "call_events",
    "CALL_LOGS": "call_logs",
    "CALL_SCRIPTS": "call_scripts"
  }
} as const;

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
}