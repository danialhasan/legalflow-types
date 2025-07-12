// ========== Memory System Types ==========
export type MemoryCategory = 
  | 'business_rules'      // Property types, deal sizes, geography
  | 'client_patterns'     // Buyer/seller focus, demographics
  | 'communication'       // Email patterns, outreach timing
  | 'exclusions'         // What's NOT real estate
  | 'specializations'    // Niche markets, expertise
  | 'custom';           // User-defined

export type MemorySource = 'user_provided' | 'learned' | 'inferred';

export type PropertyType = 'residential' | 'commercial' | 'industrial' | 'land' | 'mixed_use';

// Email Categories for Triage System
export type EmailCategory = 'deal' | 'action_required' | 'reference' | 'noise';

export interface UserMemory {
  id: string;                    // UUID
  category: MemoryCategory;
  content: string;               // Human-readable memory
  confidence: number;            // 0.0 to 1.0
  source: MemorySource;
  examples?: string[];           // Concrete examples
  contradicts?: string[];        // IDs of conflicting memories
  createdAt: string;            // ISO date string
  updatedAt: string;            // ISO date string
  lastUsedAt: string;           // ISO date string
  useCount: number;
  metadata?: Record<string, any>; // Flexible additional data
}

export interface MemoryProfile {
  version: number;              // For optimistic locking
  memories: UserMemory[];
  businessRules: BusinessContext;
  communicationPatterns: CommunicationStyle;
  excludedPatterns: ExclusionRules;
  conversationHistory: ConversationRecord[];
  memoryMetadata: MemoryMetadata;
}

export interface BusinessContext {
  propertyTypes: PropertyType[];        // ['residential', 'commercial']
  propertyTypeDistribution?: {
    residential: number;  // 0.99 for Elle
    commercial: number;   // 0.01 for Elle
  };
  dealSizeRange?: { min: number; max: number };
  geographicFocus?: string[];          // ['Toronto', 'GTA', 'Ontario']
  clientTypes?: ('buyer' | 'seller' | 'investor' | 'developer')[];
  specializations?: string[];          // ['luxury', 'first-time-buyers', 'condos']
  seasonalPatterns?: {
    busy: string[];    // ['spring', 'summer']
    slow: string[];    // ['winter']
  };
}

export interface CommunicationStyle {
  emailPatterns?: {
    responseTime?: 'immediate' | 'same_day' | 'next_day' | 'weekly';
    tone?: 'formal' | 'casual' | 'friendly' | 'professional';
    detailLevel?: 'brief' | 'comprehensive' | 'bullet_points';
  };
  clientPreferences?: {
    callTimes?: string[];       // ['morning', 'evening']
    communicationFrequency?: 'daily' | 'weekly' | 'as_needed';
    preferredChannels?: ('email' | 'phone' | 'text' | 'app')[];
  };
  workingHours?: {
    start: string;     // '09:00'
    end: string;       // '18:00'
    timezone: string;  // 'America/Toronto'
    weekends: boolean;
  };
}

export interface ExclusionRules {
  emailDomains?: string[];       // ['spam.com', 'marketing.example']
  subjectKeywords?: string[];    // ['unsubscribe', 'lottery', 'inheritance']
  senderPatterns?: string[];     // ['noreply@', 'donotreply@']
  contentPatterns?: string[];    // ['this is not a real estate inquiry']
  propertyExclusions?: {
    types?: PropertyType[];      // Don't work with industrial
    locations?: string[];        // Don't work outside GTA
    priceRanges?: { min?: number; max?: number }[];
  };
}

export interface ConversationRecord {
  id: string;
  timestamp: string;
  topic: string;
  summary: string;
  memories: string[];    // Memory IDs that were used/created
  outcome?: string;      // 'memory_created' | 'rule_updated' | 'correction_applied'
}

export interface MemoryMetadata {
  lastUpdated: string;
  lastLearningEvent?: string;      // ISO timestamp of last pattern detection
  correctionHistory?: CorrectionEvent[];
  lastCorrectionAt?: string;
  memoryStats?: {
    totalMemories: number;
    memoriesByCategory: Record<MemoryCategory, number>;
    avgConfidence: number;
    mostUsedMemory?: string;       // Memory ID
  };
}

// ========== API Response Types ==========
export interface GetMemoryProfileResponse {
  memories: UserMemory[];
  categories: CategorySummary[];
  lastLearningEvent: string | null;
  totalCorrections: number;
}

export interface CategorySummary {
  category: MemoryCategory;
  count: number;
  label: string;
}

export interface CreateMemoryRequest {
  category: MemoryCategory;
  content: string;
  examples?: string[];
  source?: MemorySource;
  confidence?: number;
}

export interface UpdateMemoryRequest {
  id: string;
  content?: string;
  examples?: string[];
  confidence?: number;
  category?: MemoryCategory;
}

export interface SubmitCorrectionRequest {
  emailId: string;
  originalClassification: EmailCategory;
  correctedClassification: EmailCategory;
  emailContent: {
    subject: string;
    body: string;
    sender: string;
  };
  propertyTypeDetected?: PropertyType;
}

export interface SubmitCorrectionResponse {
  success: boolean;
  patternDetected?: boolean;
  suggestedMemory?: {
    category: MemoryCategory;
    content: string;
    confidence: number;
    examples: string[];
  };
  message: string;
}

export interface MemoryAPIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  validationErrors?: Record<string, string[]>;
}

// ========== Learning Pipeline Types ==========
export interface CorrectionEvent {
  emailId: string;
  userId: string;
  originalClassification: EmailCategory;
  correctedClassification: EmailCategory;
  emailContent: {
    subject: string;
    body: string;
    sender: string;
  };
  propertyTypeDetected?: PropertyType;
  timestamp: string;
}

export interface DetectedPattern {
  pattern: string;
  confidence: number;
  examples: string[];
  suggestedMemory: Partial<UserMemory>;
  category: MemoryCategory;
}

export interface LearningOpportunity {
  patternType: 'email_sender' | 'subject_keyword' | 'content_pattern' | 'property_type';
  pattern: string;
  occurrences: number;
  examples: string[];
  confidence: number;
  suggestedAction: 'create_memory' | 'update_exclusion' | 'refine_rule';
  suggestedMemory?: Partial<UserMemory>;
}

// ========== Email Triage Types ==========
export interface EmailTriageContext {
  email: {
    id: string;
    subject: string;
    body: string;
    sender: string;
    receivedAt: string;
  };
  userMemories: UserMemory[];
  businessRules: BusinessContext;
  excludedPatterns: ExclusionRules;
}

export interface TriageDecision {
  classification: EmailCategory;
  confidence: number;
  reasoning: string;
  matchedMemories: string[];     // Memory IDs that influenced decision
  shouldProcess: boolean;        // false = skip expensive AI processing
  metadata?: {
    propertyTypeDetected?: PropertyType;
    dealStageDetected?: string;
    urgencyLevel?: 'low' | 'medium' | 'high';
  };
}

// ========== Error Types ==========
export interface MemoryError extends Error {
  name: 'MemoryError';
  code: 'MEMORY_NOT_FOUND' | 'INVALID_MEMORY_DATA' | 'VERSION_CONFLICT' | 'MEMORY_STORAGE_ERROR';
  context?: Record<string, any>;
}

export interface MemoryValidationError extends Error {
  name: 'MemoryValidationError';
  code: 'INVALID_CATEGORY' | 'INVALID_CONFIDENCE' | 'MISSING_CONTENT' | 'INVALID_EXAMPLES';
  field: string;
  context?: Record<string, any>;
}

export interface MemoryStorageError extends Error {
  name: 'MemoryStorageError';
  code: 'PROFILE_NOT_FOUND' | 'UPDATE_FAILED' | 'OPTIMISTIC_LOCK_FAILED' | 'INITIALIZATION_FAILED';
  context?: Record<string, any>;
}

// ========== Error Creation Functions ==========
export function createMemoryError(
  message: string,
  code: MemoryError['code'],
  context?: Record<string, any>
): MemoryError {
  const error = new Error(message) as MemoryError;
  error.name = 'MemoryError';
  error.code = code;
  error.context = context;
  return error;
}

export function createMemoryValidationError(
  message: string,
  code: MemoryValidationError['code'],
  field: string,
  context?: Record<string, any>
): MemoryValidationError {
  const error = new Error(message) as MemoryValidationError;
  error.name = 'MemoryValidationError';
  error.code = code;
  error.field = field;
  error.context = context;
  return error;
}

export function createMemoryStorageError(
  message: string,
  code: MemoryStorageError['code'],
  context?: Record<string, any>
): MemoryStorageError {
  const error = new Error(message) as MemoryStorageError;
  error.name = 'MemoryStorageError';
  error.code = code;
  error.context = context;
  return error;
}

// ========== Utility Types ==========
export interface MemorySearchOptions {
  category?: MemoryCategory;
  source?: MemorySource;
  minConfidence?: number;
  limit?: number;
  sortBy?: 'confidence' | 'useCount' | 'lastUsedAt' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
}

export interface MemoryUsageStats {
  totalMemories: number;
  averageConfidence: number;
  memoriesByCategory: Record<MemoryCategory, number>;
  memoriesBySource: Record<MemorySource, number>;
  mostUsedMemories: Array<{
    id: string;
    content: string;
    useCount: number;
  }>;
  recentlyUsed: Array<{
    id: string;
    content: string;
    lastUsedAt: string;
  }>;
}