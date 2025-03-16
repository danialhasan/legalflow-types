/**
 * Lead Types
 * 
 * Contains types related to sales leads, lead tracking, and scoring.
 * Aligned with the new schema structure where leads are stored in the sales schema.
 */
import { SalesTable } from './helpers';

/**
 * Lead from sales.leads table
 */
export type Lead = SalesTable<'leads'>;

/**
 * Lead-deal match from sales.lead_deal_matches table 
 */
export type LeadDealMatch = SalesTable<'lead_deal_matches'>;

/**
 * Lead status values
 */
export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'unqualified' | 'converted' | 'lost';

/**
 * Lead enrichment data from external sources
 */
export interface LeadEnrichmentData {
  /** Company information */
  company?: {
    /** Company name */
    name?: string;
    /** Company size (number of employees) */
    size?: number;
    /** Company industry */
    industry?: string;
    /** Company website */
    website?: string;
    /** Company address */
    address?: string;
    /** Company founding year */
    foundingYear?: number;
    /** Annual revenue */
    revenue?: string;
  };
  /** Personal information */
  personal?: {
    /** Job title */
    title?: string;
    /** Years at current company */
    yearsAtCompany?: number;
    /** Previous companies */
    previousCompanies?: string[];
    /** Education */
    education?: string[];
    /** Skills */
    skills?: string[];
    /** Social media profiles */
    socialProfiles?: Record<string, string>;
  };
  /** Lead engagement history */
  engagement?: {
    /** Previous engagements with company */
    previousEngagements?: string[];
    /** Last contact date */
    lastContactDate?: string;
    /** Engagement score (0-100) */
    engagementScore?: number;
  };
  /** Source of enrichment data */
  source?: string;
  /** When the data was last updated */
  lastUpdated?: string;
}