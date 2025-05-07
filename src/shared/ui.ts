import { z } from 'zod';
/**
 * These types are used in two places:
 * 1. In the ai service, these are used as the structured output schemas for the
 * LLM to transform data from the views in the ui schema into display-compatible data.
 * 2. In the web app, these are used to type the components and stores managing and
 * representing this data.
 */

/* Action/Recommendation Types */
export const ActionChipSchema = z.object({
  label: z.string(),
  dueIso: z.string().nullable(),
  urgency: z.enum(['required', 'soon', 'optional']),
  icon: z.enum(['mail', 'shield', 'calendar', 'archive', 'other'])
});

export const RecommendationSchema = z.object({
  recommendationId: z.string(),
  label: z.string(),
  explanation: z.string(),
  dueIso: z.string().nullable(),
  urgency: z.enum(['required', 'soon', 'optional']),
  icon: z.enum(['mail', 'shield', 'calendar', 'archive', 'other']),
  status: z.enum(['pending', 'executed', 'dismissed'])
});

/* Client Types */
export const ClientStatusSchema = z.enum(['active', 'inactive', 'new']);

export const ClientDetailSchema = z.object({
  clientId: z.string(),
  status: ClientStatusSchema,
  clientSinceIso: z.string(),
  avatarLabel: z.string(),
  overviewParagraph: z.string(),
  contactInfo: z.array(z.lazy(() => ContactFieldSchema)),
  associatedDeals: z.array(z.lazy(() => MiniDealTagSchema)),
  financialSummary: z.array(z.lazy(() => MoneyItemSchema)),
  activityTimeline: z.array(z.lazy(() => TimelineEventSchema)),
  documents: z.array(z.lazy(() => DocumentItemSchema)),
  notes: z.array(z.lazy(() => NoteSchema)),
  recommendations: z.array(RecommendationSchema)
});

export const ClientCardSchema = z.object({
  clientId: z.string(),
  status: ClientStatusSchema,
  clientSinceIso: z.string(),
  name: z.string(),
  entityType: z.enum(['individual', 'business']),
  avatarLabel: z.string(),
  headlineoneLiner: z.string(),
  emailTag: z.string().nullable(),
  phoneTag: z.string().nullable(),
  associatedDeals: z.array(z.lazy(() => MiniDealTagSchema)),
  recommendedActions: z.array(ActionChipSchema)
});

export const ClientsInboxSchema = z.object({
  filters: z.lazy(() => ClientFilterSchema),
  cards: z.array(ClientCardSchema)
});

export const ClientFilterSchema = z.object({
  statusCounts: z.record(ClientStatusSchema, z.number()),
  searchQuery: z.string().nullable()
});

/* Deal Types */
export const DealStatusSchema = z.enum(['active', 'pending', 'completed']);

export const DealDetailSchema = z.object({
  dealId: z.string(),
  status: DealStatusSchema,
  lastUpdatedIso: z.string(),
  docuSignId: z.string().nullable(),
  summaryParagraph: z.string(),
  parties: z.array(z.lazy(() => PartySchema)),
  financialDetails: z.array(z.lazy(() => MoneyItemSchema)),
  keyDates: z.array(z.lazy(() => KeyDateSchema)),
  activityTimeline: z.array(z.lazy(() => TimelineEventSchema)),
  documents: z.array(z.lazy(() => DocumentItemSchema)),
  notes: z.array(z.lazy(() => NoteSchema)),
  recommendations: z.array(RecommendationSchema)
});

export const DealCardSchema = z.object({
  dealId: z.string(),
  status: DealStatusSchema,
  updatedAtIso: z.string(),
  headline: z.string(),
  oneLiner: z.string(),
  addressTag: z.string(),
  primaryClientTag: z.string(),
  recommendedActions: z.array(ActionChipSchema),
  avatarLabel: z.string()
});

export const DealsInboxSchema = z.object({
  filters: z.lazy(() => DealFilterSchema),
  cards: z.array(DealCardSchema)
});

export const DealFilterSchema = z.object({
  statusCounts: z.record(DealStatusSchema, z.number()),
  searchQuery: z.string().nullable()
});

export const MiniDealTagSchema = z.object({
  dealId: z.string(),
  label: z.string(),
  status: DealStatusSchema
});

/* Common UI Components */
export const ContactFieldSchema = z.object({
  label: z.union([
    z.enum(['Email', 'Phone', 'Address', 'Emergency Contact', 'DOB']),
    z.string()
  ]),
  value: z.string(),
  icon: z.enum(['email', 'phone', 'location', 'user', 'calendar', 'other'])
});

export const PartySchema = z.object({
  roleLabel: z.string(),
  name: z.string(),
  avatarLabel: z.string(),
  subText: z.string().nullable()
});

export const MoneyItemSchema = z.object({
  label: z.string(),
  amountFormatted: z.string()
});

export const KeyDateSchema = z.object({
  label: z.string(),
  dateIso: z.string(),
  highlight: z.enum(['soon', 'overdue']).nullable()
});

export const TimelineEventSchema = z.object({
  icon: z.enum(['mail', 'call', 'payment', 'doc', 'task', 'other']),
  title: z.string(),
  timestampIso: z.string(),
  snippet: z.string()
});

export const DocumentItemSchema = z.object({
  fileName: z.string(),
  fileSize: z.string(),
  uploadedIso: z.string(),
  url: z.string()
});

export const NoteSchema = z.object({
  noteId: z.string(),
  createdIso: z.string(),
  body: z.string(),
  sourceType: z.enum(['email', 'call', 'manual']),
  sourceUrl: z.string().nullable()
});

// Type inference
export type ActionChipUI = z.infer<typeof ActionChipSchema>;
export type RecommendationUI = z.infer<typeof RecommendationSchema>;
export type ClientStatus = z.infer<typeof ClientStatusSchema>;
export type ClientDetailUI = z.infer<typeof ClientDetailSchema>;
export type ClientCardUI = z.infer<typeof ClientCardSchema>;
export type ClientsInboxUI = z.infer<typeof ClientsInboxSchema>;
export type ClientFilterUI = z.infer<typeof ClientFilterSchema>;
export type DealStatus = z.infer<typeof DealStatusSchema>;
export type DealDetailUI = z.infer<typeof DealDetailSchema>;
export type DealCardUI = z.infer<typeof DealCardSchema>;
export type DealsInboxUI = z.infer<typeof DealsInboxSchema>;
export type DealFilterUI = z.infer<typeof DealFilterSchema>;
export type MiniDealTagUI = z.infer<typeof MiniDealTagSchema>;
export type ContactFieldUI = z.infer<typeof ContactFieldSchema>;
export type PartyUI = z.infer<typeof PartySchema>;
export type MoneyItemUI = z.infer<typeof MoneyItemSchema>;
export type KeyDateUI = z.infer<typeof KeyDateSchema>;
export type TimelineEventUI = z.infer<typeof TimelineEventSchema>;
export type DocumentItemUI = z.infer<typeof DocumentItemSchema>;
export type NoteUI = z.infer<typeof NoteSchema>;
