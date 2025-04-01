// Generated file - do not modify directly

import type { Json } from '../index';
export type DatabaseCamel = {
  analysis: {
    Tables: {
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
      users: {
        Row: {
          createdAt: string
          crmId: string | null
          googleIntegrated: boolean | null
          id: string
          name: string | null
        }
        Insert: {
          createdAt?: string
          crmId?: string | null
          googleIntegrated?: boolean | null
          id: string
          name?: string | null
        }
        Update: {
          createdAt?: string
          crmId?: string | null
          googleIntegrated?: boolean | null
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
      dealDocuments: {
        Row: {
          dealId: string
          documentId: string
          documentType: string
        }
        Insert: {
          dealId: string
          documentId: string
          documentType: string
        }
        Update: {
          dealId?: string
          documentId?: string
          documentType?: string
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
          chunkrTaskId: string | null
          chunksCount: number | null
          createdAt: string
          documentId: string | null
          emailId: string
          fileName: string
          gmailAttachmentId: string
          id: string
          mimeType: string
          processedAt: string | null
          publicUrl: string | null
          size: number
          status: string | null
          storagePath: string | null
          updatedAt: string
          userId: string
        }
        Insert: {
          chunkrTaskId?: string | null
          chunksCount?: number | null
          createdAt?: string
          documentId?: string | null
          emailId: string
          fileName: string
          gmailAttachmentId: string
          id?: string
          mimeType: string
          processedAt?: string | null
          publicUrl?: string | null
          size: number
          status?: string | null
          storagePath?: string | null
          updatedAt?: string
          userId: string
        }
        Update: {
          chunkrTaskId?: string | null
          chunksCount?: number | null
          createdAt?: string
          documentId?: string | null
          emailId?: string
          fileName?: string
          gmailAttachmentId?: string
          id?: string
          mimeType?: string
          processedAt?: string | null
          publicUrl?: string | null
          size?: number
          status?: string | null
          storagePath?: string | null
          updatedAt?: string
          userId?: string
        }
        Relationships: []
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
          bodyHtml: string | null
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
          subject: string | null
          threadId: string
          toEmails: string[]
          updatedAt: string
          userId: string
        }
        Insert: {
          bccEmails?: string[] | null
          bodyHtml?: string | null
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
          subject?: string | null
          threadId: string
          toEmails: string[]
          updatedAt?: string
          userId: string
        }
        Update: {
          bccEmails?: string[] | null
          bodyHtml?: string | null
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
          subject?: string | null
          threadId?: string
          toEmails?: string[]
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
          createdAt: string | null
          data: Json | null
          id: string
          processed: boolean | null
          resourceId: string | null
          resourceType: string | null
          userId: string | null
        }
        Insert: {
          createdAt?: string | null
          data?: Json | null
          id?: string
          processed?: boolean | null
          resourceId?: string | null
          resourceType?: string | null
          userId?: string | null
        }
        Update: {
          createdAt?: string | null
          data?: Json | null
          id?: string
          processed?: boolean | null
          resourceId?: string | null
          resourceType?: string | null
          userId?: string | null
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
          contactInfo: Json | null
          createdAt: string
          crmId: string
          dateOfBirth: string | null
          groupIds: string[] | null
          id: string
          metadata: Json | null
          name: string | null
          notes: string | null
          possessionDate: string | null
          updatedAt: string
        }
        Insert: {
          address?: Json | null
          contactInfo?: Json | null
          createdAt?: string
          crmId: string
          dateOfBirth?: string | null
          groupIds?: string[] | null
          id?: string
          metadata?: Json | null
          name?: string | null
          notes?: string | null
          possessionDate?: string | null
          updatedAt?: string
        }
        Update: {
          address?: Json | null
          contactInfo?: Json | null
          createdAt?: string
          crmId?: string
          dateOfBirth?: string | null
          groupIds?: string[] | null
          id?: string
          metadata?: Json | null
          name?: string | null
          notes?: string | null
          possessionDate?: string | null
          updatedAt?: string
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
      deals: {
        Row: {
          createdAt: string
          dealType: string
          id: string
          metadata: Json | null
          name: string
          status: string
          userId: string
        }
        Insert: {
          createdAt?: string
          dealType: string
          id?: string
          metadata?: Json | null
          name: string
          status: string
          userId: string
        }
        Update: {
          createdAt?: string
          dealType?: string
          id?: string
          metadata?: Json | null
          name?: string
          status?: string
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
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
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
}

