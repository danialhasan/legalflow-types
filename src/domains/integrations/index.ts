/**
 * Integrations Domain Types
 * 
 * Contains type definitions for the integrations schema tables and related types.
 * These types represent third-party integrations like Google services.
 */
import type { Database } from '../../generated/database';

// Schema type shorthand
export type IntegrationsSchema = Database['integrations']['Tables'];

// Table type exports - Row types
export type EmailAttachment = IntegrationsSchema['email_attachments']['Row'];
export type GoogleCalendarEvent = IntegrationsSchema['google_calendar_events']['Row'];
export type GoogleDataJob = IntegrationsSchema['google_data_jobs']['Row'];
export type GoogleEmail = IntegrationsSchema['google_emails']['Row'];
export type GoogleSyncStatus = IntegrationsSchema['google_sync_status']['Row'];
export type GoogleWebhookChannel = IntegrationsSchema['google_webhook_channels']['Row'];
export type GoogleWebhookNotification = IntegrationsSchema['google_webhook_notifications']['Row'];

// Table type exports - Insert types
export type EmailAttachmentInsert = IntegrationsSchema['email_attachments']['Insert'];
export type GoogleCalendarEventInsert = IntegrationsSchema['google_calendar_events']['Insert'];
export type GoogleDataJobInsert = IntegrationsSchema['google_data_jobs']['Insert'];
export type GoogleEmailInsert = IntegrationsSchema['google_emails']['Insert'];
export type GoogleSyncStatusInsert = IntegrationsSchema['google_sync_status']['Insert'];
export type GoogleWebhookChannelInsert = IntegrationsSchema['google_webhook_channels']['Insert'];
export type GoogleWebhookNotificationInsert = IntegrationsSchema['google_webhook_notifications']['Insert'];

// Table type exports - Update types
export type EmailAttachmentUpdate = IntegrationsSchema['email_attachments']['Update'];
export type GoogleCalendarEventUpdate = IntegrationsSchema['google_calendar_events']['Update'];
export type GoogleDataJobUpdate = IntegrationsSchema['google_data_jobs']['Update'];
export type GoogleEmailUpdate = IntegrationsSchema['google_emails']['Update'];
export type GoogleSyncStatusUpdate = IntegrationsSchema['google_sync_status']['Update'];
export type GoogleWebhookChannelUpdate = IntegrationsSchema['google_webhook_channels']['Update'];
export type GoogleWebhookNotificationUpdate = IntegrationsSchema['google_webhook_notifications']['Update']; 