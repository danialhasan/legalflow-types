/**
 * Shared Constants
 * 
 * Contains constant values shared across multiple domains.
 * These represent standardized values used throughout the application.
 */

/**
 * Maximum allowed file sizes (in bytes)
 */
export const MAX_FILE_SIZES = {
  DOCUMENT: 10 * 1024 * 1024, // 10MB
  IMAGE: 5 * 1024 * 1024,     // 5MB
  ATTACHMENT: 25 * 1024 * 1024 // 25MB
};

/**
 * Standard pagination limits
 */
export const PAGINATION = {
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100
}; 