/**
 * Core Source Types
 * 
 * These types define the polymorphic source pattern used throughout LegalFlow.
 * All services should use these types to ensure consistency.
 */

// Source types enum - must match database enum
export enum SourceType {
  EMAIL = 'email',
  DOCUMENT = 'document',
  CALENDAR_EVENT = 'calendar_event',
  SMS = 'sms',
  WEBHOOK = 'webhook',
  MANUAL = 'manual',
  PHONE_CALL = 'phone_call',
  API = 'api',
}

// Source type display information
export interface SourceTypeDefinition {
  sourceType: SourceType;
  displayName: string;
  description: string;
  isActive: boolean;
  requiresExternalId: boolean;
  supportsRealTime: boolean;
  defaultProcessingPipeline: string;
  iconName: string;
  colorCode: string;
  validationSchema: {
    requiredFields: string[];
    optionalFields: string[];
  };
}

// Core source record
export interface Source {
  id: string;
  type: SourceType;
  userId: string;
  createdAt: Date;
}

// Source insert type
export interface SourceInsert {
  id?: string;
  type: SourceType;
  userId: string;
}

// Source update type
export interface SourceUpdate {
  type?: SourceType;
  userId?: string;
}

// Source context for tracking processing information
export interface SourceContext {
  /** Original metadata from the source system */
  originalMetadata?: Record<string, any>;
  /** Processing pipeline that handled this source */
  processingPipeline?: string;
  /** Confidence score of the source processing */
  confidence?: number;
  /** External ID if this source came from an external system */
  externalId?: string;
  /** Additional context specific to the source type */
  additionalContext?: Record<string, any>;
}

// Source audit event
export interface SourceAuditEvent {
  id: string;
  sourceId: string;
  operationType: 'create' | 'process' | 'transform' | 'error' | 'delete' | 'validate' | 'retry';
  operationContext: Record<string, any>;
  serviceName: string;
  pipelineName?: string;
  jobId?: string;
  userId?: string;
  errorDetails?: Record<string, any>;
  processingTimeMs?: number;
  createdAt: Date;
}

// Source processing status
export interface SourceProcessingStatus {
  id: string;
  sourceId: string;
  processingStage: 'ingested' | 'extracted' | 'canonicalized' | 'analyzed' | 'completed' | 'failed';
  stageStatus: 'pending' | 'in_progress' | 'completed' | 'failed' | 'skipped';
  stageMetadata?: Record<string, any>;
  startedAt?: Date;
  completedAt?: Date;
  errorDetails?: Record<string, any>;
  retryCount: number;
  createdAt: Date;
  updatedAt: Date;
}

// Entity source mapping for individual entity traceability
export interface EntitySourceMapping {
  id: string;
  semanticEntityId: string;
  sourceId: string;
  sourceContext?: Record<string, any>;
  extractionConfidence?: number;
  entityType: string;
  entityValue: string;
  createdAt: Date;
  updatedAt: Date;
}

// Source statistics
export interface SourceStatistics {
  sourceType: SourceType;
  displayName: string;
  description: string;
  isActive: boolean;
  supportsRealTime: boolean;
  totalSources: number;
  sourcesCreatedToday: number;
  sourcesCreatedThisWeek: number;
  sourcesCreatedThisMonth: number;
  totalProcessed: number;
  successfullyProcessed: number;
  failedProcessing: number;
  avgProcessingTimeMs: number;
  totalEntitiesExtracted: number;
  avgEntitiesPerSource: number;
  hasSources: boolean;
  successRatePercent: number;
}

// Source complete context view
export interface SourceCompleteContext {
  sourceId: string;
  sourceType: SourceType;
  userId: string;
  sourceCreatedAt: Date;
  completedStages: number;
  failedStages: number;
  totalStages: number;
  totalOperations: number;
  errorOperations: number;
  mappedEntities: number;
  latestCompletedStage?: string;
  latestOperation?: string;
}

// Source type validation result
export interface SourceValidationResult {
  isValid: boolean;
  errors?: string[];
  sourceContext?: SourceContext;
}

// Standard source repository response types
export interface SourceListResponse<T> {
  entities: T[];
  totalCount: number;
  sourceContext?: Record<string, SourceContext>;
}

export interface SourceUpsertResponse<T> {
  entity: T;
  wasCreated: boolean;
  sourceId: string;
}

export interface SourceSyncResponse<T> {
  created: T[];
  updated: T[];
  deleted: T[];
  errors: Array<{
    externalId: string;
    error: string;
  }>;
}

// Source type constants for validation
export const SOURCE_TYPE_VALIDATION_SCHEMAS: Record<SourceType, SourceTypeDefinition> = {
  [SourceType.EMAIL]: {
    sourceType: SourceType.EMAIL,
    displayName: 'Email',
    description: 'Gmail and other email integrations',
    isActive: true,
    requiresExternalId: true,
    supportsRealTime: true,
    defaultProcessingPipeline: 'email_extraction',
    iconName: 'mail',
    colorCode: '#1976d2',
    validationSchema: {
      requiredFields: ['subject', 'body', 'from_address'],
      optionalFields: ['to_address', 'cc_address', 'bcc_address'],
    },
  },
  [SourceType.DOCUMENT]: {
    sourceType: SourceType.DOCUMENT,
    displayName: 'Document',
    description: 'PDF, Word, and other document files',
    isActive: true,
    requiresExternalId: false,
    supportsRealTime: false,
    defaultProcessingPipeline: 'document_extraction',
    iconName: 'file-text',
    colorCode: '#388e3c',
    validationSchema: {
      requiredFields: ['file_name', 'file_size'],
      optionalFields: ['mime_type', 'page_count'],
    },
  },
  [SourceType.CALENDAR_EVENT]: {
    sourceType: SourceType.CALENDAR_EVENT,
    displayName: 'Calendar Event',
    description: 'Google Calendar and other calendar integrations',
    isActive: true,
    requiresExternalId: true,
    supportsRealTime: true,
    defaultProcessingPipeline: 'calendar_extraction',
    iconName: 'calendar',
    colorCode: '#f57c00',
    validationSchema: {
      requiredFields: ['summary', 'start_time', 'end_time'],
      optionalFields: ['description', 'location', 'attendees'],
    },
  },
  [SourceType.SMS]: {
    sourceType: SourceType.SMS,
    displayName: 'SMS Message',
    description: 'Twilio and other SMS integrations',
    isActive: true,
    requiresExternalId: true,
    supportsRealTime: true,
    defaultProcessingPipeline: 'sms_extraction',
    iconName: 'message-circle',
    colorCode: '#9c27b0',
    validationSchema: {
      requiredFields: ['phone_number', 'message_body'],
      optionalFields: ['direction', 'status'],
    },
  },
  [SourceType.WEBHOOK]: {
    sourceType: SourceType.WEBHOOK,
    displayName: 'Webhook',
    description: 'External API webhook integrations',
    isActive: true,
    requiresExternalId: true,
    supportsRealTime: true,
    defaultProcessingPipeline: 'webhook_processing',
    iconName: 'globe',
    colorCode: '#607d8b',
    validationSchema: {
      requiredFields: ['webhook_url', 'event_type'],
      optionalFields: ['headers', 'payload'],
    },
  },
  [SourceType.MANUAL]: {
    sourceType: SourceType.MANUAL,
    displayName: 'Manual Entry',
    description: 'User-created manual entries',
    isActive: true,
    requiresExternalId: false,
    supportsRealTime: false,
    defaultProcessingPipeline: 'manual_processing',
    iconName: 'edit',
    colorCode: '#795548',
    validationSchema: {
      requiredFields: ['title', 'content'],
      optionalFields: ['category', 'priority'],
    },
  },
  [SourceType.PHONE_CALL]: {
    sourceType: SourceType.PHONE_CALL,
    displayName: 'Phone Call',
    description: 'Telephony system integrations',
    isActive: true,
    requiresExternalId: true,
    supportsRealTime: true,
    defaultProcessingPipeline: 'phone_call_processing',
    iconName: 'phone',
    colorCode: '#e91e63',
    validationSchema: {
      requiredFields: ['phone_number', 'call_duration'],
      optionalFields: ['recording_url', 'transcript'],
    },
  },
  [SourceType.API]: {
    sourceType: SourceType.API,
    displayName: 'API Data',
    description: 'External API data sources',
    isActive: true,
    requiresExternalId: true,
    supportsRealTime: false,
    defaultProcessingPipeline: 'api_processing',
    iconName: 'code',
    colorCode: '#00bcd4',
    validationSchema: {
      requiredFields: ['endpoint', 'data'],
      optionalFields: ['headers', 'method'],
    },
  },
};

// Helper functions for source types
export class SourceTypeUtils {
  /**
   * Gets source type definition by type
   */
  static getDefinition(sourceType: SourceType): SourceTypeDefinition {
    return SOURCE_TYPE_VALIDATION_SCHEMAS[sourceType];
  }

  /**
   * Gets all active source types
   */
  static getActiveTypes(): SourceType[] {
    return Object.values(SourceType).filter(
      type => SOURCE_TYPE_VALIDATION_SCHEMAS[type].isActive
    );
  }

  /**
   * Gets source types that support real-time processing
   */
  static getRealTimeTypes(): SourceType[] {
    return Object.values(SourceType).filter(
      type => SOURCE_TYPE_VALIDATION_SCHEMAS[type].supportsRealTime
    );
  }

  /**
   * Gets source types that require external IDs
   */
  static getExternalIdTypes(): SourceType[] {
    return Object.values(SourceType).filter(
      type => SOURCE_TYPE_VALIDATION_SCHEMAS[type].requiresExternalId
    );
  }

  /**
   * Validates source data against source type requirements
   */
  static validateSourceData(
    sourceType: SourceType,
    sourceData: Record<string, any>
  ): SourceValidationResult {
    const definition = SOURCE_TYPE_VALIDATION_SCHEMAS[sourceType];
    const errors: string[] = [];

    // Check required fields
    for (const field of definition.validationSchema.requiredFields) {
      if (!sourceData[field]) {
        errors.push(`Missing required field: ${field}`);
      }
    }

    return {
      isValid: errors.length === 0,
      errors: errors.length > 0 ? errors : undefined,
    };
  }

  /**
   * Gets display color for source type
   */
  static getDisplayColor(sourceType: SourceType): string {
    return SOURCE_TYPE_VALIDATION_SCHEMAS[sourceType].colorCode;
  }

  /**
   * Gets display icon for source type
   */
  static getDisplayIcon(sourceType: SourceType): string {
    return SOURCE_TYPE_VALIDATION_SCHEMAS[sourceType].iconName;
  }

  /**
   * Gets display name for source type
   */
  static getDisplayName(sourceType: SourceType): string {
    return SOURCE_TYPE_VALIDATION_SCHEMAS[sourceType].displayName;
  }

  /**
   * Gets default processing pipeline for source type
   */
  static getDefaultPipeline(sourceType: SourceType): string {
    return SOURCE_TYPE_VALIDATION_SCHEMAS[sourceType].defaultProcessingPipeline;
  }

  /**
   * Checks if source type is valid
   */
  static isValidSourceType(value: string): value is SourceType {
    return Object.values(SourceType).includes(value as SourceType);
  }
}

// Export all types for easy importing
// Note: All types are already exported above