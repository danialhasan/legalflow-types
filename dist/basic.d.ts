/**
 * Basic Types
 *
 * Contains fundamental primitive types shared across the application
 */
/**
 * Json type representing any valid JSON value
 */
export type Json = string | number | boolean | null | {
    [key: string]: Json | undefined;
} | Json[];
/**
 * Generic key-value record type
 */
export type RecordMap<T = any> = Record<string, T>;
/**
 * Common priority levels used across the application
 */
export type PriorityLevel = 'critical' | 'high' | 'medium' | 'low' | 'none';
/**
 * Common confidence levels for AI-generated content
 */
export interface ModelConfidence {
    confidence: number;
    reason?: string;
}
/**
 * Common status values for processing items
 */
export type ProcessingStatus = 'pending' | 'in_progress' | 'processing' | 'queued' | 'completed' | 'failed';
/**
 * Contact information shared across multiple entities
 */
export interface ContactInfo {
    email?: string;
    phone?: string;
    address?: string;
}
/**
 * Generic address structure used across the application
 */
export interface Address {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    postal_code?: string;
    type?: string;
    full_address?: string;
}
/**
 * Generic person/contact representation
 */
export interface Person {
    name: string;
    title?: string;
    organization?: string;
    role?: string;
    contact_info?: ContactInfo;
    confidence?: number;
    context?: string;
}
/**
 * Generic organization representation
 */
export interface Organization {
    name: string;
    type?: string;
    role?: string;
    confidence?: number;
    context?: string;
}
/**
 * Generic UI display configuration for items
 */
export interface UIDisplayInfo {
    priority_score?: number;
    highlight?: boolean;
    icon?: string;
    category?: string;
}
