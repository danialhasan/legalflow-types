/**
 * Document Types
 * 
 * Contains types related to documents, document processing, and document metadata
 */
import { Json } from './basic';

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
 * Document metadata
 */
export interface DocumentMetadata {
  id: string;
  document_id: string;
  user_id?: string;
  group_id?: string;
  deal_id?: number | null;
  deal_name?: string | null;
  classifications?: string[] | null;
  status?: string | null;
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
  extracted_data?: Json | null;
  created_at: string;
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
 */
export interface DocumentChunk {
  id: number;
  document_id: string;
  document_metadata_id: string;
  chunk_content: {
    text: string;
    metadata?: Record<string, any>;
  };
  chunkr_metadata?: {
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
  };
  created_at: string;
}

/**
 * Document citation from a conversation
 */
export interface Citation {
  id: number;
  message_id: string;
  document_id: string;
  document_name?: string;
  content: string;
  page_number: number;
  citation_number: number;
  bbox: {
    x: number;
    y: number;
    width: number;
    height: number;
    page: number;
  };
  created_at: string;
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
 */
export interface DocumentGroup {
  id: string;
  name?: string;
  user_id?: string;
  client_id?: string;
  conversation_id?: string;
  metadata?: Record<string, any>;
  created_at: string;
}

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