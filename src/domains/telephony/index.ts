/**
 * Telephony Domain Types
 * 
 * Contains type definitions for the telephony schema tables and related types.
 * These types represent call logs, events, and call scripts.
 */
import type { Database } from '../../generated/database';

// Schema type shorthand
export type TelephonySchema = Database['telephony']['Tables'];

// Table type exports - Row types
export type CallEvent = TelephonySchema['call_events']['Row'];
export type CallLog = TelephonySchema['call_logs']['Row'];
export type CallScript = TelephonySchema['call_scripts']['Row'];

// Table type exports - Insert types
export type CallEventInsert = TelephonySchema['call_events']['Insert'];
export type CallLogInsert = TelephonySchema['call_logs']['Insert'];
export type CallScriptInsert = TelephonySchema['call_scripts']['Insert'];

// Table type exports - Update types
export type CallEventUpdate = TelephonySchema['call_events']['Update'];
export type CallLogUpdate = TelephonySchema['call_logs']['Update'];
export type CallScriptUpdate = TelephonySchema['call_scripts']['Update']; 