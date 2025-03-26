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
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  assistant: {
    Tables: {
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
        Relationships: [
          {
            foreignKeyName: "agents_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
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
      users: {
        Row: {
          created_at: string
          crm_id: string | null
          google_integrated: boolean | null
          id: string
          name: string | null
        }
        Insert: {
          created_at?: string
          crm_id?: string | null
          google_integrated?: boolean | null
          id: string
          name?: string | null
        }
        Update: {
          created_at?: string
          crm_id?: string | null
          google_integrated?: boolean | null
          id?: string
          name?: string | null
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
          body_html: string | null
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
          body_html?: string | null
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
          body_html?: string | null
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
          created_at: string | null
          data: Json | null
          id: string
          processed: boolean | null
          resource_id: string | null
          resource_type: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          data?: Json | null
          id?: string
          processed?: boolean | null
          resource_id?: string | null
          resource_type?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          data?: Json | null
          id?: string
          processed?: boolean | null
          resource_id?: string | null
          resource_type?: string | null
          user_id?: string | null
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
