import { DocumentsTable, ComplianceTable } from './helpers';
/**
 * Document interface representing a document in the system
 */
export interface Document {
    document_id: string;
    metadata: DocumentMetadata;
    content?: string;
    status?: string;
}
/**
 * Document metadata from the documents.document_metadata table
 */
export type DocumentMetadata = DocumentsTable<'document_metadata'>;
/**
 * Document metadata interface for extended properties
 */
export interface DocumentMetadataExtended {
    metadata?: {
        title?: string;
        filename?: string;
        file_type?: string;
        created_at?: string;
        modified_at?: string;
        author?: string;
        page_count?: number;
        size?: number;
        source?: string;
        custom_metadata?: Record<string, any>;
    };
}
/**
 * Document interface for AI service document handling
 */
export interface DocumentInterface {
    id: string;
    title: string;
    content: string;
    metadata: {
        source?: string;
        author?: string;
        created_at?: string;
        modified_at?: string;
        file_type?: string;
        page_count?: number;
        language?: string;
        classification?: string[];
        confidence?: number;
    };
}
/**
 * Document classification details
 */
export interface ClassificationDetails {
    category: string;
    subcategory?: string;
    confidence: number;
    terms?: string[];
}
/**
 * Document source information
 */
export interface SourceInfo {
    source_type: string;
    source_id?: string;
    source_url?: string;
    source_name?: string;
    retrieval_date?: string;
}
/**
 * Document chunk from text splitting
 * Maps to documents.document_chunks table
 */
export type DocumentChunk = DocumentsTable<'document_chunks'>;
/**
 * Document chunk content interface
 */
export interface DocumentChunkContent {
    text: string;
    metadata?: Record<string, any>;
}
/**
 * Document chunk metadata interface
 */
export interface DocumentChunkMetadata {
    chunk_index: number;
    page_number?: number;
    bbox?: {
        x: number;
        y: number;
        width: number;
        height: number;
        page: number;
    };
    embedding_id?: string;
}
/**
 * Document citation from a conversation
 * Maps to compliance.citations table
 */
export type Citation = ComplianceTable<'citations'>;
/**
 * Document citation bbox interface
 */
export interface CitationBBox {
    x: number;
    y: number;
    width: number;
    height: number;
    page: number;
}
/**
 * Unstructured insights from document analysis
 */
export interface UnstructuredInsight {
    key: string;
    value: string | number | boolean | Record<string, any>;
    confidence: number;
    evidence?: string;
}
/**
 * Unstructured data extracted from documents
 */
export interface UnstructuredData {
    insights: UnstructuredInsight[];
    summary?: string;
    key_points?: string[];
    source_documents?: string[];
}
/**
 * Document group for organizing related documents
 * Maps to documents.document_groups table
 */
export type DocumentGroup = DocumentsTable<'document_groups'>;
/**
 * Deal document mapping
 * Maps to documents.deal_documents table
 */
export type DealDocument = DocumentsTable<'deal_documents'>;
/**
 * PDF-specific types for the UI
 */
export interface PdfViewerOptions {
    scale?: number;
    rotation?: number;
    pageNumber?: number;
    showAnnotations?: boolean;
    highlightTerms?: string[];
}
