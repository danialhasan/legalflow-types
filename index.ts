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
  EmailMessage,
  EmailAttachment,
  CalendarEvent,
  CalendarAttendee,
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