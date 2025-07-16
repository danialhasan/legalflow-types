/**
 * Standardized Source Context Response Types
 * 
 * This module defines the standard response format for all API endpoints
 * to ensure consistent source context tracking across all services.
 * 
 * Part of Phase 5: API Response Standardization
 */

/**
 * Source context metadata included in all API responses
 */
export interface SourceContextMetadata {
  /** The primary source ID for this operation */
  sourceId: string | null;
  
  /** The type of source (email, document, sms, etc.) */
  sourceType: string | null;
  
  /** Optional parent source ID for hierarchical tracking */
  parentSourceId?: string;
  
  /** Trace ID for cross-service request tracking */
  traceId?: string;
  
  /** Timestamp when this source context was created/validated */
  timestamp?: string;
  
  /** Service that generated this response */
  service?: string;
  
  /** Preservation metrics for monitoring */
  preservationMetrics?: {
    /** Percentage of source context preserved (0-100) */
    rate: number;
    
    /** Whether source context was validated */
    validated: boolean;
    
    /** Any validation issues encountered */
    issues?: string[];
  };
}

/**
 * Standard API response wrapper with source context
 */
export interface StandardApiResponse<T = any> {
  /** Whether the operation was successful */
  success: boolean;
  
  /** The actual response data */
  data?: T;
  
  /** Error information if success is false */
  error?: {
    message: string;
    code?: string;
    details?: any;
  };
  
  /** Source context metadata */
  sourceContext?: SourceContextMetadata;
  
  /** Request metadata */
  metadata?: {
    /** Request ID for tracking */
    requestId?: string;
    
    /** Processing duration in milliseconds */
    duration?: number;
    
    /** API version */
    version?: string;
  };
}

/**
 * Paginated response with source context
 */
export interface PaginatedApiResponse<T = any> extends StandardApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

/**
 * Batch operation response with individual source contexts
 */
export interface BatchApiResponse<T = any> extends StandardApiResponse {
  data?: {
    successful: Array<{
      item: T;
      sourceContext?: SourceContextMetadata;
    }>;
    failed: Array<{
      item: any;
      error: string;
      sourceContext?: SourceContextMetadata;
    }>;
  };
  
  /** Overall batch metrics */
  summary?: {
    total: number;
    successful: number;
    failed: number;
    sourceContextPreservationRate: number;
  };
}

/**
 * Pipeline response with step-by-step source context tracking
 */
export interface PipelineApiResponse<T = any> extends StandardApiResponse<T> {
  /** Pipeline execution details */
  pipeline?: {
    /** Pipeline name/identifier */
    name: string;
    
    /** Execution steps with source context preservation */
    steps: Array<{
      name: string;
      success: boolean;
      duration: number;
      sourceContextPreserved: boolean;
      sourceIds?: string[];
    }>;
    
    /** Overall pipeline metrics */
    metrics: {
      totalSteps: number;
      successfulSteps: number;
      totalDuration: number;
      sourcePreservationRate: number;
    };
  };
}

/**
 * Helper function to create a standard success response
 */
export function createSuccessResponse<T>(
  data: T,
  sourceContext?: SourceContextMetadata,
  metadata?: StandardApiResponse['metadata']
): StandardApiResponse<T> {
  return {
    success: true,
    data,
    sourceContext,
    metadata
  };
}

/**
 * Helper function to create a standard error response
 */
export function createErrorResponse(
  message: string,
  code?: string,
  details?: any,
  sourceContext?: SourceContextMetadata
): StandardApiResponse {
  return {
    success: false,
    error: {
      message,
      code,
      details
    },
    sourceContext
  };
}

/**
 * Helper function to extract source context from various request formats
 */
export function extractSourceContext(req: any): Partial<SourceContextMetadata> {
  const sourceContext: Partial<SourceContextMetadata> = {};
  
  // Check headers
  if (req.headers) {
    sourceContext.sourceId = req.headers['x-source-id'] || req.headers['source-id'];
    sourceContext.sourceType = req.headers['x-source-type'] || req.headers['source-type'];
    sourceContext.parentSourceId = req.headers['x-parent-source-id'];
    sourceContext.traceId = req.headers['x-trace-id'] || req.headers['trace-id'];
  }
  
  // Check body
  if (req.body) {
    sourceContext.sourceId = sourceContext.sourceId || req.body.sourceId;
    sourceContext.sourceType = sourceContext.sourceType || req.body.sourceType;
    sourceContext.parentSourceId = sourceContext.parentSourceId || req.body.parentSourceId;
  }
  
  // Check query params
  if (req.query) {
    sourceContext.sourceId = sourceContext.sourceId || req.query.sourceId;
    sourceContext.sourceType = sourceContext.sourceType || req.query.sourceType;
  }
  
  return sourceContext;
}

/**
 * Type guard to check if a response has source context
 */
export function hasSourceContext(response: any): response is StandardApiResponse {
  return (
    response &&
    typeof response === 'object' &&
    'sourceContext' in response &&
    response.sourceContext !== null &&
    response.sourceContext !== undefined
  );
}

/**
 * Validates source context completeness
 */
export function validateSourceContext(
  context: SourceContextMetadata,
  requirements: {
    requireSourceId?: boolean;
    requireSourceType?: boolean;
    requireTraceId?: boolean;
  } = {}
): { valid: boolean; issues: string[] } {
  const issues: string[] = [];
  
  if (requirements.requireSourceId && !context.sourceId) {
    issues.push('Missing required sourceId');
  }
  
  if (requirements.requireSourceType && !context.sourceType) {
    issues.push('Missing required sourceType');
  }
  
  if (requirements.requireTraceId && !context.traceId) {
    issues.push('Missing required traceId');
  }
  
  return {
    valid: issues.length === 0,
    issues
  };
}