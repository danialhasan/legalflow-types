/**
 * Shared Enums
 * 
 * Contains enumeration types shared across multiple domains.
 * These represent standardized values used throughout the application.
 */

/**
 * Common processing status values
 */
export enum ProcessingStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  PROCESSING = 'processing',
  QUEUED = 'queued',
  COMPLETED = 'completed',
  FAILED = 'failed'
}

/**
 * Priority levels for tasks and items
 */
export enum Priority {
  CRITICAL = 'critical',
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
  NONE = 'none'
}

/**
 * Common document types across the application
 */
export enum DocumentType {
  CONTRACT = 'contract',
  AGREEMENT = 'agreement',
  AMENDMENT = 'amendment',
  LETTER = 'letter',
  EMAIL = 'email',
  INVOICE = 'invoice',
  REPORT = 'report',
  OTHER = 'other'
} 