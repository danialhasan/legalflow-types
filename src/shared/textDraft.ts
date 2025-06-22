import { z } from 'zod';

export const TextDraftInputSchema = z.object({
  description: z.string().min(10, 'Description must be at least 10 characters'),
  mode: z.enum(['deal', 'client']),
  userId: z.string().uuid('User ID must be a valid UUID')
});

export const TextDraftOutputSchema = z.object({
  entityId: z.string().uuid(),
  title: z.string().min(5, 'Title must be at least 5 characters'),
  summary: z.string().max(500, 'Summary must be 500 characters or less'),
  mode: z.enum(['deal', 'client'])
});

export type TextDraftInput = z.infer<typeof TextDraftInputSchema>;
export type TextDraftOutput = z.infer<typeof TextDraftOutputSchema>;
