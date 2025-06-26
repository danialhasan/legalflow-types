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
export type Job = CoreSchema['jobs']['Row'];
export type UserRanking = CoreSchema['user_rankings']['Row'];
export type User = CoreSchema['user_metadata']['Row'];
export type BetaSignup = CoreSchema['beta_signups']['Row'];
export type ClientType = CoreSchema['client_types']['Row'];
export type Source = CoreSchema['sources']['Row'];
export type UserClientType = CoreSchema['user_client_types']['Row'];
export type UserSetting = CoreSchema['user_settings']['Row'];
export type UserRecommendationPreference = CoreSchema['user_recommendation_preferences']['Row'];
export type OnboardingResumeToken = CoreSchema['onboarding_resume_tokens']['Row'];
export type ConsolidationLock = CoreSchema['consolidation_locks']['Row'];
export type GraphLock = CoreSchema['graph_locks']['Row'];
export type ConsolidationRecoveryLog = CoreSchema['consolidation_recovery_log']['Row'];

// Table type exports - Insert types
export type JobInsert = CoreSchema['jobs']['Insert'];
export type UserRankingInsert = CoreSchema['user_rankings']['Insert'];
export type UserInsert = CoreSchema['user_metadata']['Insert'];
export type BetaSignupInsert = CoreSchema['beta_signups']['Insert'];
export type ClientTypeInsert = CoreSchema['client_types']['Insert'];
export type SourceInsert = CoreSchema['sources']['Insert'];
export type UserClientTypeInsert = CoreSchema['user_client_types']['Insert'];
export type UserSettingInsert = CoreSchema['user_settings']['Insert'];
export type UserRecommendationPreferenceInsert = CoreSchema['user_recommendation_preferences']['Insert'];
export type OnboardingResumeTokenInsert = CoreSchema['onboarding_resume_tokens']['Insert'];
export type ConsolidationLockInsert = CoreSchema['consolidation_locks']['Insert'];
export type GraphLockInsert = CoreSchema['graph_locks']['Insert'];
export type ConsolidationRecoveryLogInsert = CoreSchema['consolidation_recovery_log']['Insert'];

// Table type exports - Update types
export type JobUpdate = CoreSchema['jobs']['Update'];
export type UserRankingUpdate = CoreSchema['user_rankings']['Update'];
export type UserUpdate = CoreSchema['user_metadata']['Update'];
export type BetaSignupUpdate = CoreSchema['beta_signups']['Update'];
export type ClientTypeUpdate = CoreSchema['client_types']['Update'];
export type SourceUpdate = CoreSchema['sources']['Update'];
export type UserClientTypeUpdate = CoreSchema['user_client_types']['Update'];
export type UserSettingUpdate = CoreSchema['user_settings']['Update'];
export type UserRecommendationPreferenceUpdate = CoreSchema['user_recommendation_preferences']['Update'];
export type OnboardingResumeTokenUpdate = CoreSchema['onboarding_resume_tokens']['Update'];
export type ConsolidationLockUpdate = CoreSchema['consolidation_locks']['Update'];
export type GraphLockUpdate = CoreSchema['graph_locks']['Update'];
export type ConsolidationRecoveryLogUpdate = CoreSchema['consolidation_recovery_log']['Update'];
