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

// Table type exports - Insert types
export type ConversationInsert = AssistantSchema['conversations']['Insert'];
export type MessageInsert = AssistantSchema['messages']['Insert'];

// Table type exports - Update types
export type ConversationUpdate = AssistantSchema['conversations']['Update'];
export type MessageUpdate = AssistantSchema['messages']['Update']; 