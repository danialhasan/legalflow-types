// Generated file - do not modify directly

import type { Database, Json } from '../index';
export type DatabaseCamel = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  _InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  analysis: {
    Tables: {
      calendarEventCanonBlocks: {
        Row: {
          canonBlockId: string
          confidenceScore: number | null
          createdAt: string
          dealContextGraphId: string | null
          eventType: string
          googleCalendarEventId: string
          id: string
          updatedAt: string
        }
        Insert: {
          canonBlockId: string
          confidenceScore?: number | null
          createdAt?: string
          dealContextGraphId?: string | null
          eventType: string
          googleCalendarEventId: string
          id?: string
          updatedAt?: string
        }
        Update: {
          canonBlockId?: string
          confidenceScore?: number | null
          createdAt?: string
          dealContextGraphId?: string | null
          eventType?: string
          googleCalendarEventId?: string
          id?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "calendar_event_canon_blocks_canon_block_id_fkey"
            columns: ["canon_block_id"]
            isOneToOne: false
            referencedRelation: "canon_blocks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calendar_event_canon_blocks_canon_block_id_fkey"
            columns: ["canon_block_id"]
            isOneToOne: false
            referencedRelation: "deal_client_context_graphs_view"
            referencedColumns: ["canon_block_id"]
          },
          {
            foreignKeyName: "calendar_event_canon_blocks_deal_context_graph_id_fkey"
            columns: ["deal_context_graph_id"]
            isOneToOne: false
            referencedRelation: "deal_client_context_graphs_view"
            referencedColumns: ["deal_context_graph_id"]
          },
          {
            foreignKeyName: "calendar_event_canon_blocks_deal_context_graph_id_fkey"
            columns: ["deal_context_graph_id"]
            isOneToOne: false
            referencedRelation: "deal_context_graphs"
            referencedColumns: ["id"]
          },
        ]
      }
      canonBlocks: {
        Row: {
          addressTag: string | null
          createdAt: string
          dealContextGraphId: string | null
          embedding: string | null
          extractedInputId: string | null
          id: string
          sourceId: string | null
          summary: string
          tags: DatabaseCamel["analysis"]["Enums"]["canonBlockTag"][] | null
        }
        Insert: {
          addressTag?: string | null
          createdAt?: string
          dealContextGraphId?: string | null
          embedding?: string | null
          extractedInputId?: string | null
          id?: string
          sourceId?: string | null
          summary: string
          tags?: DatabaseCamel["analysis"]["Enums"]["canonBlockTag"][] | null
        }
        Update: {
          addressTag?: string | null
          createdAt?: string
          dealContextGraphId?: string | null
          embedding?: string | null
          extractedInputId?: string | null
          id?: string
          sourceId?: string | null
          summary?: string
          tags?: DatabaseCamel["analysis"]["Enums"]["canonBlockTag"][] | null
        }
        Relationships: [
          {
            foreignKeyName: "canon_blocks_deal_context_graph_id_fkey"
            columns: ["deal_context_graph_id"]
            isOneToOne: false
            referencedRelation: "deal_client_context_graphs_view"
            referencedColumns: ["deal_context_graph_id"]
          },
          {
            foreignKeyName: "canon_blocks_deal_context_graph_id_fkey"
            columns: ["deal_context_graph_id"]
            isOneToOne: false
            referencedRelation: "deal_context_graphs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "canon_blocks_extracted_input_id_fkey"
            columns: ["extracted_input_id"]
            isOneToOne: true
            referencedRelation: "extracted_inputs"
            referencedColumns: ["id"]
          },
        ]
      }
      clientContextGraphCanonBlocks: {
        Row: {
          canonBlockId: string
          clientContextGraphId: string
          id: string
          role: string | null
        }
        Insert: {
          canonBlockId: string
          clientContextGraphId: string
          id?: string
          role?: string | null
        }
        Update: {
          canonBlockId?: string
          clientContextGraphId?: string
          id?: string
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_context_graph_canon_blocks_canon_block_id_fkey"
            columns: ["canon_block_id"]
            isOneToOne: false
            referencedRelation: "canon_blocks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_context_graph_canon_blocks_canon_block_id_fkey"
            columns: ["canon_block_id"]
            isOneToOne: false
            referencedRelation: "deal_client_context_graphs_view"
            referencedColumns: ["canon_block_id"]
          },
          {
            foreignKeyName: "client_context_graph_canon_blocks_client_context_graph_id_fkey"
            columns: ["client_context_graph_id"]
            isOneToOne: false
            referencedRelation: "client_context_graphs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_context_graph_canon_blocks_client_context_graph_id_fkey"
            columns: ["client_context_graph_id"]
            isOneToOne: false
            referencedRelation: "deal_client_context_graphs_view"
            referencedColumns: ["client_context_graph_id"]
          },
        ]
      }
      clientContextGraphs: {
        Row: {
          createdAt: string | null
          enrichedExtractedData: Json | null
          id: string
          status: string | null
          summary: string | null
          summaryEmbedding: string | null
          updatedAt: string | null
          userId: string | null
        }
        Insert: {
          createdAt?: string | null
          enrichedExtractedData?: Json | null
          id?: string
          status?: string | null
          summary?: string | null
          summaryEmbedding?: string | null
          updatedAt?: string | null
          userId?: string | null
        }
        Update: {
          createdAt?: string | null
          enrichedExtractedData?: Json | null
          id?: string
          status?: string | null
          summary?: string | null
          summaryEmbedding?: string | null
          updatedAt?: string | null
          userId?: string | null
        }
        Relationships: []
      }
      consolidationAuditTrail: {
        Row: {
          action: string
          createdAt: string
          details: Json | null
          entityId: string | null
          entityType: string
          id: string
          sessionId: string
          timestamp: string
        }
        Insert: {
          action: string
          createdAt?: string
          details?: Json | null
          entityId?: string | null
          entityType: string
          id?: string
          sessionId: string
          timestamp?: string
        }
        Update: {
          action?: string
          createdAt?: string
          details?: Json | null
          entityId?: string | null
          entityType?: string
          id?: string
          sessionId?: string
          timestamp?: string
        }
        Relationships: [
          {
            foreignKeyName: "consolidation_audit_trail_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "consolidation_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      consolidationGraphRelationships: {
        Row: {
          createdAt: string
          id: string
          mergeStrategy: string | null
          metadata: Json | null
          relationshipType: string
          sessionId: string
          similarityScore: number | null
          sourceGraphId: string
          targetGraphId: string | null
        }
        Insert: {
          createdAt?: string
          id?: string
          mergeStrategy?: string | null
          metadata?: Json | null
          relationshipType: string
          sessionId: string
          similarityScore?: number | null
          sourceGraphId: string
          targetGraphId?: string | null
        }
        Update: {
          createdAt?: string
          id?: string
          mergeStrategy?: string | null
          metadata?: Json | null
          relationshipType?: string
          sessionId?: string
          similarityScore?: number | null
          sourceGraphId?: string
          targetGraphId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "consolidation_graph_relationships_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "consolidation_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "consolidation_graph_relationships_source_graph_id_fkey"
            columns: ["source_graph_id"]
            isOneToOne: false
            referencedRelation: "deal_client_context_graphs_view"
            referencedColumns: ["deal_context_graph_id"]
          },
          {
            foreignKeyName: "consolidation_graph_relationships_source_graph_id_fkey"
            columns: ["source_graph_id"]
            isOneToOne: false
            referencedRelation: "deal_context_graphs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "consolidation_graph_relationships_target_graph_id_fkey"
            columns: ["target_graph_id"]
            isOneToOne: false
            referencedRelation: "deal_client_context_graphs_view"
            referencedColumns: ["deal_context_graph_id"]
          },
          {
            foreignKeyName: "consolidation_graph_relationships_target_graph_id_fkey"
            columns: ["target_graph_id"]
            isOneToOne: false
            referencedRelation: "deal_context_graphs"
            referencedColumns: ["id"]
          },
        ]
      }
      consolidationPerformanceMetrics: {
        Row: {
          createdAt: string
          durationMs: number
          errorCount: number | null
          id: string
          memoryUsageMb: number | null
          metadata: Json | null
          operation: string
          phase: string
          recordsProcessed: number | null
          sessionId: string
          timestamp: string
        }
        Insert: {
          createdAt?: string
          durationMs: number
          errorCount?: number | null
          id?: string
          memoryUsageMb?: number | null
          metadata?: Json | null
          operation: string
          phase: string
          recordsProcessed?: number | null
          sessionId: string
          timestamp?: string
        }
        Update: {
          createdAt?: string
          durationMs?: number
          errorCount?: number | null
          id?: string
          memoryUsageMb?: number | null
          metadata?: Json | null
          operation?: string
          phase?: string
          recordsProcessed?: number | null
          sessionId?: string
          timestamp?: string
        }
        Relationships: [
          {
            foreignKeyName: "consolidation_performance_metrics_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "consolidation_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      consolidationSessions: {
        Row: {
          buildingAddressIds: string[]
          completedAt: string | null
          contextGraphIds: string[]
          createdAt: string
          errorMessage: string | null
          id: string
          initiatedAt: string
          initiatedBy: string
          performanceMetrics: Json | null
          startedAt: string | null
          status: string
          unitAddressIds: string[]
          updatedAt: string
          userId: string
        }
        Insert: {
          buildingAddressIds?: string[]
          completedAt?: string | null
          contextGraphIds?: string[]
          createdAt?: string
          errorMessage?: string | null
          id?: string
          initiatedAt?: string
          initiatedBy: string
          performanceMetrics?: Json | null
          startedAt?: string | null
          status: string
          unitAddressIds?: string[]
          updatedAt?: string
          userId: string
        }
        Update: {
          buildingAddressIds?: string[]
          completedAt?: string | null
          contextGraphIds?: string[]
          createdAt?: string
          errorMessage?: string | null
          id?: string
          initiatedAt?: string
          initiatedBy?: string
          performanceMetrics?: Json | null
          startedAt?: string | null
          status?: string
          unitAddressIds?: string[]
          updatedAt?: string
          userId?: string
        }
        Relationships: []
      }
      dealContextGraphCanonBlocks: {
        Row: {
          canonBlockId: string
          dealContextGraphId: string
          id: string
        }
        Insert: {
          canonBlockId: string
          dealContextGraphId: string
          id: string
        }
        Update: {
          canonBlockId?: string
          dealContextGraphId?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "deal_context_graph_canon_blocks_canon_block_id_fkey"
            columns: ["canon_block_id"]
            isOneToOne: false
            referencedRelation: "canon_blocks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deal_context_graph_canon_blocks_canon_block_id_fkey"
            columns: ["canon_block_id"]
            isOneToOne: false
            referencedRelation: "deal_client_context_graphs_view"
            referencedColumns: ["canon_block_id"]
          },
          {
            foreignKeyName: "deal_context_graph_canon_blocks_deal_context_graph_id_fkey"
            columns: ["deal_context_graph_id"]
            isOneToOne: false
            referencedRelation: "deal_client_context_graphs_view"
            referencedColumns: ["deal_context_graph_id"]
          },
          {
            foreignKeyName: "deal_context_graph_canon_blocks_deal_context_graph_id_fkey"
            columns: ["deal_context_graph_id"]
            isOneToOne: false
            referencedRelation: "deal_context_graphs"
            referencedColumns: ["id"]
          },
        ]
      }
      dealContextGraphs: {
        Row: {
          buildingAddressId: string | null
          calendarIntelligence: Json | null
          consolidationInProgress: boolean | null
          consolidationLockId: string | null
          consolidationSessionId: string | null
          consolidationStartedAt: string | null
          createdAt: string
          enrichedExtractedData: Json | null
          entityLedger: Json | null
          id: string
          ledgerUpdateInProgress: boolean | null
          ledgerUpdateStartedAt: string | null
          status: string | null
          summary: string | null
          summaryEmbedding: string | null
          supersededBy: string | null
          unitAddressId: string | null
          updatedAt: string
          userId: string | null
        }
        Insert: {
          buildingAddressId?: string | null
          calendarIntelligence?: Json | null
          consolidationInProgress?: boolean | null
          consolidationLockId?: string | null
          consolidationSessionId?: string | null
          consolidationStartedAt?: string | null
          createdAt?: string
          enrichedExtractedData?: Json | null
          entityLedger?: Json | null
          id?: string
          ledgerUpdateInProgress?: boolean | null
          ledgerUpdateStartedAt?: string | null
          status?: string | null
          summary?: string | null
          summaryEmbedding?: string | null
          supersededBy?: string | null
          unitAddressId?: string | null
          updatedAt?: string
          userId?: string | null
        }
        Update: {
          buildingAddressId?: string | null
          calendarIntelligence?: Json | null
          consolidationInProgress?: boolean | null
          consolidationLockId?: string | null
          consolidationSessionId?: string | null
          consolidationStartedAt?: string | null
          createdAt?: string
          enrichedExtractedData?: Json | null
          entityLedger?: Json | null
          id?: string
          ledgerUpdateInProgress?: boolean | null
          ledgerUpdateStartedAt?: string | null
          status?: string | null
          summary?: string | null
          summaryEmbedding?: string | null
          supersededBy?: string | null
          unitAddressId?: string | null
          updatedAt?: string
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "deal_context_graphs_consolidation_session_id_fkey"
            columns: ["consolidation_session_id"]
            isOneToOne: false
            referencedRelation: "consolidation_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      extractedInputs: {
        Row: {
          createdAt: string
          extractedData: Json | null
          id: string
          modelVersion: string | null
          processingTimeMs: number | null
          sourceId: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          extractedData?: Json | null
          id?: string
          modelVersion?: string | null
          processingTimeMs?: number | null
          sourceId: string
          updatedAt?: string
        }
        Update: {
          createdAt?: string
          extractedData?: Json | null
          id?: string
          modelVersion?: string | null
          processingTimeMs?: number | null
          sourceId?: string
          updatedAt?: string
        }
        Relationships: []
      }
      mergeLogs: {
        Row: {
          createdAt: string | null
          decision: string | null
          id: string
          loserId: string | null
          rationale: string | null
          score: number | null
          survivorId: string | null
        }
        Insert: {
          createdAt?: string | null
          decision?: string | null
          id?: string
          loserId?: string | null
          rationale?: string | null
          score?: number | null
          survivorId?: string | null
        }
        Update: {
          createdAt?: string | null
          decision?: string | null
          id?: string
          loserId?: string | null
          rationale?: string | null
          score?: number | null
          survivorId?: string | null
        }
        Relationships: []
      }
      processedCalendarEvents: {
        Row: {
          createdAt: string
          eventId: string
          extractedData: Json
          googleEventId: string
          id: string
          identifiedClients: Json | null
          processedAt: string
          userId: string
        }
        Insert: {
          createdAt?: string
          eventId: string
          extractedData: Json
          googleEventId: string
          id?: string
          identifiedClients?: Json | null
          processedAt: string
          userId: string
        }
        Update: {
          createdAt?: string
          eventId?: string
          extractedData?: Json
          googleEventId?: string
          id?: string
          identifiedClients?: Json | null
          processedAt?: string
          userId?: string
        }
        Relationships: []
      }
      processedEmailThreads: {
        Row: {
          createdAt: string
          extractedData: Json
          id: string
          processedAt: string
          threadId: string
          userId: string
        }
        Insert: {
          createdAt?: string
          extractedData: Json
          id?: string
          processedAt: string
          threadId: string
          userId: string
        }
        Update: {
          createdAt?: string
          extractedData?: Json
          id?: string
          processedAt?: string
          threadId?: string
          userId?: string
        }
        Relationships: []
      }
      processedEmails: {
        Row: {
          createdAt: string
          emailId: string
          extractedData: Json
          id: string
          identifiedClients: Json | null
          messageId: string
          processedAt: string
          userId: string
        }
        Insert: {
          createdAt?: string
          emailId: string
          extractedData: Json
          id?: string
          identifiedClients?: Json | null
          messageId: string
          processedAt: string
          userId: string
        }
        Update: {
          createdAt?: string
          emailId?: string
          extractedData?: Json
          id?: string
          identifiedClients?: Json | null
          messageId?: string
          processedAt?: string
          userId?: string
        }
        Relationships: []
      }
      processedEventSeries: {
        Row: {
          createdAt: string
          extractedData: Json
          id: string
          processedAt: string
          seriesId: string
          userId: string
        }
        Insert: {
          createdAt?: string
          extractedData: Json
          id?: string
          processedAt: string
          seriesId: string
          userId: string
        }
        Update: {
          createdAt?: string
          extractedData?: Json
          id?: string
          processedAt?: string
          seriesId?: string
          userId?: string
        }
        Relationships: []
      }
      unifiedAnalysisResults: {
        Row: {
          analysisResult: Json
          createdAt: string
          id: string
          processedAt: string
          userId: string
        }
        Insert: {
          analysisResult: Json
          createdAt?: string
          id?: string
          processedAt: string
          userId: string
        }
        Update: {
          analysisResult?: Json
          createdAt?: string
          id?: string
          processedAt?: string
          userId?: string
        }
        Relationships: []
      }
    }
    Views: {
      consolidationSummary: {
        Row: {
          consolidationCount: number | null
          consolidationDate: string | null
          detectionCount: number | null
          totalOperations: number | null
          uniqueSessions: number | null
        }
        Relationships: []
      }
      dealClientContextGraphsView: {
        Row: {
          canonBlockId: string | null
          canonBlockSummary: string | null
          clientContextGraphId: string | null
          clientSummary: string | null
          dealContextGraphId: string | null
          dealSummary: string | null
        }
        Relationships: []
      }
      dealTimelineView: {
        Row: {
          attendees: Json | null
          confidenceScore: number | null
          dealContextGraphId: string | null
          description: string | null
          eventId: string | null
          eventTime: string | null
          eventTitle: string | null
          eventType: string | null
          linkedAt: string | null
          location: string | null
          timelineType: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      calculateDealVelocity: {
        Args: { pDealId: string }
        Returns: {
          daysSinceFirstEvent: number
          totalEvents: number
          showingCount: number
          averageDaysBetweenEvents: number
          momentumScore: number
        }[]
      }
      calculateGraphOverlap: {
        Args: { pGraphId1: string; pGraphId2: string }
        Returns: Json
      }
      findGraphsByAddressIds: {
        Args: {
          pBuildingAddressIds: string[]
          pUnitAddressIds?: string[]
        }
        Returns: {
          graphId: string
          buildingAddressId: string
          unitAddressId: string
          userId: string
          createdAt: string
          updatedAt: string
        }[]
      }
      linkDealsToClientViaCanonBlock: {
        Args: { clientContextGraphId: string; canonBlockId: string }
        Returns: number
      }
      matchSimilarClientContextGraphs: {
        Args: { query: string; topK?: number; userId?: string }
        Returns: {
          clientContextGraphId: string
          summary: string
          score: number
        }[]
      }
      matchSimilarDealContextGraphs: {
        Args: { query: string; topK?: number; userId?: string }
        Returns: {
          dealContextGraphId: string
          summary: string
          score: number
        }[]
      }
      supersedeGraphs: {
        Args: {
          pSupersedingGraphId: string
          pSupersededGraphIds: string[]
        }
        Returns: boolean
      }
    }
    Enums: {
      canonBlockTag:
        | "client_message"
        | "broker_message"
        | "lead_introduction"
        | "follow_up_required"
        | "lease_application"
        | "purchase_offer"
        | "contract_addendum"
        | "condition_removal"
        | "deposit_confirmation"
        | "inspection_report"
        | "compliance_notice"
        | "showing_schedule"
        | "closing_schedule"
        | "milestone_reminder"
        | "deal_brief"
        | "negotiation_advice"
        | "risk_flag"
        | "client_education"
        | "network_insight"
        | "drip_campaign_step"
        | "voice_call_script"
        | "referral_request"
        | "other"
        | "calendar_showing"
        | "calendar_inspection"
        | "calendar_closing"
        | "calendar_client_meeting"
        | "calendar_deadline"
    }
    CompositeTypes: {
      extractedInputDataType: {
        entities: Json | null
        relationships: Json | null
        dealContext: Json | null
        confidence: Json | null
        metadata: Json | null
      }
      profileType: {
        fullName: string | null
        primaryAddress: string | null
        primaryPhoneNumber: string | null
        primaryEmail: string | null
      }
    }
  }
  assistant: {
    Tables: {
      agentRecommendations: {
        Row: {
          alternatives: Json | null
          clientId: string | null
          createdAt: string
          dealId: string | null
          dismissedAt: string | null
          dismissedByUserId: string | null
          dismissedReason: string | null
          editDelta: Json | null
          executedAt: string | null
          executedByUserId: string | null
          executionAttempts: number | null
          executionError: Json | null
          executionMetadata: Json | null
          executionStrategy: DatabaseCamel["assistant"]["Enums"]["recommendationExecutionStrategy"]
          executor: DatabaseCamel["assistant"]["Enums"]["recommendationExecutor"]
          fallbackUsed: boolean | null
          id: string
          lastExecutionAttemptAt: string | null
          messageTemplate: string | null
          originalPayload: Json | null
          params: Json | null
          payload: Json | null
          priority: number
          promptVersion: string | null
          qualityScores: Json | null
          reasoning: string
          selectionReason: string | null
          status: DatabaseCamel["assistant"]["Enums"]["recommendationStatus"]
          triggeredAt: string
          userFeedback: DatabaseCamel["assistant"]["Enums"]["userFeedback"] | null
          userId: string
        }
        Insert: {
          alternatives?: Json | null
          clientId?: string | null
          createdAt?: string
          dealId?: string | null
          dismissedAt?: string | null
          dismissedByUserId?: string | null
          dismissedReason?: string | null
          editDelta?: Json | null
          executedAt?: string | null
          executedByUserId?: string | null
          executionAttempts?: number | null
          executionError?: Json | null
          executionMetadata?: Json | null
          executionStrategy?: DatabaseCamel["assistant"]["Enums"]["recommendationExecutionStrategy"]
          executor: DatabaseCamel["assistant"]["Enums"]["recommendationExecutor"]
          fallbackUsed?: boolean | null
          id?: string
          lastExecutionAttemptAt?: string | null
          messageTemplate?: string | null
          originalPayload?: Json | null
          params?: Json | null
          payload?: Json | null
          priority: number
          promptVersion?: string | null
          qualityScores?: Json | null
          reasoning: string
          selectionReason?: string | null
          status?: DatabaseCamel["assistant"]["Enums"]["recommendationStatus"]
          triggeredAt?: string
          userFeedback?: DatabaseCamel["assistant"]["Enums"]["userFeedback"] | null
          userId: string
        }
        Update: {
          alternatives?: Json | null
          clientId?: string | null
          createdAt?: string
          dealId?: string | null
          dismissedAt?: string | null
          dismissedByUserId?: string | null
          dismissedReason?: string | null
          editDelta?: Json | null
          executedAt?: string | null
          executedByUserId?: string | null
          executionAttempts?: number | null
          executionError?: Json | null
          executionMetadata?: Json | null
          executionStrategy?: DatabaseCamel["assistant"]["Enums"]["recommendationExecutionStrategy"]
          executor?: DatabaseCamel["assistant"]["Enums"]["recommendationExecutor"]
          fallbackUsed?: boolean | null
          id?: string
          lastExecutionAttemptAt?: string | null
          messageTemplate?: string | null
          originalPayload?: Json | null
          params?: Json | null
          payload?: Json | null
          priority?: number
          promptVersion?: string | null
          qualityScores?: Json | null
          reasoning?: string
          selectionReason?: string | null
          status?: DatabaseCamel["assistant"]["Enums"]["recommendationStatus"]
          triggeredAt?: string
          userFeedback?: DatabaseCamel["assistant"]["Enums"]["userFeedback"] | null
          userId?: string
        }
        Relationships: []
      }
      agentRunSteps: {
        Row: {
          agentRunId: string
          completedAt: string | null
          errorMessage: string | null
          id: string
          inputJson: Json
          outputJson: Json | null
          startedAt: string
          stepName: string
        }
        Insert: {
          agentRunId: string
          completedAt?: string | null
          errorMessage?: string | null
          id?: string
          inputJson: Json
          outputJson?: Json | null
          startedAt?: string
          stepName: string
        }
        Update: {
          agentRunId?: string
          completedAt?: string | null
          errorMessage?: string | null
          id?: string
          inputJson?: Json
          outputJson?: Json | null
          startedAt?: string
          stepName?: string
        }
        Relationships: [
          {
            foreignKeyName: "agent_run_steps_agent_run_id_fkey"
            columns: ["agent_run_id"]
            isOneToOne: false
            referencedRelation: "agent_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      agentRuns: {
        Row: {
          agentName: string
          completedAt: string | null
          id: string
          metadata: Json | null
          startedAt: string
          status: string | null
          userId: string
        }
        Insert: {
          agentName: string
          completedAt?: string | null
          id?: string
          metadata?: Json | null
          startedAt?: string
          status?: string | null
          userId: string
        }
        Update: {
          agentName?: string
          completedAt?: string | null
          id?: string
          metadata?: Json | null
          startedAt?: string
          status?: string | null
          userId?: string
        }
        Relationships: []
      }
      agents: {
        Row: {
          assistantId: string
          createdAt: string
          id: string
          updatedAt: string
          userId: string
        }
        Insert: {
          assistantId: string
          createdAt?: string
          id?: string
          updatedAt?: string
          userId: string
        }
        Update: {
          assistantId?: string
          createdAt?: string
          id?: string
          updatedAt?: string
          userId?: string
        }
        Relationships: []
      }
      assistantSessions: {
        Row: {
          assistantMode: string
          completedAt: string | null
          createdAt: string | null
          id: string
          isCompleted: boolean | null
          lastResponseId: string | null
          onboardingCompleted: boolean | null
          onboardingData: Json | null
          onboardingStage: string | null
          openaiResponseId: string | null
          sessionMetadata: Json | null
          shouldTransitionToGeneral: boolean | null
          updatedAt: string | null
          userId: string
        }
        Insert: {
          assistantMode?: string
          completedAt?: string | null
          createdAt?: string | null
          id?: string
          isCompleted?: boolean | null
          lastResponseId?: string | null
          onboardingCompleted?: boolean | null
          onboardingData?: Json | null
          onboardingStage?: string | null
          openaiResponseId?: string | null
          sessionMetadata?: Json | null
          shouldTransitionToGeneral?: boolean | null
          updatedAt?: string | null
          userId: string
        }
        Update: {
          assistantMode?: string
          completedAt?: string | null
          createdAt?: string | null
          id?: string
          isCompleted?: boolean | null
          lastResponseId?: string | null
          onboardingCompleted?: boolean | null
          onboardingData?: Json | null
          onboardingStage?: string | null
          openaiResponseId?: string | null
          sessionMetadata?: Json | null
          shouldTransitionToGeneral?: boolean | null
          updatedAt?: string | null
          userId?: string
        }
        Relationships: []
      }
      conversationTurns: {
        Row: {
          assistantOutput: string
          assistantResponse: string | null
          createdAt: string | null
          id: string
          openaiResponseId: string | null
          previousResponseId: string | null
          processingTimeMs: number | null
          responseMetadata: Json | null
          sessionId: string
          tokenUsage: Json | null
          toolResults: Json | null
          toolsCalled: Json | null
          turnNumber: number
          userInput: string
          userMessage: string | null
        }
        Insert: {
          assistantOutput: string
          assistantResponse?: string | null
          createdAt?: string | null
          id?: string
          openaiResponseId?: string | null
          previousResponseId?: string | null
          processingTimeMs?: number | null
          responseMetadata?: Json | null
          sessionId: string
          tokenUsage?: Json | null
          toolResults?: Json | null
          toolsCalled?: Json | null
          turnNumber: number
          userInput: string
          userMessage?: string | null
        }
        Update: {
          assistantOutput?: string
          assistantResponse?: string | null
          createdAt?: string | null
          id?: string
          openaiResponseId?: string | null
          previousResponseId?: string | null
          processingTimeMs?: number | null
          responseMetadata?: Json | null
          sessionId?: string
          tokenUsage?: Json | null
          toolResults?: Json | null
          toolsCalled?: Json | null
          turnNumber?: number
          userInput?: string
          userMessage?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "conversation_turns_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "assistant_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      conversations: {
        Row: {
          createdAt: string
          documents: string[] | null
          groupId: string | null
          id: string
          retrievedChunks: Json[] | null
          threadId: string | null
          title: string | null
          userId: string | null
        }
        Insert: {
          createdAt?: string
          documents?: string[] | null
          groupId?: string | null
          id?: string
          retrievedChunks?: Json[] | null
          threadId?: string | null
          title?: string | null
          userId?: string | null
        }
        Update: {
          createdAt?: string
          documents?: string[] | null
          groupId?: string | null
          id?: string
          retrievedChunks?: Json[] | null
          threadId?: string | null
          title?: string | null
          userId?: string | null
        }
        Relationships: []
      }
      interactionTrackingEvents: {
        Row: {
          competingRecommendations: number | null
          confidenceScore: number | null
          createdAt: string
          dwellTime: number | null
          editDepth: DatabaseCamel["assistant"]["Enums"]["editDepth"] | null
          entityId: string
          entityType: DatabaseCamel["assistant"]["Enums"]["entityType"]
          eventId: string
          fieldsModified: string[] | null
          id: string
          interactionType: DatabaseCamel["assistant"]["Enums"]["interactionType"]
          metadata: Json | null
          previousAction: string | null
          priority: number | null
          recommendationId: string | null
          recommendationType:
            | DatabaseCamel["assistant"]["Enums"]["recommendationType"]
            | null
          scrollDepth: number | null
          sessionActivity: string | null
          sessionId: string
          subsequentAction: string | null
          surface: DatabaseCamel["assistant"]["Enums"]["uiSurface"]
          timeInView: number | null
          timeToAction: number | null
          timestamp: string
          updatedAt: string
          userId: string
        }
        Insert: {
          competingRecommendations?: number | null
          confidenceScore?: number | null
          createdAt?: string
          dwellTime?: number | null
          editDepth?: DatabaseCamel["assistant"]["Enums"]["editDepth"] | null
          entityId: string
          entityType: DatabaseCamel["assistant"]["Enums"]["entityType"]
          eventId?: string
          fieldsModified?: string[] | null
          id?: string
          interactionType: DatabaseCamel["assistant"]["Enums"]["interactionType"]
          metadata?: Json | null
          previousAction?: string | null
          priority?: number | null
          recommendationId?: string | null
          recommendationType?:
            | DatabaseCamel["assistant"]["Enums"]["recommendationType"]
            | null
          scrollDepth?: number | null
          sessionActivity?: string | null
          sessionId: string
          subsequentAction?: string | null
          surface: DatabaseCamel["assistant"]["Enums"]["uiSurface"]
          timeInView?: number | null
          timeToAction?: number | null
          timestamp?: string
          updatedAt?: string
          userId: string
        }
        Update: {
          competingRecommendations?: number | null
          confidenceScore?: number | null
          createdAt?: string
          dwellTime?: number | null
          editDepth?: DatabaseCamel["assistant"]["Enums"]["editDepth"] | null
          entityId?: string
          entityType?: DatabaseCamel["assistant"]["Enums"]["entityType"]
          eventId?: string
          fieldsModified?: string[] | null
          id?: string
          interactionType?: DatabaseCamel["assistant"]["Enums"]["interactionType"]
          metadata?: Json | null
          previousAction?: string | null
          priority?: number | null
          recommendationId?: string | null
          recommendationType?:
            | DatabaseCamel["assistant"]["Enums"]["recommendationType"]
            | null
          scrollDepth?: number | null
          sessionActivity?: string | null
          sessionId?: string
          subsequentAction?: string | null
          surface?: DatabaseCamel["assistant"]["Enums"]["uiSurface"]
          timeInView?: number | null
          timeToAction?: number | null
          timestamp?: string
          updatedAt?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "interaction_tracking_events_recommendation_id_fkey"
            columns: ["recommendation_id"]
            isOneToOne: false
            referencedRelation: "agent_recommendations"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          content: string | null
          context: Json | null
          conversationId: string | null
          createdAt: string
          followUpQuestions: Json | null
          id: string
          role: string | null
          threadId: string | null
          userId: string | null
        }
        Insert: {
          content?: string | null
          context?: Json | null
          conversationId?: string | null
          createdAt?: string
          followUpQuestions?: Json | null
          id?: string
          role?: string | null
          threadId?: string | null
          userId?: string | null
        }
        Update: {
          content?: string | null
          context?: Json | null
          conversationId?: string | null
          createdAt?: string
          followUpQuestions?: Json | null
          id?: string
          role?: string | null
          threadId?: string | null
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      recommendationAnalytics: {
        Row: {
          candidatesGenerated: number
          clientId: string | null
          createdAt: string | null
          dealId: string | null
          effectivenessScore: number | null
          id: string
          qualityScores: Json
          selectedCandidateRank: number
          selectionCriteria: Json
          sessionId: string
          timeToActionMs: number | null
          updatedAt: string | null
          userAction: string | null
          userId: string
        }
        Insert: {
          candidatesGenerated: number
          clientId?: string | null
          createdAt?: string | null
          dealId?: string | null
          effectivenessScore?: number | null
          id?: string
          qualityScores: Json
          selectedCandidateRank: number
          selectionCriteria: Json
          sessionId: string
          timeToActionMs?: number | null
          updatedAt?: string | null
          userAction?: string | null
          userId: string
        }
        Update: {
          candidatesGenerated?: number
          clientId?: string | null
          createdAt?: string | null
          dealId?: string | null
          effectivenessScore?: number | null
          id?: string
          qualityScores?: Json
          selectedCandidateRank?: number
          selectionCriteria?: Json
          sessionId?: string
          timeToActionMs?: number | null
          updatedAt?: string | null
          userAction?: string | null
          userId?: string
        }
        Relationships: []
      }
      recommendationContextLinks: {
        Row: {
          createdAt: string | null
          id: string
          notes: string | null
          recommendationId: string
          sourceId: string
          sourceType: DatabaseCamel["assistant"]["Enums"]["contextSourceType"]
          weight: number | null
        }
        Insert: {
          createdAt?: string | null
          id?: string
          notes?: string | null
          recommendationId: string
          sourceId: string
          sourceType: DatabaseCamel["assistant"]["Enums"]["contextSourceType"]
          weight?: number | null
        }
        Update: {
          createdAt?: string | null
          id?: string
          notes?: string | null
          recommendationId?: string
          sourceId?: string
          sourceType?: DatabaseCamel["assistant"]["Enums"]["contextSourceType"]
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "recommendation_context_links_recommendation_id_fkey"
            columns: ["recommendation_id"]
            isOneToOne: false
            referencedRelation: "agent_recommendations"
            referencedColumns: ["id"]
          },
        ]
      }
      recommendationExecutionHistory: {
        Row: {
          actionType: string
          createdAt: string
          errorDetails: Json | null
          executionDurationMs: number | null
          executionMetadata: Json | null
          executorId: string | null
          executorType: string | null
          id: string
          recommendationId: string
          statusFrom: DatabaseCamel["assistant"]["Enums"]["recommendationStatus"]
          statusTo: DatabaseCamel["assistant"]["Enums"]["recommendationStatus"]
          userId: string
        }
        Insert: {
          actionType: string
          createdAt?: string
          errorDetails?: Json | null
          executionDurationMs?: number | null
          executionMetadata?: Json | null
          executorId?: string | null
          executorType?: string | null
          id?: string
          recommendationId: string
          statusFrom: DatabaseCamel["assistant"]["Enums"]["recommendationStatus"]
          statusTo: DatabaseCamel["assistant"]["Enums"]["recommendationStatus"]
          userId: string
        }
        Update: {
          actionType?: string
          createdAt?: string
          errorDetails?: Json | null
          executionDurationMs?: number | null
          executionMetadata?: Json | null
          executorId?: string | null
          executorType?: string | null
          id?: string
          recommendationId?: string
          statusFrom?: DatabaseCamel["assistant"]["Enums"]["recommendationStatus"]
          statusTo?: DatabaseCamel["assistant"]["Enums"]["recommendationStatus"]
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "recommendation_execution_history_recommendation_id_fkey"
            columns: ["recommendation_id"]
            isOneToOne: false
            referencedRelation: "agent_recommendations"
            referencedColumns: ["id"]
          },
        ]
      }
      toolExecutions: {
        Row: {
          createdAt: string | null
          errorMessage: string | null
          executionTimeMs: number | null
          id: string
          sessionId: string
          status: string
          toolName: string
          toolParameters: Json
          toolResult: Json | null
          turnId: string | null
        }
        Insert: {
          createdAt?: string | null
          errorMessage?: string | null
          executionTimeMs?: number | null
          id?: string
          sessionId: string
          status: string
          toolName: string
          toolParameters: Json
          toolResult?: Json | null
          turnId?: string | null
        }
        Update: {
          createdAt?: string | null
          errorMessage?: string | null
          executionTimeMs?: number | null
          id?: string
          sessionId?: string
          status?: string
          toolName?: string
          toolParameters?: Json
          toolResult?: Json | null
          turnId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tool_executions_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "assistant_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tool_executions_turn_id_fkey"
            columns: ["turn_id"]
            isOneToOne: false
            referencedRelation: "conversation_turns"
            referencedColumns: ["id"]
          },
        ]
      }
      userAssistantProfiles: {
        Row: {
          conversationSummary: string | null
          createdAt: string | null
          displayName: string | null
          enabledTools: string[] | null
          id: string
          onboardingCompleted: boolean | null
          onboardingData: Json | null
          onboardingStage: string | null
          personalityPreferences: Json | null
          preferences: Json | null
          profileData: Json | null
          toolPermissions: Json | null
          updatedAt: string | null
          userId: string
          userPreferences: Json | null
          version: number | null
          workflowContext: Json | null
        }
        Insert: {
          conversationSummary?: string | null
          createdAt?: string | null
          displayName?: string | null
          enabledTools?: string[] | null
          id?: string
          onboardingCompleted?: boolean | null
          onboardingData?: Json | null
          onboardingStage?: string | null
          personalityPreferences?: Json | null
          preferences?: Json | null
          profileData?: Json | null
          toolPermissions?: Json | null
          updatedAt?: string | null
          userId: string
          userPreferences?: Json | null
          version?: number | null
          workflowContext?: Json | null
        }
        Update: {
          conversationSummary?: string | null
          createdAt?: string | null
          displayName?: string | null
          enabledTools?: string[] | null
          id?: string
          onboardingCompleted?: boolean | null
          onboardingData?: Json | null
          onboardingStage?: string | null
          personalityPreferences?: Json | null
          preferences?: Json | null
          profileData?: Json | null
          toolPermissions?: Json | null
          updatedAt?: string | null
          userId?: string
          userPreferences?: Json | null
          version?: number | null
          workflowContext?: Json | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      insertInteractionTrackingEvent: {
        Args: {
          pEventId: string
          pSessionId: string
          pTimestamp: string
          pUserId: string
          pEntityType: DatabaseCamel["assistant"]["Enums"]["entityType"]
          pEntityId: string
          pInteractionType: DatabaseCamel["assistant"]["Enums"]["interactionType"]
          pSurface: DatabaseCamel["assistant"]["Enums"]["uiSurface"]
          pRecommendationId: string
          pRecommendationType: DatabaseCamel["assistant"]["Enums"]["recommendationType"]
          pPriority: number
          pConfidenceScore: number
          pFieldsModified: string[]
          pEditDepth: DatabaseCamel["assistant"]["Enums"]["editDepth"]
          pTimeInView: number
          pTimeToAction: number
          pScrollDepth: number
          pDwellTime: number
          pCompetingRecommendations: number
          pPreviousAction: string
          pSubsequentAction: string
          pSessionActivity: string
          pMetadata: Json
        }
        Returns: string
      }
    }
    Enums: {
      contextSourceType:
        | "canon_block"
        | "extracted_input"
        | "email"
        | "calendar_event"
        | "document"
        | "other"
      editDepth: "minor" | "major" | "complete_rewrite"
      entityType: "deal" | "client" | "document"
      interactionType:
        | "accepted"
        | "edited_then_accepted"
        | "dismissed"
        | "flagged"
        | "deferred"
        | "viewed_from_card"
        | "viewed_from_list"
        | "viewed_no_action"
        | "hovered"
        | "edit_in_progress"
        | "edit_abandoned"
        | "manual_action_before_rec"
        | "status_changed_vs_ai"
        | "recommendations_ignored"
        | "alternative_path_taken"
        | "recommendations_displayed"
      recommendationExecutionStrategy:
        | "manual"
        | "automatic"
        | "informational"
      recommendationExecutor:
        | "send_email"
        | "schedule_calendar"
        | "create_task"
        | "post_crm_note"
      recommendationStatus:
        | "pending"
        | "executing"
        | "executed"
        | "failed"
        | "dismissed"
      recommendationType: "email" | "call" | "document" | "status_change"
      uiSurface: "modal" | "card" | "list" | "focus_view" | "manual"
      userFeedback: "accepted" | "edited" | "dismissed" | "flagged"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  compliance: {
    Tables: {
      citations: {
        Row: {
          bbox: Json
          citationNumber: number
          content: string
          createdAt: string
          docMetadataId: string
          documentName: string | null
          id: string
          messageId: string
          pageNumber: number
        }
        Insert: {
          bbox: Json
          citationNumber: number
          content: string
          createdAt?: string
          docMetadataId: string
          documentName?: string | null
          id?: string
          messageId: string
          pageNumber: number
        }
        Update: {
          bbox?: Json
          citationNumber?: number
          content?: string
          createdAt?: string
          docMetadataId?: string
          documentName?: string | null
          id?: string
          messageId?: string
          pageNumber?: number
        }
        Relationships: []
      }
      complianceReports: {
        Row: {
          createdAt: string
          dateGenerated: string
          docMetadataId: string
          documentName: string
          findings: Json
          id: string
          recommendations: Json
          reportUrl: string | null
          status: string
          updatedAt: string
          userId: string
        }
        Insert: {
          createdAt?: string
          dateGenerated?: string
          docMetadataId: string
          documentName: string
          findings?: Json
          id?: string
          recommendations?: Json
          reportUrl?: string | null
          status: string
          updatedAt?: string
          userId: string
        }
        Update: {
          createdAt?: string
          dateGenerated?: string
          docMetadataId?: string
          documentName?: string
          findings?: Json
          id?: string
          recommendations?: Json
          reportUrl?: string | null
          status?: string
          updatedAt?: string
          userId?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  core: {
    Tables: {
      betaSignups: {
        Row: {
          createdAt: string
          email: string
          id: string
          payload: Json | null
        }
        Insert: {
          createdAt?: string
          email: string
          id?: string
          payload?: Json | null
        }
        Update: {
          createdAt?: string
          email?: string
          id?: string
          payload?: Json | null
        }
        Relationships: []
      }
      clientTypes: {
        Row: {
          createdAt: string
          deletedAt: string | null
          id: string
          isDeleted: boolean
          label: string
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          id?: string
          isDeleted?: boolean
          label: string
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          id?: string
          isDeleted?: boolean
          label?: string
        }
        Relationships: []
      }
      consolidationLocks: {
        Row: {
          acquiredAt: string
          createdAt: string
          expiresAt: string
          graphIds: string[]
          id: string
          lockKey: string
          metadata: Json | null
          sessionId: string
          workerId: string | null
        }
        Insert: {
          acquiredAt?: string
          createdAt?: string
          expiresAt: string
          graphIds?: string[]
          id?: string
          lockKey: string
          metadata?: Json | null
          sessionId: string
          workerId?: string | null
        }
        Update: {
          acquiredAt?: string
          createdAt?: string
          expiresAt?: string
          graphIds?: string[]
          id?: string
          lockKey?: string
          metadata?: Json | null
          sessionId?: string
          workerId?: string | null
        }
        Relationships: []
      }
      consolidationRecoveryLog: {
        Row: {
          createdAt: string
          graphIds: string[]
          id: string
          lockId: string
          metadata: Json | null
          recoveryAction: string
          recoveryReason: string
        }
        Insert: {
          createdAt?: string
          graphIds?: string[]
          id?: string
          lockId: string
          metadata?: Json | null
          recoveryAction: string
          recoveryReason: string
        }
        Update: {
          createdAt?: string
          graphIds?: string[]
          id?: string
          lockId?: string
          metadata?: Json | null
          recoveryAction?: string
          recoveryReason?: string
        }
        Relationships: []
      }
      feedbackReports: {
        Row: {
          createdAt: string
          id: string
          kind: string
          payload: Json
          resolved: boolean | null
          resolvedAt: string | null
          screenshotId: string | null
          userId: string | null
        }
        Insert: {
          createdAt?: string
          id?: string
          kind?: string
          payload: Json
          resolved?: boolean | null
          resolvedAt?: string | null
          screenshotId?: string | null
          userId?: string | null
        }
        Update: {
          createdAt?: string
          id?: string
          kind?: string
          payload?: Json
          resolved?: boolean | null
          resolvedAt?: string | null
          screenshotId?: string | null
          userId?: string | null
        }
        Relationships: []
      }
      graphLocks: {
        Row: {
          acquiredAt: string
          createdAt: string
          expiresAt: string
          graphIds: string[]
          id: string
          lockId: string
          lockType: string
          metadata: Json | null
          status: string
          workerId: string | null
        }
        Insert: {
          acquiredAt?: string
          createdAt?: string
          expiresAt: string
          graphIds?: string[]
          id?: string
          lockId: string
          lockType: string
          metadata?: Json | null
          status?: string
          workerId?: string | null
        }
        Update: {
          acquiredAt?: string
          createdAt?: string
          expiresAt?: string
          graphIds?: string[]
          id?: string
          lockId?: string
          lockType?: string
          metadata?: Json | null
          status?: string
          workerId?: string | null
        }
        Relationships: []
      }
      jobs: {
        Row: {
          backoffUntil: string | null
          completedAt: string | null
          createdAt: string
          error: string | null
          id: string
          maxRetries: number
          origin: string | null
          params: Json
          priority: string
          result: Json | null
          retryCount: number
          startedAt: string | null
          status: string
          tags: string[] | null
          type: string
          updatedAt: string
          workerId: string | null
        }
        Insert: {
          backoffUntil?: string | null
          completedAt?: string | null
          createdAt?: string
          error?: string | null
          id?: string
          maxRetries?: number
          origin?: string | null
          params: Json
          priority?: string
          result?: Json | null
          retryCount?: number
          startedAt?: string | null
          status: string
          tags?: string[] | null
          type: string
          updatedAt?: string
          workerId?: string | null
        }
        Update: {
          backoffUntil?: string | null
          completedAt?: string | null
          createdAt?: string
          error?: string | null
          id?: string
          maxRetries?: number
          origin?: string | null
          params?: Json
          priority?: string
          result?: Json | null
          retryCount?: number
          startedAt?: string | null
          status?: string
          tags?: string[] | null
          type?: string
          updatedAt?: string
          workerId?: string | null
        }
        Relationships: []
      }
      onboardingResumeTokens: {
        Row: {
          createdAt: string | null
          expiresAt: string
          id: string
          token: string
          userId: string
        }
        Insert: {
          createdAt?: string | null
          expiresAt: string
          id?: string
          token: string
          userId: string
        }
        Update: {
          createdAt?: string | null
          expiresAt?: string
          id?: string
          token?: string
          userId?: string
        }
        Relationships: []
      }
      sources: {
        Row: {
          createdAt: string
          id: string
          type: DatabaseCamel["core"]["Enums"]["sourceType"]
          userId: string | null
        }
        Insert: {
          createdAt?: string
          id?: string
          type: DatabaseCamel["core"]["Enums"]["sourceType"]
          userId?: string | null
        }
        Update: {
          createdAt?: string
          id?: string
          type?: DatabaseCamel["core"]["Enums"]["sourceType"]
          userId?: string | null
        }
        Relationships: []
      }
      uiAgents: {
        Row: {
          agentName: string
          createdAt: string | null
          description: string | null
          id: string
          lastAction: string | null
          lastActionAt: string | null
          linkedEntityId: string | null
          linkedEntityType: string | null
          metadata: Json | null
          role: string
          status: string
          updatedAt: string | null
          userId: string
        }
        Insert: {
          agentName: string
          createdAt?: string | null
          description?: string | null
          id?: string
          lastAction?: string | null
          lastActionAt?: string | null
          linkedEntityId?: string | null
          linkedEntityType?: string | null
          metadata?: Json | null
          role: string
          status?: string
          updatedAt?: string | null
          userId: string
        }
        Update: {
          agentName?: string
          createdAt?: string | null
          description?: string | null
          id?: string
          lastAction?: string | null
          lastActionAt?: string | null
          linkedEntityId?: string | null
          linkedEntityType?: string | null
          metadata?: Json | null
          role?: string
          status?: string
          updatedAt?: string | null
          userId?: string
        }
        Relationships: []
      }
      userClientTypes: {
        Row: {
          clientTypeId: string
          createdAt: string
          userId: string
        }
        Insert: {
          clientTypeId: string
          createdAt?: string
          userId: string
        }
        Update: {
          clientTypeId?: string
          createdAt?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_client_types_client_type_id_fkey"
            columns: ["client_type_id"]
            isOneToOne: false
            referencedRelation: "client_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_client_types_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_metadata"
            referencedColumns: ["user_id"]
          },
        ]
      }
      userMetadata: {
        Row: {
          createdAt: string
          crmId: string | null
          email: string | null
          googleIntegrated: boolean | null
          onboardingCompletedAt: string | null
          onboardingStep: string | null
          phoneNumber: string | null
          phoneVerified: boolean | null
          simulationCompleted: boolean | null
          userId: string
        }
        Insert: {
          createdAt?: string
          crmId?: string | null
          email?: string | null
          googleIntegrated?: boolean | null
          onboardingCompletedAt?: string | null
          onboardingStep?: string | null
          phoneNumber?: string | null
          phoneVerified?: boolean | null
          simulationCompleted?: boolean | null
          userId: string
        }
        Update: {
          createdAt?: string
          crmId?: string | null
          email?: string | null
          googleIntegrated?: boolean | null
          onboardingCompletedAt?: string | null
          onboardingStep?: string | null
          phoneNumber?: string | null
          phoneVerified?: boolean | null
          simulationCompleted?: boolean | null
          userId?: string
        }
        Relationships: []
      }
      userRankings: {
        Row: {
          createdAt: string
          entityId: string
          entityType: string
          id: string
          isPinned: boolean | null
          updatedAt: string
          userId: string
        }
        Insert: {
          createdAt?: string
          entityId: string
          entityType: string
          id?: string
          isPinned?: boolean | null
          updatedAt?: string
          userId: string
        }
        Update: {
          createdAt?: string
          entityId?: string
          entityType?: string
          id?: string
          isPinned?: boolean | null
          updatedAt?: string
          userId?: string
        }
        Relationships: []
      }
      userRecommendationPreferences: {
        Row: {
          alwaysShowAlternatives: boolean | null
          createdAt: string | null
          experienceLevel: string | null
          fatiguePauseUntil: string | null
          preferredDisplayLimit: number | null
          qualityWeightActionability: number | null
          qualityWeightRelevance: number | null
          qualityWeightUrgency: number | null
          updatedAt: string | null
          userId: string
        }
        Insert: {
          alwaysShowAlternatives?: boolean | null
          createdAt?: string | null
          experienceLevel?: string | null
          fatiguePauseUntil?: string | null
          preferredDisplayLimit?: number | null
          qualityWeightActionability?: number | null
          qualityWeightRelevance?: number | null
          qualityWeightUrgency?: number | null
          updatedAt?: string | null
          userId: string
        }
        Update: {
          alwaysShowAlternatives?: boolean | null
          createdAt?: string | null
          experienceLevel?: string | null
          fatiguePauseUntil?: string | null
          preferredDisplayLimit?: number | null
          qualityWeightActionability?: number | null
          qualityWeightRelevance?: number | null
          qualityWeightUrgency?: number | null
          updatedAt?: string | null
          userId?: string
        }
        Relationships: []
      }
      userSettings: {
        Row: {
          communicationStyle:
            | DatabaseCamel["core"]["Enums"]["communicationStyle"]
            | null
          createdAt: string
          firstName: string | null
          googleEmail: string | null
          id: string
          lastName: string | null
          location: string | null
          role: DatabaseCamel["core"]["Enums"]["agentRole"] | null
          specialNotes: string | null
          timezone: string | null
          updatedAt: string
          userId: string
          workSchedule: DatabaseCamel["core"]["Enums"]["workSchedule"] | null
        }
        Insert: {
          communicationStyle?:
            | DatabaseCamel["core"]["Enums"]["communicationStyle"]
            | null
          createdAt?: string
          firstName?: string | null
          googleEmail?: string | null
          id?: string
          lastName?: string | null
          location?: string | null
          role?: DatabaseCamel["core"]["Enums"]["agentRole"] | null
          specialNotes?: string | null
          timezone?: string | null
          updatedAt?: string
          userId: string
          workSchedule?: DatabaseCamel["core"]["Enums"]["workSchedule"] | null
        }
        Update: {
          communicationStyle?:
            | DatabaseCamel["core"]["Enums"]["communicationStyle"]
            | null
          createdAt?: string
          firstName?: string | null
          googleEmail?: string | null
          id?: string
          lastName?: string | null
          location?: string | null
          role?: DatabaseCamel["core"]["Enums"]["agentRole"] | null
          specialNotes?: string | null
          timezone?: string | null
          updatedAt?: string
          userId?: string
          workSchedule?: DatabaseCamel["core"]["Enums"]["workSchedule"] | null
        }
        Relationships: [
          {
            foreignKeyName: "user_settings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "user_metadata"
            referencedColumns: ["user_id"]
          },
        ]
      }
    }
    Views: {
      activeGraphLocks: {
        Row: {
          acquiredAt: string | null
          createdAt: string | null
          expiresAt: string | null
          expiryStatus: string | null
          graphCount: number | null
          graphIds: string[] | null
          id: string | null
          lockId: string | null
          lockType: string | null
          metadata: Json | null
          secondsUntilExpiry: number | null
          status: string | null
          workerId: string | null
        }
        Insert: {
          acquiredAt?: string | null
          createdAt?: string | null
          expiresAt?: string | null
          expiryStatus?: never
          graphCount?: never
          graphIds?: string[] | null
          id?: string | null
          lockId?: string | null
          lockType?: string | null
          metadata?: Json | null
          secondsUntilExpiry?: never
          status?: string | null
          workerId?: string | null
        }
        Update: {
          acquiredAt?: string | null
          createdAt?: string | null
          expiresAt?: string | null
          expiryStatus?: never
          graphCount?: never
          graphIds?: string[] | null
          id?: string | null
          lockId?: string | null
          lockType?: string | null
          metadata?: Json | null
          secondsUntilExpiry?: never
          status?: string | null
          workerId?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      acquireMultiGraphLock: {
        Args: {
          pSessionId: string
          pGraphIds: string[]
          pLockTimeoutSeconds?: number
        }
        Returns: Json
      }
      claimNextJob: {
        Args: Record<PropertyKey, never> | { workerId: string }
        Returns: {
          backoffUntil: string | null
          completedAt: string | null
          createdAt: string
          error: string | null
          id: string
          maxRetries: number
          origin: string | null
          params: Json
          priority: string
          result: Json | null
          retryCount: number
          startedAt: string | null
          status: string
          tags: string[] | null
          type: string
          updatedAt: string
          workerId: string | null
        }
      }
      cleanupExpiredConsolidationLocks: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      releaseMultiGraphLock: {
        Args: { pSessionId: string; pGraphIds: string[] }
        Returns: boolean
      }
      scheduleConsolidationCleanup: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      agentRole:
        | "realtor"
        | "leasing_agent"
        | "buyer_agent"
        | "listing_agent"
        | "admin"
        | "other"
      communicationStyle: "friendly" | "professional" | "direct" | "casual"
      sourceType: "email" | "document" | "calendar_event" | "sms"
      workSchedule:
        | "mornings"
        | "evenings"
        | "weekends"
        | "full_time"
        | "part_time"
        | "flexible"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  documents: {
    Tables: {
      dealDocuments: {
        Row: {
          dealId: string
          documentId: string
          documentType: string
          id: string
        }
        Insert: {
          dealId: string
          documentId: string
          documentType: string
          id?: string
        }
        Update: {
          dealId?: string
          documentId?: string
          documentType?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "deal_documents_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "document_metadata"
            referencedColumns: ["id"]
          },
        ]
      }
      documentChunks: {
        Row: {
          chunkContent: Json
          chunkrMetadata: Json | null
          createdAt: string
          documentId: string
          documentMetadataId: string
          id: string
        }
        Insert: {
          chunkContent: Json
          chunkrMetadata?: Json | null
          createdAt?: string
          documentId: string
          documentMetadataId: string
          id?: string
        }
        Update: {
          chunkContent?: Json
          chunkrMetadata?: Json | null
          createdAt?: string
          documentId?: string
          documentMetadataId?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "document_chunks_document_metadata_id_fkey"
            columns: ["document_metadata_id"]
            isOneToOne: false
            referencedRelation: "document_metadata"
            referencedColumns: ["id"]
          },
        ]
      }
      documentGroups: {
        Row: {
          clientId: string | null
          conversationId: string | null
          createdAt: string
          id: string
          metadata: Json | null
          name: string | null
          userId: string | null
        }
        Insert: {
          clientId?: string | null
          conversationId?: string | null
          createdAt?: string
          id?: string
          metadata?: Json | null
          name?: string | null
          userId?: string | null
        }
        Update: {
          clientId?: string | null
          conversationId?: string | null
          createdAt?: string
          id?: string
          metadata?: Json | null
          name?: string | null
          userId?: string | null
        }
        Relationships: []
      }
      documentMetadata: {
        Row: {
          classifications: string[] | null
          createdAt: string
          dealId: string | null
          dealName: string | null
          extractedData: Json | null
          groupId: string | null
          id: string
          metadata: Json | null
          sourceId: string | null
          status: string | null
          storageObjectId: string | null
          userId: string | null
        }
        Insert: {
          classifications?: string[] | null
          createdAt?: string
          dealId?: string | null
          dealName?: string | null
          extractedData?: Json | null
          groupId?: string | null
          id?: string
          metadata?: Json | null
          sourceId?: string | null
          status?: string | null
          storageObjectId?: string | null
          userId?: string | null
        }
        Update: {
          classifications?: string[] | null
          createdAt?: string
          dealId?: string | null
          dealName?: string | null
          extractedData?: Json | null
          groupId?: string | null
          id?: string
          metadata?: Json | null
          sourceId?: string | null
          status?: string | null
          storageObjectId?: string | null
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "document_metadata_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "document_groups"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  integrations: {
    Tables: {
      conversationMetadata: {
        Row: {
          conversationKey: string
          createdAt: string
          firstMessageAt: string
          id: string
          lastMessageAt: string
          messageCount: number | null
          metadata: Json | null
          platform: string
          unreadCount: number | null
          updatedAt: string
          userId: string
        }
        Insert: {
          conversationKey: string
          createdAt?: string
          firstMessageAt: string
          id?: string
          lastMessageAt: string
          messageCount?: number | null
          metadata?: Json | null
          platform?: string
          unreadCount?: number | null
          updatedAt?: string
          userId: string
        }
        Update: {
          conversationKey?: string
          createdAt?: string
          firstMessageAt?: string
          id?: string
          lastMessageAt?: string
          messageCount?: number | null
          metadata?: Json | null
          platform?: string
          unreadCount?: number | null
          updatedAt?: string
          userId?: string
        }
        Relationships: []
      }
      emailAttachments: {
        Row: {
          createdAt: string
          documentId: string
          emailId: string
          fileName: string
          gmailAttachmentId: string
          id: string
          mimeType: string
          publicUrl: string
          sourceId: string | null
          updatedAt: string
          userId: string
        }
        Insert: {
          createdAt?: string
          documentId: string
          emailId: string
          fileName: string
          gmailAttachmentId: string
          id?: string
          mimeType: string
          publicUrl: string
          sourceId?: string | null
          updatedAt?: string
          userId: string
        }
        Update: {
          createdAt?: string
          documentId?: string
          emailId?: string
          fileName?: string
          gmailAttachmentId?: string
          id?: string
          mimeType?: string
          publicUrl?: string
          sourceId?: string | null
          updatedAt?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_attachments_email_id_fkey"
            columns: ["email_id"]
            isOneToOne: false
            referencedRelation: "google_emails"
            referencedColumns: ["id"]
          },
        ]
      }
      googleCalendarEvents: {
        Row: {
          allDay: boolean | null
          attendees: Json | null
          calendarId: string
          createdAt: string
          description: string | null
          endTime: string
          eventId: string
          htmlLink: string | null
          id: string
          location: string | null
          metadata: Json | null
          recurringRule: string | null
          startTime: string
          status: string | null
          summary: string
          updatedAt: string
          userId: string
        }
        Insert: {
          allDay?: boolean | null
          attendees?: Json | null
          calendarId: string
          createdAt?: string
          description?: string | null
          endTime: string
          eventId: string
          htmlLink?: string | null
          id?: string
          location?: string | null
          metadata?: Json | null
          recurringRule?: string | null
          startTime: string
          status?: string | null
          summary: string
          updatedAt?: string
          userId: string
        }
        Update: {
          allDay?: boolean | null
          attendees?: Json | null
          calendarId?: string
          createdAt?: string
          description?: string | null
          endTime?: string
          eventId?: string
          htmlLink?: string | null
          id?: string
          location?: string | null
          metadata?: Json | null
          recurringRule?: string | null
          startTime?: string
          status?: string | null
          summary?: string
          updatedAt?: string
          userId?: string
        }
        Relationships: []
      }
      googleDataJobs: {
        Row: {
          completedAt: string | null
          createdAt: string
          error: string | null
          id: string
          jobType: string
          params: Json | null
          progress: number | null
          result: Json | null
          startedAt: string | null
          status: string
          updatedAt: string
          userId: string
        }
        Insert: {
          completedAt?: string | null
          createdAt?: string
          error?: string | null
          id?: string
          jobType: string
          params?: Json | null
          progress?: number | null
          result?: Json | null
          startedAt?: string | null
          status?: string
          updatedAt?: string
          userId: string
        }
        Update: {
          completedAt?: string | null
          createdAt?: string
          error?: string | null
          id?: string
          jobType?: string
          params?: Json | null
          progress?: number | null
          result?: Json | null
          startedAt?: string | null
          status?: string
          updatedAt?: string
          userId?: string
        }
        Relationships: []
      }
      googleEmails: {
        Row: {
          bccEmails: string[] | null
          bodyText: string | null
          ccEmails: string[] | null
          createdAt: string
          fromEmail: string
          gmailId: string
          hasAttachments: boolean | null
          id: string
          isImportant: boolean | null
          isRead: boolean | null
          labels: string[] | null
          metadata: Json | null
          receivedAt: string | null
          sentAt: string | null
          snippet: string | null
          sourceId: string | null
          subject: string | null
          threadId: string
          toEmails: string[]
          updatedAt: string
          userId: string
        }
        Insert: {
          bccEmails?: string[] | null
          bodyText?: string | null
          ccEmails?: string[] | null
          createdAt?: string
          fromEmail: string
          gmailId: string
          hasAttachments?: boolean | null
          id?: string
          isImportant?: boolean | null
          isRead?: boolean | null
          labels?: string[] | null
          metadata?: Json | null
          receivedAt?: string | null
          sentAt?: string | null
          snippet?: string | null
          sourceId?: string | null
          subject?: string | null
          threadId: string
          toEmails: string[]
          updatedAt?: string
          userId: string
        }
        Update: {
          bccEmails?: string[] | null
          bodyText?: string | null
          ccEmails?: string[] | null
          createdAt?: string
          fromEmail?: string
          gmailId?: string
          hasAttachments?: boolean | null
          id?: string
          isImportant?: boolean | null
          isRead?: boolean | null
          labels?: string[] | null
          metadata?: Json | null
          receivedAt?: string | null
          sentAt?: string | null
          snippet?: string | null
          sourceId?: string | null
          subject?: string | null
          threadId?: string
          toEmails?: string[]
          updatedAt?: string
          userId?: string
        }
        Relationships: []
      }
      googleOauthTokens: {
        Row: {
          accessToken: string
          createdAt: string
          email: string | null
          expiresAt: string
          googleUserId: string
          id: string
          provider: string
          refreshToken: string | null
          scopes: string[]
          updatedAt: string
          userId: string
        }
        Insert: {
          accessToken: string
          createdAt?: string
          email?: string | null
          expiresAt: string
          googleUserId: string
          id?: string
          provider?: string
          refreshToken?: string | null
          scopes?: string[]
          updatedAt?: string
          userId: string
        }
        Update: {
          accessToken?: string
          createdAt?: string
          email?: string | null
          expiresAt?: string
          googleUserId?: string
          id?: string
          provider?: string
          refreshToken?: string | null
          scopes?: string[]
          updatedAt?: string
          userId?: string
        }
        Relationships: []
      }
      googleSyncStatus: {
        Row: {
          createdAt: string
          error: string | null
          historyId: string | null
          id: string
          lastSyncTime: string | null
          metadata: Json | null
          service: string
          status: string | null
          syncToken: string | null
          updatedAt: string
          userId: string
        }
        Insert: {
          createdAt?: string
          error?: string | null
          historyId?: string | null
          id?: string
          lastSyncTime?: string | null
          metadata?: Json | null
          service: string
          status?: string | null
          syncToken?: string | null
          updatedAt?: string
          userId: string
        }
        Update: {
          createdAt?: string
          error?: string | null
          historyId?: string | null
          id?: string
          lastSyncTime?: string | null
          metadata?: Json | null
          service?: string
          status?: string | null
          syncToken?: string | null
          updatedAt?: string
          userId?: string
        }
        Relationships: []
      }
      googleWebhookChannels: {
        Row: {
          active: boolean | null
          channelId: string
          createdAt: string | null
          expiration: string | null
          failureCount: number | null
          failureReason: string | null
          googleResourceId: string | null
          lastHealthCheck: string | null
          metadata: Json | null
          resourceId: string | null
          resourceType: string | null
          state: string | null
          stateChangedAt: string | null
          userId: string
        }
        Insert: {
          active?: boolean | null
          channelId: string
          createdAt?: string | null
          expiration?: string | null
          failureCount?: number | null
          failureReason?: string | null
          googleResourceId?: string | null
          lastHealthCheck?: string | null
          metadata?: Json | null
          resourceId?: string | null
          resourceType?: string | null
          state?: string | null
          stateChangedAt?: string | null
          userId: string
        }
        Update: {
          active?: boolean | null
          channelId?: string
          createdAt?: string | null
          expiration?: string | null
          failureCount?: number | null
          failureReason?: string | null
          googleResourceId?: string | null
          lastHealthCheck?: string | null
          metadata?: Json | null
          resourceId?: string | null
          resourceType?: string | null
          state?: string | null
          stateChangedAt?: string | null
          userId?: string
        }
        Relationships: []
      }
      googleWebhookNotifications: {
        Row: {
          changed: string[] | null
          channelId: string
          createdAt: string | null
          data: Json | null
          id: string
          lastRetryAt: string | null
          messageNumber: number | null
          processed: boolean | null
          processedAt: string | null
          processingAttempts: number | null
          processingError: string | null
          processingStartedAt: string | null
          resourceId: string | null
          resourceState: string | null
          resourceType: string | null
          resourceUri: string | null
          retryCount: number | null
          userId: string | null
        }
        Insert: {
          changed?: string[] | null
          channelId: string
          createdAt?: string | null
          data?: Json | null
          id?: string
          lastRetryAt?: string | null
          messageNumber?: number | null
          processed?: boolean | null
          processedAt?: string | null
          processingAttempts?: number | null
          processingError?: string | null
          processingStartedAt?: string | null
          resourceId?: string | null
          resourceState?: string | null
          resourceType?: string | null
          resourceUri?: string | null
          retryCount?: number | null
          userId?: string | null
        }
        Update: {
          changed?: string[] | null
          channelId?: string
          createdAt?: string | null
          data?: Json | null
          id?: string
          lastRetryAt?: string | null
          messageNumber?: number | null
          processed?: boolean | null
          processedAt?: string | null
          processingAttempts?: number | null
          processingError?: string | null
          processingStartedAt?: string | null
          resourceId?: string | null
          resourceState?: string | null
          resourceType?: string | null
          resourceUri?: string | null
          retryCount?: number | null
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_channel"
            columns: ["user_id", "channel_id"]
            isOneToOne: false
            referencedRelation: "google_webhook_channels"
            referencedColumns: ["user_id", "channel_id"]
          },
          {
            foreignKeyName: "fk_channel"
            columns: ["user_id", "channel_id"]
            isOneToOne: false
            referencedRelation: "webhook_channel_health"
            referencedColumns: ["user_id", "channel_id"]
          },
        ]
      }
      messageDeliveryReceipts: {
        Row: {
          createdAt: string
          id: string
          messageId: string
          messageType: string
          providerMetadata: Json | null
          status: string
          statusTimestamp: string
        }
        Insert: {
          createdAt?: string
          id?: string
          messageId: string
          messageType?: string
          providerMetadata?: Json | null
          status: string
          statusTimestamp: string
        }
        Update: {
          createdAt?: string
          id?: string
          messageId?: string
          messageType?: string
          providerMetadata?: Json | null
          status?: string
          statusTimestamp?: string
        }
        Relationships: [
          {
            foreignKeyName: "message_delivery_receipts_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "sms_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      messageMedia: {
        Row: {
          createdAt: string
          fileSize: number | null
          id: string
          mediaType: string
          mediaUrl: string
          messageId: string
          messageType: string
          metadata: Json | null
          storagePath: string | null
          transcription: string | null
        }
        Insert: {
          createdAt?: string
          fileSize?: number | null
          id?: string
          mediaType: string
          mediaUrl: string
          messageId: string
          messageType?: string
          metadata?: Json | null
          storagePath?: string | null
          transcription?: string | null
        }
        Update: {
          createdAt?: string
          fileSize?: number | null
          id?: string
          mediaType?: string
          mediaUrl?: string
          messageId?: string
          messageType?: string
          metadata?: Json | null
          storagePath?: string | null
          transcription?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "message_media_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "sms_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      phoneNumberMappings: {
        Row: {
          createdAt: string
          id: string
          isActive: boolean | null
          phoneNumber: string
          phoneType: string
          provider: string
          providerMetadata: Json | null
          updatedAt: string
          userId: string
        }
        Insert: {
          createdAt?: string
          id?: string
          isActive?: boolean | null
          phoneNumber: string
          phoneType?: string
          provider?: string
          providerMetadata?: Json | null
          updatedAt?: string
          userId: string
        }
        Update: {
          createdAt?: string
          id?: string
          isActive?: boolean | null
          phoneNumber?: string
          phoneType?: string
          provider?: string
          providerMetadata?: Json | null
          updatedAt?: string
          userId?: string
        }
        Relationships: []
      }
      smsMessages: {
        Row: {
          aiServiceResponseId: string | null
          body: string
          conversationKey: string
          createdAt: string
          deletedAt: string | null
          deletedBy: string | null
          direction: string
          errorCode: string | null
          errorLogId: string | null
          errorMessage: string | null
          id: string
          mediaUrls: string[] | null
          metadata: Json | null
          parentMessageId: string | null
          phoneNumber: string
          rateLimitMetadata: Json | null
          receivedAt: string | null
          responseType: string | null
          sentAt: string | null
          sourceId: string | null
          status: string
          threadId: string | null
          twilioSid: string
          updatedAt: string
          userId: string
        }
        Insert: {
          aiServiceResponseId?: string | null
          body: string
          conversationKey: string
          createdAt?: string
          deletedAt?: string | null
          deletedBy?: string | null
          direction: string
          errorCode?: string | null
          errorLogId?: string | null
          errorMessage?: string | null
          id?: string
          mediaUrls?: string[] | null
          metadata?: Json | null
          parentMessageId?: string | null
          phoneNumber: string
          rateLimitMetadata?: Json | null
          receivedAt?: string | null
          responseType?: string | null
          sentAt?: string | null
          sourceId?: string | null
          status: string
          threadId?: string | null
          twilioSid: string
          updatedAt?: string
          userId: string
        }
        Update: {
          aiServiceResponseId?: string | null
          body?: string
          conversationKey?: string
          createdAt?: string
          deletedAt?: string | null
          deletedBy?: string | null
          direction?: string
          errorCode?: string | null
          errorLogId?: string | null
          errorMessage?: string | null
          id?: string
          mediaUrls?: string[] | null
          metadata?: Json | null
          parentMessageId?: string | null
          phoneNumber?: string
          rateLimitMetadata?: Json | null
          receivedAt?: string | null
          responseType?: string | null
          sentAt?: string | null
          sourceId?: string | null
          status?: string
          threadId?: string | null
          twilioSid?: string
          updatedAt?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "sms_messages_parent_message_id_fkey"
            columns: ["parent_message_id"]
            isOneToOne: false
            referencedRelation: "sms_messages"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      webhookChannelHealth: {
        Row: {
          channelId: string | null
          expiration: string | null
          failureCount: number | null
          healthStatus: string | null
          lastHealthCheck: string | null
          lastNotificationAt: string | null
          resourceType: string | null
          state: string | null
          stateChangedAt: string | null
          unprocessedNotifications: number | null
          userId: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  logs: {
    Tables: {
      errorLogs: {
        Row: {
          createdAt: string
          environment: string | null
          errorCode: string | null
          errorMessage: string
          id: string
          metadata: Json | null
          processingDuration: number | null
          recordId: string
          severity: string | null
          source: string
          stackTrace: string | null
          status: string | null
          updatedAt: string
          userId: string
        }
        Insert: {
          createdAt?: string
          environment?: string | null
          errorCode?: string | null
          errorMessage: string
          id?: string
          metadata?: Json | null
          processingDuration?: number | null
          recordId: string
          severity?: string | null
          source: string
          stackTrace?: string | null
          status?: string | null
          updatedAt?: string
          userId: string
        }
        Update: {
          createdAt?: string
          environment?: string | null
          errorCode?: string | null
          errorMessage?: string
          id?: string
          metadata?: Json | null
          processingDuration?: number | null
          recordId?: string
          severity?: string | null
          source?: string
          stackTrace?: string | null
          status?: string | null
          updatedAt?: string
          userId?: string
        }
        Relationships: []
      }
      internalSystemLogs: {
        Row: {
          createdAt: string | null
          id: string
          logType: string
          metadata: Json
          recordId: string | null
          source: string
          userId: string | null
        }
        Insert: {
          createdAt?: string | null
          id?: string
          logType: string
          metadata?: Json
          recordId?: string | null
          source: string
          userId?: string | null
        }
        Update: {
          createdAt?: string | null
          id?: string
          logType?: string
          metadata?: Json
          recordId?: string | null
          source?: string
          userId?: string | null
        }
        Relationships: []
      }
      llmCompletionDetails: {
        Row: {
          completionId: string | null
          createdAt: string | null
          id: string
          inputData: Json | null
          promptSystem: string | null
          promptUser: string | null
          responseParsed: Json | null
          responseRaw: Json | null
          tokenUsage: Json | null
        }
        Insert: {
          completionId?: string | null
          createdAt?: string | null
          id?: string
          inputData?: Json | null
          promptSystem?: string | null
          promptUser?: string | null
          responseParsed?: Json | null
          responseRaw?: Json | null
          tokenUsage?: Json | null
        }
        Update: {
          completionId?: string | null
          createdAt?: string | null
          id?: string
          inputData?: Json | null
          promptSystem?: string | null
          promptUser?: string | null
          responseParsed?: Json | null
          responseRaw?: Json | null
          tokenUsage?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "llm_completion_details_completion_id_fkey"
            columns: ["completion_id"]
            isOneToOne: false
            referencedRelation: "ai_processing_steps"
            referencedColumns: ["request_id"]
          },
          {
            foreignKeyName: "llm_completion_details_completion_id_fkey"
            columns: ["completion_id"]
            isOneToOne: false
            referencedRelation: "llm_completions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "llm_completion_details_completion_id_fkey"
            columns: ["completion_id"]
            isOneToOne: false
            referencedRelation: "v_llm_calls"
            referencedColumns: ["completion_id"]
          },
        ]
      }
      llmCompletions: {
        Row: {
          completionTokens: number | null
          createdAt: string | null
          durationMs: number | null
          entityId: string | null
          entityType: string | null
          errorMessage: string | null
          id: string
          model: string
          pipelineName: string
          promptTokens: number | null
          success: boolean
          taskName: string
          totalTokens: number | null
          userId: string | null
        }
        Insert: {
          completionTokens?: number | null
          createdAt?: string | null
          durationMs?: number | null
          entityId?: string | null
          entityType?: string | null
          errorMessage?: string | null
          id?: string
          model: string
          pipelineName: string
          promptTokens?: number | null
          success: boolean
          taskName: string
          totalTokens?: number | null
          userId?: string | null
        }
        Update: {
          completionTokens?: number | null
          createdAt?: string | null
          durationMs?: number | null
          entityId?: string | null
          entityType?: string | null
          errorMessage?: string | null
          id?: string
          model?: string
          pipelineName?: string
          promptTokens?: number | null
          success?: boolean
          taskName?: string
          totalTokens?: number | null
          userId?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      aiActivityTimeline: {
        Row: {
          action: string | null
          activityType: string | null
          confidenceScore: number | null
          createdAt: string | null
          details: Json | null
          durationMs: number | null
          rowNum: number | null
          source: string | null
          sourceId: string | null
          status: string | null
          userId: string | null
        }
        Relationships: []
      }
      aiDashboardMetrics: {
        Row: {
          activeDealsCount: number | null
          aiProcessings: number | null
          avgConfidence: number | null
          backgroundJobs: number | null
          calculatedAt: string | null
          failedActivities: number | null
          lastActivityAt: string | null
          recommendationsGenerated: number | null
          successRate: number | null
          successfulActivities: number | null
          totalActivities: number | null
          totalProcessingTime: number | null
          userId: string | null
        }
        Relationships: []
      }
      aiProcessingSteps: {
        Row: {
          completedSteps: number | null
          createdAt: string | null
          cumulativeDurationMs: number | null
          durationMs: number | null
          pipelineName: string | null
          requestId: string | null
          stepOrder: number | null
          stepStatus: string | null
          taskName: string | null
          totalSteps: number | null
          userId: string | null
        }
        Relationships: []
      }
      errorStatsHourly: {
        Row: {
          affectedUsers: number | null
          avgDuration: number | null
          errorCount: number | null
          hour: string | null
          p95Duration: number | null
          severity: string | null
          source: string | null
        }
        Relationships: []
      }
      errorSummaryBySource: {
        Row: {
          affectedUsers: number | null
          errorCount: number | null
          firstOccurrence: string | null
          lastOccurrence: string | null
          severity: string | null
          source: string | null
          status: string | null
        }
        Relationships: []
      }
      errorTrendsDaily: {
        Row: {
          affectedUsers: number | null
          avgProcessingDuration: number | null
          errorCount: number | null
          errorDate: string | null
          severity: string | null
          source: string | null
        }
        Relationships: []
      }
      mostCommonErrors: {
        Row: {
          affectedUsers: number | null
          errorCode: string | null
          errorMessage: string | null
          firstSeen: string | null
          lastSeen: string | null
          occurrenceCount: number | null
          severities: string[] | null
          source: string | null
        }
        Relationships: []
      }
      pipelineErrorRates: {
        Row: {
          affectedUsers: number | null
          avgDuration: number | null
          failedJobs: number | null
          lastError: string | null
          pipelineName: string | null
          totalErrors: number | null
        }
        Relationships: []
      }
      recentErrorsWithUsers: {
        Row: {
          createdAt: string | null
          errorCode: string | null
          errorMessage: string | null
          id: string | null
          jobId: string | null
          pipelineName: string | null
          processingDuration: number | null
          severity: string | null
          source: string | null
          status: string | null
          taskName: string | null
          userEmail: string | null
          userId: string | null
        }
        Relationships: []
      }
      userErrorProfiles: {
        Row: {
          criticalErrors: number | null
          distinctErrors: number | null
          distinctSources: number | null
          firstError: string | null
          lastError: string | null
          standardErrors: number | null
          totalErrors: number | null
          unresolvedErrors: number | null
          userId: string | null
          warnings: number | null
        }
        Relationships: []
      }
      vLlmCalls: {
        Row: {
          completionId: string | null
          completionTokens: number | null
          createdAt: string | null
          durationMs: number | null
          errorMessage: string | null
          model: string | null
          pipelineName: string | null
          promptSystem: string | null
          promptTokens: number | null
          promptUser: string | null
          responseParsed: Json | null
          responseRaw: Json | null
          success: boolean | null
          taskName: string | null
          tokenUsage: Json | null
          totalTokens: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      checkUserErrorAccess: {
        Args: { userUuid: string }
        Returns: boolean
      }
      refreshAiActivityTimeline: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      refreshErrorStats: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  sales: {
    Tables: {
      campaignLeads: {
        Row: {
          campaignId: string
          createdAt: string
          generatedContent: Json | null
          id: string
          leadId: string
          notes: string | null
          status: string
          updatedAt: string
        }
        Insert: {
          campaignId: string
          createdAt?: string
          generatedContent?: Json | null
          id?: string
          leadId: string
          notes?: string | null
          status: string
          updatedAt?: string
        }
        Update: {
          campaignId?: string
          createdAt?: string
          generatedContent?: Json | null
          id?: string
          leadId?: string
          notes?: string | null
          status?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "campaign_leads_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_leads_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      campaigns: {
        Row: {
          createdAt: string
          description: string | null
          goal: string
          id: string
          metrics: Json
          name: string
          progress: number | null
          schedule: Json
          scriptId: string
          status: string
          targetIds: string[]
          targetType: string
          updatedAt: string
          userId: string
        }
        Insert: {
          createdAt?: string
          description?: string | null
          goal: string
          id?: string
          metrics?: Json
          name: string
          progress?: number | null
          schedule: Json
          scriptId: string
          status: string
          targetIds: string[]
          targetType: string
          updatedAt?: string
          userId: string
        }
        Update: {
          createdAt?: string
          description?: string | null
          goal?: string
          id?: string
          metrics?: Json
          name?: string
          progress?: number | null
          schedule?: Json
          scriptId?: string
          status?: string
          targetIds?: string[]
          targetType?: string
          updatedAt?: string
          userId?: string
        }
        Relationships: []
      }
      clientMappings: {
        Row: {
          clientData: Json
          createdAt: string
          dealId: string | null
          id: string
          sourceId: string
          sourceType: string
          updatedAt: string
          userId: string
        }
        Insert: {
          clientData: Json
          createdAt?: string
          dealId?: string | null
          id?: string
          sourceId: string
          sourceType: string
          updatedAt?: string
          userId: string
        }
        Update: {
          clientData?: Json
          createdAt?: string
          dealId?: string | null
          id?: string
          sourceId?: string
          sourceType?: string
          updatedAt?: string
          userId?: string
        }
        Relationships: []
      }
      crms: {
        Row: {
          createdAt: string
          id: string
          metadata: Json | null
          userId: string
        }
        Insert: {
          createdAt?: string
          id?: string
          metadata?: Json | null
          userId: string
        }
        Update: {
          createdAt?: string
          id?: string
          metadata?: Json | null
          userId?: string
        }
        Relationships: []
      }
      leadDealMatches: {
        Row: {
          dealId: string
          leadId: string
          matchScore: number
        }
        Insert: {
          dealId: string
          leadId: string
          matchScore: number
        }
        Update: {
          dealId?: string
          leadId?: string
          matchScore?: number
        }
        Relationships: [
          {
            foreignKeyName: "lead_deal_matches_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          assignedTo: string | null
          createdAt: string
          email: string
          enrichmentData: Json | null
          id: string
          name: string
          notes: string | null
          phone: string
          source: string
          status: string
          tags: string[] | null
          updatedAt: string
          userId: string
        }
        Insert: {
          assignedTo?: string | null
          createdAt?: string
          email: string
          enrichmentData?: Json | null
          id?: string
          name: string
          notes?: string | null
          phone: string
          source: string
          status: string
          tags?: string[] | null
          updatedAt?: string
          userId: string
        }
        Update: {
          assignedTo?: string | null
          createdAt?: string
          email?: string
          enrichmentData?: Json | null
          id?: string
          name?: string
          notes?: string | null
          phone?: string
          source?: string
          status?: string
          tags?: string[] | null
          updatedAt?: string
          userId?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowedMimeTypes: string[] | null
          avifAutodetection: boolean | null
          createdAt: string | null
          fileSizeLimit: number | null
          id: string
          name: string
          owner: string | null
          ownerId: string | null
          public: boolean | null
          updatedAt: string | null
        }
        Insert: {
          allowedMimeTypes?: string[] | null
          avifAutodetection?: boolean | null
          createdAt?: string | null
          fileSizeLimit?: number | null
          id: string
          name: string
          owner?: string | null
          ownerId?: string | null
          public?: boolean | null
          updatedAt?: string | null
        }
        Update: {
          allowedMimeTypes?: string[] | null
          avifAutodetection?: boolean | null
          createdAt?: string | null
          fileSizeLimit?: number | null
          id?: string
          name?: string
          owner?: string | null
          ownerId?: string | null
          public?: boolean | null
          updatedAt?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executedAt: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executedAt?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executedAt?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucketId: string | null
          createdAt: string | null
          id: string
          lastAccessedAt: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          ownerId: string | null
          pathTokens: string[] | null
          updatedAt: string | null
          userMetadata: Json | null
          version: string | null
        }
        Insert: {
          bucketId?: string | null
          createdAt?: string | null
          id?: string
          lastAccessedAt?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          ownerId?: string | null
          pathTokens?: string[] | null
          updatedAt?: string | null
          userMetadata?: Json | null
          version?: string | null
        }
        Update: {
          bucketId?: string | null
          createdAt?: string | null
          id?: string
          lastAccessedAt?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          ownerId?: string | null
          pathTokens?: string[] | null
          updatedAt?: string | null
          userMetadata?: Json | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
        ]
      }
      s3MultipartUploads: {
        Row: {
          bucketId: string
          createdAt: string
          id: string
          inProgressSize: number
          key: string
          ownerId: string | null
          uploadSignature: string
          userMetadata: Json | null
          version: string
        }
        Insert: {
          bucketId: string
          createdAt?: string
          id: string
          inProgressSize?: number
          key: string
          ownerId?: string | null
          uploadSignature: string
          userMetadata?: Json | null
          version: string
        }
        Update: {
          bucketId?: string
          createdAt?: string
          id?: string
          inProgressSize?: number
          key?: string
          ownerId?: string | null
          uploadSignature?: string
          userMetadata?: Json | null
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "s3_multipart_uploads_bucket_id_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
        ]
      }
      s3MultipartUploadsParts: {
        Row: {
          bucketId: string
          createdAt: string
          etag: string
          id: string
          key: string
          ownerId: string | null
          partNumber: number
          size: number
          uploadId: string
          version: string
        }
        Insert: {
          bucketId: string
          createdAt?: string
          etag: string
          id?: string
          key: string
          ownerId?: string | null
          partNumber: number
          size?: number
          uploadId: string
          version: string
        }
        Update: {
          bucketId?: string
          createdAt?: string
          etag?: string
          id?: string
          key?: string
          ownerId?: string | null
          partNumber?: number
          size?: number
          uploadId?: string
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "s3_multipart_uploads_parts_bucket_id_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "s3_multipart_uploads_parts_upload_id_fkey"
            columns: ["upload_id"]
            isOneToOne: false
            referencedRelation: "s3_multipart_uploads"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      canInsertObject: {
        Args: { bucketid: string; name: string; owner: string; metadata: Json }
        Returns: undefined
      }
      extension: {
        Args: { name: string }
        Returns: string
      }
      filename: {
        Args: { name: string }
        Returns: string
      }
      foldername: {
        Args: { name: string }
        Returns: string[]
      }
      getSizeByBucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucketId: string
        }[]
      }
      listMultipartUploadsWithDelimiter: {
        Args: {
          bucketId: string
          prefixParam: string
          delimiterParam: string
          maxKeys?: number
          nextKeyToken?: string
          nextUploadToken?: string
        }
        Returns: {
          key: string
          id: string
          createdAt: string
        }[]
      }
      listObjectsWithDelimiter: {
        Args: {
          bucketId: string
          prefixParam: string
          delimiterParam: string
          maxKeys?: number
          startAfter?: string
          nextToken?: string
        }
        Returns: {
          name: string
          id: string
          metadata: Json
          updatedAt: string
        }[]
      }
      operation: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updatedAt: string
          createdAt: string
          lastAccessedAt: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  telephony: {
    Tables: {
      callEvents: {
        Row: {
          callLogId: string | null
          campaignId: string
          createdAt: string
          eventData: Json | null
          eventType: string | null
          id: string
          userId: string
        }
        Insert: {
          callLogId?: string | null
          campaignId: string
          createdAt?: string
          eventData?: Json | null
          eventType?: string | null
          id?: string
          userId: string
        }
        Update: {
          callLogId?: string | null
          campaignId?: string
          createdAt?: string
          eventData?: Json | null
          eventType?: string | null
          id?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "call_events_call_log_id_fkey"
            columns: ["call_log_id"]
            isOneToOne: false
            referencedRelation: "call_logs"
            referencedColumns: ["id"]
          },
        ]
      }
      callLogs: {
        Row: {
          callSid: string | null
          campaignId: string
          conversationJson: Json | null
          createdAt: string
          id: string
          jobId: string | null
          leadId: string | null
          outcome: string | null
          sentiment: string | null
          transcriptSummary: string | null
          updatedAt: string
          userId: string
        }
        Insert: {
          callSid?: string | null
          campaignId: string
          conversationJson?: Json | null
          createdAt?: string
          id?: string
          jobId?: string | null
          leadId?: string | null
          outcome?: string | null
          sentiment?: string | null
          transcriptSummary?: string | null
          updatedAt?: string
          userId: string
        }
        Update: {
          callSid?: string | null
          campaignId?: string
          conversationJson?: Json | null
          createdAt?: string
          id?: string
          jobId?: string | null
          leadId?: string | null
          outcome?: string | null
          sentiment?: string | null
          transcriptSummary?: string | null
          updatedAt?: string
          userId?: string
        }
        Relationships: []
      }
      callScripts: {
        Row: {
          avgDuration: number | null
          category: string
          content: string
          createdAt: string
          id: string
          isActive: boolean
          name: string
          positiveSentimentRate: number | null
          successRate: number | null
          updatedAt: string
          userId: string
          version: number
        }
        Insert: {
          avgDuration?: number | null
          category: string
          content: string
          createdAt?: string
          id?: string
          isActive?: boolean
          name: string
          positiveSentimentRate?: number | null
          successRate?: number | null
          updatedAt?: string
          userId: string
          version?: number
        }
        Update: {
          avgDuration?: number | null
          category?: string
          content?: string
          createdAt?: string
          id?: string
          isActive?: boolean
          name?: string
          positiveSentimentRate?: number | null
          successRate?: number | null
          updatedAt?: string
          userId?: string
          version?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  ui: {
    Tables: {
      clientCardsReady: {
        Row: {
          clientId: string
          payload: Json
          updatedAt: string | null
          userId: string | null
        }
        Insert: {
          clientId: string
          payload: Json
          updatedAt?: string | null
          userId?: string | null
        }
        Update: {
          clientId?: string
          payload?: Json
          updatedAt?: string | null
          userId?: string | null
        }
        Relationships: []
      }
      clientDetailReady: {
        Row: {
          clientId: string
          payload: Json
          updatedAt: string | null
          userId: string | null
        }
        Insert: {
          clientId: string
          payload: Json
          updatedAt?: string | null
          userId?: string | null
        }
        Update: {
          clientId?: string
          payload?: Json
          updatedAt?: string | null
          userId?: string | null
        }
        Relationships: []
      }
      dealCardsReady: {
        Row: {
          dealId: string
          payload: Json
          updatedAt: string | null
          userId: string | null
        }
        Insert: {
          dealId: string
          payload: Json
          updatedAt?: string | null
          userId?: string | null
        }
        Update: {
          dealId?: string
          payload?: Json
          updatedAt?: string | null
          userId?: string | null
        }
        Relationships: []
      }
      dealDetailReady: {
        Row: {
          dealId: string
          payload: Json
          updatedAt: string | null
          userId: string | null
        }
        Insert: {
          dealId: string
          payload: Json
          updatedAt?: string | null
          userId?: string | null
        }
        Update: {
          dealId?: string
          payload?: Json
          updatedAt?: string | null
          userId?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      clientCardView: {
        Row: {
          associatedDealsJson: Json | null
          clientId: string | null
          clientSummary: string | null
          enrichedExtractedData: Json | null
          lastTouch: string | null
          linkedDealCount: number | null
          recommendedActionsJson: Json | null
          userId: string | null
        }
        Relationships: []
      }
      clientCardViewRls: {
        Row: {
          associatedDealsJson: Json | null
          clientId: string | null
          clientSummary: string | null
          enrichedExtractedData: Json | null
          lastTouch: string | null
          linkedDealCount: number | null
          recommendedActionsJson: Json | null
          userId: string | null
        }
        Relationships: []
      }
      clientCardViewSecure: {
        Row: {
          associatedDealsJson: Json | null
          clientId: string | null
          clientSummary: string | null
          enrichedExtractedData: Json | null
          lastTouch: string | null
          linkedDealCount: number | null
          recommendedActionsJson: Json | null
          userId: string | null
        }
        Relationships: []
      }
      clientCardsRaw: {
        Row: {
          associatedDealsJson: Json | null
          clientId: string | null
          clientSummary: string | null
          enrichedExtractedData: Json | null
          lastTouch: string | null
          linkedDealCount: number | null
          needsSync: boolean | null
          readyUpdatedAt: string | null
          recommendedActionsJson: Json | null
          userId: string | null
        }
        Relationships: []
      }
      clientDetailMv: {
        Row: {
          clientDataJson: Json | null
          clientId: string | null
          clientSummary: string | null
          deals: Json | null
          recommendations: Json | null
        }
        Relationships: []
      }
      clientDetailRaw: {
        Row: {
          associatedDealsJson: Json | null
          clientId: string | null
          clientSummary: string | null
          enrichedExtractedData: Json | null
          lastTouch: string | null
          linkedDealCount: number | null
          needsSync: boolean | null
          readyUpdatedAt: string | null
          recommendationsJson: Json | null
          userId: string | null
        }
        Relationships: []
      }
      clientDetailView: {
        Row: {
          associatedDealsJson: Json | null
          clientId: string | null
          clientSummary: string | null
          enrichedExtractedData: Json | null
          lastTouch: string | null
          linkedDealCount: number | null
          recommendationsJson: Json | null
          userId: string | null
        }
        Relationships: []
      }
      dealActivityView: {
        Row: {
          dealId: string | null
          eventSummary: string | null
          eventTs: string | null
          tags: DatabaseCamel["analysis"]["Enums"]["canonBlockTag"][] | null
        }
        Relationships: [
          {
            foreignKeyName: "deal_context_graph_canon_blocks_deal_context_graph_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deal_card_view"
            referencedColumns: ["deal_id"]
          },
          {
            foreignKeyName: "deal_context_graph_canon_blocks_deal_context_graph_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deal_card_view_rls"
            referencedColumns: ["deal_id"]
          },
          {
            foreignKeyName: "deal_context_graph_canon_blocks_deal_context_graph_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deal_card_view_secure"
            referencedColumns: ["deal_id"]
          },
          {
            foreignKeyName: "deal_context_graph_canon_blocks_deal_context_graph_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deal_cards_raw"
            referencedColumns: ["deal_id"]
          },
          {
            foreignKeyName: "deal_context_graph_canon_blocks_deal_context_graph_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deal_detail_mv"
            referencedColumns: ["deal_id"]
          },
          {
            foreignKeyName: "deal_context_graph_canon_blocks_deal_context_graph_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deal_detail_raw"
            referencedColumns: ["deal_id"]
          },
          {
            foreignKeyName: "deal_context_graph_canon_blocks_deal_context_graph_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deal_detail_view"
            referencedColumns: ["deal_id"]
          },
        ]
      }
      dealCardView: {
        Row: {
          dealId: string | null
          dealSummary: string | null
          lastTouch: string | null
          primaryClientSummary: string | null
          userId: string | null
        }
        Insert: {
          dealId?: string | null
          dealSummary?: string | null
          lastTouch?: never
          primaryClientSummary?: never
          userId?: string | null
        }
        Update: {
          dealId?: string | null
          dealSummary?: string | null
          lastTouch?: never
          primaryClientSummary?: never
          userId?: string | null
        }
        Relationships: []
      }
      dealCardViewRls: {
        Row: {
          dealId: string | null
          dealSummary: string | null
          lastTouch: string | null
          primaryClientSummary: string | null
          userId: string | null
        }
        Insert: {
          dealId?: string | null
          dealSummary?: string | null
          lastTouch?: never
          primaryClientSummary?: never
          userId?: string | null
        }
        Update: {
          dealId?: string | null
          dealSummary?: string | null
          lastTouch?: never
          primaryClientSummary?: never
          userId?: string | null
        }
        Relationships: []
      }
      dealCardViewSecure: {
        Row: {
          dealId: string | null
          dealSummary: string | null
          lastTouch: string | null
          primaryClientSummary: string | null
          userId: string | null
        }
        Insert: {
          dealId?: string | null
          dealSummary?: string | null
          lastTouch?: never
          primaryClientSummary?: never
          userId?: string | null
        }
        Update: {
          dealId?: string | null
          dealSummary?: string | null
          lastTouch?: never
          primaryClientSummary?: never
          userId?: string | null
        }
        Relationships: []
      }
      dealCardsRaw: {
        Row: {
          dealId: string | null
          dealSummary: string | null
          lastTouch: string | null
          needsSync: boolean | null
          primaryClientSummary: string | null
          readyUpdatedAt: string | null
          recommendedActionsJson: Json | null
        }
        Relationships: []
      }
      dealDetailMv: {
        Row: {
          clients: Json | null
          dealDataJson: Json | null
          dealId: string | null
          dealSummary: string | null
          recommendations: Json | null
        }
        Relationships: []
      }
      dealDetailRaw: {
        Row: {
          dealDataJson: Json | null
          dealId: string | null
          needsSync: boolean | null
          payload: Json | null
          readyUpdatedAt: string | null
          updatedAt: string | null
          userId: string | null
        }
        Relationships: []
      }
      dealDetailView: {
        Row: {
          associatedClientsJson: Json | null
          dealDataJson: Json | null
          dealId: string | null
          dealSummary: string | null
          lastTouch: string | null
          linkedClientCount: number | null
          userId: string | null
        }
        Relationships: []
      }
      dealDocumentsView: {
        Row: {
          createdAt: string | null
          dealId: string | null
          displayName: string | null
          documentId: string | null
          fileName: string | null
          fileSize: string | null
          fileUrl: string | null
          status: string | null
        }
        Relationships: []
      }
      dealNotesView: {
        Row: {
          createdAt: string | null
          dealId: string | null
          noteBody: string | null
          noteId: string | null
          sourceId: string | null
        }
        Relationships: [
          {
            foreignKeyName: "deal_context_graph_canon_blocks_deal_context_graph_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deal_card_view"
            referencedColumns: ["deal_id"]
          },
          {
            foreignKeyName: "deal_context_graph_canon_blocks_deal_context_graph_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deal_card_view_rls"
            referencedColumns: ["deal_id"]
          },
          {
            foreignKeyName: "deal_context_graph_canon_blocks_deal_context_graph_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deal_card_view_secure"
            referencedColumns: ["deal_id"]
          },
          {
            foreignKeyName: "deal_context_graph_canon_blocks_deal_context_graph_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deal_cards_raw"
            referencedColumns: ["deal_id"]
          },
          {
            foreignKeyName: "deal_context_graph_canon_blocks_deal_context_graph_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deal_detail_mv"
            referencedColumns: ["deal_id"]
          },
          {
            foreignKeyName: "deal_context_graph_canon_blocks_deal_context_graph_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deal_detail_raw"
            referencedColumns: ["deal_id"]
          },
          {
            foreignKeyName: "deal_context_graph_canon_blocks_deal_context_graph_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deal_detail_view"
            referencedColumns: ["deal_id"]
          },
        ]
      }
    }
    Functions: {
      hasEnrichedDataChanged: {
        Args: { dealContextGraphId: string; lastReadySync: string }
        Returns: boolean
      }
      refreshDetailViews: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      refreshRawAndGetChanges: {
        Args: { mode: string }
        Returns: {
          id: string
          payload: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  usageLens: {
    Tables: {
      usageRaw: {
        Row: {
          completionText: string | null
          completionTokens: number
          costCents: number | null
          createdAt: string
          createdBy: string | null
          externalId: string | null
          id: string
          metadata: Json | null
          model: string
          promptText: string | null
          promptTokens: number
          provider: string
          source: string | null
          tag: string | null
          totalTokens: number
          updatedAt: string
        }
        Insert: {
          completionText?: string | null
          completionTokens?: number
          costCents?: number | null
          createdAt?: string
          createdBy?: string | null
          externalId?: string | null
          id?: string
          metadata?: Json | null
          model: string
          promptText?: string | null
          promptTokens?: number
          provider?: string
          source?: string | null
          tag?: string | null
          totalTokens?: number
          updatedAt?: string
        }
        Update: {
          completionText?: string | null
          completionTokens?: number
          costCents?: number | null
          createdAt?: string
          createdBy?: string | null
          externalId?: string | null
          id?: string
          metadata?: Json | null
          model?: string
          promptText?: string | null
          promptTokens?: number
          provider?: string
          source?: string | null
          tag?: string | null
          totalTokens?: number
          updatedAt?: string
        }
        Relationships: []
      }
      usageSummaries: {
        Row: {
          avgCostPerCall: number | null
          avgTokensPerCall: number | null
          createdAt: string
          createdBy: string | null
          datePeriod: string
          id: string
          model: string | null
          provider: string | null
          summaryType: string
          tag: string | null
          totalCalls: number
          totalCostCents: number
          totalTokensSum: number
          updatedAt: string
        }
        Insert: {
          avgCostPerCall?: number | null
          avgTokensPerCall?: number | null
          createdAt?: string
          createdBy?: string | null
          datePeriod: string
          id?: string
          model?: string | null
          provider?: string | null
          summaryType: string
          tag?: string | null
          totalCalls?: number
          totalCostCents?: number
          totalTokensSum?: number
          updatedAt?: string
        }
        Update: {
          avgCostPerCall?: number | null
          avgTokensPerCall?: number | null
          createdAt?: string
          createdBy?: string | null
          datePeriod?: string
          id?: string
          model?: string | null
          provider?: string | null
          summaryType?: string
          tag?: string | null
          totalCalls?: number
          totalCostCents?: number
          totalTokensSum?: number
          updatedAt?: string
        }
        Relationships: []
      }
    }
    Views: {
      usageMetrics: {
        Row: {
          avgCompletionTokens: number | null
          avgCostCents: number | null
          avgPromptTokens: number | null
          avgTotalTokens: number | null
          calls: number | null
          createdBy: string | null
          date: string | null
          firstCall: string | null
          lastCall: string | null
          model: string | null
          provider: string | null
          tag: string | null
          totalCostCents: number | null
          totalTokensSum: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      refreshUsageMetrics: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

