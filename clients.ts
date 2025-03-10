/**
 * Client Types
 * 
 * Contains types related to clients, client mappings, and client interactions
 */
import { Address, ContactInfo, Json, Organization, Person, PriorityLevel, UIDisplayInfo } from './basic';

/**
 * Client interface representing a customer in the system
 */
export interface Client {
  id: string;
  crm_id: string;
  name: string | null;
  date_of_birth: string | null;
  possession_date: string | null;
  address: Address | null;
  contact_info: ContactInfo | null;
  notes: string | null;
  group_ids: string[] | null;
  metadata: ClientMetadata | null;
  created_at: string;
  updated_at: string;
}

/**
 * Extended metadata for clients
 */
export interface ClientMetadata {
  type?: 'individual' | 'organization';
  source?: string;
  assigned_attorney?: string;
  related_deals?: string[];
  communication_preferences?: {
    preferred_contact_method?: 'email' | 'phone' | 'mail';
    preferred_time?: string;
    frequency?: string;
    do_not_contact?: boolean;
  };
  tags?: string[];
  custom_fields?: Record<string, any>;
}

/**
 * Mapping between a communication entity and an existing client
 */
export interface ClientMapping {
  identified_clients: Array<{
    name: string;
    type: 'person' | 'organization';
    confidence: number;
    context: string;
    is_existing_client: boolean;
    matched_client_id?: string;
    match_confidence?: number;
  }>;
}

/**
 * Client in the CRM system
 */
export interface CRMClient {
  id: string;
  user_id: string;
  metadata: Json | null;
  created_at: string;
}

/**
 * Client ranking and insights
 */
export interface ClientInsight {
  client_id: string;
  client_name: string;
  priority_score: number;
  recent_activity: boolean;
  last_contact: string | null;
  communication_frequency: string;
  upcoming_deadlines: Array<{
    date: string;
    description: string;
    priority: PriorityLevel;
  }>;
  related_deals: Array<{
    deal_id: string;
    deal_name: string;
    status: string;
  }>;
  suggested_actions: Array<{
    description: string;
    priority: PriorityLevel;
    due_date?: string;
  }>;
  ui_display?: UIDisplayInfo;
}

/**
 * Client identified from communication data
 */
export interface IdentifiedClient {
  name: string;
  role: string;
  type: 'individual' | 'organization';
  contact_info: {
    email?: string;
    phone?: string;
    address?: string;
  };
  associated_deals: string[];
  related_communications: Array<{
    type: string;
    id: string;
    date: string;
    summary: string;
  }>;
  confidence: number;
  is_existing_client: boolean;
  matched_client_id?: string;
  match_confidence?: number;
  last_communication?: string;
  communication_frequency?: string;
  ui_display?: UIDisplayInfo;
}

/**
 * Timeline of client interactions
 */
export interface ClientTimeline {
  client_id: string;
  interactions: Array<{
    date: string;
    type: 'email' | 'calendar' | 'call' | 'document' | 'note';
    id: string;
    summary: string;
    associated_deals?: string[];
    sentiment?: 'positive' | 'neutral' | 'negative';
  }>;
}

/**
 * Client relationship to other entities
 */
export interface ClientRelationship {
  client_id: string;
  entity_type: 'client' | 'organization' | 'person';
  entity_id: string;
  relationship_type: string;
  description?: string;
  created_at: string;
} 