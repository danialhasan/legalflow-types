import { z } from 'zod';

// Email payload schema for the new recommendation structure
export const EmailPayloadSchema = z.object({
  channel: z.literal('email'),
  meta: z.object({
    to: z
      .array(z.string().email())
      .min(1)
      .describe('Array of recipient email addresses'),
    cc: z
      .array(z.string().email())
      .nullable()
      .describe('Array of CC email addresses'),
    bcc: z
      .array(z.string().email())
      .nullable()
      .describe('Array of BCC email addresses'),
    replyTo: z.string().email().nullable().describe('Reply-to email address')
  }),
  template: z.object({
    subject: z.string().describe('Email subject line'),
    body: z.string().describe('Email body content')
  })
});

// TypeScript type derived from the Zod schema
export type EmailPayload = z.infer<typeof EmailPayloadSchema>;

// Helper type for the meta section
export type EmailMeta = EmailPayload['meta'];

// Helper type for the template section
export type EmailTemplate = EmailPayload['template'];
