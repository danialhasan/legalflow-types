import { z } from 'zod';

/**
 * Wave 1 Activity Types
 * 
 * Types for real-time AI activity visibility and tracking.
 * Used across AI Service, Jobs Service, and UI for consistent activity representation.
 */

// Activity type enum
export const ActivityTypeSchema = z.enum([
  'llm_completion',
  'job',
  'recommendation',
  'error',
  'entity_extraction',
  'deal_matching',
  'client_matching'
]);

// Activity status enum
export const ActivityStatusSchema = z.enum([
  'pending',
  'processing',
  'completed',
  'failed',
  'dismissed'
]);

// Base activity item for timeline
export const ActivityTimelineItemSchema = z.object({
  activity_type: ActivityTypeSchema,
  source: z.string(),
  action: z.string(),
  user_id: z.string(),
  created_at: z.string().datetime(),
  status: ActivityStatusSchema,
  duration_ms: z.number().nullable(),
  details: z.record(z.any()), // JSON object with activity-specific details
  source_id: z.string(),
  confidence_score: z.number().min(0).max(1).default(0.85)
});

// Processing step for live visualization
export const ProcessingStepSchema = z.object({
  step_name: z.string(),
  step_order: z.number(),
  status: z.enum(['pending', 'active', 'completed', 'failed']),
  started_at: z.string().datetime().nullable(),
  completed_at: z.string().datetime().nullable(),
  duration_ms: z.number().nullable(),
  details: z.string().nullable()
});

// AI processing activity with steps
export const AIProcessingActivitySchema = z.object({
  request_id: z.string(),
  user_id: z.string(),
  pipeline_name: z.string(),
  started_at: z.string().datetime(),
  completed_at: z.string().datetime().nullable(),
  status: ActivityStatusSchema,
  steps: z.array(ProcessingStepSchema),
  total_duration_ms: z.number().nullable(),
  extracted_entities: z.array(z.object({
    type: z.string(),
    value: z.string(),
    confidence: z.number()
  })).nullable()
});

// Dashboard metrics
export const AIDashboardMetricsSchema = z.object({
  user_id: z.string(),
  total_activities: z.number(),
  successful_activities: z.number(),
  failed_activities: z.number(),
  ai_processings: z.number(),
  recommendations_generated: z.number(),
  background_jobs: z.number(),
  avg_confidence: z.number(),
  total_processing_time: z.number().nullable(),
  success_rate: z.number(),
  last_activity_at: z.string().datetime().nullable(),
  active_deals_count: z.number(),
  calculated_at: z.string().datetime()
});

// Activity statistics
export const ActivityStatsSchema = z.object({
  jobs: z.object({
    total: z.number(),
    completed: z.number(),
    failed: z.number(),
    pending: z.number(),
    inProgress: z.number()
  }),
  llmCompletions: z.object({
    total: z.number(),
    successful: z.number(),
    failed: z.number()
  }),
  errors: z.object({
    total: z.number(),
    critical: z.number(),
    high: z.number(),
    warnings: z.number()
  }),
  timestamp: z.string().datetime()
});

// WebSocket message types
export const RealtimeMessageTypeSchema = z.enum([
  'ai_activity',
  'dashboard_update',
  'processing_status',
  'error',
  'heartbeat',
  'connection_established',
  'subscription_confirmed'
]);

export const RealtimeMessageSchema = z.object({
  type: RealtimeMessageTypeSchema,
  timestamp: z.string().datetime(),
  data: z.any(),
  userId: z.string().nullable(),
  correlationId: z.string().nullable()
});

// Smart entity types for entity discovery
export const EntityTypeSchema = z.enum([
  'address',
  'person',
  'company',
  'property',
  'document',
  'email',
  'phone',
  'other'
]);

export const SmartEntitySchema = z.object({
  id: z.string().uuid(),
  user_id: z.string(),
  entity_type: EntityTypeSchema,
  entity_title: z.string(),
  entity_content: z.string(),
  summary: z.string(),
  source_count: z.number(),
  confidence_score: z.number(),
  similarity_score: z.number().nullable(),
  tags: z.array(z.string()),
  related_entities: z.array(z.object({
    id: z.string(),
    similarity_score: z.number(),
    shared_sources: z.number()
  })),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime()
});

// Entity context preview for hover
export const EntityContextPreviewSchema = z.object({
  entity_id: z.string().uuid(),
  entity_name: z.string(),
  // Deal context
  deal_id: z.string().uuid().nullable(),
  property_address: z.string().nullable(),
  deal_status: z.string().nullable(),
  price: z.number().nullable(),
  deal_updated_at: z.string().datetime().nullable(),
  // Client context
  client_id: z.string().uuid().nullable(),
  client_name: z.string().nullable(),
  relationship_strength: z.string().nullable(),
  last_interaction_date: z.string().date().nullable(),
  // Activity metrics
  total_mentions: z.number(),
  last_mentioned: z.string().datetime(),
  recent_activity: z.array(z.object({
    activity_type: z.string(),
    activity_date: z.string().datetime(),
    context: z.string()
  }))
});

// Type inference
export type ActivityType = z.infer<typeof ActivityTypeSchema>;
export type ActivityStatus = z.infer<typeof ActivityStatusSchema>;
export type ActivityTimelineItem = z.infer<typeof ActivityTimelineItemSchema>;
export type ProcessingStep = z.infer<typeof ProcessingStepSchema>;
export type AIProcessingActivity = z.infer<typeof AIProcessingActivitySchema>;
export type AIDashboardMetrics = z.infer<typeof AIDashboardMetricsSchema>;
export type ActivityStats = z.infer<typeof ActivityStatsSchema>;
export type RealtimeMessageType = z.infer<typeof RealtimeMessageTypeSchema>;
export type RealtimeMessage = z.infer<typeof RealtimeMessageSchema>;
export type EntityType = z.infer<typeof EntityTypeSchema>;
export type SmartEntity = z.infer<typeof SmartEntitySchema>;
export type EntityContextPreview = z.infer<typeof EntityContextPreviewSchema>;