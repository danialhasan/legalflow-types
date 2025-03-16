/**
 * AI Service Types
 *
 * Contains types related to AI service components including conversations,
 * messages, processing results, and integration interfaces.
 */
import { 
  EmailMessage, 
  CalendarEvent, 
  ExtractedEmailData, 
  ExtractedCalendarData, 
  UnifiedAnalysisResult 
} from './communication';

/**
 * API response structure for Email data
 */
export interface EmailApiResponse {
  /** List of email messages */
  messages: EmailMessage[];
  /** Pagination information */
  pagination: {
    /** Total count of messages matching the query */
    total?: number;
    /** Next page token for cursor-based pagination */
    nextPageToken?: string;
    /** Size estimate of results (from Gmail API) */
    resultSizeEstimate?: number;
    /** Maximum results per page */
    limit?: number;
    /** Current offset/skip value */
    offset?: number;
  };
}

/**
 * API response structure for Calendar data
 */
export interface CalendarApiResponse {
  /** List of calendar events */
  events: CalendarEvent[];
  /** Pagination information */
  pagination: {
    /** Total count of events matching the query */
    total?: number;
    /** Next page token for cursor-based pagination */
    nextPageToken?: string;
    /** Maximum results per page */
    limit?: number;
    /** Current offset/skip value */
    offset?: number;
  };
}

/**
 * Parameters for Google data API requests
 */
export interface GoogleDataQueryParams {
  /** Maximum number of records to return */
  limit?: number;
  /** Number of records to skip */
  offset?: number;
  /** Pagination token for cursor-based pagination */
  pageToken?: string;
  /** Filter by email thread ID */
  threadId?: string;
  /** Filter by sender email address */
  fromEmail?: string;
  /** Filter by recipient email address */
  toEmail?: string;
  /** Filter by subject line (partial match) */
  subject?: string;
  /** Filter by date range start */
  startDate?: string;
  /** Filter by date range end */
  endDate?: string;
  /** Filter for messages with attachments */
  hasAttachments?: boolean;
  /** Filter by read status */
  isRead?: boolean;
  /** Filter by importance */
  isImportant?: boolean;
  /** Filter by Gmail labels */
  labels?: string[];
  /** Data source preference (api or database) */
  source?: 'api' | 'db';
  /** Calendar ID for calendar queries */
  calendarId?: string;
  /** Filter by event location */
  location?: string;
  /** Filter by event summary/title */
  summary?: string;
  /** Whether to include all-day events */
  allDay?: boolean;
  /** Filter by event status */
  status?: string;
}

/**
 * Conversation processing status
 */
export type ConversationStatus = 'active' | 'pending' | 'completed' | 'failed';

/**
 * Message role within a conversation
 */
export type MessageRole = 'user' | 'assistant' | 'system';

/**
 * Parameters for AI conversation initialization
 */
export interface ConversationParameters {
  /** Unique session identifier */
  sessionId: string;
  /** System prompt to set conversation context */
  systemPrompt?: string;
  /** User ID associated with the conversation */
  userId: string;
  /** Conversation context (e.g., 'email_analysis', 'deal_review') */
  context?: string;
  /** Maximum response tokens */
  maxTokens?: number;
  /** Temperature parameter for response randomness */
  temperature?: number;
  /** Additional metadata for the conversation */
  metadata?: Record<string, any>;
}

/**
 * Message within a conversation
 */
export interface Message {
  /** Unique message identifier */
  id: string;
  /** Conversation ID this message belongs to */
  conversationId: string;
  /** Role of the message sender */
  role: MessageRole;
  /** Message content */
  content: string;
  /** Tokens used by this message */
  tokens?: number;
  /** When the message was created */
  createdAt: string;
  /** Associated function calls or tool usage */
  toolCalls?: ToolCall[];
  /** Additional metadata for the message */
  metadata?: Record<string, any>;
}

/**
 * Tool call within a message
 */
export interface ToolCall {
  /** Unique tool call identifier */
  id: string;
  /** Tool name or identifier */
  tool: string;
  /** Input parameters for the tool */
  input: Record<string, any>;
  /** Output from the tool call */
  output?: string | Record<string, any>;
  /** Whether the tool call succeeded */
  success: boolean;
  /** Error information if the tool call failed */
  error?: string;
  /** When the tool call was executed */
  executedAt?: string;
}

/**
 * Conversation between user and AI
 */
export interface Conversation {
  /** Unique conversation identifier */
  id: string;
  /** Current status of the conversation */
  status: ConversationStatus;
  /** User ID associated with the conversation */
  userId: string;
  /** System prompt that set the conversation context */
  systemPrompt?: string;
  /** Array of messages in the conversation */
  messages: Message[];
  /** Total tokens used in the conversation */
  tokensUsed?: number;
  /** Conversation context (e.g., 'email_analysis', 'deal_review') */
  context?: string;
  /** When the conversation was created */
  createdAt: string;
  /** When the conversation was last updated */
  updatedAt: string;
  /** Additional metadata for the conversation */
  metadata?: Record<string, any>;
}

/**
 * Request to process email data with AI
 */
export interface EmailProcessingRequest {
  /** Email message to process */
  email: EmailMessage;
  /** Processing options */
  options?: {
    /** Extract entities from the email */
    extractEntities?: boolean;
    /** Classify email intent */
    classifyIntent?: boolean;
    /** Check relevance to deals */
    checkDealRelevance?: boolean;
    /** Extract action items */
    extractActionItems?: boolean;
    /** Generate summary */
    generateSummary?: boolean;
    /** Map to clients */
    mapClients?: boolean;
  };
  /** User ID for context */
  userId: string;
}

/**
 * Request to process calendar data with AI
 */
export interface CalendarProcessingRequest {
  /** Calendar event to process */
  event: CalendarEvent;
  /** Processing options */
  options?: {
    /** Extract entities from the event */
    extractEntities?: boolean;
    /** Classify event type */
    classifyEventType?: boolean;
    /** Check relevance to deals */
    checkDealRelevance?: boolean;
    /** Extract action items */
    extractActionItems?: boolean;
    /** Generate summary */
    generateSummary?: boolean;
    /** Map to clients */
    mapClients?: boolean;
  };
  /** User ID for context */
  userId: string;
}

/**
 * Request to analyze unified data with AI
 */
export interface UnifiedAnalysisRequest {
  /** Email messages to analyze */
  emails: EmailMessage[];
  /** Calendar events to analyze */
  events: CalendarEvent[];
  /** Analysis options */
  options?: {
    /** Identify potential deals */
    identifyDeals?: boolean;
    /** Identify potential clients */
    identifyClients?: boolean;
    /** Extract deadlines */
    extractDeadlines?: boolean;
    /** Create timeline */
    createTimeline?: boolean;
    /** Suggest next actions */
    suggestNextActions?: boolean;
    /** Generate overall insights */
    generateInsights?: boolean;
  };
  /** User ID for context */
  userId: string;
}

/**
 * Response from email processing
 */
export interface EmailProcessingResponse {
  /** Status of the processing */
  status: 'success' | 'partial' | 'failed';
  /** Result of the processing */
  result: ExtractedEmailData;
  /** Error information if applicable */
  error?: string;
  /** Processing metrics */
  metrics?: {
    /** Time taken for processing in milliseconds */
    processingTimeMs: number;
    /** Tokens used for processing */
    tokensUsed: number;
  };
}

/**
 * Response from calendar processing
 */
export interface CalendarProcessingResponse {
  /** Status of the processing */
  status: 'success' | 'partial' | 'failed';
  /** Result of the processing */
  result: ExtractedCalendarData;
  /** Error information if applicable */
  error?: string;
  /** Processing metrics */
  metrics?: {
    /** Time taken for processing in milliseconds */
    processingTimeMs: number;
    /** Tokens used for processing */
    tokensUsed: number;
  };
}

/**
 * Response from unified analysis
 */
export interface UnifiedAnalysisResponse {
  /** Status of the analysis */
  status: 'success' | 'partial' | 'failed';
  /** Result of the analysis */
  result: UnifiedAnalysisResult;
  /** Error information if applicable */
  error?: string;
  /** Processing metrics */
  metrics?: {
    /** Time taken for processing in milliseconds */
    processingTimeMs: number;
    /** Tokens used for processing */
    tokensUsed: number;
  };
}

/**
 * Document processing status in the AI pipeline
 */
export type DocumentProcessingStatus = 
  | 'queued' 
  | 'processing' 
  | 'processed' 
  | 'failed';

/**
 * Document type for AI processing
 */
export type DocumentType = 
  | 'contract' 
  | 'email' 
  | 'email_attachment' 
  | 'notes' 
  | 'letter' 
  | 'other';

/**
 * Document metadata for AI processing
 */
export interface DocumentMetadata {
  /** Document title or name */
  title?: string;
  /** Document type */
  type?: DocumentType;
  /** Source of the document */
  source?: string;
  /** Creation date */
  creationDate?: string;
  /** Author information */
  author?: string;
  /** Additional properties */
  [key: string]: any;
}

/**
 * Document processing job
 */
export interface DocumentProcessingJob {
  /** Unique job identifier */
  id: string;
  /** Document identifier */
  documentId: string;
  /** URL to access the document */
  documentUrl: string;
  /** Current processing status */
  status: DocumentProcessingStatus;
  /** Progress percentage (0-100) */
  progress: number;
  /** Document metadata */
  metadata?: DocumentMetadata;
  /** Processing error if applicable */
  error?: string;
  /** When the job was created */
  createdAt: string;
  /** When the job was last updated */
  updatedAt: string;
  /** User ID associated with the job */
  userId: string;
}

/**
 * Document processing result
 */
export interface DocumentProcessingResult {
  /** Associated job identifier */
  jobId: string;
  /** Document identifier */
  documentId: string;
  /** Extracted text content */
  extractedText?: string;
  /** Document structure analysis */
  structure?: {
    /** Section titles and their positions */
    sections: Array<{
      /** Section title */
      title: string;
      /** Start position in text */
      startPosition: number;
      /** End position in text */
      endPosition: number;
    }>;
    /** Document table of contents */
    tableOfContents?: string[];
  };
  /** Extracted entities from the document */
  entities?: {
    /** Organizations found in the document */
    organizations: Array<{
      /** Organization name */
      name: string;
      /** Confidence score */
      confidence: number;
      /** Mentions of this entity with position information */
      mentions: Array<{
        /** Text excerpt */
        text: string;
        /** Position information */
        position: [number, number];
      }>;
    }>;
    /** People found in the document */
    people: Array<{
      /** Person name */
      name: string;
      /** Confidence score */
      confidence: number;
      /** Mentions of this entity with position information */
      mentions: Array<{
        /** Text excerpt */
        text: string;
        /** Position information */
        position: [number, number];
      }>;
    }>;
    /** Dates found in the document */
    dates: Array<{
      /** Date value */
      date: string;
      /** Context around the date */
      context: string;
      /** Significance of the date */
      significance?: string;
      /** Whether this is a deadline */
      isDeadline?: boolean;
      /** Confidence score */
      confidence: number;
    }>;
    /** Monetary values found in the document */
    monetaryValues: Array<{
      /** Amount as a number */
      amount: number;
      /** Currency code */
      currency: string;
      /** Context around the monetary value */
      context: string;
      /** Purpose or description of the monetary value */
      purpose?: string;
      /** Confidence score */
      confidence: number;
    }>;
  };
  /** Document summary */
  summary?: string;
  /** Key topics in the document */
  topics?: Array<{
    /** Topic name */
    name: string;
    /** Relevance score */
    relevance: number;
  }>;
  /** When the result was created */
  createdAt: string;
}