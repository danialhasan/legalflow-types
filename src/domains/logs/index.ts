/**
 * Logs Domain Types
 *
 * Contains type definitions for the logs schema tables and related types.
 * These types represent logging and analytics entities.
 */
import type { Database } from '../../generated/database';

// Schema type shorthand
export type LogsSchema = Database['logs']['Tables'];

// Table type exports - Row types
export type ErrorLog = LogsSchema['error_logs']['Row'];
export type LlmCompletion = LogsSchema['llm_completions']['Row'];
export type LlmCompletionDetail = LogsSchema['llm_completion_details']['Row'];

// Table type exports - Insert types
export type ErrorLogInsert = LogsSchema['error_logs']['Insert'];
export type LlmCompletionInsert = LogsSchema['llm_completions']['Insert'];
export type LlmCompletionDetailInsert = LogsSchema['llm_completion_details']['Insert'];

// Table type exports - Update types
export type ErrorLogUpdate = LogsSchema['error_logs']['Update'];
export type LlmCompletionUpdate = LogsSchema['llm_completions']['Update'];
export type LlmCompletionDetailUpdate = LogsSchema['llm_completion_details']['Update'];

// View types
export type ErrorSummaryBySource = Database['logs']['Views']['error_summary_by_source']['Row'];
export type RecentErrorWithUser = Database['logs']['Views']['recent_errors_with_users']['Row'];
export type ErrorTrendsDaily = Database['logs']['Views']['error_trends_daily']['Row'];
export type MostCommonError = Database['logs']['Views']['most_common_errors']['Row'];
export type PipelineErrorRate = Database['logs']['Views']['pipeline_error_rates']['Row'];
export type UserErrorProfile = Database['logs']['Views']['user_error_profiles']['Row'];