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
export * from './helpers';
export * from './basic';
export { Entity, HumanEntity, Relationship, KeyDate, ReferenceNumber, Deal, DealDocument as SalesDealDocument, LeadDealMatch as SalesLeadDealMatch, DealMetadata, DealAIAnalysis, ExtractedDealInfo, DealContext, ActionType, DealActionRecommendation, UserRanking, DealRanking, AIRankedDeal, AIDealAction, DealInsightResponse, DealRealTimeUpdate, AIRankingResponse } from './deals';
export * from './users';
export { EmailAddress, EmailMessage, EmailAttachment, AttachmentStatus, GoogleEmail, CalendarEvent, CalendarAttendee, GoogleCalendarEvent, SyncStatus, SyncStatusState, WebhookNotification, WebhookChannel, GoogleSyncStatus, GoogleWebhookNotification, GoogleWebhookChannel, ProcessedEmail, ProcessedEmailThread, ProcessedCalendarEvent, ProcessedEventSeries, UnifiedAnalysisRecord, DynamicVariables, OutboundCallRequest, CustomParameters, TwilioStartMessage, TwilioMediaMessage, TwilioStopMessage, TwilioUnknownMessage, TwilioMessage, ElevenLabsOptions, QueryParams, CallLog, CallEvent, CallScript, OAuthTokenData, AuthUrlResponse, OAuthStatusResponse, GmailSettings, EmailsResponse, CalendarEventsResponse, CampaignStatus, CallOutcome, LeadStatus, StatusUpdateSource, StatusUpdateRequest, CampaignExecutionRequest, CallExecutionRequest, CampaignSchedule, Campaign, CampaignLead, CampaignProgress, UnifiedViewResponse, ExtractedEmailData, ExtractedCalendarData, UnifiedAnalysisResult, ExtractedAddress, ExtractedDate, ActionItem, SyncJobStatus, ClientMapping as IntegrationsClientMapping, UICategoryItem, UICategories } from './communication';
export * from './messages';
export { Document, DocumentMetadata, DocumentMetadataExtended, DocumentInterface, ClassificationDetails, SourceInfo, DocumentChunk, DocumentChunkContent, DocumentChunkMetadata, Citation as DocumentsCitation, CitationBBox, UnstructuredInsight, UnstructuredData, DocumentGroup, DealDocument as DocsDealDocument, PdfViewerOptions } from './documents';
export * from './jobs';
export { Lead, LeadDealMatch as SalesLeadDealMatch2, LeadStatus as SalesLeadStatus, LeadEnrichmentData } from './leads';
export { Citation as ComplianceCitation, ComplianceReport, ComplianceReportStatus, ComplianceFindingCategory, ComplianceFindingSeverity, ComplianceFinding, ComplianceRecommendation } from './compliance';
export * from './api';
export * from './enums';
export { EmailApiResponse, CalendarApiResponse, GoogleDataQueryParams, EmailProcessingRequest, CalendarProcessingRequest, UnifiedAnalysisRequest, EmailProcessingResponse, CalendarProcessingResponse, UnifiedAnalysisResponse, DocumentProcessingStatus, DocumentType, DocumentProcessingJob, DocumentProcessingResult } from './ai';
export { Client, ClientMetadata, ClientMappingData, ClientMapping as SalesClientMapping, CRMClient, ClientInsight, IdentifiedClient, ClientTimeline, ClientRelationship } from './clients';
export { Json, Database, Tables, TablesInsert, TablesUpdate, Enums, CompositeTypes } from './supabase';
