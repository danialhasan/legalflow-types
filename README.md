# @legalflow/types

A domain-driven TypeScript type library for LegalFlow services with clear schema boundaries.

## Purpose

This package provides a clean, domain-driven type system for all LegalFlow database schemas, with:

- **Schema-based organization**: Types grouped by database schema
- **Clear boundaries**: Database types stay in `snake_case`, conversion happens in services
- **No transformations**: Pure type definitions without service-specific logic
- **No duplication**: Single source of truth for all database types
- **Consistent naming**: Predictable type patterns across all domains

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

## Installation

```bash
npm install @legalflow/types
```

## Usage

### Domain-Based Imports

Import types from specific domains:

```typescript
import { Sales, Documents, Core } from '@legalflow/types';

// Access types from specific domains
const deal: Sales.Deal = { /* ... */ };
const user: Core.User = { /* ... */ };
const doc: Documents.DocumentMetadata = { /* ... */ };
```

### Schema & Table References

Type-safe schema and table constants:

```typescript
import { Schema, Table, getTableRef } from '@legalflow/types';

// Reference schemas and tables in a type-safe way
const { schema, table } = getTableRef(Schema.SALES, Table.Sales.DEALS);
// Result: { schema: 'sales', table: 'deals' }

// Use in Supabase queries
await supabase.schema(schema).from(table).select('*');
```

### Case Convention

This library follows a strict case convention approach:

1. **Database Types**: All types are in `snake_case` to match the database
   ```typescript
   // Database type with snake_case properties
   const deal: Sales.Deal = {
     id: 123,
     client_id: 456,
     deal_name: 'Example Deal',
     created_at: new Date().toISOString()
   };
   ```

2. **Case Conversion**: Should happen at service boundaries
   ```typescript
   // In your service layer
   import { snakeToCamel } from 'case-anything';
   
   // Convert at DB boundary
   const dealDto = snakeToCamel(deal);
   // Result: { id: 123, clientId: 456, dealName: 'Example Deal', createdAt: '...' }
   ```

## Type Pattern

Each domain follows a consistent type pattern:

```typescript
// Row types (database rows)
export type Deal = SalesSchema['deals']['Row'];

// Insert types (for creating new records)
export type DealInsert = SalesSchema['deals']['Insert'];

// Update types (for updating existing records)
export type DealUpdate = SalesSchema['deals']['Update'];
```

## Contributing

When modifying this package:

1. **Maintain schema organization**: Keep domain types in correct schema folders
2. **Avoid service logic**: No transformations or mappings in this package
3. **Preserve case conventions**: Keep database types in `snake_case`
4. **Test thoroughly**: Ensure types work correctly in consuming services

## License

MIT 