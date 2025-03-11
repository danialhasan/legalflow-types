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

// Export basic shared types
export * from './basic';

// Export types for deals
export * from './deals';

// Export communication types, but rename ClientMapping to avoid collision
export {
  // Email related types
  EmailAddress,
  EmailMessage,
  EmailAttachment,
  AttachmentStatus,
  
  // Calendar related types
  CalendarEvent,
  CalendarAttendee,
  
  // Integration related types
  SyncStatus,
  SyncStatusState,
  WebhookNotification,
  WebhookChannel,
  
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
  
  // OAuth types
  OAuthTokenData,

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

// Export document types
export * from './documents';

// Export job types
export * from './jobs';

// Export API types
export * from './api';

// Export enum types
export * from './enums';

// Export client types
export {
  Client,
  ClientMetadata,
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