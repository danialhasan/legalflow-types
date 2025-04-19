export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  analysis: {
    Tables: {
      canon_blocks: {
        Row: {
          created_at: string
          deal_context_graph_id: string | null
          embedding: string | null
          extracted_input_id: string | null
          id: string
          source_id: string | null
          summary: string
        }
        Insert: {
          created_at?: string
          deal_context_graph_id?: string | null
          embedding?: string | null
          extracted_input_id?: string | null
          id?: string
          source_id?: string | null
          summary: string
        }
        Update: {
          created_at?: string
          deal_context_graph_id?: string | null
          embedding?: string | null
          extracted_input_id?: string | null
          id?: string
          source_id?: string | null
          summary?: string
        }
        Relationships: [
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
      client_context_graph_canon_blocks: {
        Row: {
          canon_block_id: string
          client_context_graph_id: string
        }
        Insert: {
          canon_block_id: string
          client_context_graph_id: string
        }
        Update: {
          canon_block_id?: string
          client_context_graph_id?: string
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
            foreignKeyName: "client_context_graph_canon_blocks_client_context_graph_id_fkey"
            columns: ["client_context_graph_id"]
            isOneToOne: false
            referencedRelation: "client_context_graphs"
            referencedColumns: ["id"]
          },
        ]
      }
      client_context_graphs: {
        Row: {
          created_at: string | null
          enriched_extracted_data: Json
          id: string
          summary: string | null
          summary_embedding: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          enriched_extracted_data: Json
          id?: string
          summary?: string | null
          summary_embedding?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          enriched_extracted_data?: Json
          id?: string
          summary?: string | null
          summary_embedding?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      deal_context_graph_canon_blocks: {
        Row: {
          canon_block_id: string
          deal_context_graph_id: string
        }
        Insert: {
          canon_block_id: string
          deal_context_graph_id: string
        }
        Update: {
          canon_block_id?: string
          deal_context_graph_id?: string
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
            foreignKeyName: "deal_context_graph_canon_blocks_deal_context_graph_id_fkey"
            columns: ["deal_context_graph_id"]
            isOneToOne: false
            referencedRelation: "deal_context_graphs"
            referencedColumns: ["id"]
          },
        ]
      }
      deal_context_graphs: {
        Row: {
          created_at: string
          enriched_extracted_data: Json
          id: string
          summary: string | null
          summary_embedding: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          enriched_extracted_data: Json
          id?: string
          summary?: string | null
          summary_embedding?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          enriched_extracted_data?: Json
          id?: string
          summary?: string | null
          summary_embedding?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      extracted_inputs: {
        Row: {
          created_at: string
          extracted_data: Json
          id: string
          model_version: string | null
          processing_time_ms: number | null
          source_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          extracted_data: Json
          id?: string
          model_version?: string | null
          processing_time_ms?: number | null
          source_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          extracted_data?: Json
          id?: string
          model_version?: string | null
          processing_time_ms?: number | null
          source_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      processed_calendar_events: {
        Row: {
          created_at: string
          event_id: string
          extracted_data: Json
          google_event_id: string
          id: string
          identified_clients: Json | null
          processed_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          event_id: string
          extracted_data: Json
          google_event_id: string
          id?: string
          identified_clients?: Json | null
          processed_at: string
          user_id: string
        }
        Update: {
          created_at?: string
          event_id?: string
          extracted_data?: Json
          google_event_id?: string
          id?: string
          identified_clients?: Json | null
          processed_at?: string
          user_id?: string
        }
        Relationships: []
      }
      processed_email_threads: {
        Row: {
          created_at: string
          extracted_data: Json
          id: string
          processed_at: string
          thread_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          extracted_data: Json
          id?: string
          processed_at: string
          thread_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          extracted_data?: Json
          id?: string
          processed_at?: string
          thread_id?: string
          user_id?: string
        }
        Relationships: []
      }
      processed_emails: {
        Row: {
          created_at: string
          email_id: string
          extracted_data: Json
          id: string
          identified_clients: Json | null
          message_id: string
          processed_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email_id: string
          extracted_data: Json
          id?: string
          identified_clients?: Json | null
          message_id: string
          processed_at: string
          user_id: string
        }
        Update: {
          created_at?: string
          email_id?: string
          extracted_data?: Json
          id?: string
          identified_clients?: Json | null
          message_id?: string
          processed_at?: string
          user_id?: string
        }
        Relationships: []
      }
      processed_event_series: {
        Row: {
          created_at: string
          extracted_data: Json
          id: string
          processed_at: string
          series_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          extracted_data: Json
          id?: string
          processed_at: string
          series_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          extracted_data?: Json
          id?: string
          processed_at?: string
          series_id?: string
          user_id?: string
        }
        Relationships: []
      }
      unified_analysis_results: {
        Row: {
          analysis_result: Json
          created_at: string
          id: string
          processed_at: string
          user_id: string
        }
        Insert: {
          analysis_result: Json
          created_at?: string
          id?: string
          processed_at: string
          user_id: string
        }
        Update: {
          analysis_result?: Json
          created_at?: string
          id?: string
          processed_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      match_similar_client_context_graphs: {
        Args: { _query: string; _top_k?: number; _user_id?: string }
        Returns: {
          client_context_graph_id: string
          summary: string
          score: number
        }[]
      }
      match_similar_deal_context_graphs: {
        Args: { _query: string; _top_k?: number; _user_id?: string }
        Returns: {
          deal_context_graph_id: string
          summary: string
          score: number
        }[]
      }
    }
    Enums: {
      canon_block_type:
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
      [_ in never]: never
    }
  }
  assistant: {
    Tables: {
      agent_recommendations: {
        Row: {
          client_id: string | null
          created_at: string
          deal_id: string | null
          executed_at: string | null
          execution_strategy: string
          id: string
          message_template: string | null
          priority: number
          reasoning: string
          recommended_action: string
          triggered_at: string
          type: string
          user_id: string
        }
        Insert: {
          client_id?: string | null
          created_at?: string
          deal_id?: string | null
          executed_at?: string | null
          execution_strategy?: string
          id?: string
          message_template?: string | null
          priority: number
          reasoning: string
          recommended_action: string
          triggered_at?: string
          type: string
          user_id: string
        }
        Update: {
          client_id?: string | null
          created_at?: string
          deal_id?: string | null
          executed_at?: string | null
          execution_strategy?: string
          id?: string
          message_template?: string | null
          priority?: number
          reasoning?: string
          recommended_action?: string
          triggered_at?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      agent_run_steps: {
        Row: {
          agent_run_id: string
          completed_at: string | null
          error_message: string | null
          id: string
          input_json: Json
          output_json: Json | null
          started_at: string
          step_name: string
        }
        Insert: {
          agent_run_id: string
          completed_at?: string | null
          error_message?: string | null
          id?: string
          input_json: Json
          output_json?: Json | null
          started_at?: string
          step_name: string
        }
        Update: {
          agent_run_id?: string
          completed_at?: string | null
          error_message?: string | null
          id?: string
          input_json?: Json
          output_json?: Json | null
          started_at?: string
          step_name?: string
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
      agent_runs: {
        Row: {
          agent_name: string
          completed_at: string | null
          id: string
          metadata: Json | null
          started_at: string
          status: string | null
          user_id: string
        }
        Insert: {
          agent_name: string
          completed_at?: string | null
          id?: string
          metadata?: Json | null
          started_at?: string
          status?: string | null
          user_id: string
        }
        Update: {
          agent_name?: string
          completed_at?: string | null
          id?: string
          metadata?: Json | null
          started_at?: string
          status?: string | null
          user_id?: string
        }
        Relationships: []
      }
      agents: {
        Row: {
          assistant_id: string
          created_at: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          assistant_id: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          assistant_id?: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      conversations: {
        Row: {
          created_at: string
          documents: string[] | null
          group_id: string | null
          id: string
          retrieved_chunks: Json[] | null
          thread_id: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          documents?: string[] | null
          group_id?: string | null
          id?: string
          retrieved_chunks?: Json[] | null
          thread_id?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          documents?: string[] | null
          group_id?: string | null
          id?: string
          retrieved_chunks?: Json[] | null
          thread_id?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string | null
          context: Json | null
          conversation_id: string | null
          created_at: string
          follow_up_questions: Json | null
          id: string
          role: string | null
          thread_id: string | null
          user_id: string | null
        }
        Insert: {
          content?: string | null
          context?: Json | null
          conversation_id?: string | null
          created_at?: string
          follow_up_questions?: Json | null
          id?: string
          role?: string | null
          thread_id?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string | null
          context?: Json | null
          conversation_id?: string | null
          created_at?: string
          follow_up_questions?: Json | null
          id?: string
          role?: string | null
          thread_id?: string | null
          user_id?: string | null
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
  compliance: {
    Tables: {
      citations: {
        Row: {
          bbox: Json
          citation_number: number
          content: string
          created_at: string
          doc_metadata_id: string
          document_name: string | null
          id: string
          message_id: string
          page_number: number
        }
        Insert: {
          bbox: Json
          citation_number: number
          content: string
          created_at?: string
          doc_metadata_id: string
          document_name?: string | null
          id?: string
          message_id: string
          page_number: number
        }
        Update: {
          bbox?: Json
          citation_number?: number
          content?: string
          created_at?: string
          doc_metadata_id?: string
          document_name?: string | null
          id?: string
          message_id?: string
          page_number?: number
        }
        Relationships: []
      }
      compliance_reports: {
        Row: {
          created_at: string
          date_generated: string
          doc_metadata_id: string
          document_name: string
          findings: Json
          id: string
          recommendations: Json
          report_url: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          date_generated?: string
          doc_metadata_id: string
          document_name: string
          findings?: Json
          id?: string
          recommendations?: Json
          report_url?: string | null
          status: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          date_generated?: string
          doc_metadata_id?: string
          document_name?: string
          findings?: Json
          id?: string
          recommendations?: Json
          report_url?: string | null
          status?: string
          updated_at?: string
          user_id?: string
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
      beta_signups: {
        Row: {
          created_at: string
          email: string
          id: string
          payload: Json | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          payload?: Json | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          payload?: Json | null
        }
        Relationships: []
      }
      client_types: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          is_deleted: boolean
          label: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          is_deleted?: boolean
          label: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          is_deleted?: boolean
          label?: string
        }
        Relationships: []
      }
      error_logs: {
        Row: {
          created_at: string
          environment: string | null
          error_code: string | null
          error_message: string
          id: string
          metadata: Json | null
          processing_duration: number | null
          record_id: string
          severity: string | null
          source: string
          stack_trace: string | null
          status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          environment?: string | null
          error_code?: string | null
          error_message: string
          id?: string
          metadata?: Json | null
          processing_duration?: number | null
          record_id: string
          severity?: string | null
          source: string
          stack_trace?: string | null
          status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          environment?: string | null
          error_code?: string | null
          error_message?: string
          id?: string
          metadata?: Json | null
          processing_duration?: number | null
          record_id?: string
          severity?: string | null
          source?: string
          stack_trace?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      feedback_reports: {
        Row: {
          created_at: string
          id: string
          kind: string
          payload: Json
          resolved: boolean | null
          resolved_at: string | null
          screenshot_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          kind?: string
          payload: Json
          resolved?: boolean | null
          resolved_at?: string | null
          screenshot_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          kind?: string
          payload?: Json
          resolved?: boolean | null
          resolved_at?: string | null
          screenshot_id?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      jobs: {
        Row: {
          backoff_until: string | null
          completed_at: string | null
          created_at: string
          error: string | null
          id: string
          max_retries: number
          origin: string | null
          params: Json
          priority: string
          result: Json | null
          retry_count: number
          started_at: string | null
          status: string
          tags: string[] | null
          type: string
          updated_at: string
        }
        Insert: {
          backoff_until?: string | null
          completed_at?: string | null
          created_at?: string
          error?: string | null
          id?: string
          max_retries?: number
          origin?: string | null
          params: Json
          priority?: string
          result?: Json | null
          retry_count?: number
          started_at?: string | null
          status: string
          tags?: string[] | null
          type: string
          updated_at?: string
        }
        Update: {
          backoff_until?: string | null
          completed_at?: string | null
          created_at?: string
          error?: string | null
          id?: string
          max_retries?: number
          origin?: string | null
          params?: Json
          priority?: string
          result?: Json | null
          retry_count?: number
          started_at?: string | null
          status?: string
          tags?: string[] | null
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      sources: {
        Row: {
          created_at: string
          id: string
          type: Database["core"]["Enums"]["source_type"]
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          type: Database["core"]["Enums"]["source_type"]
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          type?: Database["core"]["Enums"]["source_type"]
          user_id?: string | null
        }
        Relationships: []
      }
      ui_agents: {
        Row: {
          agent_name: string
          created_at: string | null
          description: string | null
          id: string
          last_action: string | null
          last_action_at: string | null
          linked_entity_id: string | null
          linked_entity_type: string | null
          metadata: Json | null
          role: string
          status: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          agent_name: string
          created_at?: string | null
          description?: string | null
          id?: string
          last_action?: string | null
          last_action_at?: string | null
          linked_entity_id?: string | null
          linked_entity_type?: string | null
          metadata?: Json | null
          role: string
          status?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          agent_name?: string
          created_at?: string | null
          description?: string | null
          id?: string
          last_action?: string | null
          last_action_at?: string | null
          linked_entity_id?: string | null
          linked_entity_type?: string | null
          metadata?: Json | null
          role?: string
          status?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_client_types: {
        Row: {
          client_type_id: string
          created_at: string
          user_id: string
        }
        Insert: {
          client_type_id: string
          created_at?: string
          user_id: string
        }
        Update: {
          client_type_id?: string
          created_at?: string
          user_id?: string
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
      user_metadata: {
        Row: {
          created_at: string
          crm_id: string | null
          email: string | null
          google_integrated: boolean | null
          user_id: string
        }
        Insert: {
          created_at?: string
          crm_id?: string | null
          email?: string | null
          google_integrated?: boolean | null
          user_id: string
        }
        Update: {
          created_at?: string
          crm_id?: string | null
          email?: string | null
          google_integrated?: boolean | null
          user_id?: string
        }
        Relationships: []
      }
      user_rankings: {
        Row: {
          created_at: string
          entity_id: string
          entity_type: string
          id: string
          is_pinned: boolean | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          entity_id: string
          entity_type: string
          id?: string
          is_pinned?: boolean | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          entity_id?: string
          entity_type?: string
          id?: string
          is_pinned?: boolean | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_settings: {
        Row: {
          communication_style:
            | Database["core"]["Enums"]["communication_style"]
            | null
          created_at: string
          google_email: string | null
          id: string
          location: string | null
          role: Database["core"]["Enums"]["agent_role"] | null
          special_notes: string | null
          timezone: string | null
          updated_at: string
          user_id: string
          work_schedule: Database["core"]["Enums"]["work_schedule"] | null
        }
        Insert: {
          communication_style?:
            | Database["core"]["Enums"]["communication_style"]
            | null
          created_at?: string
          google_email?: string | null
          id?: string
          location?: string | null
          role?: Database["core"]["Enums"]["agent_role"] | null
          special_notes?: string | null
          timezone?: string | null
          updated_at?: string
          user_id: string
          work_schedule?: Database["core"]["Enums"]["work_schedule"] | null
        }
        Update: {
          communication_style?:
            | Database["core"]["Enums"]["communication_style"]
            | null
          created_at?: string
          google_email?: string | null
          id?: string
          location?: string | null
          role?: Database["core"]["Enums"]["agent_role"] | null
          special_notes?: string | null
          timezone?: string | null
          updated_at?: string
          user_id?: string
          work_schedule?: Database["core"]["Enums"]["work_schedule"] | null
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
      [_ in never]: never
    }
    Enums: {
      agent_role:
        | "realtor"
        | "leasing_agent"
        | "buyer_agent"
        | "listing_agent"
        | "admin"
        | "other"
      communication_style: "friendly" | "professional" | "direct" | "casual"
      source_type: "email" | "document" | "calendar_event"
      work_schedule:
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
      deal_documents: {
        Row: {
          deal_id: string
          document_id: string
          document_type: string
        }
        Insert: {
          deal_id: string
          document_id: string
          document_type: string
        }
        Update: {
          deal_id?: string
          document_id?: string
          document_type?: string
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
      document_chunks: {
        Row: {
          chunk_content: Json
          chunkr_metadata: Json | null
          created_at: string
          document_id: string
          document_metadata_id: string
          id: string
        }
        Insert: {
          chunk_content: Json
          chunkr_metadata?: Json | null
          created_at?: string
          document_id: string
          document_metadata_id: string
          id?: string
        }
        Update: {
          chunk_content?: Json
          chunkr_metadata?: Json | null
          created_at?: string
          document_id?: string
          document_metadata_id?: string
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
      document_groups: {
        Row: {
          client_id: string | null
          conversation_id: string | null
          created_at: string
          id: string
          metadata: Json | null
          name: string | null
          user_id: string | null
        }
        Insert: {
          client_id?: string | null
          conversation_id?: string | null
          created_at?: string
          id?: string
          metadata?: Json | null
          name?: string | null
          user_id?: string | null
        }
        Update: {
          client_id?: string | null
          conversation_id?: string | null
          created_at?: string
          id?: string
          metadata?: Json | null
          name?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      document_metadata: {
        Row: {
          classifications: string[] | null
          created_at: string
          deal_id: string | null
          deal_name: string | null
          extracted_data: Json | null
          group_id: string | null
          id: string
          metadata: Json | null
          status: string | null
          storage_object_id: string | null
          user_id: string | null
        }
        Insert: {
          classifications?: string[] | null
          created_at?: string
          deal_id?: string | null
          deal_name?: string | null
          extracted_data?: Json | null
          group_id?: string | null
          id?: string
          metadata?: Json | null
          status?: string | null
          storage_object_id?: string | null
          user_id?: string | null
        }
        Update: {
          classifications?: string[] | null
          created_at?: string
          deal_id?: string | null
          deal_name?: string | null
          extracted_data?: Json | null
          group_id?: string | null
          id?: string
          metadata?: Json | null
          status?: string | null
          storage_object_id?: string | null
          user_id?: string | null
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
      email_attachments: {
        Row: {
          chunkr_task_id: string | null
          chunks_count: number | null
          created_at: string
          document_id: string | null
          email_id: string
          file_name: string
          gmail_attachment_id: string
          id: string
          mime_type: string
          processed_at: string | null
          public_url: string | null
          size: number
          status: string | null
          storage_path: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          chunkr_task_id?: string | null
          chunks_count?: number | null
          created_at?: string
          document_id?: string | null
          email_id: string
          file_name: string
          gmail_attachment_id: string
          id?: string
          mime_type: string
          processed_at?: string | null
          public_url?: string | null
          size: number
          status?: string | null
          storage_path?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          chunkr_task_id?: string | null
          chunks_count?: number | null
          created_at?: string
          document_id?: string | null
          email_id?: string
          file_name?: string
          gmail_attachment_id?: string
          id?: string
          mime_type?: string
          processed_at?: string | null
          public_url?: string | null
          size?: number
          status?: string | null
          storage_path?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      google_calendar_events: {
        Row: {
          all_day: boolean | null
          attendees: Json | null
          calendar_id: string
          created_at: string
          description: string | null
          end_time: string
          event_id: string
          html_link: string | null
          id: string
          location: string | null
          metadata: Json | null
          recurring_rule: string | null
          start_time: string
          status: string | null
          summary: string
          updated_at: string
          user_id: string
        }
        Insert: {
          all_day?: boolean | null
          attendees?: Json | null
          calendar_id: string
          created_at?: string
          description?: string | null
          end_time: string
          event_id: string
          html_link?: string | null
          id?: string
          location?: string | null
          metadata?: Json | null
          recurring_rule?: string | null
          start_time: string
          status?: string | null
          summary: string
          updated_at?: string
          user_id: string
        }
        Update: {
          all_day?: boolean | null
          attendees?: Json | null
          calendar_id?: string
          created_at?: string
          description?: string | null
          end_time?: string
          event_id?: string
          html_link?: string | null
          id?: string
          location?: string | null
          metadata?: Json | null
          recurring_rule?: string | null
          start_time?: string
          status?: string | null
          summary?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      google_data_jobs: {
        Row: {
          completed_at: string | null
          created_at: string
          error: string | null
          id: string
          job_type: string
          params: Json | null
          progress: number | null
          result: Json | null
          started_at: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          error?: string | null
          id?: string
          job_type: string
          params?: Json | null
          progress?: number | null
          result?: Json | null
          started_at?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          error?: string | null
          id?: string
          job_type?: string
          params?: Json | null
          progress?: number | null
          result?: Json | null
          started_at?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      google_emails: {
        Row: {
          bcc_emails: string[] | null
          body_text: string | null
          cc_emails: string[] | null
          created_at: string
          from_email: string
          gmail_id: string
          has_attachments: boolean | null
          id: string
          is_important: boolean | null
          is_read: boolean | null
          labels: string[] | null
          metadata: Json | null
          received_at: string | null
          sent_at: string | null
          snippet: string | null
          subject: string | null
          thread_id: string
          to_emails: string[]
          updated_at: string
          user_id: string
        }
        Insert: {
          bcc_emails?: string[] | null
          body_text?: string | null
          cc_emails?: string[] | null
          created_at?: string
          from_email: string
          gmail_id: string
          has_attachments?: boolean | null
          id?: string
          is_important?: boolean | null
          is_read?: boolean | null
          labels?: string[] | null
          metadata?: Json | null
          received_at?: string | null
          sent_at?: string | null
          snippet?: string | null
          subject?: string | null
          thread_id: string
          to_emails: string[]
          updated_at?: string
          user_id: string
        }
        Update: {
          bcc_emails?: string[] | null
          body_text?: string | null
          cc_emails?: string[] | null
          created_at?: string
          from_email?: string
          gmail_id?: string
          has_attachments?: boolean | null
          id?: string
          is_important?: boolean | null
          is_read?: boolean | null
          labels?: string[] | null
          metadata?: Json | null
          received_at?: string | null
          sent_at?: string | null
          snippet?: string | null
          subject?: string | null
          thread_id?: string
          to_emails?: string[]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      google_oauth_tokens: {
        Row: {
          access_token: string
          created_at: string
          email: string | null
          expires_at: string
          google_user_id: string
          id: string
          provider: string
          refresh_token: string | null
          scopes: string[]
          updated_at: string
          user_id: string
        }
        Insert: {
          access_token: string
          created_at?: string
          email?: string | null
          expires_at: string
          google_user_id: string
          id?: string
          provider?: string
          refresh_token?: string | null
          scopes?: string[]
          updated_at?: string
          user_id: string
        }
        Update: {
          access_token?: string
          created_at?: string
          email?: string | null
          expires_at?: string
          google_user_id?: string
          id?: string
          provider?: string
          refresh_token?: string | null
          scopes?: string[]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      google_sync_status: {
        Row: {
          created_at: string
          error: string | null
          history_id: string | null
          id: string
          last_sync_time: string | null
          metadata: Json | null
          service: string
          status: string | null
          sync_token: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          error?: string | null
          history_id?: string | null
          id?: string
          last_sync_time?: string | null
          metadata?: Json | null
          service: string
          status?: string | null
          sync_token?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          error?: string | null
          history_id?: string | null
          id?: string
          last_sync_time?: string | null
          metadata?: Json | null
          service?: string
          status?: string | null
          sync_token?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      google_webhook_channels: {
        Row: {
          channel_id: string
          created_at: string | null
          expiration: string | null
          resource_id: string | null
          resource_type: string | null
          user_id: string
        }
        Insert: {
          channel_id: string
          created_at?: string | null
          expiration?: string | null
          resource_id?: string | null
          resource_type?: string | null
          user_id: string
        }
        Update: {
          channel_id?: string
          created_at?: string | null
          expiration?: string | null
          resource_id?: string | null
          resource_type?: string | null
          user_id?: string
        }
        Relationships: []
      }
      google_webhook_notifications: {
        Row: {
          changed: string[] | null
          channel_id: string
          created_at: string | null
          data: Json | null
          id: string
          message_number: number | null
          processed: boolean | null
          processed_at: string | null
          resource_id: string | null
          resource_state: string | null
          resource_type: string | null
          resource_uri: string | null
          user_id: string | null
        }
        Insert: {
          changed?: string[] | null
          channel_id: string
          created_at?: string | null
          data?: Json | null
          id?: string
          message_number?: number | null
          processed?: boolean | null
          processed_at?: string | null
          resource_id?: string | null
          resource_state?: string | null
          resource_type?: string | null
          resource_uri?: string | null
          user_id?: string | null
        }
        Update: {
          changed?: string[] | null
          channel_id?: string
          created_at?: string | null
          data?: Json | null
          id?: string
          message_number?: number | null
          processed?: boolean | null
          processed_at?: string | null
          resource_id?: string | null
          resource_state?: string | null
          resource_type?: string | null
          resource_uri?: string | null
          user_id?: string | null
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
      campaign_leads: {
        Row: {
          campaign_id: string
          created_at: string
          generated_content: Json | null
          id: string
          lead_id: string
          notes: string | null
          status: string
          updated_at: string
        }
        Insert: {
          campaign_id: string
          created_at?: string
          generated_content?: Json | null
          id?: string
          lead_id: string
          notes?: string | null
          status: string
          updated_at?: string
        }
        Update: {
          campaign_id?: string
          created_at?: string
          generated_content?: Json | null
          id?: string
          lead_id?: string
          notes?: string | null
          status?: string
          updated_at?: string
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
          created_at: string
          description: string | null
          goal: string
          id: string
          metrics: Json
          name: string
          progress: number | null
          schedule: Json
          script_id: string
          status: string
          target_ids: string[]
          target_type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          goal: string
          id?: string
          metrics?: Json
          name: string
          progress?: number | null
          schedule: Json
          script_id: string
          status: string
          target_ids: string[]
          target_type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          goal?: string
          id?: string
          metrics?: Json
          name?: string
          progress?: number | null
          schedule?: Json
          script_id?: string
          status?: string
          target_ids?: string[]
          target_type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      client_mappings: {
        Row: {
          client_data: Json
          created_at: string
          deal_id: string | null
          id: string
          source_id: string
          source_type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          client_data: Json
          created_at?: string
          deal_id?: string | null
          id?: string
          source_id: string
          source_type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          client_data?: Json
          created_at?: string
          deal_id?: string | null
          id?: string
          source_id?: string
          source_type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_mappings_deal_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deals"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          address: Json | null
          contact_info: Json | null
          created_at: string
          crm_id: string
          date_of_birth: string | null
          group_ids: string[] | null
          id: string
          metadata: Json | null
          name: string | null
          notes: string | null
          possession_date: string | null
          updated_at: string
        }
        Insert: {
          address?: Json | null
          contact_info?: Json | null
          created_at?: string
          crm_id: string
          date_of_birth?: string | null
          group_ids?: string[] | null
          id?: string
          metadata?: Json | null
          name?: string | null
          notes?: string | null
          possession_date?: string | null
          updated_at?: string
        }
        Update: {
          address?: Json | null
          contact_info?: Json | null
          created_at?: string
          crm_id?: string
          date_of_birth?: string | null
          group_ids?: string[] | null
          id?: string
          metadata?: Json | null
          name?: string | null
          notes?: string | null
          possession_date?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "clients_crm_id_fkey"
            columns: ["crm_id"]
            isOneToOne: false
            referencedRelation: "crms"
            referencedColumns: ["id"]
          },
        ]
      }
      crms: {
        Row: {
          created_at: string
          id: string
          metadata: Json | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          metadata?: Json | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          metadata?: Json | null
          user_id?: string
        }
        Relationships: []
      }
      deals: {
        Row: {
          created_at: string
          deal_type: string
          id: string
          metadata: Json | null
          name: string
          status: string
          user_id: string
        }
        Insert: {
          created_at?: string
          deal_type: string
          id?: string
          metadata?: Json | null
          name: string
          status: string
          user_id: string
        }
        Update: {
          created_at?: string
          deal_type?: string
          id?: string
          metadata?: Json | null
          name?: string
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      lead_deal_matches: {
        Row: {
          deal_id: string
          lead_id: string
          match_score: number
        }
        Insert: {
          deal_id: string
          lead_id: string
          match_score: number
        }
        Update: {
          deal_id?: string
          lead_id?: string
          match_score?: number
        }
        Relationships: [
          {
            foreignKeyName: "lead_deal_matches_deal_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deals"
            referencedColumns: ["id"]
          },
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
          assigned_to: string | null
          created_at: string
          email: string
          enrichment_data: Json | null
          id: string
          name: string
          notes: string | null
          phone: string
          source: string
          status: string
          tags: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string
          email: string
          enrichment_data?: Json | null
          id?: string
          name: string
          notes?: string | null
          phone: string
          source: string
          status: string
          tags?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          assigned_to?: string | null
          created_at?: string
          email?: string
          enrichment_data?: Json | null
          id?: string
          name?: string
          notes?: string | null
          phone?: string
          source?: string
          status?: string
          tags?: string[] | null
          updated_at?: string
          user_id?: string
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
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          user_metadata: Json | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          user_metadata?: Json | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          user_metadata?: Json | null
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
      s3_multipart_uploads: {
        Row: {
          bucket_id: string
          created_at: string
          id: string
          in_progress_size: number
          key: string
          owner_id: string | null
          upload_signature: string
          user_metadata: Json | null
          version: string
        }
        Insert: {
          bucket_id: string
          created_at?: string
          id: string
          in_progress_size?: number
          key: string
          owner_id?: string | null
          upload_signature: string
          user_metadata?: Json | null
          version: string
        }
        Update: {
          bucket_id?: string
          created_at?: string
          id?: string
          in_progress_size?: number
          key?: string
          owner_id?: string | null
          upload_signature?: string
          user_metadata?: Json | null
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
      s3_multipart_uploads_parts: {
        Row: {
          bucket_id: string
          created_at: string
          etag: string
          id: string
          key: string
          owner_id: string | null
          part_number: number
          size: number
          upload_id: string
          version: string
        }
        Insert: {
          bucket_id: string
          created_at?: string
          etag: string
          id?: string
          key: string
          owner_id?: string | null
          part_number: number
          size?: number
          upload_id: string
          version: string
        }
        Update: {
          bucket_id?: string
          created_at?: string
          etag?: string
          id?: string
          key?: string
          owner_id?: string | null
          part_number?: number
          size?: number
          upload_id?: string
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
      can_insert_object: {
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
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      list_multipart_uploads_with_delimiter: {
        Args: {
          bucket_id: string
          prefix_param: string
          delimiter_param: string
          max_keys?: number
          next_key_token?: string
          next_upload_token?: string
        }
        Returns: {
          key: string
          id: string
          created_at: string
        }[]
      }
      list_objects_with_delimiter: {
        Args: {
          bucket_id: string
          prefix_param: string
          delimiter_param: string
          max_keys?: number
          start_after?: string
          next_token?: string
        }
        Returns: {
          name: string
          id: string
          metadata: Json
          updated_at: string
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
          updated_at: string
          created_at: string
          last_accessed_at: string
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
      call_events: {
        Row: {
          call_log_id: string | null
          campaign_id: string
          created_at: string
          event_data: Json | null
          event_type: string | null
          id: string
          user_id: string
        }
        Insert: {
          call_log_id?: string | null
          campaign_id: string
          created_at?: string
          event_data?: Json | null
          event_type?: string | null
          id?: string
          user_id: string
        }
        Update: {
          call_log_id?: string | null
          campaign_id?: string
          created_at?: string
          event_data?: Json | null
          event_type?: string | null
          id?: string
          user_id?: string
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
      call_logs: {
        Row: {
          call_sid: string | null
          campaign_id: string
          conversation_json: Json | null
          created_at: string
          id: string
          job_id: string | null
          lead_id: string | null
          outcome: string | null
          sentiment: string | null
          transcript_summary: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          call_sid?: string | null
          campaign_id: string
          conversation_json?: Json | null
          created_at?: string
          id?: string
          job_id?: string | null
          lead_id?: string | null
          outcome?: string | null
          sentiment?: string | null
          transcript_summary?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          call_sid?: string | null
          campaign_id?: string
          conversation_json?: Json | null
          created_at?: string
          id?: string
          job_id?: string | null
          lead_id?: string | null
          outcome?: string | null
          sentiment?: string | null
          transcript_summary?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      call_scripts: {
        Row: {
          avg_duration: number | null
          category: string
          content: string
          created_at: string
          id: string
          is_active: boolean
          name: string
          positive_sentiment_rate: number | null
          success_rate: number | null
          updated_at: string
          user_id: string
          version: number
        }
        Insert: {
          avg_duration?: number | null
          category: string
          content: string
          created_at?: string
          id?: string
          is_active?: boolean
          name: string
          positive_sentiment_rate?: number | null
          success_rate?: number | null
          updated_at?: string
          user_id: string
          version?: number
        }
        Update: {
          avg_duration?: number | null
          category?: string
          content?: string
          created_at?: string
          id?: string
          is_active?: boolean
          name?: string
          positive_sentiment_rate?: number | null
          success_rate?: number | null
          updated_at?: string
          user_id?: string
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
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  analysis: {
    Enums: {
      canon_block_type: [
        "client_message",
        "broker_message",
        "lead_introduction",
        "follow_up_required",
        "lease_application",
        "purchase_offer",
        "contract_addendum",
        "condition_removal",
        "deposit_confirmation",
        "inspection_report",
        "compliance_notice",
        "showing_schedule",
        "closing_schedule",
        "milestone_reminder",
        "deal_brief",
        "negotiation_advice",
        "risk_flag",
        "client_education",
        "network_insight",
        "drip_campaign_step",
        "voice_call_script",
        "referral_request",
        "other",
      ],
    },
  },
  assistant: {
    Enums: {},
  },
  compliance: {
    Enums: {},
  },
  core: {
    Enums: {
      agent_role: [
        "realtor",
        "leasing_agent",
        "buyer_agent",
        "listing_agent",
        "admin",
        "other",
      ],
      communication_style: ["friendly", "professional", "direct", "casual"],
      source_type: ["email", "document", "calendar_event"],
      work_schedule: [
        "mornings",
        "evenings",
        "weekends",
        "full_time",
        "part_time",
        "flexible",
      ],
    },
  },
  documents: {
    Enums: {},
  },
  integrations: {
    Enums: {},
  },
  sales: {
    Enums: {},
  },
  storage: {
    Enums: {},
  },
  telephony: {
    Enums: {},
  },
} as const
