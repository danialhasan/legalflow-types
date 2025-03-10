"use strict";
/**
 * Unified Types for LegalFlow
 *
 * This package contains all shared types used across LegalFlow services:
 * - AI Service
 * - Communication Service
 * - Frontend
 *
 * These types are consolidated to prevent schema drift and type fragmentation
 * between services.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Export basic shared types
__exportStar(require("./basic"), exports);
// Export types for deals
__exportStar(require("./deals"), exports);
// Export document types
__exportStar(require("./documents"), exports);
// Export job types
__exportStar(require("./jobs"), exports);
// Export API types
__exportStar(require("./api"), exports);
// Export enum types
__exportStar(require("./enums"), exports);
