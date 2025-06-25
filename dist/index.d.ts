/**
 * @legalflow/types
 *
 * Unified database and domain types for LegalFlow services.
 * This package provides access to database types organized by domain
 * (schema), with snake_case preserved for database types.
 *
 * Case conversion should be handled at the service level, not in this package.
 */
export type { DatabaseCamel } from './generated/databaseCamel';
export type { Database } from './generated/database';
export { Schema, Table, getTableRef } from './generated/constants';
export * as Analysis from './domains/analysis';
export * as Assistant from './domains/assistant';
export * as Compliance from './domains/compliance';
export * as Core from './domains/core';
export * as Documents from './domains/documents';
export * as Integrations from './domains/integrations';
export * as Sales from './domains/sales';
export * as Telephony from './domains/telephony';
export * from './shared/constants';
export * from './shared/enums';
export * from './shared/primitives';
export * as AIService from './shared/ai-service';
export * as JobsService from './shared/jobs-service';
export * as UI from './shared/ui';
export * from './shared/extracted-data';
export * from './shared/recommendation';
export * from './shared/emailPayload';
export * from './utils/schema-helpers';
