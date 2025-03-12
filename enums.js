/**
 * Enums
 *
 * Contains enum types used across the application
 */
/**
 * Deal status values
 */
export var DealStatus;
(function (DealStatus) {
    DealStatus["DRAFT"] = "draft";
    DealStatus["ACTIVE"] = "active";
    DealStatus["PENDING"] = "pending";
    DealStatus["CLOSED"] = "closed";
    DealStatus["CANCELLED"] = "cancelled";
})(DealStatus || (DealStatus = {}));
/**
 * Deal types
 */
export var DealType;
(function (DealType) {
    DealType["REAL_ESTATE"] = "real_estate";
    DealType["CORPORATE"] = "corporate";
    DealType["LITIGATION"] = "litigation";
    DealType["INTELLECTUAL_PROPERTY"] = "intellectual_property";
    DealType["ESTATE_PLANNING"] = "estate_planning";
    DealType["IMMIGRATION"] = "immigration";
    DealType["OTHER"] = "other";
})(DealType || (DealType = {}));
/**
 * Document status values
 */
export var DocumentStatus;
(function (DocumentStatus) {
    DocumentStatus["UPLOADING"] = "uploading";
    DocumentStatus["PENDING"] = "pending";
    DocumentStatus["PROCESSING"] = "processing";
    DocumentStatus["PROCESSED"] = "processed";
    DocumentStatus["FAILED"] = "failed";
    DocumentStatus["DELETED"] = "deleted";
})(DocumentStatus || (DocumentStatus = {}));
/**
 * Document classifications
 */
export var DocumentClassification;
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
})(DocumentClassification || (DocumentClassification = {}));
/**
 * Job status values
 */
export var JobStatus;
(function (JobStatus) {
    JobStatus["PENDING"] = "pending";
    JobStatus["QUEUED"] = "queued";
    JobStatus["IN_PROGRESS"] = "in_progress";
    JobStatus["PROCESSING"] = "processing";
    JobStatus["COMPLETED"] = "completed";
    JobStatus["FAILED"] = "failed";
    JobStatus["CANCELLED"] = "cancelled";
})(JobStatus || (JobStatus = {}));
/**
 * Campaign status values
 */
export var CampaignStatus;
(function (CampaignStatus) {
    CampaignStatus["DRAFT"] = "draft";
    CampaignStatus["SCHEDULED"] = "scheduled";
    CampaignStatus["ACTIVE"] = "active";
    CampaignStatus["PAUSED"] = "paused";
    CampaignStatus["COMPLETED"] = "completed";
    CampaignStatus["CANCELLED"] = "cancelled";
})(CampaignStatus || (CampaignStatus = {}));
/**
 * Lead status values
 */
export var LeadStatus;
(function (LeadStatus) {
    LeadStatus["NEW"] = "new";
    LeadStatus["CONTACTED"] = "contacted";
    LeadStatus["QUALIFIED"] = "qualified";
    LeadStatus["UNQUALIFIED"] = "unqualified";
    LeadStatus["CONVERTED"] = "converted";
    LeadStatus["LOST"] = "lost";
})(LeadStatus || (LeadStatus = {}));
/**
 * Call outcome values
 */
export var CallOutcome;
(function (CallOutcome) {
    CallOutcome["COMPLETED"] = "completed";
    CallOutcome["VOICEMAIL"] = "voicemail";
    CallOutcome["NO_ANSWER"] = "no_answer";
    CallOutcome["BUSY"] = "busy";
    CallOutcome["SCHEDULED_CALLBACK"] = "scheduled_callback";
    CallOutcome["CANCELLED"] = "cancelled";
    CallOutcome["FAILED"] = "failed";
})(CallOutcome || (CallOutcome = {}));
/**
 * Priority levels
 */
export var Priority;
(function (Priority) {
    Priority["CRITICAL"] = "critical";
    Priority["HIGH"] = "high";
    Priority["MEDIUM"] = "medium";
    Priority["LOW"] = "low";
    Priority["NONE"] = "none";
})(Priority || (Priority = {}));
/**
 * Confidence levels for AI analysis
 */
export var ConfidenceLevel;
(function (ConfidenceLevel) {
    ConfidenceLevel["VERY_HIGH"] = "very_high";
    ConfidenceLevel["HIGH"] = "high";
    ConfidenceLevel["MEDIUM"] = "medium";
    ConfidenceLevel["LOW"] = "low";
    ConfidenceLevel["VERY_LOW"] = "very_low";
})(ConfidenceLevel || (ConfidenceLevel = {}));
/**
 * Entity types for people and organizations
 */
export var EntityType;
(function (EntityType) {
    EntityType["INDIVIDUAL"] = "individual";
    EntityType["ORGANIZATION"] = "organization";
})(EntityType || (EntityType = {}));
/**
 * Document group types
 */
export var DocumentGroupType;
(function (DocumentGroupType) {
    DocumentGroupType["DEAL"] = "deal";
    DocumentGroupType["CLIENT"] = "client";
    DocumentGroupType["CASE"] = "case";
    DocumentGroupType["PROJECT"] = "project";
    DocumentGroupType["GENERAL"] = "general";
})(DocumentGroupType || (DocumentGroupType = {}));
//# sourceMappingURL=enums.js.map