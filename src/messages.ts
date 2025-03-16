/**
 * Message Types
 * 
 * Contains types related to messages, conversations, and AI assistant functionality.
 * Aligned with the new schema structure where messages and conversations are stored 
 * in the assistant schema.
 */
import { Json } from './basic';
import { AssistantTable } from './helpers';

/**
 * Conversation from assistant.conversations table
 */
export type Conversation = AssistantTable<'conversations'>;

/**
 * Message from assistant.messages table
 */
export type Message = AssistantTable<'messages'>;

/**
 * Role of a message sender in a conversation
 */
export type MessageRole = 'user' | 'assistant' | 'system';

/**
 * Status of a conversation
 */
export type ConversationStatus = 'active' | 'archived' | 'deleted';

/**
 * Parameters for controlling conversation behavior
 */
export interface ConversationParameters {
  /** System instructions for the conversation */
  systemInstructions?: string;
  /** Model to use for the conversation */
  model?: string;
  /** Temperature parameter for model generation (0.0-1.0) */
  temperature?: number;
  /** Maximum tokens to generate in responses */
  maxTokens?: number;
  /** Document IDs to include in retrieval context */
  documentIds?: string[];
  /** Whether to enable document retrieval */
  enableRetrieval?: boolean;
  /** Whether to enable citations for retrieved content */
  enableCitations?: boolean;
  /** Custom tools to enable for the conversation */
  tools?: Array<{
    /** Tool name */
    name: string;
    /** Tool description */
    description: string;
    /** Tool parameters schema */
    parameters?: Record<string, any>;
  }>;
}

/**
 * Tool call made by the assistant
 */
export interface ToolCall {
  /** Tool call ID */
  id: string;
  /** Name of the tool */
  name: string;
  /** Arguments passed to the tool */
  arguments: Record<string, any>;
  /** Result returned by the tool */
  result?: string;
}

/**
 * Follow-up questions suggestion
 */
export interface FollowUpQuestion {
  /** Question text */
  text: string;
  /** Relevance score (0.0-1.0) */
  relevance?: number;
  /** Category for the question */
  category?: string;
}