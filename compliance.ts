/**
 * Compliance Types
 * 
 * Contains types related to compliance reporting, citation tracking, and legal document analysis.
 * Aligned with the new schema structure where compliance data is stored in the compliance schema.
 */
import { Json } from './basic';
import { ComplianceTable } from './helpers';

/**
 * Citation from compliance.citations table
 */
export type Citation = ComplianceTable<'citations'>;

/**
 * Compliance report from compliance.compliance_reports table
 */
export type ComplianceReport = ComplianceTable<'compliance_reports'>;

/**
 * Compliance report status
 */
export type ComplianceReportStatus = 'in_progress' | 'completed' | 'failed' | 'needs_review';

/**
 * Compliance finding categories
 */
export type ComplianceFindingCategory = 
  | 'missing_clause'
  | 'conflicting_clause'
  | 'outdated_language'
  | 'regulatory_issue'
  | 'risk_exposure'
  | 'formatting_issue';

/**
 * Compliance finding severity
 */
export type ComplianceFindingSeverity = 'critical' | 'high' | 'medium' | 'low' | 'info';

/**
 * Compliance finding detail
 */
export interface ComplianceFinding {
  /** Finding ID */
  id: string;
  /** Finding category */
  category: ComplianceFindingCategory;
  /** Finding severity */
  severity: ComplianceFindingSeverity;
  /** Finding title */
  title: string;
  /** Finding description */
  description: string;
  /** Location in the document */
  location?: {
    /** Page number */
    page: number;
    /** Bounding box coordinates */
    bbox?: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
    /** Section reference */
    section?: string;
  };
  /** Recommended action */
  recommendedAction?: string;
  /** Reference to applicable regulations */
  regulatoryReference?: string;
  /** Risk level */
  riskLevel?: string;
}

/**
 * Compliance recommendation
 */
export interface ComplianceRecommendation {
  /** Recommendation ID */
  id: string;
  /** Related finding IDs */
  findingIds: string[];
  /** Recommendation priority */
  priority: 'critical' | 'high' | 'medium' | 'low';
  /** Recommendation title */
  title: string;
  /** Recommendation description */
  description: string;
  /** Implementation timeline */
  timeline?: string;
  /** Expected effort level */
  effort?: 'minimal' | 'moderate' | 'significant';
  /** Suggested language or clauses */
  suggestedText?: string;
}