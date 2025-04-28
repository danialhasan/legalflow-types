import type { Database } from '../generated/database'; // Import base Database type for Enums
// Json type is implicitly available via the Database type

// Local definition for Supabase Json type
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

// Define the main aggregated structure for a single deal
// This is the type that should be stored in the Pinia store's deals array.
export interface AggregatedDealData {
  id: string; // From analysis.dealContextGraphs.id
  enriched_extracted_data: EnrichedExtractedData; // From analysis.dealContextGraphs.enrichedExtractedData
  summary: string | null; // From analysis.dealContextGraphs.summary
  user_id: string | null; // From analysis.dealContextGraphs.userId
  canon_blocks: CanonBlock[]; // Aggregated from analysis.canonBlocks and related source tables
}

// Canonical summary blocks with resolved source information
export interface CanonBlock {
  id: string; // From analysis.canonBlocks.id
  summary: string; // From analysis.canonBlocks.summary
  source: CanonBlockSource; // Aggregated source info resolved via analysis.canonBlocks.sourceId -> core.sources -> specific source table
}

// --- Enriched Extracted Data Structures (From your provided context) ---
// These seem well-defined already based on the payload within analysis.dealContextGraphs.enrichedExtractedData

export interface EnrichedExtractedData {
  entities: Entity[];
  confidence: Confidence;
  deal_context: DealContext;
  document_type: string;
  relationships: Relationship[];
}

// Discriminated union for Entities
export type Entity =
  | OrganizationEntity
  | PersonEntity
  | AddressEntity
  | DateEntity
  | MonetaryEntity
  | ReferenceEntity;

// Base for Entities
interface BaseEntity {
  type: string;
  value: string;
  confidence: number;
  source_text: string;
  source_location: SourceLocation;
  semantic_entity_id: string;
}

// Specific Entity types
export interface OrganizationEntity extends BaseEntity {
  type: 'organization';
  role: string;
  category: string;
  contact_info: ContactInfo | null;
}

export interface PersonEntity extends BaseEntity {
  type: 'person';
  role: string;
  title?: string;
  organization?: string;
  contact_info: ContactInfo | null;
}

export interface AddressEntity extends BaseEntity {
  type: 'address';
  components: AddressComponents;
  address_type: string;
}

export interface DateEntity extends BaseEntity {
  type: 'date';
  date_type: string;
  normalized_date: string;
}

export interface MonetaryEntity extends BaseEntity {
  type: 'monetary';
  amount: number;
  context: string;
  currency: string;
}

export interface ReferenceEntity extends BaseEntity {
  type: 'reference';
  reference_type: string;
}

// Entity Helpers
export interface SourceLocation {
  page_number: number;
  bounding_box: BoundingBox;
}

export interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  website: string;
}

export interface AddressComponents {
  street: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
}

// Confidence Score Structure
export interface Confidence {
  overall: ConfidenceCategory;
  entities: ConfidenceCategory;
  deal_context: ConfidenceCategory;
  relationships: ConfidenceCategory;
}

export interface ConfidenceCategory {
  score: number;
  reasoning: string;
}

// Deal Context Structure
export interface DealContext {
  parties: PartyRef[];
  deal_type: string;
  key_dates: KeyDateRef[];
  properties: PropertyRef[];
  monetary_values: MonetaryRef[];
}

// Deal Context Reference Types
export interface PartyRef {
  role: string;
  referenced_semantic_entity_id: string;
}

export interface KeyDateRef {
  purpose: string;
  referenced_semantic_entity_id: string;
}

export interface PropertyRef {
  is_primary: boolean;
  referenced_semantic_entity_id: string;
}

export interface MonetaryRef {
  purpose: string;
  referenced_semantic_entity_id: string;
}

// Relationship Structure
export interface Relationship {
  confidence: number;
  relation_type: string;
  source_entity_id: string;
  target_entity_id: string;
}

// --- Canon Block Source Structures (Refined based on narrative) ---

// Discriminated union for different source types backing a CanonBlock
export type CanonBlockSource =
  | EmailSource
  | DocumentSource /* | OtherSourceTypes... */;

// Base identifying information for the source
interface BaseSourceInfo {
  id: string; // The ID from core.sources (originally analysis.canonBlocks.sourceId)
  type: Database['core']['Enums']['source_type']; // From core.sources.type
}

// Details for an Email Source
export interface EmailSource extends BaseSourceInfo {
  type: 'email';
  // Select relevant fields directly from integrations.googleEmails
  emailDetails: {
    gmailId: string;
    threadId: string;
    fromEmail: string;
    toEmails: string[];
    ccEmails: string[] | null;
    bccEmails: string[] | null;
    subject: string | null;
    sentAt: string | null; // ISO timestamp
    receivedAt: string | null; // ISO timestamp
    snippet: string | null;
    bodyText: string | null;
    hasAttachments: boolean | null;
    isRead: boolean | null;
    isImportant: boolean | null;
    labels: string[] | null;
    // Consider adding attachments if needed, joining with integrations.emailAttachments
    // attachments?: EmailAttachmentDetails[];
  };
}

// Details for a Document Source
export interface DocumentSource extends BaseSourceInfo {
  type: 'document';
  // Select relevant fields directly from documents.documentMetadata
  documentDetails: {
    metadataId: string; // documents.documentMetadata.id
    dealName: string | null; // documents.documentMetadata.dealName
    storageObjectId: string | null; // documents.documentMetadata.storageObjectId
    createdAt: string;
    status: string | null;
    classifications: string[] | null;
    metadata: Json | null; // Raw metadata JSON
    // Potentially add public URL if derivable from storageObjectId/bucket info
    // publicUrl?: string;
  };
}

// // Optional: If you need attachment details with EmailSource
// export interface EmailAttachmentDetails {
//   id: string; // integrations.emailAttachments.id
//   fileName: string;
//   mimeType: string;
//   publicUrl: string;
//   gmailAttachmentId: string; // Keeping based on original interface
// }
