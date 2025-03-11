"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
/**
 * Represents an error that can be thrown and caught
 */
class AppError extends Error {
    constructor(message, code, status = 500, details) {
        super(message);
        this.name = 'AppError';
        this.code = code;
        this.status = status;
        this.details = details;
    }
    toJSON() {
        return {
            error: {
                code: this.code,
                message: this.message,
                details: this.details,
            },
        };
    }
}
exports.AppError = AppError;
//# sourceMappingURL=api.js.map