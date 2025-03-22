/**
 * Documents Domain Types
 * 
 * Contains type definitions for the documents schema tables and related types.
 * These types represent document storage, processing, and metadata.
 */
import type { Database } from '../../generated/database';

// Schema type shorthand
export type DocumentsSchema = Database['documents']['Tables'];

// Table type exports - Row types
export type DealDocument = DocumentsSchema['deal_documents']['Row'];
export type DocumentChunk = DocumentsSchema['document_chunks']['Row'];
export type DocumentGroup = DocumentsSchema['document_groups']['Row'];
export type DocumentMetadata = DocumentsSchema['document_metadata']['Row'];

// Table type exports - Insert types
export type DealDocumentInsert = DocumentsSchema['deal_documents']['Insert'];
export type DocumentChunkInsert = DocumentsSchema['document_chunks']['Insert'];
export type DocumentGroupInsert = DocumentsSchema['document_groups']['Insert'];
export type DocumentMetadataInsert = DocumentsSchema['document_metadata']['Insert'];

// Table type exports - Update types
export type DealDocumentUpdate = DocumentsSchema['deal_documents']['Update'];
export type DocumentChunkUpdate = DocumentsSchema['document_chunks']['Update'];
export type DocumentGroupUpdate = DocumentsSchema['document_groups']['Update'];
export type DocumentMetadataUpdate = DocumentsSchema['document_metadata']['Update']; 