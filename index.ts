/**
 * Unified Types for LegalFlow
 * 
 * This package contains all shared types used across LegalFlow services:
 * - AI Service
 * - Communication Service
 * - Frontend
 * 
 * These types are consolidated to prevent schema drift and type fragmentation
 * between services.
 */

// Export schema helpers
export * from './helpers';

// Export basic shared types
export * from './basic';

// Export types for deals
export * from './deals';

// Export user types
export * from './users';

// Export communication types, but rename ClientMapping to avoid collision
export {
  // Email related types
  EmailAddress,
  EmailMessage,
  EmailAttachment,
  AttachmentStatus,
  GoogleEmail,
  
  // Calendar related types
  CalendarEvent,
  CalendarAttendee,
  GoogleCalendarEvent,
  
  // Integration related types
  SyncStatus,
  SyncStatusState,
  WebhookNotification,
  WebhookChannel,
  GoogleSyncStatus,
  GoogleWebhookNotification,
  GoogleWebhookChannel,
  
  // Analysis related types
  ProcessedEmail,
  ProcessedEmailThread,
  ProcessedCalendarEvent,
  ProcessedEventSeries,
  UnifiedAnalysisRecord,
  
  // Outbound call related types
  DynamicVariables,
  OutboundCallRequest,
  CustomParameters,
  TwilioStartMessage,
  TwilioMediaMessage,
  TwilioStopMessage,
  TwilioUnknownMessage,
  TwilioMessage,
  ElevenLabsOptions,
  QueryParams,
  
  // Telephony related types
  CallLog,
  CallEvent,
  CallScript,
  
  // OAuth types
  OAuthTokenData,
  AuthUrlResponse,
  OAuthStatusResponse,
  GmailSettings,
  
  // Response types
  EmailsResponse,
  CalendarEventsResponse,

  // Campaign related types
  CampaignStatus,
  CallOutcome,
  LeadStatus,
  StatusUpdateSource,
  StatusUpdateRequest,
  CampaignExecutionRequest,
  CallExecutionRequest,
  CampaignSchedule,
  Campaign,
  CampaignLead,
  CampaignProgress,
  
  // Analysis and view related types
  UnifiedViewResponse,
  ExtractedEmailData,
  ExtractedCalendarData,
  UnifiedAnalysisResult,
  ExtractedAddress,
  ExtractedDate,
  ActionItem,
  SyncJobStatus,
  
  // Rename ClientMapping to avoid collision
  ClientMapping as CommunicationClientMapping,
  UICategoryItem,
  UICategories
} from './communication';

// Export message and conversation types
export * from './messages';

// Export document types
export * from './documents';

// Export job types
export * from './jobs';

// Export lead types
export * from './leads';

// Export compliance types
export * from './compliance';

// Export API types
export * from './api';

// Export enum types
export * from './enums';

// Export AI service types
export {
  // API response types
  EmailApiResponse,
  CalendarApiResponse,
  GoogleDataQueryParams,
  
  // Processing request/response types
  EmailProcessingRequest,
  CalendarProcessingRequest,
  UnifiedAnalysisRequest,
  EmailProcessingResponse,
  CalendarProcessingResponse,
  UnifiedAnalysisResponse,
  
  // Document processing types
  DocumentProcessingStatus,
  DocumentType,
  DocumentProcessingJob,
  DocumentProcessingResult
} from './ai';

// Export client types
export {
  Client,
  ClientMetadata,
  ClientMappingData,
  // Rename ClientMapping to avoid collision
  ClientMapping as CRMClientMapping,
  CRMClient,
  ClientInsight,
  IdentifiedClient,
  ClientTimeline,
  ClientRelationship
} from './clients';

// Export database types
export { 
  Json,
  Database,
  Tables,
  TablesInsert,
  TablesUpdate,
  Enums,
  CompositeTypes
} from './supabase';