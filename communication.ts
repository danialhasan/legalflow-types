/**
 * Communication Types
 *
 * Contains types related to communication and messaging through email, calendar, etc.
 */
import { Organization, Person, PriorityLevel, ProcessingStatus, UIDisplayInfo } from './basic';

/**
 * Represents an email address with optional name
 */
export interface EmailAddress {
  /** Email address */
  email: string;
  /** Display name associated with the email */
  name?: string;
}

/**
 * Represents an email message
 */
export interface EmailMessage {
  /** Unique identifier for the email */
  id: string;
  /** Gmail-specific identifier */
  gmailId: string;
  /** Thread identifier this email belongs to */
  threadId: string;
  /** Email subject */
  subject: string;
  /** Sender's email address */
  fromEmail: EmailAddress;
  /** Recipients' email addresses */
  toEmails: EmailAddress[];
  /** Carbon copy recipients */
  ccEmails?: EmailAddress[];
  /** Blind carbon copy recipients */
  bccEmails?: EmailAddress[];
  /** When the email was sent (ISO string) */
  sentAt: string;
  /** When the email was received (ISO string) */
  receivedAt: string;
  /** Brief preview of the email content */
  snippet: string;
  /** Plain text content of the email */
  bodyText?: string;
  /** HTML content of the email */
  bodyHtml?: string;
  /** Whether the email has attachments */
  hasAttachments: boolean;
  /** Email attachments if available */
  attachments?: EmailAttachment[];
  /** Gmail labels associated with the email */
  labels?: string[];
  /** Whether the email has been read */
  isRead: boolean;
  /** Whether the email is marked as important */
  isImportant?: boolean;
  /** Additional metadata */
  metadata?: Record<string, any>;
}

/**
 * Status of an email attachment
 */
export type AttachmentStatus = 'metadata_only' | 'stored' | 'ready_to_process' | 'processing' | 'processed' | 'failed';

/**
 * Represents an email attachment
 */
export interface EmailAttachment {
  /** Unique identifier for the attachment */
  id: string;
  /** Email ID this attachment belongs to */
  emailId: string;
  /** Gmail-specific attachment identifier */
  gmailAttachmentId: string;
  /** Filename of the attachment */
  filename: string;
  /** MIME type of the attachment */
  mimeType: string;
  /** Size of the attachment in bytes */
  size: number;
  /** Storage path where the attachment is saved */
  storagePath?: string;
  /** Public URL to access the attachment */
  publicUrl?: string;
  /** Processing status of the attachment */
  status?: AttachmentStatus;
  /** Associated document ID if processed */
  documentId?: string;
  /** When the attachment was processed */
  processedAt?: string;
}

/**
 * Represents an attendee of a calendar event
 */
export interface CalendarAttendee {
  /** Email address of the attendee */
  email: string;
  /** Display name of the attendee */
  name?: string | null;
  /** Response status to the invitation */
  responseStatus?: 'needsAction' | 'declined' | 'tentative' | 'accepted' | null;
  /** Whether the attendee is optional */
  optional?: boolean;
}

/**
 * Represents a calendar event
 */
export interface CalendarEvent {
  /** Unique identifier for the event */
  id: string;
  /** Calendar-specific event identifier */
  eventId: string;
  /** Calendar identifier this event belongs to */
  calendarId: string;
  /** Event title/summary */
  summary: string;
  /** Event description */
  description?: string | null;
  /** Event location */
  location?: string | null;
  /** Start time of the event (ISO string) */
  startTime: string;
  /** End time of the event (ISO string) */
  endTime: string;
  /** Event attendees */
  attendees: CalendarAttendee[];
  /** Whether the event is an all-day event */
  allDay: boolean;
  /** Event status (confirmed, tentative, cancelled) */
  status: string;
  /** Recurrence rule if the event is recurring */
  recurringRule?: string | null;
  /** HTML link to the event */
  htmlLink?: string;
  /** Additional metadata */
  metadata?: Record<string, any>;
}

/**
 * Response containing unified view of communication data
 */
export interface UnifiedViewResponse {
  /** List of email messages */
  emails: EmailMessage[];
  /** List of calendar events */
  events: CalendarEvent[];
  /** Count information */
  counts: {
    /** Number of emails returned */
    emails: number;
    /** Number of events returned */
    events: number;
  };
}

/**
 * Data extracted from an email message by AI
 */
export interface ExtractedEmailData {
  /** Message identifier */
  messageId: string;
  /** Entities extracted from the email */
  extractedEntities: {
    /** Organizations mentioned in the email */
    organizations: Organization[];
    /** People mentioned in the email */
    people: Person[];
    /** Addresses mentioned in the email */
    addresses: ExtractedAddress[];
    /** Dates mentioned in the email */
    dates: ExtractedDate[];
  };
  /** Classification of the email intent */
  intentClassification: {
    /** Primary detected intent */
    primaryIntent: string;
    /** Confidence score for the primary intent */
    confidence: number;
    /** Other possible intents */
    possibleIntents?: Array<{
      /** Intent type */
      intent: string;
      /** Confidence score */
      confidence: number;
    }>;
  };
  /** Relevance to existing deals */
  dealRelevance: {
    /** Whether this email is relevant to a deal */
    isRelevant: boolean;
    /** Confidence in this relevance determination */
    confidence: number;
    /** Deal ID if relevant */
    dealId?: string;
    /** Reasons for relevance determination */
    reasons?: string[];
  };
  /** Action items extracted from the email */
  actionItems?: ActionItem[];
  /** Summary of the email content */
  summary?: string;
  /** Client mapping information */
  clientMapping?: ClientMapping;
}

/**
 * Data extracted from a calendar event by AI
 */
export interface ExtractedCalendarData {
  /** Event identifier */
  eventId: string;
  /** Entities extracted from the event */
  extractedEntities: {
    /** Organizations mentioned in the event */
    organizations: Organization[];
    /** People mentioned in the event */
    people: Person[];
    /** Addresses mentioned in the event */
    addresses: ExtractedAddress[];
    /** Dates mentioned in the event */
    dates: ExtractedDate[];
  };
  /** Classification of the event type */
  eventClassification: {
    /** Type of event */
    type: string;
    /** Confidence in this classification */
    confidence: number;
  };
  /** Relevance to existing deals */
  dealRelevance: {
    /** Whether this event is relevant to a deal */
    isRelevant: boolean;
    /** Confidence in this relevance determination */
    confidence: number;
    /** Deal ID if relevant */
    dealId?: string;
    /** Reasons for relevance determination */
    reasons?: string[];
  };
  /** Action items extracted from the event */
  actionItems?: ActionItem[];
  /** Summary of the event */
  summary?: string;
  /** Client mapping information */
  clientMapping?: ClientMapping;
}

/**
 * Comprehensive analysis result from communication data
 */
export interface UnifiedAnalysisResult {
  /** Deals identified in communications */
  identifiedDeals: Array<{
    /** Deal reference identifier */
    dealReferenceId: string;
    /** Deal name */
    dealName: string;
    /** Current deal stage */
    dealStage: string;
    /** Confidence in this deal identification */
    confidence: number;
    /** Emails related to this deal */
    relatedEmails: Array<{
      /** Email identifier */
      emailId: string;
      /** Relevance score to the deal */
      relevanceScore: number;
      /** Context explaining the relevance */
      relevanceContext: string;
    }>;
    /** Events related to this deal */
    relatedEvents: Array<{
      /** Event identifier */
      eventId: string;
      /** Relevance score to the deal */
      relevanceScore: number;
      /** Context explaining the relevance */
      relevanceContext: string;
    }>;
    /** Property details associated with this deal */
    propertyDetails: {
      /** Property address */
      address?: string;
      /** Property type */
      type?: string;
      /** Property price */
      price?: string;
      /** Confidence in these property details */
      confidence: number;
    };
    /** Key dates for this deal */
    keyDates: Array<{
      /** Date in ISO format */
      date: string;
      /** Description of the date significance */
      description: string;
      /** Whether this is a deadline */
      isDeadline: boolean;
      /** Confidence in this date extraction */
      confidence: number;
      /** Source of this date information */
      source: string;
    }>;
    /** UI display information */
    uiDisplay?: UIDisplayInfo;
  }>;
  /** Clients identified in communications */
  identifiedClients: Array<{
    /** Client name */
    name: string;
    /** Client role */
    role: string;
    /** Contact information */
    contactInfo: {
      /** Email address */
      email?: string;
      /** Phone number */
      phone?: string;
    };
    /** Deals associated with this client */
    associatedDeals: string[];
    /** Communications related to this client */
    relatedCommunications: Array<{
      /** Communication type (email, call, etc.) */
      type: string;
      /** Communication identifier */
      id: string;
      /** Communication date */
      date: string;
      /** Communication summary */
      summary: string;
    }>;
    /** Confidence in this client identification */
    confidence: number;
    /** Whether this is an existing client */
    isExistingClient?: boolean;
    /** ID of matched existing client if applicable */
    matchedClientId?: string;
    /** Confidence in the client match */
    matchConfidence?: number;
    /** Frequency of communication with this client */
    communicationFrequency?: string;
    /** Last communication with this client */
    lastCommunication?: string;
    /** UI display information */
    uiDisplay?: UIDisplayInfo;
  }>;
  /** Important deadlines identified in communications */
  importantDeadlines: Array<{
    /** Deadline date in ISO format */
    date: string;
    /** Description of the deadline */
    description: string;
    /** Associated deal if applicable */
    associatedDeal?: string;
    /** Priority level */
    priority: string;
    /** Confidence in this deadline extraction */
    confidence: number;
    /** Source of the deadline information */
    source: string;
    /** UI display information */
    uiDisplay?: UIDisplayInfo;
  }>;
  /** Timeline of communications */
  communicationTimeline: Array<{
    /** Date of communication in ISO format */
    date: string;
    /** Type of communication (email, call, meeting) */
    type: string;
    /** Communication identifier */
    id: string;
    /** Summary of the communication */
    summary: string;
    /** Deals associated with this communication */
    associatedDeals?: string[];
    /** Clients associated with this communication */
    associatedClients?: string[];
    /** UI display information */
    uiDisplay?: UIDisplayInfo;
  }>;
  /** Suggested next actions based on analysis */
  suggestedNextActions: Array<{
    /** Action to be taken */
    action: string;
    /** Priority level of the action */
    priority: string;
    /** Suggested deadline for the action */
    suggestedDeadline?: string;
    /** Deal associated with this action */
    associatedDeal?: string;
    /** Client associated with this action */
    associatedClient?: string;
    /** Reason for suggesting this action */
    reason: string;
    /** UI display information */
    uiDisplay?: UIDisplayInfo;
  }>;
  /** Overall insights from the analysis */
  overallInsights: {
    /** Number of active deals */
    activeDealCount: number;
    /** Number of clients */
    clientCount: number;
    /** Number of upcoming deadlines */
    upcomingDeadlinesCount: number;
    /** Most active deal */
    mostActiveDeal: string;
    /** Most active client */
    mostActiveClient: string;
    /** General observations from the analysis */
    generalObservations: string[];
  };
  /** Categorized items for UI display */
  uiCategories?: UICategories;
}

/**
 * Represents an address extracted from communication
 */
export interface ExtractedAddress {
  /** The address text */
  address: string;
  /** Type of address (e.g., residential, office) */
  type?: string;
  /** Confidence in the extraction */
  confidence: number;
  /** Surrounding context where the address was found */
  context: string;
}

/**
 * Represents a date extracted from communication
 */
export interface ExtractedDate {
  /** Date in ISO format */
  date: string;
  /** Description of the date significance */
  description: string;
  /** Whether this is a deadline */
  isDeadline: boolean;
  /** Confidence in this extraction */
  confidence: number;
  /** Surrounding context where the date was found */
  context: string;
}

/**
 * Represents an action item extracted from communication
 */
export interface ActionItem {
  /** Description of the action to be taken */
  description: string;
  /** Due date for the action in ISO format */
  dueDate?: string;
  /** Person assigned to the action */
  assignee?: string;
  /** Priority level of the action */
  priority?: PriorityLevel;
  /** Confidence in this extraction */
  confidence: number;
}

/**
 * Status of a synchronization job
 */
export interface SyncJobStatus {
  /** Job identifier */
  id: string;
  /** Type of synchronization job */
  jobType: 'gmail_sync' | 'calendar_sync';
  /** Current status of the job */
  status: ProcessingStatus;
  /** Progress percentage (0-100) */
  progress: number;
  /** Result of the job if completed */
  result?: {
    /** Number of items fetched */
    fetched: number;
    /** Number of items successfully saved */
    saved: number;
    /** Number of items that failed to process */
    failed: number;
  };
  /** When the job started */
  startedAt: string;
  /** When the job completed */
  completedAt?: string;
}

/**
 * Mapping of identified clients to potential matches
 */
export interface ClientMapping {
  /** List of identified clients */
  identifiedClients: Array<{
    /** Client name */
    name: string;
    /** Client type (person or organization) */
    type: string;
    /** Confidence in this identification */
    confidence: number;
    /** Context where the client was mentioned */
    context: string;
    /** Whether this is an existing client */
    isExistingClient: boolean;
    /** ID of matched existing client if applicable */
    matchedClientId?: string;
    /** Confidence in the client match */
    matchConfidence?: number;
  }>;
}

/**
 * Item for UI category display
 */
export interface UICategoryItem {
  /** Type of item */
  type: string;
  /** The actual item this entry refers to */
  item: any;
  /** Score for prioritizing display order */
  priorityScore: number;
  /** Text to display for this item */
  displayText: string;
  /** Text for the action button */
  actionText: string;
}

/**
 * Categorized items for UI display
 */
export interface UICategories {
  /** Urgent items requiring immediate attention */
  urgentItems: UICategoryItem[];
  /** Items with upcoming deadlines */
  upcomingDeadlines: UICategoryItem[];
  /** Insights related to deals */
  dealInsights: UICategoryItem[];
  /** Opportunities related to clients */
  clientOpportunities: UICategoryItem[];
  /** Recent communications */
  recentCommunications: UICategoryItem[];
}

/**
 * Status of a Google API synchronization
 */
export interface SyncStatus {
  /** Last synchronization time */
  lastSyncTime?: string;
  /** Synchronization token for incremental sync */
  syncToken?: string;
  /** Gmail-specific history ID for incremental sync */
  historyId?: string;
  /** Current status of synchronization */
  status: SyncStatusState;
  /** Error message if synchronization failed */
  error?: string;
}

/**
 * Possible states for a synchronization status
 */
export type SyncStatusState = 'not_started' | 'in_progress' | 'completed' | 'failed';

/**
 * Google API push notification webhook
 */
export interface WebhookNotification {
  /** User ID associated with the notification */
  userId: string;
  /** Resource type (gmail or calendar) */
  resourceType: 'gmail' | 'calendar';
  /** Resource identifier */
  resourceId: string;
  /** Notification timestamp */
  timestamp: string;
  /** Notification data */
  data: Record<string, any>;
}

/**
 * Google API webhook channel
 */
export interface WebhookChannel {
  /** Channel identifier */
  channelId: string;
  /** User ID associated with the channel */
  userId: string;
  /** Resource type (gmail or calendar) */
  resourceType: 'gmail' | 'calendar';
  /** Resource identifier */
  resourceId?: string;
  /** Expiration timestamp */
  expiration?: string;
  /** Calendar ID for calendar webhooks */
  calendarId?: string;
}

/**
 * Dynamic variables for outbound calls
 */
export interface DynamicVariables {
  /** Lead's first name */
  leadFirstName: string;
  /** Lead's last name */
  leadLastName: string;
  /** Lead identifier */
  leadId: string;
  /** Agent name */
  agentName: string;
  /** Agency name */
  agencyName: string;
  /** Property type */
  propertyType?: string;
  /** Property location */
  propertyLocation?: string;
  /** System prompt for AI */
  systemPrompt?: string;
  /** First message to be spoken */
  firstMessage?: string;
}

/**
 * Custom parameters for Twilio Stream connection
 */
export interface CustomParameters {
  /** Dynamic variables for the call */
  dynamicVariables: DynamicVariables | string;
  /** Voice to use for the call */
  voice?: string;
}

/**
 * Twilio start message sent when a stream connection is established
 */
export interface TwilioStartMessage {
  /** Event type */
  event: 'start';
  /** Start event data */
  start: {
    /** Stream session ID */
    streamSid: string;
    /** Call session ID */
    callSid: string;
    /** Custom parameters passed to the stream */
    customParameters: CustomParameters;
  };
}

/**
 * Twilio media message containing audio data
 */
export interface TwilioMediaMessage {
  /** Event type */
  event: 'media';
  /** Media event data */
  media: {
    /** Base64 encoded audio payload */
    payload: string;
  };
}

/**
 * Twilio stop message sent when a stream connection is terminated
 */
export interface TwilioStopMessage {
  /** Event type */
  event: 'stop';
  /** Stream session ID */
  streamSid: string;
}

/**
 * Twilio message with unknown event type
 */
export interface TwilioUnknownMessage {
  /** Event type */
  event: string;
  /** Additional properties */
  [key: string]: any;
}

/**
 * Union type for all possible Twilio messages
 */
export type TwilioMessage =
  | TwilioStartMessage
  | TwilioMediaMessage
  | TwilioStopMessage
  | TwilioUnknownMessage;

/**
 * Options for initializing the ElevenLabs client
 */
export interface ElevenLabsOptions {
  /** API key for authentication */
  apiKey: string;
  /** Timeout in seconds for API requests */
  timeoutInSeconds?: number;
  /** Maximum number of retry attempts for failed requests */
  maxRetries?: number;
}

/**
 * Query parameters for API requests
 */
export interface QueryParams {
  /** JSON string of dynamic variables */
  dynamicVariables?: string;
  /** Voice ID or name to use */
  voice?: string;
}

/**
 * Request parameters for initiating an outbound call
 */
export interface OutboundCallRequest {
  /** Phone number to call */
  phone: string;
  /** Dynamic variables for the call */
  dynamicVariables?: DynamicVariables;
  /** Voice to use for the call */
  voice?: string;
}

/**
 * OAuth token data used for authentication with external services
 */
export interface OAuthTokenData {
  /** Access token for API requests */
  accessToken: string;
  /** Refresh token to get new access tokens */
  refreshToken: string;
  /** When the token expires */
  expiresAt: string;
  /** The OAuth provider (e.g., 'google', 'microsoft') */
  provider?: string;
}

/**
 * Response structure for email listing
 */
export interface EmailsResponse {
  /** List of email messages */
  messages: EmailMessage[];
  /** Pagination information */
  pagination: {
    /** Total number of messages available */
    total: number;
    /** Maximum number of messages returned */
    limit: number;
    /** Starting offset for pagination */
    offset: number;
  };
}

/**
 * Response structure for calendar events listing
 */
export interface CalendarEventsResponse {
  /** List of calendar events */
  events: CalendarEvent[];
  /** Pagination information */
  pagination: {
    /** Total number of messages available */
    total: number;
    /** Maximum number of messages returned */
    limit: number;
    /** Starting offset for pagination */
    offset: number;
  };
}

/**
 * Response structure for OAuth authorization URL
 */
export interface AuthUrlResponse {
  /** URL to redirect the user to for OAuth authorization */
  authUrl: string;
}

/**
 * Response structure for OAuth operation status
 */
export interface OAuthStatusResponse {
  /** Whether the operation was successful */
  success: boolean;
  /** Whether the user is currently connected */
  isConnected: boolean;
  /** Message describing the result */
  message: string;
}

/**
 * Gmail integration settings
 */
export interface GmailSettings {
  /** Whether email synchronization is enabled */
  emailSyncEnabled: boolean;
  /** Whether calendar synchronization is enabled */
  calendarSyncEnabled: boolean;
  /** Whether contact synchronization is enabled */
  contactSyncEnabled: boolean;
  /** Whether auto-replies are enabled */
  autoReplyEnabled: boolean;
  /** Custom message for auto-replies */
  autoReplyMessage?: string;
}

/**
 * Status of a marketing campaign
 */
export type CampaignStatus = 'draft' | 'active' | 'paused' | 'completed' | 'failed';

/**
 * Outcome of a call
 */
export type CallOutcome = 'no_answer' | 'short_call' | 'interested' | 'not_interested' | 'follow_up_needed';

/**
 * Status of a lead in a campaign
 */
export type LeadStatus = 'pending' | 'contacted' | 'qualified' | 'dnc' | 'failed';

/**
 * Sources for status updates
 */
export type StatusUpdateSource = 'user' | 'system' | 'twilio' | 'ai' | 'scheduler';

/**
 * Request to update campaign or call status
 */
export interface StatusUpdateRequest {
  /** Entity identifier (campaign or call) */
  id: string;
  /** New status value */
  status: CampaignStatus | LeadStatus | CallOutcome;
  /** Source of the status update */
  source: StatusUpdateSource;
  /** Additional notes about the status change */
  notes?: string;
  /** Timestamp of the status change */
  timestamp?: string;
  /** User who initiated the change (if source is 'user') */
  userId?: string;
}

/**
 * Request to execute a campaign
 */
export interface CampaignExecutionRequest {
  /** Campaign identifier */
  campaignId: string;
  /** User identifier */
  userId: string;
  /** Whether to execute immediately regardless of schedule */
  executeImmediately?: boolean;
  /** Maximum number of calls to make */
  maxCalls?: number;
  /** Specific lead IDs to target (if empty, follows campaign targeting) */
  specificLeadIds?: string[];
}

/**
 * Request to execute a single call
 */
export interface CallExecutionRequest {
  /** Campaign identifier */
  campaignId: string;
  /** Lead identifier */
  leadId: string;
  /** User identifier */
  userId: string;
  /** Job identifier for tracking */
  jobId?: string;
  /** Script override (if not provided, uses campaign script) */
  scriptOverride?: string;
}

/**
 * Campaign schedule configuration
 */
export interface CampaignSchedule {
  /** When the campaign starts */
  startDate: string;
  /** When the campaign ends (optional) */
  endDate?: string;
  /** Timezone for scheduling */
  timeZone: string;
  /** Specific time slots for calling */
  timeSlots?: {
    /** Day of week (0 = Sunday, 6 = Saturday) */
    dayOfWeek: number;
    /** Start time (HH:MM format) */
    startTime: string;
    /** End time (HH:MM format) */
    endTime: string;
  }[];
}

/**
 * Campaign entity representing a marketing campaign
 */
export interface Campaign {
  /** Unique identifier */
  id: string;
  /** Campaign name */
  name: string;
  /** Campaign goal */
  goal: string;
  /** Current status */
  status: CampaignStatus;
  /** Script ID used for calls */
  scriptId: string;
  /** Type of target (e.g., 'leads') */
  targetType: string;
  /** List of target IDs */
  targetIds: string[];
  /** Campaign schedule configuration */
  schedule: CampaignSchedule;
  /** Campaign metrics */
  metrics: Record<string, any>;
  /** Current progress percentage */
  progress?: number;
  /** When the campaign was created */
  createdAt: string;
  /** When the campaign was last updated */
  updatedAt: string;
  /** User ID who owns the campaign */
  userId: string;
  /** Additional metadata for the campaign */
  metadata?: Record<string, any>;
}

/**
 * Campaign progress tracking information
 */
export interface CampaignProgress {
  /** Campaign identifier */
  campaignId: string;
  /** Overall campaign progress percentage (0-100) */
  progress: number;
  /** Number of leads that have been contacted */
  leadsContacted: number;
  /** Number of leads still to be contacted */
  leadsRemaining: number;
  /** Conversion rate percentage */
  conversionRate: number;
  /** When the progress was last updated */
  lastUpdated: string;
}

/**
 * Call log entry for tracking call execution
 */
export interface CallLog {
  /** Unique identifier for the call log */
  id?: string;
  /** Twilio Call SID for the call */
  callSid: string | null;
  /** Campaign identifier this call belongs to */
  campaignId: string;
  /** Lead identifier this call was made to */
  leadId: string;
  /** Script identifier used for the call */
  scriptId?: string;
  /** When the call started */
  startTime?: string;
  /** Call duration in seconds */
  duration?: number;
  /** Call status (completed, failed) */
  status?: 'completed' | 'failed';
  /** URL to call recording if available */
  recordingUrl?: string;
  /** Call transcript text */
  transcript?: string;
  /** Additional notes about the call */
  notes?: string;
  /** Tracking ID for call context management */
  jobId: string;
  /** Call outcome classification */
  outcome?: CallOutcome | string;
  /** JSON representation of the conversation */
  conversationJson?: any;
  /** Summary of the call transcript */
  transcriptSummary?: string;
  /** Sentiment analysis of the call */
  sentiment?: string;
  /** When the call log was created */
  createdAt?: string;
  /** When the call log was last updated */
  updatedAt?: string;
  /** User ID who initiated the call */
  userId: string;
}