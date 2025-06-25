/**
 * Creation DTOs
 *
 * Shared types for deal/client creation text draft functionality.
 * These types are used across services for the two-stage creation flow.
 */
export interface TextDraftInput {
    description: string;
    mode: 'deal' | 'client';
    userId: string;
}
export interface TextDraftOutput {
    entityId: string;
    title: string;
    summary: string;
}
export interface DocumentUploadResult {
    documentId: string;
    publicUrl: string;
}
export interface JobProgressUpdate {
    stage: 'chunkr' | 'extraction' | 'contextualization';
    progress: number;
}
export interface EnrichmentJobParams {
    userId: string;
    entityId: string;
    documentId: string;
    publicUrl: string;
}
