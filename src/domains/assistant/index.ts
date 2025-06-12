/**
 * Assistant Domain Types
 * 
 * Contains type definitions for the assistant schema tables and related types.
 * These types represent AI assistant conversations and interactions.
 */
import type { Database } from '../../generated/database';

// Schema type shorthand
export type AssistantSchema = Database['assistant']['Tables'];

// Table type exports - Row types
export type Conversation = AssistantSchema['conversations']['Row'];
export type Message = AssistantSchema['messages']['Row'];
export type AgentRunStep = AssistantSchema['agent_run_steps']['Row'];
export type AgentRun = AssistantSchema['agent_runs']['Row'];
export type Agent = AssistantSchema['agents']['Row'];
export type AgentRecommendation = AssistantSchema['agent_recommendations']['Row'];
export type RecommendationContextLink = AssistantSchema['recommendation_context_links']['Row'];

// Table type exports - Insert types
export type ConversationInsert = AssistantSchema['conversations']['Insert'];
export type MessageInsert = AssistantSchema['messages']['Insert'];
export type AgentRunStepInsert = AssistantSchema['agent_run_steps']['Insert'];
export type AgentRunInsert = AssistantSchema['agent_runs']['Insert'];
export type AgentInsert = AssistantSchema['agents']['Insert'];
export type AgentRecommendationInsert = AssistantSchema['agent_recommendations']['Insert'];
export type RecommendationContextLinkInsert = AssistantSchema['recommendation_context_links']['Insert'];

// Table type exports - Update types
export type ConversationUpdate = AssistantSchema['conversations']['Update'];
export type MessageUpdate = AssistantSchema['messages']['Update']; 
export type AgentRunStepUpdate = AssistantSchema['agent_run_steps']['Update'];
export type AgentRunUpdate = AssistantSchema['agent_runs']['Update'];
export type AgentUpdate = AssistantSchema['agents']['Update'];
export type AgentRecommendationUpdate = AssistantSchema['agent_recommendations']['Update'];
export type RecommendationContextLinkUpdate = AssistantSchema['recommendation_context_links']['Update'];