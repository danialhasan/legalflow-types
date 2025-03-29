/**
 * AI Service API Types
 * 
 * Contains type definitions for the AI service API endpoints.
 * These types define the contracts between the AI service and other services.
 */

/**
 * Document Ingestion API
 */
export namespace DocumentIngestion {
  export interface Request {
    content: string;
    fileName?: string;
    clientId?: string;
  }

  export interface Response {
    success: boolean;
    document?: {
      id: string;
      [key: string]: any; // This will be refined as we better understand the document schema
    };
    error?: string;
  }
}

/**
 * Document Prioritization API
 */
export namespace DocumentPrioritization {
  export interface Request {
    // Add query parameters if needed
  }

  export interface Response {
    success: boolean;
    documents?: Array<{
      id: string;
      priority: number;
      [key: string]: any; // This will be refined as we better understand the prioritized documents schema
    }>;
    error?: string;
  }
}

/**
 * AI Service Health Check
 */
export namespace HealthCheck {
  export interface Response {
    message: string;
    version: string;
  }
}

/**
 * Common types used across multiple endpoints
 */
export interface AIServiceError {
  success: false;
  error: string;
}

/**
 * This type can be expanded as new endpoints are added to the AI service.
 * Each endpoint should have its own namespace with Request and Response interfaces.
 */ 