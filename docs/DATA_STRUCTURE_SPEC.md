# Data Structure Specification

## Document Purpose

This specification defines the canonical data structure for Privacy Gecko's 8-product ecosystem, ensuring consistency across all codebases (Pricko.com and PrivacyGecko.com).

**CRITICAL**: All agents must follow this specification when working with product data, metrics, or ecosystem information.

---

## 1. Single Source of Truth

### 1.1 Primary Data Location

**File**: `/src/config/project-data.json`

**Authority**: This JSON file is the ONLY authoritative source for:
- Product names, descriptions, and features
- Metrics (user counts, ratings, progress percentages)
- Token economics and distribution
- Roadmap phases and milestones
- Development metrics
- Contact information
- Founder information
- Legal disclaimers

### 1.2 Data Access

**React Components**: Use `useProjectConfig()` hook
**Non-React Code**: Import `projectConfig` from hooks file
**External Systems**: Parse JSON directly

---

## 2. Product Data Schema

### 2.1 Core Product Fields

Every product MUST include these fields:

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | string | Yes | Unique kebab-case identifier | `"gecko-share"` |
| `name` | string | Yes | Official product name | `"Gecko Share"` |
| `subtitle` | string | Yes | One-line descriptor | `"Zero-Knowledge File Sharing"` |
| `category` | string | Yes | Product category | `"File Sharing"` |
| `status` | enum | Yes | Current status | `"live"` |
| `launchDate` | string | Yes | ISO date or placeholder | `"2024-08-01"` |
| `progress` | number | Yes | Completion percentage (0-100) | `100` |
| `metrics` | object | Yes | User metrics (see below) | `{ users: "2,100+", rating: "4.8" }` |
| `description` | string | Yes | Full description (2-3 sentences) | `"..."` |
| `features` | string[] | Yes | Array of feature descriptions | `["Feature 1", "Feature 2"]` |
| `security` | object | Yes | Security specifications (see below) | `{ encryption: "...", ... }` |
| `pricing` | object | Yes | Pricing tiers (see below) | `{ free: {...}, pro: {...} }` |
| `url` | string \| null | Yes | Product URL or null if not live | `"https://geckoshare.com"` |

### 2.2 Product Status Enum

**Valid Values**:
- `"live"` - Product is publicly available
- `"beta"` - Product in beta testing with users
- `"in-development"` - Product under active development
- `"coming-soon"` - Product planned but not started

**Rules**:
- Only ONE status allowed per product
- Status must match actual product state
- Status changes require update to `progress` field

### 2.3 Progress Percentage

**Rules**:
- Integer between 0-100
- `live` products: MUST be 100
- `beta` products: 75-95
- `in-development` products: 1-90
- `coming-soon` products: 0-10

**Calculation Guidelines**:
```
Progress = (Completed Milestones / Total Milestones) × 100

Example:
- Total milestones: 20
- Completed: 18
- Progress: (18/20) × 100 = 90%
```

### 2.4 Metrics Object Schema

```typescript
{
  "users": string,        // Human-readable user count (e.g., "2,100+")
  "rating": string | null, // Star rating (e.g., "4.8") or null if N/A

  // Optional fields (depending on product)
  "downloads"?: string,
  "activeInstallations"?: string,
  "filesShared"?: string,
  "activeUsers"?: number,
  "betaTesters"?: number,
  "platforms"?: string[],
  "estimatedLaunch"?: string
}
```

**Formatting Rules**:
- User counts: Use `"N,NNN+"` format (e.g., `"2,100+"`)
- Ratings: Use `"N.N"` format (e.g., `"4.8"`)
- Null ratings: For products without user reviews yet
- Numbers with commas: Always use for thousands (e.g., `"1,800+"`)

### 2.5 Security Object Schema

```typescript
{
  "encryption": string,        // Encryption method used
  "architecture": string,      // Security architecture description
  "auditStatus": string,       // Current audit status
  "openSource": string         // GitHub repository URL
}
```

**Example**:
```json
{
  "encryption": "AES-256-GCM end-to-end encryption",
  "architecture": "Zero-knowledge (server-side blind)",
  "auditStatus": "Security audit completed Q4 2024",
  "openSource": "https://github.com/privacygecko/gecko-share"
}
```

### 2.6 Pricing Object Schema

```typescript
{
  "free": {
    "available": boolean,       // Whether free tier exists
    "features": string[]        // List of free features
  },
  "pro": {
    "priceUSD": number | null,      // Monthly price in USD
    "tokenRequirement": string,     // Token requirement or placeholder
    "features": string[]            // List of pro features
  }
}
```

**Rules**:
- `priceUSD`: Actual dollar amount or null if TBD
- `tokenRequirement`: Placeholder until token economics finalized
- Features: Clear, benefit-focused descriptions
- Free tier may have `available: false` for some products

---

## 3. Ecosystem Summary Data

### 3.1 Ecosystem Metadata

At `ecosystem` root level:

```typescript
{
  "totalProducts": number,           // Total number of products (8)
  "liveProducts": number,            // Count of live products
  "betaProducts": number,            // Count of beta products
  "inDevelopmentProducts": number,   // Count of in-development products
  "products": Record<string, Product> // All products
}
```

**Consistency Rules**:
- `totalProducts` MUST equal count of products in `products` object
- Sum of `liveProducts + betaProducts + inDevelopmentProducts` MUST equal `totalProducts`
- Update counts when product status changes

### 3.2 Product Keys

Product keys in `products` object MUST be:
- Camel case (e.g., `geckoShare`, not `gecko-share`)
- Match product ID without hyphens
- Consistent across all references

**Mapping**:
```
Product ID → Product Key
--------------------------
gecko-share     → geckoShare
gecko-advisor   → geckoAdvisor
gecko-shell     → geckoShell
gecko-guard     → geckoGuard
gecko-lock      → geckoLock
gecko-view      → geckoView
gecko-vpn       → geckoVPN
gecko-watch     → geckoWatch
```

---

## 4. Token Data Schema

### 4.1 Token Information

```typescript
{
  "name": string,              // Token name (e.g., "PRICK")
  "symbol": string,            // Token symbol with $ (e.g., "$PRICK")
  "blockchain": string,        // Blockchain name (e.g., "Solana")
  "contractAddress": string,   // Address or placeholder
  "totalSupply": string,       // Total supply with commas (e.g., "1,000,000,000")
  "distribution": { ... },     // See below
  "utility": { ... },          // See below
  "disclaimers": { ... }       // See below
}
```

### 4.2 Distribution Schema

Each category in `distribution`:

```typescript
{
  "percentage": number,       // Percentage of total supply (0-100)
  "amount": string,           // Actual token amount with commas
  "description": string,      // Purpose of this allocation
  "vestingSchedule"?: string  // Optional vesting details
}
```

**Validation Rules**:
- Sum of all percentages MUST equal 100
- `amount` MUST equal `(percentage / 100) * totalSupply`
- Include vesting schedule for `development` and `team`

### 4.3 Utility Schema

```typescript
{
  "description": string,      // Overall utility description
  "benefits": string[]        // Array of specific benefits
}
```

**Benefits Format**:
- Start with action verb or noun
- Be specific and measurable when possible
- Focus on functional utility, not financial gain

### 4.4 Disclaimers Schema

```typescript
{
  "homepage": string,         // Disclaimer for homepage
  "tokenomics": string,       // Disclaimer for tokenomics page
  "roadmap": string           // Disclaimer for roadmap page
}
```

**Rules**:
- Each disclaimer MUST include risk warnings
- Must emphasize utility, not investment
- Follow LEGAL_COMPLIANCE_FRAMEWORK.md templates

---

## 5. Roadmap Data Schema

### 5.1 Roadmap Structure

```typescript
{
  "phases": RoadmapPhase[]    // Array of roadmap phases
}
```

### 5.2 RoadmapPhase Schema

```typescript
{
  "id": string,                      // Unique phase ID (e.g., "phase-1")
  "quarter": string,                 // Quarter label (e.g., "Q4 2024")
  "title": string,                   // Phase title
  "status": "completed" | "in-progress" | "upcoming",
  "milestones": Milestone[]          // Array of milestones
}
```

### 5.3 Milestone Schema

```typescript
{
  "title": string,                   // Milestone name
  "status": "completed" | "in-progress" | "upcoming",
  "date": string,                    // ISO date or placeholder
  "description": string              // Milestone description
}
```

**Date Format**:
- Completed milestones: Actual date (e.g., `"2024-08-01"`)
- Upcoming milestones: Placeholder (e.g., `"[Q2_2025_PLACEHOLDER]"`)

---

## 6. Development Metrics Schema

### 6.1 Metrics Object

```typescript
{
  "totalInvestment": string,         // Total investment or placeholder
  "linesOfCode": string,             // Total LOC or placeholder
  "betaTesters": number,             // Number of beta testers (sum across products)
  "githubStars": string,             // GitHub stars or placeholder
  "openSourceRepos": number,         // Number of open-source repos
  "securityAudits": number           // Number of completed audits
}
```

**Rules**:
- `betaTesters` MUST be sum of all product beta tester counts
- Update metrics regularly (monthly minimum)
- Use placeholders for sensitive data not yet public

### 6.2 Team Schema

```typescript
{
  "size": string,                    // Team size or placeholder
  "roles": string[]                  // Array of role descriptions
}
```

### 6.3 Tech Stack Schema

```typescript
{
  "frontend": string[],              // Frontend technologies
  "backend": string[],               // Backend technologies
  "mobile": string[],                // Mobile technologies
  "blockchain": string[],            // Blockchain technologies
  "security": string[]               // Security technologies
}
```

---

## 7. Community Data Schema

### 7.1 Community Metrics

```typescript
{
  "total": number,                   // Total community size
  "channels": {
    "twitter": string,               // Follower count or placeholder
    "telegram": string,              // Member count or placeholder
    "discord": string,               // Member count or placeholder
    "github": string                 // Follower count or placeholder
  }
}
```

**Rules**:
- `total` should reflect unique community members (avoid double-counting)
- Update channel counts monthly
- Use placeholders if channels not yet launched

---

## 8. Contact & Founder Data

### 8.1 Contact Schema

```typescript
{
  "general": string,                 // General contact email
  "support": string,                 // Support email
  "press": string,                   // Press inquiries email
  "partnerships": string,            // Partnership email
  "social": {
    "twitter": string,               // Twitter/X URL
    "telegram": string,              // Telegram group URL
    "discord": string,               // Discord server URL
    "github": string                 // GitHub organization URL
  }
}
```

### 8.2 Founder Schema

```typescript
{
  "name": string,                    // Founder name or placeholder
  "title": string,                   // Official title
  "bio": string,                     // Short bio or placeholder
  "background": string,              // Professional background or placeholder
  "linkedin": string,                // LinkedIn URL or placeholder
  "twitter": string                  // Twitter URL or placeholder
}
```

---

## 9. Validation Rules

### 9.1 Required Validations

Before committing changes to `project-data.json`:

- [ ] All required fields present for every product
- [ ] Status values are valid enums
- [ ] Progress percentages match status appropriately
- [ ] All URLs are valid (or explicitly null)
- [ ] Token distribution percentages sum to 100
- [ ] Ecosystem counts match actual product count
- [ ] Beta tester total matches sum of individual products
- [ ] All dates are ISO format or approved placeholders
- [ ] All disclaimers include risk warnings

### 9.2 TypeScript Validation

The configuration system provides compile-time validation:

```typescript
// This will cause TypeScript error if structure is invalid
import { useProjectConfig } from '../hooks/useProjectConfig';

const { config } = useProjectConfig();
const product = config.ecosystem.products.geckoShare;

// TypeScript knows product.status must be valid enum
if (product.status === 'invalid') { // TypeScript error!
  // ...
}
```

### 9.3 Runtime Validation

For critical operations, add runtime validation:

```typescript
function validateProduct(product: Product): boolean {
  // Check required fields
  if (!product.id || !product.name || !product.status) return false;

  // Validate progress range
  if (product.progress < 0 || product.progress > 100) return false;

  // Validate status enum
  const validStatuses = ['live', 'beta', 'in-development', 'coming-soon'];
  if (!validStatuses.includes(product.status)) return false;

  // Validate status-progress alignment
  if (product.status === 'live' && product.progress !== 100) return false;

  return true;
}
```

---

## 10. Data Update Process

### 10.1 When to Update Data

Update `project-data.json` when:
- Product status changes (e.g., beta → live)
- User metrics change significantly (>10% growth)
- New milestone is completed
- Product features are added/changed
- Token economics are finalized
- Contact information changes
- Legal disclaimers need updates

### 10.2 Update Checklist

When updating data:

1. **Identify what changed**
2. **Update project-data.json**
3. **Update `lastUpdated` field**
4. **Verify TypeScript types still match**
5. **Run linting**: `npm run lint`
6. **Test in development**: `npm run dev`
7. **Check UI rendering** in affected pages
8. **Commit with descriptive message**
9. **Notify other agents** of changes

### 10.3 Versioning

The configuration has a version field:

```json
{
  "version": "1.0.0",
  "lastUpdated": "2025-10-31"
}
```

**Version Bump Rules**:
- **Major (X.0.0)**: Breaking structure changes
- **Minor (1.X.0)**: New fields added (backward compatible)
- **Patch (1.0.X)**: Data value updates only

---

## 11. Consistency Enforcement

### 11.1 Data Consistency Guardian Role

The **Data Consistency Guardian Agent** is responsible for:
- Monitoring all changes to `project-data.json`
- Validating data against this specification
- Ensuring cross-site consistency (Pricko.com ↔ PrivacyGecko.com)
- Flagging inconsistencies to Orchestrator
- Running periodic consistency audits

### 11.2 Audit Frequency

- **Continuous**: Every commit with data changes
- **Daily**: Quick spot-check of key metrics
- **Weekly**: Full structure validation
- **Monthly**: Cross-site consistency check

### 11.3 Inconsistency Response

If inconsistency is found:

1. **Flag severity**:
   - CRITICAL: Contradictory token info, wrong product status
   - HIGH: Mismatched metrics, broken URLs
   - MEDIUM: Outdated copy, minor discrepancies
   - LOW: Formatting inconsistencies

2. **Create issue report** (see ORCHESTRATOR prompt)

3. **Assign to appropriate agent** for fix

4. **Verify fix** before closing issue

---

## 12. Common Patterns & Examples

### 12.1 Adding a New Product

```json
{
  "geckoNewProduct": {
    "id": "gecko-new-product",
    "name": "GeckoNewProduct",
    "subtitle": "Short description",
    "category": "Category Name",
    "status": "in-development",
    "launchDate": "[Q3_2025_PLACEHOLDER]",
    "progress": 15,
    "metrics": {
      "users": "In Development",
      "rating": null,
      "estimatedLaunch": "Q3 2025"
    },
    "description": "Full description here...",
    "features": [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
    "security": {
      "encryption": "Encryption method",
      "architecture": "Architecture description",
      "auditStatus": "Security review planned Q3 2025",
      "openSource": "https://github.com/privacygecko/gecko-new-product"
    },
    "pricing": {
      "free": {
        "available": true,
        "features": ["Free feature 1", "Free feature 2"]
      },
      "pro": {
        "priceUSD": null,
        "tokenRequirement": "[PLACEHOLDER_TOKEN_AMOUNT]",
        "features": ["Pro feature 1", "Pro feature 2"]
      }
    },
    "url": null
  }
}
```

**Then update ecosystem counts**:
```json
{
  "ecosystem": {
    "totalProducts": 9,  // Was 8
    "inDevelopmentProducts": 6  // Was 5
  }
}
```

### 12.2 Promoting Product to Live

```json
{
  "geckoGuard": {
    "status": "live",           // Changed from "in-development"
    "launchDate": "2025-01-15", // Changed from placeholder
    "progress": 100,            // Changed from 90
    "metrics": {
      "users": "Live & Available", // Changed from "Extension Store Review"
      "rating": null              // Will update after user reviews
    },
    "url": "https://geckoguard.com" // Changed from null
  }
}
```

**Then update ecosystem counts**:
```json
{
  "ecosystem": {
    "liveProducts": 3,           // Was 2
    "inDevelopmentProducts": 4   // Was 5
  }
}
```

### 12.3 Updating Metrics

```json
{
  "geckoShare": {
    "metrics": {
      "users": "3,500+",          // Updated from "2,100+"
      "rating": "4.9",            // Updated from "4.8"
      "activeUsers": 3500,        // Updated from 2100
      "filesShared": "125,000+"   // New field added
    }
  }
}
```

---

## 13. Migration & Deprecation

### 13.1 When Structure Changes

If you need to change the data structure:

1. **Create migration plan**
2. **Update TypeScript types first**
3. **Update JSON data**
4. **Update useProjectConfig hook** if needed
5. **Update all consuming components**
6. **Test thoroughly**
7. **Bump major version**
8. **Document breaking changes**

### 13.2 Deprecating Fields

To deprecate a field:

1. **Mark as deprecated** in types:
```typescript
export interface Product {
  /** @deprecated Use newField instead */
  oldField?: string;
  newField: string;
}
```

2. **Keep old field** for backward compatibility
3. **Update all usages** to new field
4. **Remove old field** in next major version

---

## 14. Testing & Quality Assurance

### 14.1 Manual Testing Checklist

After data updates:

- [ ] Homepage displays correctly
- [ ] Tools page shows all products
- [ ] Tokenomics page shows distribution
- [ ] Roadmap page shows phases
- [ ] All metrics render properly
- [ ] No console errors
- [ ] Mobile responsive
- [ ] All links work

### 14.2 Automated Testing

Consider adding tests:

```typescript
describe('Project Config', () => {
  it('should have 8 products', () => {
    const { config } = useProjectConfig();
    expect(Object.keys(config.ecosystem.products).length).toBe(8);
  });

  it('should have valid product statuses', () => {
    const { getAllProducts } = useProjectConfig();
    const products = getAllProducts();
    const validStatuses = ['live', 'beta', 'in-development', 'coming-soon'];

    products.forEach(product => {
      expect(validStatuses).toContain(product.status);
    });
  });

  it('should have consistent ecosystem counts', () => {
    const { config, getProductCounts } = useProjectConfig();
    const counts = getProductCounts();

    expect(counts.total).toBe(config.ecosystem.totalProducts);
    expect(counts.live + counts.beta + counts.inDevelopment).toBe(counts.total);
  });
});
```

---

## 15. Contact & Support

**Questions about data structure?**
- Review this document first
- Check `/docs/CONFIGURATION.md` for usage examples
- Contact Data Consistency Guardian Agent
- Escalate to Orchestrator if uncertain

**Report inconsistencies**:
- Create issue with `[data-consistency]` tag
- Include: What's wrong, where it's wrong, suggested fix
- Tag Data Consistency Guardian Agent

---

**Document Version**: 1.0.0
**Last Updated**: 2025-10-31
**Next Review**: 2025-11-15
**Maintained By**: Data Consistency Guardian Agent + Project Orchestrator
