# Configuration System Documentation

## Overview

The Privacy Gecko project uses a centralized JSON configuration system to manage all dynamic data across the application. This ensures consistency, maintainability, and makes updates simple and reliable.

## Architecture

### Files

1. **`/src/config/project-data.json`** - Single source of truth for all project data
2. **`/src/types/config.ts`** - TypeScript interfaces matching the JSON structure
3. **`/src/hooks/useProjectConfig.ts`** - React hook providing type-safe access to configuration

### Design Principles

- **Single Source of Truth**: All dynamic data lives in one place
- **Type Safety**: Full TypeScript support prevents errors
- **Easy Updates**: Change JSON, changes reflect everywhere
- **No Hardcoding**: Components pull from config, not hardcoded values
- **Validation**: TypeScript ensures data structure integrity

## Usage

### In React Components

```typescript
import { useProjectConfig } from '../hooks/useProjectConfig';

function MyComponent() {
  const { config, getProduct, getLiveProducts } = useProjectConfig();

  // Access project info
  const projectName = config.project.name;
  const tagline = config.project.tagline;

  // Access token info
  const tokenSymbol = config.token.symbol;
  const totalSupply = config.token.totalSupply;

  // Get specific product
  const geckoShare = getProduct('geckoShare');

  // Get filtered products
  const liveProducts = getLiveProducts();
  const betaProducts = getBetaProducts();
  const inDevProducts = getInDevelopmentProducts();

  // Get token disclaimers
  const disclaimer = getTokenDisclaimer('homepage');

  return (
    <div>
      <h1>{projectName}</h1>
      <p>{tagline}</p>
      <p>Token: {tokenSymbol}</p>
    </div>
  );
}
```

### In Non-React Contexts

```typescript
import { projectConfig } from '../hooks/useProjectConfig';

// Direct access to config
const tokenSymbol = projectConfig.token.symbol;
const products = Object.values(projectConfig.ecosystem.products);
```

## Configuration Structure

### Top-Level Sections

```json
{
  "project": { ... },           // Project metadata
  "token": { ... },             // Token economics & disclaimers
  "ecosystem": { ... },         // All 8 products
  "roadmap": { ... },           // Timeline & milestones
  "development": { ... },       // Dev metrics & tech stack
  "investmentThesis": { ... },  // Market data & projections
  "community": { ... },         // Community size & channels
  "contact": { ... },           // Contact info & social links
  "founder": { ... },           // Founder information
  "legal": { ... }              // Legal disclaimers & compliance
}
```

### Product Structure

Each product in `ecosystem.products` contains:

```typescript
{
  "id": "gecko-share",
  "name": "Gecko Share",
  "subtitle": "Zero-Knowledge File Sharing",
  "category": "File Sharing",
  "status": "live",              // "live" | "beta" | "in-development" | "coming-soon"
  "launchDate": "2024-08-01",
  "progress": 100,               // 0-100 percentage
  "metrics": {
    "users": "2,100+",
    "rating": "4.8",
    // ... other metrics
  },
  "description": "...",
  "features": [...],
  "security": { ... },
  "pricing": {
    "free": { ... },
    "pro": { ... }
  },
  "url": "https://geckoshare.com"
}
```

## Helper Functions Reference

### Product Queries

| Function | Description | Returns |
|----------|-------------|---------|
| `getProduct(id)` | Get specific product by ID | `Product \| undefined` |
| `getAllProducts()` | Get all products | `Product[]` |
| `getProductsByStatus(status)` | Filter by status | `Product[]` |
| `getLiveProducts()` | Get live products | `Product[]` |
| `getBetaProducts()` | Get beta products | `Product[]` |
| `getInDevelopmentProducts()` | Get in-dev products (sorted by progress) | `Product[]` |
| `getHomepageProducts(max)` | Get live + beta + top N in-dev | `Product[]` |
| `getProductCounts()` | Get count by status | `Object` |
| `productHasFeature(id, feature)` | Check if product has feature | `boolean` |

### Roadmap Queries

| Function | Description | Returns |
|----------|-------------|---------|
| `getRoadmapByStatus(status)` | Filter phases by status | `RoadmapPhase[]` |
| `getCompletedPhases()` | Get completed phases | `RoadmapPhase[]` |
| `getCurrentPhases()` | Get in-progress phases | `RoadmapPhase[]` |
| `getUpcomingPhases()` | Get upcoming phases | `RoadmapPhase[]` |

### Utility Functions

| Function | Description | Returns |
|----------|-------------|---------|
| `getTokenDisclaimer(context)` | Get disclaimer for page | `string` |
| `getFormattedMetrics()` | Get formatted community metrics | `Object` |

### Direct Access Properties

The hook also provides direct access to commonly used values:

```typescript
const {
  tokenSymbol,        // "$PRICK"
  tokenName,          // "PRICK"
  projectName,        // "Privacy Gecko"
  projectTagline,     // Project tagline
  foundedYear,        // 2024
  contactEmail,       // "contact@privacygecko.com"
  socialLinks         // { twitter, telegram, discord, github }
} = useProjectConfig();
```

## Updating Configuration

### Step 1: Edit project-data.json

Make changes to `/src/config/project-data.json`:

```json
{
  "ecosystem": {
    "products": {
      "geckoShare": {
        "metrics": {
          "users": "3,500+",  // Updated from 2,100+
          "rating": "4.9"     // Updated from 4.8
        }
      }
    }
  }
}
```

### Step 2: Verify TypeScript Types

If you change the structure (not just values), update `/src/types/config.ts`:

```typescript
export interface ProductMetrics {
  users: string;
  rating: string | null;
  // Add new field if needed
  newField?: string;
}
```

### Step 3: Test Changes

Run the development server and verify changes appear:

```bash
npm run dev
```

### Step 4: TypeScript Validation

Run linting to ensure type safety:

```bash
npm run lint
```

## Placeholder System

The configuration uses placeholders for values that need to be filled in:

- `[PLACEHOLDER_*]` - Generic placeholder
- `[TO_BE_ANNOUNCED]` - Information not yet public
- `[Q1_2025_PLACEHOLDER]` - Date placeholders
- `[PLACEHOLDER_NUMBER]` - Numeric values to be updated

### Finding Placeholders

Search the JSON file for placeholders:

```bash
grep -r "PLACEHOLDER" src/config/project-data.json
```

### Replacing Placeholders

1. Identify the placeholder
2. Replace with actual value
3. Keep the same data type (string, number, etc.)
4. Test the change in the UI

## Data Consistency Rules

### Products

1. **Status values**: Must be `"live"`, `"beta"`, `"in-development"`, or `"coming-soon"`
2. **Progress**: 0-100 integer representing completion percentage
3. **Rating**: String (e.g., `"4.8"`) or `null` if not applicable
4. **URLs**: String URL or `null` if not yet available

### Dates

1. Use ISO date format: `"YYYY-MM-DD"` (e.g., `"2024-08-01"`)
2. Use quarter placeholders: `"[Q1_2025_PLACEHOLDER]"` for TBD dates

### Numbers

1. Keep consistent formatting:
   - User counts: `"2,100+"` (with comma separator and plus)
   - Large numbers: `"1,000,000,000"` (with commas)
2. Store as strings for display formatting control

### Token Amounts

1. Always include unit (tokens/USD)
2. Use consistent formatting
3. Mark uncertain values with placeholders

## Best Practices

### DO

✅ Always use `useProjectConfig()` hook in components
✅ Pull data from config, never hardcode
✅ Update `lastUpdated` field when making changes
✅ Test changes locally before committing
✅ Keep types in sync with JSON structure
✅ Use placeholders for uncertain values
✅ Document any new fields added

### DON'T

❌ Hardcode product names, metrics, or dates in components
❌ Duplicate data in multiple places
❌ Modify config.ts types without updating JSON
❌ Use arbitrary status values outside the defined set
❌ Store sensitive data (private keys, passwords) in config
❌ Commit real wallet addresses until launch

## Examples

### Display Product Grid

```typescript
function ProductGrid() {
  const { getHomepageProducts } = useProjectConfig();
  const products = getHomepageProducts(4);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          name={product.name}
          description={product.description}
          status={product.status}
          url={product.url}
        />
      ))}
    </div>
  );
}
```

### Display Token Disclaimer

```typescript
function TokenomicsPage() {
  const { getTokenDisclaimer, config } = useProjectConfig();
  const disclaimer = getTokenDisclaimer('tokenomics');

  return (
    <div>
      <h1>Tokenomics</h1>
      <p>Total Supply: {config.token.totalSupply}</p>
      <div className="disclaimer">{disclaimer}</div>
    </div>
  );
}
```

### Filter Products by Status

```typescript
function ToolsPage() {
  const { getLiveProducts, getBetaProducts, getInDevelopmentProducts } = useProjectConfig();

  const liveTools = getLiveProducts();
  const betaTools = getBetaProducts();
  const inDevTools = getInDevelopmentProducts();

  return (
    <div>
      <section>
        <h2>Live Tools</h2>
        {liveTools.map(tool => <ToolCard key={tool.id} {...tool} />)}
      </section>
      <section>
        <h2>Beta Tools</h2>
        {betaTools.map(tool => <ToolCard key={tool.id} {...tool} />)}
      </section>
      <section>
        <h2>In Development</h2>
        {inDevTools.map(tool => (
          <ToolCard key={tool.id} {...tool} progress={tool.progress} />
        ))}
      </section>
    </div>
  );
}
```

### Display Roadmap

```typescript
function RoadmapPage() {
  const { config } = useProjectConfig();
  const phases = config.roadmap.phases;

  return (
    <div>
      {phases.map(phase => (
        <div key={phase.id}>
          <h2>{phase.title} - {phase.quarter}</h2>
          <p>Status: {phase.status}</p>
          {phase.milestones.map(milestone => (
            <div key={milestone.title}>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
              <span>{milestone.date}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
```

## Validation

### Type Checking

TypeScript will catch type errors:

```typescript
// ✅ Correct
const product = getProduct('geckoShare');
if (product) {
  console.log(product.name); // TypeScript knows this is a string
}

// ❌ Error - TypeScript catches this
const product = getProduct('geckoShare');
console.log(product.invalidField); // Error: Property doesn't exist
```

### Runtime Validation

Add runtime checks for critical data:

```typescript
function validateProduct(product: Product): boolean {
  if (!product.id || !product.name) return false;
  if (product.progress < 0 || product.progress > 100) return false;
  if (!['live', 'beta', 'in-development', 'coming-soon'].includes(product.status)) return false;
  return true;
}
```

## Migration from Old System

### Before (Hardcoded)

```typescript
// ❌ Old way - hardcoded
function Hero() {
  return (
    <div>
      <h1>Privacy Gecko</h1>
      <p>2,100+ Active Users</p>
      <p>8 Privacy Tools</p>
    </div>
  );
}
```

### After (Configuration)

```typescript
// ✅ New way - configuration
function Hero() {
  const { projectName, config, getProductCounts } = useProjectConfig();
  const counts = getProductCounts();

  return (
    <div>
      <h1>{projectName}</h1>
      <p>{config.ecosystem.products.geckoShare.metrics.users} Active Users</p>
      <p>{counts.total} Privacy Tools</p>
    </div>
  );
}
```

## Troubleshooting

### TypeScript Errors

**Problem**: "Property does not exist on type..."

**Solution**: Check that `/src/types/config.ts` interfaces match JSON structure. Rebuild TypeScript cache: `npm run dev -- --force`

### Hook Errors

**Problem**: "Cannot use hook outside of component"

**Solution**: Only use `useProjectConfig()` inside React components. Use `projectConfig` direct export for non-React code.

### JSON Parse Errors

**Problem**: "Unexpected token in JSON"

**Solution**: Validate JSON syntax at [jsonlint.com](https://jsonlint.com). Check for trailing commas, missing quotes, etc.

### Data Not Updating

**Problem**: Changed JSON but UI doesn't update

**Solution**:
1. Hard refresh browser (Cmd+Shift+R)
2. Restart dev server (`npm run dev`)
3. Clear Vite cache and restart

## Future Enhancements

### Planned Features

1. **JSON Schema Validation**: Automatic validation against schema
2. **Admin Dashboard**: UI for editing configuration
3. **Versioning**: Track configuration changes over time
4. **Environment Configs**: Different configs for dev/staging/prod
5. **Remote Config**: Load config from API for dynamic updates

### Contributing

When adding new configuration fields:

1. Update `/src/config/project-data.json`
2. Add TypeScript types to `/src/types/config.ts`
3. Add helper functions to `useProjectConfig.ts` if needed
4. Document changes in this file
5. Update examples if applicable
6. Test thoroughly before committing

## Contact

For questions about the configuration system:

- **Developer Contact**: See `/docs/TEAM.md`
- **Issues**: Create GitHub issue with `[config]` tag
- **Documentation**: This file is the source of truth

---

**Last Updated**: 2025-10-31
**Version**: 1.0.0
**Maintainer**: Pricko Web Developer Agent
