"use strict";
/**
 * @legalflow/types
 *
 * Unified database and domain types for LegalFlow services.
 * This package provides access to database types organized by domain
 * (schema), with snake_case preserved for database types.
 *
 * Case conversion should be handled at the service level, not in this package.
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deals = exports.JobsService = exports.AIService = exports.Telephony = exports.Sales = exports.Integrations = exports.Documents = exports.Core = exports.Compliance = exports.Assistant = exports.Analysis = exports.getTableRef = exports.Table = exports.Schema = void 0;
var constants_1 = require("./generated/constants");
Object.defineProperty(exports, "Schema", { enumerable: true, get: function () { return constants_1.Schema; } });
Object.defineProperty(exports, "Table", { enumerable: true, get: function () { return constants_1.Table; } });
Object.defineProperty(exports, "getTableRef", { enumerable: true, get: function () { return constants_1.getTableRef; } });
// Domain exports with namespace organization
exports.Analysis = __importStar(require("./domains/analysis"));
exports.Assistant = __importStar(require("./domains/assistant"));
exports.Compliance = __importStar(require("./domains/compliance"));
exports.Core = __importStar(require("./domains/core"));
exports.Documents = __importStar(require("./domains/documents"));
exports.Integrations = __importStar(require("./domains/integrations"));
exports.Sales = __importStar(require("./domains/sales"));
exports.Telephony = __importStar(require("./domains/telephony"));
// Shared types
__exportStar(require("./shared/constants"), exports);
__exportStar(require("./shared/enums"), exports);
__exportStar(require("./shared/primitives"), exports);
exports.AIService = __importStar(require("./shared/ai-service"));
exports.JobsService = __importStar(require("./shared/jobs-service"));
exports.Deals = __importStar(require("./shared/deals"));
// Utilities
__exportStar(require("./utils/schema-helpers"), exports);
