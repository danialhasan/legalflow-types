/**
 * Enums
 * 
 * Contains enum types used across the application
 */

/**
 * Deal status values
 */
export enum DealStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  PENDING = 'pending',
  CLOSED = 'closed',
  CANCELLED = 'cancelled',
}

/**
 * Deal types
 */
export enum DealType {
  REAL_ESTATE = 'real_estate',
  CORPORATE = 'corporate',
  LITIGATION = 'litigation',
  INTELLECTUAL_PROPERTY = 'intellectual_property',
  ESTATE_PLANNING = 'estate_planning',
  IMMIGRATION = 'immigration',
  OTHER = 'other',
}

/**
 * Document status values
 */
export enum DocumentStatus {
  UPLOADING = 'uploading',
  PENDING = 'pending',
  PROCESSING = 'processing',
  PROCESSED = 'processed',
  FAILED = 'failed',
  DELETED = 'deleted',
}

/**
 * Document classifications
 */
export enum DocumentClassification {
  CONTRACT = 'contract',
  AGREEMENT = 'agreement',
  DEED = 'deed',
  WILL = 'will',
  POWER_OF_ATTORNEY = 'power_of_attorney',
  COURT_FILING = 'court_filing',
  LEGAL_BRIEF = 'legal_brief',
  CORRESPONDENCE = 'correspondence',
  INVOICE = 'invoice',
  OTHER = 'other',
}

/**
 * Job status values
 */
export enum JobStatus {
  PENDING = 'pending',
  QUEUED = 'queued',
  IN_PROGRESS = 'in_progress',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
}

/**
 * Campaign status values
 */
export enum CampaignStatus {
  DRAFT = 'draft',
  SCHEDULED = 'scheduled',
  ACTIVE = 'active',
  PAUSED = 'paused',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

/**
 * Lead status values
 */
export enum LeadStatus {
  NEW = 'new',
  CONTACTED = 'contacted',
  QUALIFIED = 'qualified',
  UNQUALIFIED = 'unqualified',
  CONVERTED = 'converted',
  LOST = 'lost',
}

/**
 * Call outcome values
 */
export enum CallOutcome {
  COMPLETED = 'completed',
  VOICEMAIL = 'voicemail',
  NO_ANSWER = 'no_answer',
  BUSY = 'busy',
  SCHEDULED_CALLBACK = 'scheduled_callback',
  CANCELLED = 'cancelled',
  FAILED = 'failed',
}

/**
 * Priority levels
 */
export enum Priority {
  CRITICAL = 'critical',
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
  NONE = 'none',
}

/**
 * Confidence levels for AI analysis
 */
export enum ConfidenceLevel {
  VERY_HIGH = 'very_high', // 0.9-1.0
  HIGH = 'high',           // 0.7-0.9
  MEDIUM = 'medium',       // 0.5-0.7
  LOW = 'low',             // 0.3-0.5
  VERY_LOW = 'very_low',   // 0.0-0.3
}

/**
 * Entity types for people and organizations
 */
export enum EntityType {
  INDIVIDUAL = 'individual',
  ORGANIZATION = 'organization',
}

/**
 * Document group types
 */
export enum DocumentGroupType {
  DEAL = 'deal',
  CLIENT = 'client',
  CASE = 'case',
  PROJECT = 'project',
  GENERAL = 'general',
} 