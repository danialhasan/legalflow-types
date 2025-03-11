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
export { EmailAddress, EmailMessage, EmailAttachment, AttachmentStatus, CalendarEvent, CalendarAttendee, SyncStatus, SyncStatusState, WebhookNotification, WebhookChannel, DynamicVariables, OutboundCallRequest, OAuthTokenData, CampaignStatus, CallOutcome, LeadStatus, CampaignSchedule, Campaign, UnifiedViewResponse, ExtractedEmailData, ExtractedCalendarData, UnifiedAnalysisResult, ExtractedAddress, ExtractedDate, ActionItem, SyncJobStatus, ClientMapping as CommunicationClientMapping, UICategoryItem, UICategories } from './communication';
export * from './documents';
export * from './jobs';
export * from './api';
export * from './enums';
export { Client, ClientMetadata, ClientMapping as CRMClientMapping, CRMClient, ClientInsight, IdentifiedClient, ClientTimeline, ClientRelationship } from './clients';
