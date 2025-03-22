# LegalFlow Types

A domain-driven TypeScript type library for LegalFlow services.

## Overview

This package contains all shared TypeScript types used across LegalFlow services, organized by database schema domains:
- Analysis
- Assistant
- Compliance
- Core
- Documents
- Integrations  
- Sales
- Telephony

These types maintain a clean domain-driven structure to prevent schema drift and type fragmentation.

## Structure
```
src/
├── generated/          # Auto-generated files
│   ├── database.ts     # Database type definitions (from Supabase)
│   └── constants.ts    # Auto-generated schema/table constants
├── domains/            # Domain-specific types organized by schema
│   ├── analysis/
│   ├── assistant/
│   ├── compliance/
│   ├── core/
│   ├── documents/
│   ├── integrations/
│   ├── sales/
│   └── telephony/
├── shared/             # Truly shared types
│   ├── constants.ts    # Shared constants
│   ├── enums.ts        # Shared enums
│   └── primitives.ts   # Shared primitive types
├── utils/              # Utilities
│   └── schema-helpers.ts # Type utilities
└── index.ts            # Domain-based exports
```

## Case Conventions

This library follows a strict case convention approach:

1. **Database Types** - Strictly `snake_case`
   - All database table types maintain their original `snake_case` from the database
   - No automatic case conversion happens in this library
   - Example: `user_id`, `first_name`, `created_at`

2. **Case Conversion** - Handled at service boundaries
   - Each service is responsible for converting between snake_case and camelCase at DB boundaries
   - This library does not include any case conversion functionality

### Usage Pattern

```typescript
// Import domain namespace
import { Sales } from '@legalflow/types';

// Use table types in snake_case for DB operations
const deal: Sales.Deal = {
  id: 123,
  client_id: 456,
  deal_name: 'Example Deal',
  created_at: new Date().toISOString()
};

// In your service, convert to camelCase when needed
const dealDto = convertSnakeToCamel(deal);
// Result: { id: 123, clientId: 456, dealName: 'Example Deal', createdAt: '...' }
```

## Database Schema Constants

The library provides type-safe schema and table constants:

```typescript
import { Schema, Table, getTableRef } from '@legalflow/types';

// Reference schemas and tables in a type-safe way
const { schema, table } = getTableRef(Schema.SALES, Table.Sales.DEALS);
// Result: { schema: 'sales', table: 'deals' }

// Use in Supabase queries
await supabase.schema(schema).from(table).select('*');
```

## Domain-Based Import Pattern

The library exports each schema domain as a namespace:

```typescript
import { Sales, Documents, Core } from '@legalflow/types';

// Access types from specific domains
const deal: Sales.Deal = { /* ... */ };
const user: Core.User = { /* ... */ };
const doc: Documents.DocumentMetadata = { /* ... */ };
```

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