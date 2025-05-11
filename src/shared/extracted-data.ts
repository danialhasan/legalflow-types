import { z } from 'zod';
// Adjust import path relative to src/
import { Constants } from '../generated/database';

const { source_type: SourceType } = Constants.core.Enums;
const { canon_block_tag: CanonBlockTag } = Constants.analysis.Enums;

/**
 * Entity types for document extraction - MOVED TO SHARED TYPES
 */

/**
 * Base entity interface with common fields for all entity types
 */
export const EntityBaseSchema = z.object({
  semanticEntityId: z.string(),
  value: z.string(),
  confidence: z.number().nullable(),
  sourceText: z.string().nullable(),
  sourceLocation: z
    .object({
      pageNumber: z.number().nullable(),
      boundingBox: z
        .object({
          x: z.number(),
          y: z.number(),
          width: z.number(),
          height: z.number()
        })
        .nullable()
    })
    .nullable()
});

export const PersonEntitySchema = EntityBaseSchema.extend({
  type: z.literal('person'),
  role: z.string().nullable(),
  title: z.string().nullable(),
  organization: z.string().nullable(),
  contactInfo: z
    .object({
      email: z.string().nullable(),
      phone: z.string().nullable(),
      address: z.string().nullable()
    })
    .nullable()
});

export const OrganizationEntitySchema = EntityBaseSchema.extend({
  type: z.literal('organization'),
  role: z.string().nullable(),
  category: z.string().nullable(),
  contactInfo: z
    .object({
      email: z.string().nullable(),
      phone: z.string().nullable(),
      address: z.string().nullable(),
      website: z.string().nullable()
    })
    .nullable()
});

export const DateEntitySchema = EntityBaseSchema.extend({
  type: z.literal('date'),
  dateType: z.string(), // e.g., 'execution', 'effective', 'closing', 'termination'
  normalizedDate: z.string().nullable() // ISO format
});

export const AddressEntitySchema = EntityBaseSchema.extend({
  type: z.literal('address'),
  addressType: z.string().nullable(), // e.g., 'property', 'mailing', 'business'
  components: z
    .object({
      street: z.string().nullable(),
      city: z.string().nullable(),
      state: z.string().nullable(),
      postalCode: z.string().nullable(),
      country: z.string().nullable()
    })
    .nullable()
});

export const MonetaryEntitySchema = EntityBaseSchema.extend({
  type: z.literal('monetary'),
  amount: z.number(),
  currency: z.string(),
  context: z.string().nullable() // e.g., 'purchase price', 'deposit', 'fee'
});

export const ReferenceNumberEntitySchema = EntityBaseSchema.extend({
  type: z.literal('reference'),
  referenceType: z.string() // e.g., 'contract', 'property', 'filing'
});

export const RelationshipEntitySchema = z.object({
  sourceEntityId: z.string(),
  targetEntityId: z.string(),
  relationType: z.string(), // e.g., 'employer', 'owns', 'represents'
  confidence: z.number().nullable()
});

export const ExtractedEntitySchema = z.discriminatedUnion('type', [
  PersonEntitySchema,
  OrganizationEntitySchema,
  DateEntitySchema,
  AddressEntitySchema,
  MonetaryEntitySchema,
  ReferenceNumberEntitySchema
]);

/**
 * ExtractedInputData represents a unified structure for extracted information
 * from any input source (emails, documents, etc.). It provides a standardized
 * way to represent entities, relationships, context, and metadata regardless
 * of the input type being processed.
 *
 * This interface serves as the common output type for all extraction pipelines,
 * ensuring consistency across different input sources while maintaining
 * flexibility for source-specific data through its generic structure.
 *
 * This is JSON in the database, so it's not normalized.
 */
export const ExtractedInputDataSchema = z.object({
  entities: z.array(ExtractedEntitySchema),
  relationships: z.array(RelationshipEntitySchema),
  dealContext: z.object({
    dealType: z.string().nullable(),
    parties: z
      .array(
        z.object({
          referencedSemanticEntityId: z.string(),
          role: z.string()
        })
      )
      .nullable(),
    keyDates: z
      .array(
        z.object({
          referencedSemanticEntityId: z.string(),
          purpose: z.string()
        })
      )
      .nullable(),
    properties: z
      .array(
        z.object({
          referencedSemanticEntityId: z.string(),
          isPrimary: z.boolean()
        })
      )
      .nullable(),
    monetaryValues: z
      .array(
        z.object({
          referencedSemanticEntityId: z.string(),
          purpose: z.string()
        })
      )
      .nullable()
  }),
  confidence: z.object({
    overall: z.object({
      score: z.number(), // 0-1 scale
      reasoning: z.string()
    }),
    entities: z
      .object({
        score: z.number(),
        reasoning: z.string()
      })
      .nullable(), // Also make these confidence details nullable if they might not be returned
    relationships: z
      .object({
        score: z.number(),
        reasoning: z.string()
      })
      .nullable(),
    dealContext: z
      .object({
        score: z.number(),
        reasoning: z.string()
      })
      .nullable()
  }),
  metadata: z.object({
    /**
     * The sourceId is the id of the source input (email, document, etc) and can be used to
     * find the source input in the database. The schema/table that the source input is stored in
     * is determined by the sourceType.
     *
     * As of April 3, 2025, the sourceType is either 'email' or 'document'. This means that the sourceId
     * can point to either documents.document_metadata or analysis.processed_emails.
     */
    sourceId: z.string(),
    sourceType: z.enum(SourceType), // Required field for source type, restricted to SourceType enum
    sourceTags: z.array(z.enum(CanonBlockTag)), // Required field for source tag, restricted to CanonBlockTag enum
    extractedInputId: z.string().nullable(), // Allow null if not always present initially
    processingTime: z.number().nullable(), // Allow null if not always present initially
    modelVersion: z.string().nullable() // Allow null if not always present initially
  })
});

// Export inferred types
export type EntityBase = z.infer<typeof EntityBaseSchema>;
export type PersonEntity = z.infer<typeof PersonEntitySchema>;
export type OrganizationEntity = z.infer<typeof OrganizationEntitySchema>;
export type DateEntity = z.infer<typeof DateEntitySchema>;
export type AddressEntity = z.infer<typeof AddressEntitySchema>;
export type MonetaryEntity = z.infer<typeof MonetaryEntitySchema>;
export type ReferenceNumberEntity = z.infer<typeof ReferenceNumberEntitySchema>;
export type RelationshipEntity = z.infer<typeof RelationshipEntitySchema>;
export type ExtractedEntity = z.infer<typeof ExtractedEntitySchema>;
export type ExtractedInputData = z.infer<typeof ExtractedInputDataSchema>;

// --- Canon Block and Deal Context Graph Schemas ---

// Define LedgerEntrySchema, similar to how it's in finalizeDealUpdateTask.ts
// Ensure all nested schemas like contact are also defined or use z.any() for simplicity if shared types are an issue.
export const LedgerEntrySchema = z.object({
  canonicalId: z.string(),
  aliases: z.array(z.string()).nullable(),
  value: z.string(),
  type: z.string(),
  role: z.string().nullable(),
  roleHistory: z.array(z.string()).nullable(),
  title: z.string().nullable(),
  organization: z.string().nullable(),
  contact: z
    .object({
      email: z.string().nullable(),
      phone: z.string().nullable()
    })
    .nullable(),
  lastSeen: z.string().datetime({ offset: true }).nullable(),
  sources: z.array(z.string()).nullable(),
  reasoning: z.string().nullable()
});
export type LedgerEntry = z.infer<typeof LedgerEntrySchema>;

export const CanonBlockSchema = z.object({
  id: z.string(), // id of the canon block
  sourceId: z.string().nullable(), // id of the source input (email, document, etc). Inherited from ExtractedInputData.
  summary: z.string(), // Natural language canonical summary (LLM-generated)
  embedding: z.string().nullable(), // Vector of the summary
  createdAt: z.string(),
  dealContextGraphId: z.string().nullable(), // Reference to parent DealContextGraph
  tags: z.array(z.enum(CanonBlockTag)).nullable(), // Array of semantic tags for the canon block
  extractedInputId: z.string().nullable() // id of the extracted input that this canon block is based on
});

/**
 * DealContextGraph represents a persistent, evolving memory object for a single deal.
 * It is composed of many CanonBlocks and enriched structured data over time.
 * This serves as the semantic context for matching and understanding deal relationships.
 */
export const DealContextGraphSchema = z.object({
  id: z.string(),
  userId: z.string().nullable(),
  canonBlocks: z.array(CanonBlockSchema),
  extractedData: ExtractedInputDataSchema, // Most recent or merged structured data
  summaryEmbedding: z.string().nullable(),
  summary: z.string().nullable(),
  entityLedger: z.array(LedgerEntrySchema).nullable(), // UPDATED to be an array of LedgerEntry
  createdAt: z.string(),
  updatedAt: z.string()
});

// Export inferred types for CanonBlock and DealContextGraph
export type CanonBlock = z.infer<typeof CanonBlockSchema>;
export type DealContextGraph = z.infer<typeof DealContextGraphSchema>;
