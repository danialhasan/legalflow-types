/**
 * Communication Types
 * 
 * Contains types related to communication and messaging through email, calendar, etc.
 */
import { Organization, Person, PriorityLevel, ProcessingStatus, UIDisplayInfo } from './basic';

// Gmail Message Types
/**
 * Represents an email message
 */
export interface EmailMessage {
  id: string;
  gmail_id: string;
  thread_id: string;
  subject: string;
  from_email: string;
  to_emails: string[];
  cc_emails?: string[];
  bcc_emails?: string[];
  sent_at: string;
  received_at: string;
  snippet: string;
  body_text: string;
  body_html?: string;
  has_attachments: boolean;
  labels?: string[];
  is_read: boolean;
  is_important?: boolean;
  metadata?: Record<string, any>;
}

/**
 * Represents an email attachment
 */
export interface EmailAttachment {
  id: string;
  email_id: string;
  gmail_attachment_id: string;
  message_id: string;
  file_name: string;
  mime_type: string;
  size: number;
  storage_path?: string;
  public_url?: string;
  status?: string;
  document_id?: string;
  processed_at?: string;
}

// Calendar Event Types
/**
 * Represents a calendar event
 */
export interface CalendarEvent {
  id: string;
  event_id: string;
  calendar_id: string;
  summary: string;
  description?: string;
  location?: string;
  start_time: string;
  end_time: string;
  attendees: CalendarAttendee[];
  all_day: boolean;
  status: string;
  recurring_rule?: string;
  html_link?: string;
  metadata?: Record<string, any>;
}

/**
 * Represents an attendee of a calendar event
 */
export interface CalendarAttendee {
  email: string;
  name?: string;
  responseStatus?: string;
}

/**
 * Response containing unified view of communication data
 */
export interface UnifiedViewResponse {
  emails: EmailMessage[];
  events: CalendarEvent[];
  counts: {
    emails: number;
    events: number;
  };
}

/**
 * Data extracted from an email message by AI
 */
export interface ExtractedEmailData {
  message_id: string;
  extracted_entities: {
    organizations: Organization[];
    people: Person[];
    addresses: ExtractedAddress[];
    dates: ExtractedDate[];
  };
  intent_classification: {
    primary_intent: string;
    confidence: number;
    possible_intents?: Array<{ intent: string; confidence: number }>;
  };
  deal_relevance: {
    is_relevant: boolean;
    confidence: number;
    deal_id?: string;
    reasons?: string[];
  };
  action_items?: ActionItem[];
  summary?: string;
  client_mapping?: ClientMapping;
}

/**
 * Data extracted from a calendar event by AI
 */
export interface ExtractedCalendarData {
  event_id: string;
  extracted_entities: {
    organizations: Organization[];
    people: Person[];
    addresses: ExtractedAddress[];
    dates: ExtractedDate[];
  };
  event_classification: {
    type: string;
    confidence: number;
  };
  deal_relevance: {
    is_relevant: boolean;
    confidence: number;
    deal_id?: string;
    reasons?: string[];
  };
  action_items?: ActionItem[];
  summary?: string;
  client_mapping?: ClientMapping;
}

/**
 * Comprehensive analysis result from communication data
 */
export interface UnifiedAnalysisResult {
  identified_deals: Array<{
    deal_reference_id: string;
    deal_name: string;
    deal_stage: string;
    confidence: number;
    related_emails: Array<{
      email_id: string;
      relevance_score: number;
      relevance_context: string;
    }>;
    related_events: Array<{
      event_id: string;
      relevance_score: number;
      relevance_context: string;
    }>;
    property_details: {
      address?: string;
      type?: string;
      price?: string;
      confidence: number;
    };
    key_dates: Array<{
      date: string;
      description: string;
      is_deadline: boolean;
      confidence: number;
      source: string;
    }>;
    ui_display?: UIDisplayInfo;
  }>;
  identified_clients: Array<{
    name: string;
    role: string;
    contact_info: {
      email?: string;
      phone?: string;
    };
    associated_deals: string[];
    related_communications: Array<{
      type: string;
      id: string;
      date: string;
      summary: string;
    }>;
    confidence: number;
    is_existing_client?: boolean;
    matched_client_id?: string;
    match_confidence?: number;
    communication_frequency?: string;
    last_communication?: string;
    ui_display?: UIDisplayInfo;
  }>;
  important_deadlines: Array<{
    date: string;
    description: string;
    associated_deal?: string;
    priority: string;
    confidence: number;
    source: string;
    ui_display?: UIDisplayInfo;
  }>;
  communication_timeline: Array<{
    date: string;
    type: string;
    id: string;
    summary: string;
    associated_deals?: string[];
    associated_clients?: string[];
    ui_display?: UIDisplayInfo;
  }>;
  suggested_next_actions: Array<{
    action: string;
    priority: string;
    suggested_deadline?: string;
    associated_deal?: string;
    associated_client?: string;
    reason: string;
    ui_display?: UIDisplayInfo;
  }>;
  overall_insights: {
    active_deal_count: number;
    client_count: number;
    upcoming_deadlines_count: number;
    most_active_deal: string;
    most_active_client: string;
    general_observations: string[];
  };
  ui_categories?: UICategories;
}

/**
 * Represents an address extracted from communication
 */
export interface ExtractedAddress {
  address: string;
  type?: string;
  confidence: number;
  context: string;
}

/**
 * Represents a date extracted from communication
 */
export interface ExtractedDate {
  date: string;
  description: string;
  is_deadline: boolean;
  confidence: number;
  context: string;
}

/**
 * Represents an action item extracted from communication
 */
export interface ActionItem {
  description: string;
  due_date?: string;
  assignee?: string;
  priority?: PriorityLevel;
  confidence: number;
}

/**
 * Status of a synchronization job
 */
export interface SyncJobStatus {
  id: string;
  job_type: 'gmail_sync' | 'calendar_sync';
  status: ProcessingStatus;
  progress: number;
  result?: {
    fetched: number;
    saved: number;
    failed: number;
  };
  started_at: string;
  completed_at?: string;
}

/**
 * Mapping of identified clients to potential matches
 */
export interface ClientMapping {
  identified_clients: Array<{
    name: string;
    type: string; // "person" or "organization"
    confidence: number;
    context: string;
    is_existing_client: boolean;
    matched_client_id?: string;
    match_confidence?: number;
  }>;
}

/**
 * Item for UI category display
 */
export interface UICategoryItem {
  type: string;
  item: any; // The actual item this entry refers to
  priority_score: number;
  display_text: string;
  action_text: string;
}

/**
 * Categorized items for UI display
 */
export interface UICategories {
  urgent_items: UICategoryItem[];
  upcoming_deadlines: UICategoryItem[];
  deal_insights: UICategoryItem[];
  client_opportunities: UICategoryItem[];
  recent_communications: UICategoryItem[];
} 