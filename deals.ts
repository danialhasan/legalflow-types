/**
 * Deal Types
 * 
 * Contains types related to legal deals, their properties, and associated actions
 * Updated to use the new schema-specific types from the modularized database structure
 */
import { Address, ContactInfo, ModelConfidence, Organization, Person, PriorityLevel, UIDisplayInfo } from './basic';
import { SalesTable, DocumentsTable, CoreTable } from './helpers';

/**
 * Represents an entity in a deal (individual or organization)
 */
export interface Entity {
  id?: string;
  name: string;
  type: 'individual' | 'organization';
  role?: string;
  contact_info?: ContactInfo;
}

/**
 * Represents a human entity in a deal
 */
export interface HumanEntity extends Entity {
  type: 'individual';
  title?: string;
  organization?: string;
}

/**
 * Represents a relationship between entities in a deal
 */
export interface Relationship {
  entity1_id: string;
  entity2_id: string;
  relationship_type: string;
  description?: string;
}

/**
 * Represents a key date within a deal
 */
export interface KeyDate {
  date: string;
  description: string;
  is_deadline: boolean;
  context?: string;
  confidence?: number;
}

/**
 * Represents a reference number in a deal (e.g., loan numbers, policy numbers)
 */
export interface ReferenceNumber {
  type: string;
  value: string;
  context?: string;
}

/**
 * Core Deal interface from sales.deals table
 */
export type Deal = SalesTable<'deals'>;

/**
 * Deal document mapping from documents.deal_documents table
 */
export type DealDocument = DocumentsTable<'deal_documents'>;

/**
 * Lead deal match from sales.lead_deal_matches table
 */
export type LeadDealMatch = SalesTable<'lead_deal_matches'>;

/**
 * Extended deal metadata interface
 */
export interface DealMetadata {
  addresses?: Address[];
  organizations?: Organization[];
  human_entities?: HumanEntity[];
  documents?: string[];
  key_dates?: KeyDate[];
  reference_numbers?: ReferenceNumber[];
  ai_analysis?: DealAIAnalysis;
}

/**
 * AI analysis of a deal
 */
export interface DealAIAnalysis {
  summary: string;
  key_points: string[];
  risk_assessment?: {
    risk_level: PriorityLevel;
    risk_factors: string[];
    opportunities: string[];
  };
  suggested_actions?: DealActionRecommendation[];
  last_engagement?: string; // Timestamp of last client interaction
  responsiveness_score?: number; // Client engagement metric
}

/**
 * Represents AI-extracted information about a deal
 */
export interface ExtractedDealInfo {
  human_entities: HumanEntity[];
  organizations: Organization[];
  addresses: Address[];
  key_dates: KeyDate[];
  reference_numbers: ReferenceNumber[];
  document_references: string[];
  context: DealContext;
  confidence: ModelConfidence;
}

/**
 * Context information related to a deal
 */
export interface DealContext {
  deal_type: string;
  deal_stage: string;
  property_type?: string;
  property_address?: string;
  transaction_amount?: string;
  closing_date?: string;
  key_concerns?: string[];
}

/**
 * Types of actions that can be recommended for a deal
 */
export type ActionType = 
  | 'document'  // Document-related actions (upload, review, etc.)
  | 'client'    // Client-related actions (contact, follow-up)
  | 'deadline'  // Deadline-related actions (upcoming dates)
  | 'financing' // Financing-related actions
  | 'approval'  // Approval-related actions
  | 'other';    // Miscellaneous actions

/**
 * Represents an AI-suggested action for a deal
 */
export interface DealActionRecommendation {
  id: string;                // Unique identifier for the action
  dealId: number | string;   // The deal this action is associated with
  actionType: ActionType;
  priority: PriorityLevel;
  description: string;       // Human-readable description of the action
  reasoning: string;         // Explanation for why this action is recommended
  dueDate?: string;          // Optional deadline for the action
  quickAction?: {
    type: 'approve' | 'remind' | 'request' | 'schedule';
    endpoint: string;        // API endpoint to call for executing this quick action
    params: Record<string, any>; // Parameters for the quick action
  };
}

/**
 * User rankings for deals from core.user_rankings table
 */
export type UserRanking = CoreTable<'user_rankings'>;

/**
 * Represents an AI-ranked deal with priority information
 */
export interface DealRanking {
  dealId: number | string;
  dealName: string;
  rank: number;
  score: number;             // AI-determined priority score (0-1)
  isPinned: boolean;         // User has manually pinned this deal
  riskLevel: PriorityLevel;
  reasoning: string;         // Explanation for the ranking
  riskWarnings: string[];    // List of specific risk factors
}

/**
 * Represents an AI-ranked deal with detailed prioritization information
 */
export interface AIRankedDeal {
  id: string;                // Deal unique identifier
  name: string;              // Deal name
  clientName: string;        // Associated client name
  score: number;             // Numerical AI ranking score (0-100)
  priority: PriorityLevel;   // Priority level
  risk_level: PriorityLevel; // Risk assessment
  ai_insight: string;        // AI-generated insight text
  isPinned?: boolean;        // Whether deal is manually pinned by user
  suggestedActions: AIDealAction[]; // Array of suggested actions
  ui_display?: UIDisplayInfo;
}

/**
 * Represents an AI-suggested action for a deal
 * Simplified version of DealActionRecommendation focused on UI display
 */
export interface AIDealAction {
  id: string;                // Action unique identifier
  type: string;              // Action type (e.g., 'deadline', 'document', 'follow_up')
  description: string;       // Human-readable action description
  priority: PriorityLevel;   // Action priority level
}

/**
 * Response from the AI deal insight processing endpoint
 */
export interface DealInsightResponse {
  jobId: string;             // AI processing job identifier
  status: 'queued' | 'processing' | 'completed' | 'failed';  // Processing status
  results?: {
    dealId: string;          // Deal identifier
    ai_insights: string[];   // Array of AI-generated insights
    recommended_actions: {
      description: string;   // Action description
      priority: PriorityLevel; // Action priority
    }[];
  };
  error?: string;            // Error message if status is 'failed'
}

/**
 * Format of real-time updates received via SSE
 */
export interface DealRealTimeUpdate {
  eventType: 'deal_update' | 'deal_insight' | 'deal_action';  // Event type
  dealId: string;            // Deal identifier
  timestamp: string;         // ISO timestamp of the update
  newPriority?: PriorityLevel; // Updated priority (if changed)
  ai_insight?: string;       // New AI insight (if available)
  actions?: AIDealAction[];  // Updated actions (if available)
}

/**
 * Response format from the ranking API
 */
export interface AIRankingResponse {
  rankedItems: AIRankedDeal[]; // Array of ranked deals
  pagination: {
    total: number;           // Total number of items
    limit: number;           // Items per page
    offset: number;          // Current offset
    hasMore: boolean;        // Whether there are more items
  };
  computed: {
    timestamp: string;       // ISO timestamp of ranking computation
    cacheKey: string;        // Cache identifier
    validUntil: string;      // ISO timestamp of cache expiration
  };
} 