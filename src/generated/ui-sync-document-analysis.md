# UI Sync Pipeline - Document Inclusion Analysis (Option A)

## Current State Analysis

### 1. Current Structure of `deal_detail_raw` Materialized View

The current view includes:
- **deal_id**: UUID identifier
- **deal_data_json**: Entity ledger data containing entities, relationships, deal context
- **payload**: Transformed JSON object with UI-ready data
- **associated_clients_json**: Linked client information
- **last_touch**: Update timestamp
- **user_id**: User ownership
- **needs_sync**: Boolean flag for sync status

Current payload size analysis:
- Average payload size: ~500-1000 tokens per deal
- Maximum observed: ~972 tokens
- Minimal deals: ~32 tokens

### 2. Document Data Structure

From the `documents` schema analysis:
- **deal_documents**: Links documents to deals
- **document_metadata**: Contains metadata and extracted_data
- Current statistics:
  - Average documents per deal: 1 (based on limited sample)
  - Average metadata size: 180 bytes (~45 tokens)
  - Extracted data is minimal (2 bytes average)

### 3. Required Modifications to Include Documents

#### A. View Modification
```sql
-- Modified deal_detail_raw view to include documents
CREATE OR REPLACE VIEW ui.deal_detail_raw AS
SELECT 
    dd.deal_id,
    dd.deal_data_json,
    jsonb_build_object(
        'entities', (dd.deal_data_json -> 'entities'::text), 
        'relationships', (dd.deal_data_json -> 'relationships'::text), 
        'deal_context', (dd.deal_data_json -> 'deal_context'::text), 
        'confidence', (dd.deal_data_json -> 'confidence'::text), 
        'metadata', (dd.deal_data_json -> 'metadata'::text), 
        'associated_clients', dd.associated_clients_json,
        'documents', COALESCE(docs.documents_json, '[]'::jsonb)  -- NEW
    ) AS payload,
    dd.last_touch AS updated_at,
    dd.user_id,
    r.updated_at AS ready_updated_at,
    ((r.updated_at IS NULL) OR (dd.last_touch > r.updated_at)) AS needs_sync
FROM ui.deal_detail_view dd
LEFT JOIN ui.deal_detail_ready r ON (r.deal_id = dd.deal_id)
LEFT JOIN LATERAL (
    SELECT jsonb_agg(
        jsonb_build_object(
            'document_id', doc.document_id,
            'document_type', doc.document_type,
            'file_name', dm.metadata->>'file_name',
            'file_size', dm.metadata->>'file_size',
            'created_at', dm.created_at,
            'metadata', dm.metadata
        ) ORDER BY dm.created_at DESC
    ) as documents_json
    FROM documents.deal_documents doc
    JOIN documents.document_metadata dm ON dm.id = doc.document_id
    WHERE doc.deal_id = dd.deal_id
) docs ON true;
```

#### B. Pipeline Code Changes

1. **Update System Prompt** in `getSystemPromptForEntityType()`:
```typescript
// Add to DEAL_DETAIL prompt
DOCUMENTS EXTRACTION:
1. Process the documents array from the input payload
2. Transform each document into DocumentItemUI format:
   - fileName: Extract from metadata.file_name
   - fileSize: Format from metadata.file_size (e.g., "2.3 MB")
   - uploadedIso: Use created_at timestamp
   - url: Generate from document_id (e.g., /api/documents/{id})
3. Sort by uploadedIso descending (newest first)
4. Include all documents - do not filter or limit
```

2. **No Schema Changes Required** - The existing `DocumentItemSchema` in the UI types already supports the structure

### 4. Cost Analysis

#### Token Usage Impact

**Current State (without documents):**
- Average tokens per sync: ~500-1000 tokens
- Processing rate: 10 concurrent calls
- Model: gpt-4.1-mini

**With Documents Included:**
- Additional tokens per document: ~50-100 tokens
- Average 1 document per deal (current data)
- Worst case (5 documents): +250-500 tokens
- **Total estimated tokens**: 750-1500 per deal (50-150% increase)

#### Cost Calculation

Using OpenAI pricing for gpt-4o-mini (as of 2025):
- Input: $0.15 per 1M tokens
- Output: $0.60 per 1M tokens

**Current costs per 1000 syncs:**
- Input: ~1M tokens × $0.15 = $0.15
- Output: ~0.5M tokens × $0.60 = $0.30
- **Total: ~$0.45**

**With documents (average case):**
- Input: ~1.5M tokens × $0.15 = $0.225
- Output: ~0.75M tokens × $0.60 = $0.45
- **Total: ~$0.675 (50% increase)**

**With documents (worst case - 5 docs/deal):**
- Input: ~2.5M tokens × $0.15 = $0.375
- Output: ~1.25M tokens × $0.60 = $0.75
- **Total: ~$1.125 (150% increase)**

### 5. Performance Implications

#### Positive:
- No additional API calls needed (documents included in initial fetch)
- Parallel processing maintains same concurrency
- Single transformation per deal (efficient)

#### Negative:
- Larger payload sizes increase network transfer time
- More tokens = slightly longer OpenAI processing time
- Materialized view refresh may be slightly slower

#### Mitigation Strategies:
1. **Limit document fields**: Only include essential metadata
2. **Document count cap**: Limit to top 10 most recent documents
3. **Lazy loading alternative**: Consider pagination for documents
4. **Caching**: Cache document transformations separately

### 6. Implementation Complexity

**Low Complexity:**
- Modify one view definition
- Update one prompt function
- No schema changes required
- No new API endpoints

**Time Estimate:** 2-4 hours including testing

### 7. Recommendations

**Proceed with Option A if:**
- Document count per deal remains low (1-3 average)
- Cost increase of 50-150% is acceptable
- Real-time document data in UI is critical
- Simplicity is prioritized over optimization

**Consider Option B/C if:**
- Document counts are high (>5 per deal average)
- Cost optimization is critical
- Documents can be loaded on-demand
- More complex but efficient solution is acceptable

### 8. Alternative Optimization

**Hybrid Approach:**
```sql
-- Include only document summary in sync
'documents_summary', jsonb_build_object(
    'count', COUNT(doc.document_id),
    'latest_upload', MAX(dm.created_at),
    'types', jsonb_agg(DISTINCT doc.document_type)
)
```

This provides document awareness without full data, reducing tokens by 80% while enabling smart UI decisions about when to fetch full document details.