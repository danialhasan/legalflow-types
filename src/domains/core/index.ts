/**
 * Core Domain Types
 *
 * Contains type definitions for the core schema tables and related types.
 * These types represent fundamental system entities like users and jobs.
 */
import type { Database } from '../../generated/database';

// Schema type shorthand
export type CoreSchema = Database['core']['Tables'];

// Table type exports - Row types
export type ErrorLog = CoreSchema['error_logs']['Row'];
export type Job = CoreSchema['jobs']['Row'];
export type UserRanking = CoreSchema['user_rankings']['Row'];
export type User = CoreSchema['user_metadata']['Row'];

// Table type exports - Insert types
export type ErrorLogInsert = CoreSchema['error_logs']['Insert'];
export type JobInsert = CoreSchema['jobs']['Insert'];
export type UserRankingInsert = CoreSchema['user_rankings']['Insert'];
export type UserInsert = CoreSchema['user_metadata']['Insert'];

// Table type exports - Update types
export type ErrorLogUpdate = CoreSchema['error_logs']['Update'];
export type JobUpdate = CoreSchema['jobs']['Update'];
export type UserRankingUpdate = CoreSchema['user_rankings']['Update'];
export type UserUpdate = CoreSchema['user_metadata']['Update'];
