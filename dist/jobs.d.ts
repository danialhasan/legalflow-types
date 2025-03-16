/**
 * Job Types
 *
 * Contains types related to background jobs, processing tasks, and their statuses
 * Updated to use the new schema-specific types from the modularized database structure
 */
import { Json, ProcessingStatus } from './basic';
import { CoreTable, IntegrationsTable } from './helpers';
/**
 * Represents a background job in the system
 * Maps to core.jobs table
 */
export type Job = CoreTable<'jobs'>;
/**
 * Types of jobs supported by the system
 */
export type JobType = 'document_upload' | 'document_processing' | 'document_extraction' | 'document_classification' | 'document_chunking' | 'document_embedding' | 'gmail_sync' | 'calendar_sync' | 'email_processing' | 'calendar_processing' | 'communication_analysis' | 'deal_analysis' | 'client_mapping' | 'action_item_extraction' | 'ai_ranking' | 'unified_analysis' | 'insights_generation' | 'compliance_report' | 'document_generation' | 'pdf_annotation';
/**
 * Progress information for a job
 */
export interface JobProgress {
    current_step: string;
    total_steps: number;
    current_step_number: number;
    percentage: number;
    eta_seconds?: number;
    detail?: string;
}
/**
 * Results of a completed job
 */
export interface JobResults {
    summary?: string;
    data?: Json;
    error?: string;
    warnings?: string[];
    metrics?: {
        duration_ms: number;
        input_size?: number;
        output_size?: number;
        [key: string]: any;
    };
}
/**
 * Google data specific job
 * Maps to integrations.google_data_jobs table
 */
export type GoogleDataJob = IntegrationsTable<'google_data_jobs'>;
/**
 * Error logging
 * Maps to core.error_logs table
 */
export type ErrorLog = CoreTable<'error_logs'>;
/**
 * Google webhook notification
 * Maps to integrations.google_webhook_notifications table
 */
export type GoogleWebhookNotification = IntegrationsTable<'google_webhook_notifications'>;
/**
 * Google webhook channel
 * Maps to integrations.google_webhook_channels table
 */
export type GoogleWebhookChannel = IntegrationsTable<'google_webhook_channels'>;
/**
 * Job creation request
 */
export interface CreateJobRequest {
    type: JobType;
    params?: Record<string, any>;
    user_id?: string;
    priority?: 'high' | 'normal' | 'low';
}
/**
 * Job status response
 */
export interface JobStatusResponse {
    id: string;
    type: JobType;
    status: ProcessingStatus;
    progress: number;
    created_at: string;
    started_at: string | null;
    updated_at: string | null;
    completed_at: string | null;
    message: string | null;
    result: Record<string, any> | null;
    error: string | null;
}
