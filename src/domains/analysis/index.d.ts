/**
 * Analysis Domain Types
 *
 * Contains type definitions for the analysis schema tables and related types.
 * These types represent data analysis and processing entities.
 */
import type { Database } from '../../generated/database';
export type AnalysisSchema = Database['analysis']['Tables'];
export type ProcessedCalendarEvent = AnalysisSchema['processed_calendar_events']['Row'];
export type ProcessedEmailThread = AnalysisSchema['processed_email_threads']['Row'];
export type ProcessedEmail = AnalysisSchema['processed_emails']['Row'];
export type ProcessedEventSeries = AnalysisSchema['processed_event_series']['Row'];
export type UnifiedAnalysisResult = AnalysisSchema['unified_analysis_results']['Row'];
export type ProcessedCalendarEventInsert = AnalysisSchema['processed_calendar_events']['Insert'];
export type ProcessedEmailThreadInsert = AnalysisSchema['processed_email_threads']['Insert'];
export type ProcessedEmailInsert = AnalysisSchema['processed_emails']['Insert'];
export type ProcessedEventSeriesInsert = AnalysisSchema['processed_event_series']['Insert'];
export type UnifiedAnalysisResultInsert = AnalysisSchema['unified_analysis_results']['Insert'];
export type ProcessedCalendarEventUpdate = AnalysisSchema['processed_calendar_events']['Update'];
export type ProcessedEmailThreadUpdate = AnalysisSchema['processed_email_threads']['Update'];
export type ProcessedEmailUpdate = AnalysisSchema['processed_emails']['Update'];
export type ProcessedEventSeriesUpdate = AnalysisSchema['processed_event_series']['Update'];
export type UnifiedAnalysisResultUpdate = AnalysisSchema['unified_analysis_results']['Update'];
export * from './creation';
