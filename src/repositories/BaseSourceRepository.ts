/**
 * Base Source Repository Interface
 * 
 * This interface defines the standard pattern for all repositories that handle
 * source entities in the LegalFlow polymorphic source system.
 * 
 * All repositories should follow this pattern to ensure consistency across services.
 */

import { SourceType } from '../database/core';

export interface SourceContext {
  /** Original metadata from the source */
  originalMetadata?: Record<string, any>;
  /** Processing pipeline that created this source */
  processingPipeline?: string;
  /** Confidence score of the source creation */
  confidence?: number;
  /** External ID if this source came from an external system */
  externalId?: string;
  /** Additional context specific to the source type */
  additionalContext?: Record<string, any>;
}

export interface SourceAuditContext {
  /** Service that performed the operation */
  serviceName: string;
  /** Pipeline name if applicable */
  pipelineName?: string;
  /** Job ID if this was part of a job */
  jobId?: string;
  /** User ID if this was a user-initiated operation */
  userId?: string;
  /** Processing time in milliseconds */
  processingTimeMs?: number;
}

export interface CreateSourceParams {
  /** Source type - must match the concrete entity type */
  type: SourceType;
  /** User ID who owns this source */
  userId: string;
  /** Optional source context */
  sourceContext?: SourceContext;
  /** Optional audit context */
  auditContext?: SourceAuditContext;
}

export interface CreateEntityWithSourceParams<T> {
  /** The source ID that was created first */
  sourceId: string;
  /** The entity data to create */
  entityData: T;
  /** Optional source context to store with the entity */
  sourceContext?: SourceContext;
  /** Optional audit context for tracking */
  auditContext?: SourceAuditContext;
}

export interface UpdateEntityWithSourceParams<T> {
  /** The entity ID to update */
  entityId: string;
  /** The updated entity data */
  entityData: Partial<T>;
  /** Optional updated source context */
  sourceContext?: SourceContext;
  /** Optional audit context for tracking */
  auditContext?: SourceAuditContext;
}

/**
 * Base interface that all source repositories should implement
 * 
 * This enforces the polymorphic source pattern:
 * 1. Service layer creates source record first
 * 2. Repository expects sourceId parameter
 * 3. Repository creates concrete entity with source reference
 * 4. Error handling preserves source context
 */
export interface BaseSourceRepository<TEntity, TInsert, TUpdate> {
  /**
   * Creates a new entity with source reference
   * 
   * IMPORTANT: This method expects the source record to already exist.
   * The service layer should create the source record first.
   */
  createWithSource(params: CreateEntityWithSourceParams<TInsert>): Promise<TEntity>;

  /**
   * Gets an entity by its source ID
   * 
   * This enables polymorphic queries where you can find any entity
   * by its source ID regardless of the concrete entity type.
   */
  getBySourceId(sourceId: string): Promise<TEntity | null>;

  /**
   * Gets an entity by its concrete entity ID
   */
  getById(entityId: string): Promise<TEntity | null>;

  /**
   * Updates an entity with source context
   */
  updateWithSource(params: UpdateEntityWithSourceParams<TUpdate>): Promise<TEntity>;

  /**
   * Deletes an entity and optionally its source record
   * 
   * @param entityId - The concrete entity ID
   * @param deleteSource - Whether to delete the source record (default: false)
   */
  deleteWithSource(entityId: string, deleteSource?: boolean): Promise<void>;

  /**
   * Lists entities with optional source context filtering
   */
  listWithSourceContext(params: {
    userId?: string;
    sourceType?: SourceType;
    limit?: number;
    offset?: number;
    includeSourceContext?: boolean;
  }): Promise<{
    entities: TEntity[];
    totalCount: number;
    sourceContext?: Record<string, SourceContext>;
  }>;

  /**
   * Validates that an entity's source context is consistent
   */
  validateSourceContext(entityId: string): Promise<{
    isValid: boolean;
    errors?: string[];
    sourceContext?: SourceContext;
  }>;
}

/**
 * Base interface for source repositories that handle external IDs
 * 
 * For sources that come from external systems (like Gmail, Google Calendar, etc.)
 */
export interface ExternalSourceRepository<TEntity, TInsert, TUpdate> 
  extends BaseSourceRepository<TEntity, TInsert, TUpdate> {
  
  /**
   * Gets an entity by its external ID
   * 
   * This is useful for webhooks and sync operations where you need to
   * find an entity by its ID in the external system.
   */
  getByExternalId(externalId: string): Promise<TEntity | null>;

  /**
   * Creates or updates an entity based on external ID
   * 
   * This is useful for sync operations where you want to update if
   * the entity exists or create if it doesn't.
   */
  upsertByExternalId(params: {
    externalId: string;
    entityData: TInsert;
    sourceContext?: SourceContext;
    auditContext?: SourceAuditContext;
  }): Promise<{
    entity: TEntity;
    wasCreated: boolean;
    sourceId: string;
  }>;

  /**
   * Syncs entities with an external system
   * 
   * This method handles the complexity of determining what needs to be
   * created, updated, or deleted based on external system state.
   */
  syncWithExternal(params: {
    externalEntities: Array<{
      externalId: string;
      data: TInsert;
      lastModified?: Date;
    }>;
    userId: string;
    sourceContext?: SourceContext;
    auditContext?: SourceAuditContext;
  }): Promise<{
    created: TEntity[];
    updated: TEntity[];
    deleted: TEntity[];
    errors: Array<{
      externalId: string;
      error: string;
    }>;
  }>;
}

/**
 * Standard error types for source repositories
 */
export class SourceRepositoryError extends Error {
  constructor(
    message: string,
    public readonly sourceId?: string,
    public readonly entityId?: string,
    public readonly sourceType?: SourceType,
    public readonly operation?: string
  ) {
    super(message);
    this.name = 'SourceRepositoryError';
  }
}

export class SourceNotFoundError extends SourceRepositoryError {
  constructor(sourceId: string, sourceType?: SourceType) {
    super(
      `Source not found: ${sourceId}${sourceType ? ` (type: ${sourceType})` : ''}`,
      sourceId,
      undefined,
      sourceType,
      'get'
    );
    this.name = 'SourceNotFoundError';
  }
}

export class SourceValidationError extends SourceRepositoryError {
  constructor(
    message: string,
    public readonly validationErrors: string[],
    sourceId?: string,
    sourceType?: SourceType
  ) {
    super(message, sourceId, undefined, sourceType, 'validate');
    this.name = 'SourceValidationError';
  }
}

export class SourceContextError extends SourceRepositoryError {
  constructor(
    message: string,
    sourceId?: string,
    sourceType?: SourceType,
    operation?: string
  ) {
    super(message, sourceId, undefined, sourceType, operation);
    this.name = 'SourceContextError';
  }
}

/**
 * Utility functions for source repositories
 */
export class SourceRepositoryUtils {
  /**
   * Logs source context audit event
   */
  static async logSourceAudit(params: {
    sourceId: string;
    operationType: 'create' | 'process' | 'transform' | 'error' | 'delete' | 'validate' | 'retry';
    operationContext: Record<string, any>;
    serviceName: string;
    pipelineName?: string;
    jobId?: string;
    userId?: string;
    errorDetails?: Record<string, any>;
    processingTimeMs?: number;
  }): Promise<string> {
    // This would be implemented to call the database function
    // For now, return a placeholder
    return 'audit-id-placeholder';
  }

  /**
   * Updates source processing status
   */
  static async updateProcessingStatus(params: {
    sourceId: string;
    stage: 'ingested' | 'extracted' | 'canonicalized' | 'analyzed' | 'completed' | 'failed';
    status: 'pending' | 'in_progress' | 'completed' | 'failed' | 'skipped';
    metadata?: Record<string, any>;
    errorDetails?: Record<string, any>;
  }): Promise<string> {
    // This would be implemented to call the database function
    // For now, return a placeholder
    return 'status-id-placeholder';
  }

  /**
   * Validates source context against source type definition
   */
  static async validateSourceType(
    sourceType: SourceType,
    sourceData: Record<string, any>
  ): Promise<boolean> {
    // This would be implemented to call the database function
    // For now, return true
    return true;
  }
}

/**
 * Repository factory for creating standardized repositories
 */
export class SourceRepositoryFactory {
  /**
   * Creates a standardized repository with common functionality
   */
  static create<TEntity, TInsert, TUpdate>(
    config: {
      tableName: string;
      schema: string;
      sourceType: SourceType;
      requiresExternalId?: boolean;
    }
  ): BaseSourceRepository<TEntity, TInsert, TUpdate> | ExternalSourceRepository<TEntity, TInsert, TUpdate> {
    // This would return a configured repository instance
    // Implementation would depend on the database client being used
    throw new Error('Not implemented - this is a placeholder for the factory pattern');
  }
}