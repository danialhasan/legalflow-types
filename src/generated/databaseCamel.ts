// Generated file - do not modify directly

import type { Database, Json } from '../index';
export type DatabaseCamel = {
  analysis: {
    Tables: {
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
          summary: string | null
          summaryEmbedding: string | null
          updatedAt: string | null
          userId: string | null
        }
        Insert: {
          createdAt?: string | null
          enrichedExtractedData?: Json | null
          id?: string
          summary?: string | null
          summaryEmbedding?: string | null
          updatedAt?: string | null
          userId?: string | null
        }
        Update: {
          createdAt?: string | null
          enrichedExtractedData?: Json | null
          id?: string
          summary?: string | null
          summaryEmbedding?: string | null
          updatedAt?: string | null
          userId?: string | null
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
          createdAt: string
          enrichedExtractedData: Json | null
          entityLedger: Json | null
          id: string
          ledgerUpdateInProgress: boolean | null
          ledgerUpdateStartedAt: string | null
          summary: string | null
          summaryEmbedding: string | null
          supersededBy: string | null
          unitAddressId: string | null
          updatedAt: string
          userId: string | null
        }
        Insert: {
          buildingAddressId?: string | null
          createdAt?: string
          enrichedExtractedData?: Json | null
          entityLedger?: Json | null
          id?: string
          ledgerUpdateInProgress?: boolean | null
          ledgerUpdateStartedAt?: string | null
          summary?: string | null
          summaryEmbedding?: string | null
          supersededBy?: string | null
          unitAddressId?: string | null
          updatedAt?: string
          userId?: string | null
        }
        Update: {
          buildingAddressId?: string | null
          createdAt?: string
          enrichedExtractedData?: Json | null
          entityLedger?: Json | null
          id?: string
          ledgerUpdateInProgress?: boolean | null
          ledgerUpdateStartedAt?: string | null
          summary?: string | null
          summaryEmbedding?: string | null
          supersededBy?: string | null
          unitAddressId?: string | null
          updatedAt?: string
          userId?: string | null
        }
        Relationships: []
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
    }
    Functions: {
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
          editDelta: Json | null
          executedAt: string | null
          executionStrategy: DatabaseCamel["assistant"]["Enums"]["recommendationExecutionStrategy"]
          executor: DatabaseCamel["assistant"]["Enums"]["recommendationExecutor"]
          fallbackUsed: boolean | null
          id: string
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
          editDelta?: Json | null
          executedAt?: string | null
          executionStrategy?: DatabaseCamel["assistant"]["Enums"]["recommendationExecutionStrategy"]
          executor: DatabaseCamel["assistant"]["Enums"]["recommendationExecutor"]
          fallbackUsed?: boolean | null
          id?: string
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
          editDelta?: Json | null
          executedAt?: string | null
          executionStrategy?: DatabaseCamel["assistant"]["Enums"]["recommendationExecutionStrategy"]
          executor?: DatabaseCamel["assistant"]["Enums"]["recommendationExecutor"]
          fallbackUsed?: boolean | null
          id?: string
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
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
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
          userId: string
        }
        Insert: {
          createdAt?: string
          crmId?: string | null
          email?: string | null
          googleIntegrated?: boolean | null
          userId: string
        }
        Update: {
          createdAt?: string
          crmId?: string | null
          email?: string | null
          googleIntegrated?: boolean | null
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
          googleEmail: string | null
          id: string
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
          googleEmail?: string | null
          id?: string
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
          googleEmail?: string | null
          id?: string
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
      [_ in never]: never
    }
    Functions: {
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
      sourceType: "email" | "document" | "calendar_event"
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
          channelId: string
          createdAt: string | null
          expiration: string | null
          resourceId: string | null
          resourceType: string | null
          userId: string
        }
        Insert: {
          channelId: string
          createdAt?: string | null
          expiration?: string | null
          resourceId?: string | null
          resourceType?: string | null
          userId: string
        }
        Update: {
          channelId?: string
          createdAt?: string | null
          expiration?: string | null
          resourceId?: string | null
          resourceType?: string | null
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
          messageNumber: number | null
          processed: boolean | null
          processedAt: string | null
          resourceId: string | null
          resourceState: string | null
          resourceType: string | null
          resourceUri: string | null
          userId: string | null
        }
        Insert: {
          changed?: string[] | null
          channelId: string
          createdAt?: string | null
          data?: Json | null
          id?: string
          messageNumber?: number | null
          processed?: boolean | null
          processedAt?: string | null
          resourceId?: string | null
          resourceState?: string | null
          resourceType?: string | null
          resourceUri?: string | null
          userId?: string | null
        }
        Update: {
          changed?: string[] | null
          channelId?: string
          createdAt?: string | null
          data?: Json | null
          id?: string
          messageNumber?: number | null
          processed?: boolean | null
          processedAt?: string | null
          resourceId?: string | null
          resourceState?: string | null
          resourceType?: string | null
          resourceUri?: string | null
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
}

