"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
exports.Constants = {
    analysis: {
        Enums: {
            canon_block_tag: [
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
        Enums: {
            context_source_type: [
                "canon_block",
                "extracted_input",
                "email",
                "calendar_event",
                "document",
                "other",
            ],
            edit_depth: ["minor", "major", "complete_rewrite"],
            entity_type: ["deal", "client", "document"],
            interaction_type: [
                "accepted",
                "edited_then_accepted",
                "dismissed",
                "flagged",
                "deferred",
                "viewed_from_card",
                "viewed_from_list",
                "viewed_no_action",
                "hovered",
                "edit_in_progress",
                "edit_abandoned",
                "manual_action_before_rec",
                "status_changed_vs_ai",
                "recommendations_ignored",
                "alternative_path_taken",
                "recommendations_displayed",
            ],
            recommendation_execution_strategy: [
                "manual",
                "automatic",
                "informational",
            ],
            recommendation_executor: [
                "send_email",
                "schedule_calendar",
                "create_task",
                "post_crm_note",
            ],
            recommendation_status: [
                "pending",
                "executing",
                "executed",
                "failed",
                "dismissed",
            ],
            recommendation_type: ["email", "call", "document", "status_change"],
            ui_surface: ["modal", "card", "list", "focus_view", "manual"],
            user_feedback: ["accepted", "edited", "dismissed", "flagged"],
        },
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
    logs: {
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
    ui: {
        Enums: {},
    },
    usage_lens: {
        Enums: {},
    },
};
//# sourceMappingURL=database.js.map