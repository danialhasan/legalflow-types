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
// Export types for deals with renamed types to avoid conflicts
export {
  Entity,
  HumanEntity,
  Relationship,
  KeyDate,
  ReferenceNumber,
  Deal,
  DealDocument as SalesDealDocument,
  LeadDealMatch as SalesLeadDealMatch,
  DealMetadata,
  DealAIAnalysis,
  ExtractedDealInfo,
  DealContext,
  ActionType,
  DealActionRecommendation,
  UserRanking,
  DealRanking,
  AIRankedDeal,
  AIDealAction,
  DealInsightResponse,
  DealRealTimeUpdate,
  AIRankingResponse
} from './deals';

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
  ClientMapping as IntegrationsClientMapping,
  UICategoryItem,
  UICategories
} from './communication';

// Export message and conversation types
export * from './messages';

// Export document types with renamed types to avoid conflicts
export {
  Document,
  DocumentMetadata,
  DocumentMetadataExtended,
  DocumentInterface,
  ClassificationDetails,
  SourceInfo,
  DocumentChunk,
  DocumentChunkContent,
  DocumentChunkMetadata,
  Citation as DocumentsCitation,
  CitationBBox,
  UnstructuredInsight,
  UnstructuredData,
  DocumentGroup,
  DealDocument as DocsDealDocument,
  PdfViewerOptions
} from './documents';

// Export job types
export * from './jobs';

// Export lead types with renamed types to avoid conflicts
export {
  Lead,
  LeadDealMatch as SalesLeadDealMatch2,
  LeadStatus as SalesLeadStatus,
  LeadEnrichmentData
} from './leads';

// Export compliance types with renamed types to avoid conflicts
export {
  Citation as ComplianceCitation,
  ComplianceReport,
  ComplianceReportStatus,
  ComplianceFindingCategory,
  ComplianceFindingSeverity,
  ComplianceFinding,
  ComplianceRecommendation
} from './compliance';

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
  ClientMapping as SalesClientMapping,
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

// Export database constants
export {
  Schema,
  Table,
  SchemaName,
  getTableRef
} from './db-constants';