/**
 * Sales Domain Types
 * 
 * Contains type definitions for the sales schema tables and related types.
 * These types represent sales activities, clients, and deals.
 */
import type { Database } from '../../generated/database';

// Schema type shorthand
export type SalesSchema = Database['sales']['Tables'];

// Table type exports - Row types
export type CampaignLead = SalesSchema['campaign_leads']['Row'];
export type Campaign = SalesSchema['campaigns']['Row'];
export type ClientMapping = SalesSchema['client_mappings']['Row'];
export type CRM = SalesSchema['crms']['Row'];
export type LeadDealMatch = SalesSchema['lead_deal_matches']['Row'];
export type Lead = SalesSchema['leads']['Row'];

// Table type exports - Insert types
export type CampaignLeadInsert = SalesSchema['campaign_leads']['Insert'];
export type CampaignInsert = SalesSchema['campaigns']['Insert'];
export type ClientMappingInsert = SalesSchema['client_mappings']['Insert'];
export type CRMInsert = SalesSchema['crms']['Insert'];
export type LeadDealMatchInsert = SalesSchema['lead_deal_matches']['Insert'];
export type LeadInsert = SalesSchema['leads']['Insert'];

// Table type exports - Update types
export type CampaignLeadUpdate = SalesSchema['campaign_leads']['Update'];
export type CampaignUpdate = SalesSchema['campaigns']['Update'];
export type ClientMappingUpdate = SalesSchema['client_mappings']['Update'];
export type CRMUpdate = SalesSchema['crms']['Update'];
export type LeadDealMatchUpdate = SalesSchema['lead_deal_matches']['Update'];
export type LeadUpdate = SalesSchema['leads']['Update']; 