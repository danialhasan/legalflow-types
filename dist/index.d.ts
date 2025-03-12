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
export * from './basic';
export * from './deals';
export { EmailAddress, EmailMessage, EmailAttachment, AttachmentStatus, CalendarEvent, CalendarAttendee, SyncStatus, SyncStatusState, WebhookNotification, WebhookChannel, DynamicVariables, OutboundCallRequest, CustomParameters, TwilioStartMessage, TwilioMediaMessage, TwilioStopMessage, TwilioUnknownMessage, TwilioMessage, ElevenLabsOptions, QueryParams, OAuthTokenData, CampaignStatus, CallOutcome, LeadStatus, StatusUpdateSource, StatusUpdateRequest, CampaignExecutionRequest, CallExecutionRequest, CampaignSchedule, Campaign, CampaignProgress, CallLog, UnifiedViewResponse, ExtractedEmailData, ExtractedCalendarData, UnifiedAnalysisResult, ExtractedAddress, ExtractedDate, ActionItem, SyncJobStatus, ClientMapping as CommunicationClientMapping, UICategoryItem, UICategories } from './communication';
export * from './documents';
export * from './jobs';
export * from './api';
export * from './enums';
export { EmailApiResponse, CalendarApiResponse, GoogleDataQueryParams, ConversationStatus, MessageRole, ConversationParameters, Message, ToolCall, Conversation, EmailProcessingRequest, CalendarProcessingRequest, UnifiedAnalysisRequest, EmailProcessingResponse, CalendarProcessingResponse, UnifiedAnalysisResponse, DocumentProcessingStatus, DocumentType, DocumentMetadata, DocumentProcessingJob, DocumentProcessingResult } from './ai';
export { Client, ClientMetadata, ClientMapping as CRMClientMapping, CRMClient, ClientInsight, IdentifiedClient, ClientTimeline, ClientRelationship } from './clients';
export { Json, Database, Tables, TablesInsert, TablesUpdate, Enums, CompositeTypes } from './supabase';
