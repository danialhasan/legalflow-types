/**
 * API Types
 * 
 * Contains types related to API requests, responses, and error handling
 */
import { Json } from './basic';

/**
 * Standard API response wrapper
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: ApiError;
  meta?: {
    timestamp: string;
    version: string;
    pagination?: PaginationMeta;
    processing_time_ms?: number;
  };
}

/**
 * Error information for API responses
 */
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
  stack?: string; // Only included in development
}

/**
 * Pagination metadata
 */
export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  has_more: boolean;
  offset?: number;
}

/**
 * Common pagination query parameters
 */
export interface PaginationParams {
  page?: number;
  limit?: number;
  offset?: number;
  cursor?: string;
}

/**
 * Common sort options
 */
export interface SortParams {
  sort_by?: string;
  sort_direction?: 'asc' | 'desc';
}

/**
 * Filter parameters for queries
 */
export interface FilterParams {
  [key: string]: string | number | boolean | string[] | number[] | null | undefined;
}

/**
 * Authentication token response
 */
export interface AuthTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: string;
  scope?: string;
}

/**
 * OAuth token storage
 */
export interface OAuthToken {
  id: number;
  user_id: string;
  provider: string;
  access_token: string;
  refresh_token: string;
  expires_at: string;
  created_at: string;
  updated_at: string;
}

/**
 * Represents an error that can be thrown and caught
 */
export class AppError extends Error {
  code: string;
  status: number;
  details?: Record<string, any>;

  constructor(message: string, code: string, status: number = 500, details?: Record<string, any>) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.status = status;
    this.details = details;
  }

  toJSON() {
    return {
      error: {
        code: this.code,
        message: this.message,
        details: this.details,
      },
    };
  }
}

/**
 * Request for creating or updating a deal
 */
export interface DealRequest {
  name: string;
  deal_type: string;
  status: string;
  metadata?: Json;
}

/**
 * Request for creating or updating a document
 */
export interface DocumentRequest {
  document_id?: string;
  group_id?: string;
  deal_id?: number;
  metadata?: Json;
  classifications?: string[];
  status?: string;
}

/**
 * Request for creating a conversation
 */
export interface ConversationRequest {
  title?: string;
  documents?: string[];
  group_id?: string;
}

/**
 * Request for sending a message in a conversation
 */
export interface MessageRequest {
  conversation_id: string;
  content: string;
  role: 'user' | 'assistant' | 'system';
  thread_id?: string;
} 