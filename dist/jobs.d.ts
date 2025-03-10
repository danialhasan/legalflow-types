/**
 * Job Types
 *
 * Contains types related to background jobs, processing tasks, and their statuses
 */
import { Json, ProcessingStatus } from './basic';
/**
 * Represents a background job in the system
 */
export interface Job {
    id: string;
    type: JobType;
    status: ProcessingStatus;
    progress: number;
    created_at: string;
    started_at: string | null;
    completed_at: string | null;
    updated_at: string | null;
    user_id: string | null;
    params: Json | null;
    result: Json | null;
    error: string | null;
    message: string | null;
    current_step: string | null;
}
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
 */
export interface GoogleDataJob {
    id: string;
    user_id: string;
    job_type: 'gmail_sync' | 'calendar_sync' | 'drive_sync' | 'contacts_sync';
    status: ProcessingStatus;
    started_at: string | null;
    completed_at: string | null;
    progress: number | null;
    error: string | null;
    params: Json | null;
    result: Json | null;
    created_at: string;
    updated_at: string;
}
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
/**
 * Google webhook notification
 */
export interface GoogleWebhookNotification {
    id: string;
    user_id: string | null;
    resource_id: string | null;
    resource_type: string | null;
    data: Json | null;
    processed: boolean | null;
    created_at: string | null;
}
