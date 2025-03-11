"use strict";
/**
 * Enums
 *
 * Contains enum types used across the application
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentGroupType = exports.EntityType = exports.ConfidenceLevel = exports.Priority = exports.CallOutcome = exports.LeadStatus = exports.CampaignStatus = exports.JobStatus = exports.DocumentClassification = exports.DocumentStatus = exports.DealType = exports.DealStatus = void 0;
/**
 * Deal status values
 */
var DealStatus;
(function (DealStatus) {
    DealStatus["DRAFT"] = "draft";
    DealStatus["ACTIVE"] = "active";
    DealStatus["PENDING"] = "pending";
    DealStatus["CLOSED"] = "closed";
    DealStatus["CANCELLED"] = "cancelled";
})(DealStatus || (exports.DealStatus = DealStatus = {}));
/**
 * Deal types
 */
var DealType;
(function (DealType) {
    DealType["REAL_ESTATE"] = "real_estate";
    DealType["CORPORATE"] = "corporate";
    DealType["LITIGATION"] = "litigation";
    DealType["INTELLECTUAL_PROPERTY"] = "intellectual_property";
    DealType["ESTATE_PLANNING"] = "estate_planning";
    DealType["IMMIGRATION"] = "immigration";
    DealType["OTHER"] = "other";
})(DealType || (exports.DealType = DealType = {}));
/**
 * Document status values
 */
var DocumentStatus;
(function (DocumentStatus) {
    DocumentStatus["UPLOADING"] = "uploading";
    DocumentStatus["PENDING"] = "pending";
    DocumentStatus["PROCESSING"] = "processing";
    DocumentStatus["PROCESSED"] = "processed";
    DocumentStatus["FAILED"] = "failed";
    DocumentStatus["DELETED"] = "deleted";
})(DocumentStatus || (exports.DocumentStatus = DocumentStatus = {}));
/**
 * Document classifications
 */
var DocumentClassification;
(function (DocumentClassification) {
    DocumentClassification["CONTRACT"] = "contract";
    DocumentClassification["AGREEMENT"] = "agreement";
    DocumentClassification["DEED"] = "deed";
    DocumentClassification["WILL"] = "will";
    DocumentClassification["POWER_OF_ATTORNEY"] = "power_of_attorney";
    DocumentClassification["COURT_FILING"] = "court_filing";
    DocumentClassification["LEGAL_BRIEF"] = "legal_brief";
    DocumentClassification["CORRESPONDENCE"] = "correspondence";
    DocumentClassification["INVOICE"] = "invoice";
    DocumentClassification["OTHER"] = "other";
})(DocumentClassification || (exports.DocumentClassification = DocumentClassification = {}));
/**
 * Job status values
 */
var JobStatus;
(function (JobStatus) {
    JobStatus["PENDING"] = "pending";
    JobStatus["QUEUED"] = "queued";
    JobStatus["IN_PROGRESS"] = "in_progress";
    JobStatus["PROCESSING"] = "processing";
    JobStatus["COMPLETED"] = "completed";
    JobStatus["FAILED"] = "failed";
    JobStatus["CANCELLED"] = "cancelled";
})(JobStatus || (exports.JobStatus = JobStatus = {}));
/**
 * Campaign status values
 */
var CampaignStatus;
(function (CampaignStatus) {
    CampaignStatus["DRAFT"] = "draft";
    CampaignStatus["SCHEDULED"] = "scheduled";
    CampaignStatus["ACTIVE"] = "active";
    CampaignStatus["PAUSED"] = "paused";
    CampaignStatus["COMPLETED"] = "completed";
    CampaignStatus["CANCELLED"] = "cancelled";
})(CampaignStatus || (exports.CampaignStatus = CampaignStatus = {}));
/**
 * Lead status values
 */
var LeadStatus;
(function (LeadStatus) {
    LeadStatus["NEW"] = "new";
    LeadStatus["CONTACTED"] = "contacted";
    LeadStatus["QUALIFIED"] = "qualified";
    LeadStatus["UNQUALIFIED"] = "unqualified";
    LeadStatus["CONVERTED"] = "converted";
    LeadStatus["LOST"] = "lost";
})(LeadStatus || (exports.LeadStatus = LeadStatus = {}));
/**
 * Call outcome values
 */
var CallOutcome;
(function (CallOutcome) {
    CallOutcome["COMPLETED"] = "completed";
    CallOutcome["VOICEMAIL"] = "voicemail";
    CallOutcome["NO_ANSWER"] = "no_answer";
    CallOutcome["BUSY"] = "busy";
    CallOutcome["SCHEDULED_CALLBACK"] = "scheduled_callback";
    CallOutcome["CANCELLED"] = "cancelled";
    CallOutcome["FAILED"] = "failed";
})(CallOutcome || (exports.CallOutcome = CallOutcome = {}));
/**
 * Priority levels
 */
var Priority;
(function (Priority) {
    Priority["CRITICAL"] = "critical";
    Priority["HIGH"] = "high";
    Priority["MEDIUM"] = "medium";
    Priority["LOW"] = "low";
    Priority["NONE"] = "none";
})(Priority || (exports.Priority = Priority = {}));
/**
 * Confidence levels for AI analysis
 */
var ConfidenceLevel;
(function (ConfidenceLevel) {
    ConfidenceLevel["VERY_HIGH"] = "very_high";
    ConfidenceLevel["HIGH"] = "high";
    ConfidenceLevel["MEDIUM"] = "medium";
    ConfidenceLevel["LOW"] = "low";
    ConfidenceLevel["VERY_LOW"] = "very_low";
})(ConfidenceLevel || (exports.ConfidenceLevel = ConfidenceLevel = {}));
/**
 * Entity types for people and organizations
 */
var EntityType;
(function (EntityType) {
    EntityType["INDIVIDUAL"] = "individual";
    EntityType["ORGANIZATION"] = "organization";
})(EntityType || (exports.EntityType = EntityType = {}));
/**
 * Document group types
 */
var DocumentGroupType;
(function (DocumentGroupType) {
    DocumentGroupType["DEAL"] = "deal";
    DocumentGroupType["CLIENT"] = "client";
    DocumentGroupType["CASE"] = "case";
    DocumentGroupType["PROJECT"] = "project";
    DocumentGroupType["GENERAL"] = "general";
})(DocumentGroupType || (exports.DocumentGroupType = DocumentGroupType = {}));
//# sourceMappingURL=enums.js.map