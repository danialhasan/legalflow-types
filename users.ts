/**
 * User Types
 * 
 * Contains types related to user accounts, authentication, and agent configurations.
 * Aligned with the new schema structure where user data is stored in the core schema.
 */
import { Json } from './basic';
import { CoreTable } from './helpers';

/**
 * User in the system
 * Maps to core.users table
 */
export type User = CoreTable<'users'>;

/**
 * Agent configuration (replaces assistant_resources in the previous schema)
 * Maps to core.agents table
 */
export type Agent = CoreTable<'agents'>;

/**
 * Assistant configuration options
 */
export interface AssistantConfig {
  assistant_id: string;
  preferences?: {
    tone?: 'formal' | 'conversational' | 'technical';
    verbosity?: 'concise' | 'detailed';
    expertise_level?: 'basic' | 'intermediate' | 'advanced';
  };
  custom_instructions?: string;
  allowed_tools?: string[];
  model_settings?: {
    model?: string;
    temperature?: number;
    max_tokens?: number;
  };
}

/**
 * User authentication information
 */
export interface UserAuth {
  userId: string;
  email: string;
  isVerified: boolean;
  authProvider: 'email' | 'google' | 'microsoft';
  lastLogin?: string;
  createdAt: string;
}

/**
 * User preferences
 */
export interface UserPreferences {
  notification_settings?: {
    email_notifications: boolean;
    push_notifications: boolean;
    sms_notifications: boolean;
    notification_frequency?: 'immediate' | 'daily' | 'weekly';
  };
  ui_settings?: {
    theme?: 'light' | 'dark' | 'system';
    display_density?: 'compact' | 'comfortable';
    date_format?: string;
    time_format?: '12h' | '24h';
  };
  accessibility?: {
    font_size?: 'small' | 'medium' | 'large';
    high_contrast?: boolean;
    screen_reader_optimized?: boolean;
  };
}