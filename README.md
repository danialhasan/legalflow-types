# LegalFlow Types

A unified TypeScript type library for LegalFlow services.

## Overview

This package contains all shared TypeScript types used across LegalFlow services:
- AI Service
- Communication Service
- Frontend

These types are consolidated to prevent schema drift and type fragmentation between services.

## Installation

```bash
npm install @legalflow/types
```

## Usage

Import types directly from the package:

```typescript
import { Deal, Client, Document } from '@legalflow/types';

// Use the types in your code
const deal: Deal = {
  id: '123',
  name: 'Example Deal',
  deal_type: 'real_estate',
  status: 'active',
  created_at: new Date().toISOString()
};
```

## Type Categories

The package is organized into several domain-specific modules:

- **Basic Types**: Common primitive types and interfaces (`basic.ts`)
- **API Types**: API request/response interfaces (`api.ts`)
- **Deal Types**: Deal-related interfaces (`deals.ts`)
- **Document Types**: Document-related interfaces (`documents.ts`)
- **Communication Types**: Email and calendar interfaces (`communication.ts`)
- **Client Types**: Client and CRM interfaces (`clients.ts`)
- **Job Types**: Background job interfaces (`jobs.ts`)
- **Enum Types**: Common enumerations (`enums.ts`)

## Development

### Building

```bash
npm run build
```

### Linting

```bash
npm run lint
```

### Formatting

```bash
npm run format
```

## Contributing

When adding or modifying types:

1. Place types in the appropriate domain-specific file
2. Ensure proper documentation with JSDoc comments
3. Maintain backward compatibility when possible
4. Update the index.ts file if adding new exports
5. Run linting and formatting before committing

## Versioning

This package follows semantic versioning:
- MAJOR version for incompatible API changes
- MINOR version for backward-compatible functionality
- PATCH version for backward-compatible bug fixes

## License

MIT 