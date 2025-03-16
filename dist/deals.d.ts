/**
 * Deal Types
 *
 * Contains types related to legal deals, their properties, and associated actions
 * Updated to use the new schema-specific types from the modularized database structure
 */
import { Address, ContactInfo, ModelConfidence, Organization, PriorityLevel, UIDisplayInfo } from './basic';
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
    last_engagement?: string;
    responsiveness_score?: number;
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
export type ActionType = 'document' | 'client' | 'deadline' | 'financing' | 'approval' | 'other';
/**
 * Represents an AI-suggested action for a deal
 */
export interface DealActionRecommendation {
    id: string;
    dealId: number | string;
    actionType: ActionType;
    priority: PriorityLevel;
    description: string;
    reasoning: string;
    dueDate?: string;
    quickAction?: {
        type: 'approve' | 'remind' | 'request' | 'schedule';
        endpoint: string;
        params: Record<string, any>;
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
    score: number;
    isPinned: boolean;
    riskLevel: PriorityLevel;
    reasoning: string;
    riskWarnings: string[];
}
/**
 * Represents an AI-ranked deal with detailed prioritization information
 */
export interface AIRankedDeal {
    id: string;
    name: string;
    clientName: string;
    score: number;
    priority: PriorityLevel;
    risk_level: PriorityLevel;
    ai_insight: string;
    isPinned?: boolean;
    suggestedActions: AIDealAction[];
    ui_display?: UIDisplayInfo;
}
/**
 * Represents an AI-suggested action for a deal
 * Simplified version of DealActionRecommendation focused on UI display
 */
export interface AIDealAction {
    id: string;
    type: string;
    description: string;
    priority: PriorityLevel;
}
/**
 * Response from the AI deal insight processing endpoint
 */
export interface DealInsightResponse {
    jobId: string;
    status: 'queued' | 'processing' | 'completed' | 'failed';
    results?: {
        dealId: string;
        ai_insights: string[];
        recommended_actions: {
            description: string;
            priority: PriorityLevel;
        }[];
    };
    error?: string;
}
/**
 * Format of real-time updates received via SSE
 */
export interface DealRealTimeUpdate {
    eventType: 'deal_update' | 'deal_insight' | 'deal_action';
    dealId: string;
    timestamp: string;
    newPriority?: PriorityLevel;
    ai_insight?: string;
    actions?: AIDealAction[];
}
/**
 * Response format from the ranking API
 */
export interface AIRankingResponse {
    rankedItems: AIRankedDeal[];
    pagination: {
        total: number;
        limit: number;
        offset: number;
        hasMore: boolean;
    };
    computed: {
        timestamp: string;
        cacheKey: string;
        validUntil: string;
    };
}
