# Product Pages Implementation Plan

This document outlines the complete implementation plan for 8 individual product pages on the PRICKO website.

## Overview

Create dedicated landing pages for each product in the Privacy Gecko ecosystem with SEO optimization, structured data, and conversion tracking.

## Product List & Routes

| Product | Route | Status | Priority |
|---------|-------|--------|----------|
| Gecko Advisor | `/gecko-advisor` | Live | P0 |
| Gecko Share | `/gecko-share` | Live | P0 |
| Gecko Shell | `/gecko-shell` | Beta | P1 |
| Gecko Guard | `/gecko-guard` | In Development | P1 |
| Gecko Lock | `/gecko-lock` | In Development | P2 |
| Gecko Watch | `/gecko-watch` | In Development | P2 |
| Gecko View | `/gecko-view` | In Development | P2 |
| Gecko VPN | `/gecko-vpn` | In Development | P2 |

## Component Architecture

### 1. Shared Components

#### ProductPageHero.tsx
```tsx
// Hero section with mascot, title, status badge, CTA
interface ProductPageHeroProps {
  productName: string;
  subtitle: string;
  status: 'live' | 'beta' | 'in-development';
  ctaText: string;
  ctaUrl?: string;
  onCtaClick: () => void;
}
```

#### ProductFeatures.tsx
```tsx
// Features grid with icons
interface ProductFeaturesProps {
  features: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
}
```

#### ProductSecurity.tsx
```tsx
// Security & privacy section
interface ProductSecurityProps {
  encryption: string;
  architecture: string;
  auditStatus: string;
  openSource?: string;
}
```

#### ProductPricing.tsx
```tsx
// Pricing tiers (Free vs Pro)
interface ProductPricingProps {
  free: {
    available: boolean;
    features: string[];
  };
  pro: {
    priceUSD: number;
    tokenRequirement: string;
    features: string[];
  };
}
```

#### ProductTestimonials.tsx
```tsx
// Filtered testimonials for specific product
interface ProductTestimonialsProps {
  productName: string;
}
```

### 2. Page Template Structure

Each product page should follow this structure:

```tsx
<div>
  {/* SEO Component with meta tags */}
  <SEO 
    title="{ProductName} - Privacy Gecko"
    description="{Product description}"
    url="https://pricko.com/{product-route}"
    schema={productSchema}
  />

  {/* Hero Section */}
  <ProductPageHero {...heroProps} />

  {/* Features Section */}
  <section className="py-20 bg-secondary">
    <ProductFeatures features={features} />
  </section>

  {/* How It Works Section */}
  <section className="py-20">
    <HowItWorks steps={steps} />
  </section>

  {/* Security & Privacy Section */}
  <section className="py-20 bg-secondary">
    <ProductSecurity {...securityProps} />
  </section>

  {/* Pricing Section */}
  <section className="py-20">
    <ProductPricing {...pricingProps} />
  </section>

  {/* Testimonials Section */}
  <section className="py-20 bg-secondary">
    <ProductTestimonials productName={productName} />
  </section>

  {/* FAQ Section */}
  <section className="py-20">
    <ProductFAQ faqs={faqs} />
  </section>

  {/* Footer CTA */}
  <section className="py-16 bg-gradient-to-r from-accent/20 to-accent/10">
    <FooterCTA 
      backLink="/tools"
      primaryAction={ctaAction}
    />
  </section>
</div>
```

## Structured Data (Schema.org)

Each product page must include Product schema:

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Gecko Advisor",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  }
}
```

## SEO Requirements per Page

### Meta Tags
- Title: "{ProductName} - Privacy-First {Category} | Privacy Gecko"
- Description: 150-160 characters highlighting key features and benefits
- Keywords: Product-specific + privacy + category
- OG Image: Product-specific image (create branded social cards)

### Canonical URLs
- All product pages must have canonical URLs
- Format: `https://pricko.com/{product-slug}`

### Internal Linking
- Link to /tools (Tools overview)
- Link to /tokenomics (Premium access info)
- Link to /how-to-buy (Token acquisition)
- Cross-link to related products

## Analytics Events

Each product page must track:

1. **Page View** (useEffect on mount)
   ```tsx
   useEffect(() => {
     trackConversion.productPageView('Gecko Advisor');
   }, []);
   ```

2. **Primary CTA** ("Try Now" / "Join Waitlist")
   ```tsx
   onClick={() => trackConversion.productPageCTA('Gecko Advisor', 'Try Now')}
   ```

3. **External Links** (to live product)
   ```tsx
   onClick={() => trackConversion.externalToolClick('Gecko Advisor', 'Product Page')}
   ```

## Data Sources

All product data should be pulled from:
`/src/config/project-data.json`

Example data structure used:
```json
{
  "ecosystem": {
    "products": {
      "geckoAdvisor": {
        "id": "gecko-advisor",
        "name": "Gecko Advisor",
        "subtitle": "Website Privacy Scanner",
        "status": "live",
        "features": [...],
        "security": {...},
        "pricing": {...},
        "url": "https://geckoadvisor.com"
      }
    }
  }
}
```

## Implementation Steps

### Phase 1: Shared Components (2 hours)
1. Create ProductPageHero.tsx
2. Create ProductFeatures.tsx
3. Create ProductSecurity.tsx
4. Create ProductPricing.tsx
5. Create ProductTestimonials.tsx
6. Create ProductFAQ.tsx
7. Create HowItWorks.tsx
8. Create FooterCTA.tsx

### Phase 2: Individual Pages (3-4 hours)
1. Gecko AdvisorPage.tsx (Live - highest priority)
2. Gecko SharePage.tsx (Live - highest priority)
3. Gecko ShellPage.tsx (Beta)
4. Gecko GuardPage.tsx (In Development)
5. Gecko LockPage.tsx (In Development)
6. Gecko WatchPage.tsx (In Development)
7. Gecko ViewPage.tsx (In Development)
8. Gecko VPNPage.tsx (In Development)

### Phase 3: Routing & SEO (1 hour)
1. Update App.tsx with all 8 routes
2. Update sitemap.xml with all 8 URLs
3. Add structured data to each page
4. Test all routes locally

### Phase 4: Testing & Validation (1 hour)
1. Build production bundle
2. Test all routes
3. Verify analytics tracking
4. Check mobile responsiveness
5. Validate SEO meta tags
6. Run Lighthouse audit

## File Locations

```
/src/components/products/
├── ProductPageHero.tsx
├── ProductFeatures.tsx
├── ProductSecurity.tsx
├── ProductPricing.tsx
├── ProductTestimonials.tsx
├── ProductFAQ.tsx
├── HowItWorks.tsx
└── FooterCTA.tsx

/src/pages/products/
├── Gecko AdvisorPage.tsx
├── Gecko SharePage.tsx
├── Gecko ShellPage.tsx
├── Gecko GuardPage.tsx
├── Gecko LockPage.tsx
├── Gecko WatchPage.tsx
├── Gecko ViewPage.tsx
└── Gecko VPNPage.tsx
```

## Sitemap Updates

Add to `/public/sitemap.xml`:

```xml
<url>
  <loc>https://pricko.com/gecko-advisor</loc>
  <lastmod>2025-10-31</lastmod>
  <priority>0.8</priority>
  <changefreq>weekly</changefreq>
</url>
<url>
  <loc>https://pricko.com/gecko-share</loc>
  <lastmod>2025-10-31</lastmod>
  <priority>0.8</priority>
  <changefreq>weekly</changefreq>
</url>
<!-- ... 6 more product pages -->
```

## App.tsx Routing Updates

```tsx
// Import product pages
const Gecko AdvisorPage = lazy(() => import('./pages/products/Gecko AdvisorPage'));
const Gecko SharePage = lazy(() => import('./pages/products/Gecko SharePage'));
const Gecko ShellPage = lazy(() => import('./pages/products/Gecko ShellPage'));
const Gecko GuardPage = lazy(() => import('./pages/products/Gecko GuardPage'));
const Gecko LockPage = lazy(() => import('./pages/products/Gecko LockPage'));
const Gecko WatchPage = lazy(() => import('./pages/products/Gecko WatchPage'));
const Gecko ViewPage = lazy(() => import('./pages/products/Gecko ViewPage'));
const Gecko VPNPage = lazy(() => import('./pages/products/Gecko VPNPage'));

// Add routes
<Route path="/gecko-advisor" element={<Gecko AdvisorPage />} />
<Route path="/gecko-share" element={<Gecko SharePage />} />
<Route path="/gecko-shell" element={<Gecko ShellPage />} />
<Route path="/gecko-guard" element={<Gecko GuardPage />} />
<Route path="/gecko-lock" element={<Gecko LockPage />} />
<Route path="/gecko-watch" element={<Gecko WatchPage />} />
<Route path="/gecko-view" element={<Gecko ViewPage />} />
<Route path="/gecko-vpn" element={<Gecko VPNPage />} />
```

## Design Considerations

### Color Coding by Status
- **Live**: Green accent (#4ade80)
- **Beta**: Blue accent (#3b82f6)
- **In Development**: Yellow accent (#facc15)

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Loading States
- Skeleton loaders for testimonials
- Lazy loading for images
- Code splitting for pages

## Success Criteria

- [ ] All 8 product pages accessible via unique routes
- [ ] All pages include proper SEO meta tags
- [ ] All pages include structured data (Product schema)
- [ ] All pages track analytics events correctly
- [ ] All pages mobile responsive
- [ ] All pages pass Lighthouse SEO audit (90+)
- [ ] Sitemap includes all 8 product routes
- [ ] App.tsx routing updated with all 8 pages
- [ ] Production build successful
- [ ] No console errors on any product page

---

**Total Estimated Time:** 6-8 hours  
**Priority:** P1 (High) - Token launch preparation  
**Dependencies:** MascotImage component, analytics utility, project-data.json  
**Next Steps:** Begin with shared components, then implement pages in priority order

---

**Last Updated:** October 31, 2025  
**Author:** Privacy Gecko Development Team  
**Status:** Implementation Plan - Ready for Execution
