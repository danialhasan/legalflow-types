/**
 * Represents an error that can be thrown and caught
 */
export class AppError extends Error {
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
//# sourceMappingURL=api.js.map