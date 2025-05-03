import { z } from 'zod';
// Import DatabaseCamel from the correct file
import { DatabaseCamel } from '../generated/databaseCamel';

// Access Enums via the DatabaseCamel type
type AgentRecommendationsExecutorEnum =
  DatabaseCamel['assistant']['Enums']['recommendationExecutor'];
type AgentRecommendationsExecutionStrategyEnum =
  DatabaseCamel['assistant']['Enums']['recommendationExecutionStrategy'];
type AgentRecommendationsStatusEnum =
  DatabaseCamel['assistant']['Enums']['recommendationStatus'];

// Zod schema for the RecommendationInsert structure
// Ensure this matches the fields required for assistant.agent_recommendations insertion
// It omits fields managed by the DB like id, createdAt etc.
export const RecommendationInsertSchema = z.object({
  userId: z.string().uuid(),
  dealId: z.string().uuid().nullable(),
  clientId: z.string().uuid().nullable(),
  // Use z.custom with the extracted enum types
  executor: z.custom<AgentRecommendationsExecutorEnum>(), // Using z.custom until specific enum values are confirmed/extracted
  executionStrategy: z.custom<AgentRecommendationsExecutionStrategyEnum>(), // Using z.custom for now
  priority: z.number().int(),
  reasoning: z.string(),
  params: z.record(z.any()), // JSONB
  messageTemplate: z.string().nullable(),
  // Use z.literal with the specific pending status value from the enum
  status: z
    .custom<AgentRecommendationsStatusEnum>()
    .refine((val: AgentRecommendationsStatusEnum) => val === 'pending', {
      // Refine to ensure it's 'pending'
      message: "Status must be 'pending' on insert"
    })
});

// TypeScript type derived from the Zod schema
export type RecommendationInsert = z.infer<typeof RecommendationInsertSchema>;
