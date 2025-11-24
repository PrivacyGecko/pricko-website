# SEO IMPLEMENTATION CHECKLIST

Quick reference guide for implementing SEO audit recommendations.

## WEEK 1: CRITICAL FIXES (P0)

### Day 1: Technical Fixes
- [ ] **Add /how-to-buy to sitemap.xml**
  - File: `/public/sitemap.xml`
  - Add between lines 56-57
  - Priority: 0.9, changefreq: weekly
  
- [ ] **Remove unused page files**
  - Delete: `/src/pages/ToolsPage.tsx` (using simplified version)
  - Delete: `/src/pages/RoadmapPage.tsx` (using simplified version)

### Day 2: Analytics Setup
- [ ] **Google Search Console**
  - Sign up at https://search.google.com/search-console
  - Add verification meta tag to `/index.html` line 7
  - Verify property
  - Submit sitemap: https://pricko.com/sitemap.xml
  
- [ ] **Plausible Analytics**
  - Sign up at https://plausible.io
  - Add script tag to `/index.html` before `</head>`
  - Create `/src/utils/analytics.ts` helper file
  - Add TypeScript declarations to `/src/types/index.ts`

### Day 3: Event Tracking
- [ ] **Newsletter Signup Tracking**
  - Import `trackNewsletterSignup` in relevant components
  - Call on successful submission
  
- [ ] **Waitlist Button Tracking**
  - Import `trackWaitlistJoin` 
  - Call on button click
  
- [ ] **External Tool Link Tracking**
  - Import `trackExternalToolClick`
  - Add to Gecko Share, Gecko Advisor links

### Day 4-5: Testing
- [ ] **Verify All Changes**
  - Test sitemap at https://pricko.com/sitemap.xml
  - Verify GSC indexing status
  - Check Plausible dashboard receiving events
  - Test all conversion tracking events

---

## WEEK 2-3: STRUCTURED DATA (P1)

### HowTo Schema
- [ ] **Add to /how-to-buy page**
  - File: `/src/pages/HowToBuyPage.tsx`
  - Add `howToSchema` object (4 steps)
  - Pass to SEO component
  - Validate: https://validator.schema.org/

### FAQ Schema
- [ ] **Update FAQSection component**
  - File: `/src/components/FAQSection.tsx` (or create)
  - Add FAQPage schema generation
  - Implement on About page with 5-10 questions

### Product Schema
- [ ] **Add to Tools page**
  - File: `/src/pages/ToolsPageSimplified.tsx`
  - Add `productsSchema` for Gecko Share, Gecko Advisor
  - Include aggregateRating (4.8 stars, 2100 reviews)
  - Pass to SEO component

### AggregateRating Schema
- [ ] **Add to Homepage testimonials**
  - File: `/src/pages/HomePage.tsx`
  - Add Review schema for 3 testimonials
  - Include in existing structured data @graph

---

## WEEK 3-4: CONTENT CREATION (P1)

### Blog Infrastructure
- [ ] **Create blog route and pages**
  - Add `/blog` route to App.tsx
  - Create `/src/pages/BlogPage.tsx` (listing)
  - Create `/src/pages/BlogPostPage.tsx` (single post)
  - Add BlogPost schema markup

### Blog Posts (Priority Order)
1. [ ] "How to Buy PRICKO Token: Complete 2025 Guide" (2,000-2,500 words)
2. [ ] "Gecko Share vs WeTransfer: Privacy Comparison" (2,500-3,000 words)
3. [ ] "What is Zero-Knowledge Encryption?" (1,800-2,200 words)
4. [ ] "Solana Privacy Tokens: Complete Guide" (3,000-3,500 words)
5. [ ] "How to Scan Websites for Trackers" (1,500-2,000 words)

### FAQ Page
- [ ] **Create dedicated FAQ page**
  - Route: `/faq`
  - 10-15 common questions
  - FAQPage schema markup
  - Link from footer

### Tokenomics PDF
- [ ] **Create downloadable PDF**
  - Export tokenomics page content
  - Design in Canva/Figma
  - Add to `/public/downloads/tokenomics.pdf`
  - Link from tokenomics page

---

## WEEK 4-8: OFF-PAGE SEO (P1)

### Crypto Listing Sites (Post-Launch)
- [ ] **CoinMarketCap Submission**
  - Prepare: Contract address, logo, description
  - Submit: https://coinmarketcap.com/request/
  - Track listing status
  
- [ ] **CoinGecko Submission**
  - Prepare: Same materials as CMC
  - Submit: https://www.coingecko.com/en/coins/new
  - Track listing status

### Privacy Tools Directories
- [ ] **PrivacyTools.io Submission**
  - Submit Gecko Share, Gecko Advisor
  - GitHub: https://github.com/privacytools/privacytools.io
  
- [ ] **Product Hunt Launch**
  - Schedule launch date
  - Prepare assets (screenshots, video)
  - Notify community in advance

### Press Outreach
- [ ] **Crypto News Sites (Top 5)**
  1. CoinDesk - press@coindesk.com
  2. CoinTelegraph - news@cointelegraph.com
  3. Decrypt - tips@decrypt.co
  4. The Block - tips@theblock.co
  5. Bitcoin.com - news@bitcoin.com
  
- [ ] **Press Release Creation**
  - "Privacy Gecko Launches PRICKO: Memecoin with Real Utility"
  - Distribute via PR Newswire or similar

---

## ONGOING: MONITORING & OPTIMIZATION

### Weekly Tasks (Every Monday)
- [ ] Check Google Search Console errors
- [ ] Review Plausible Analytics traffic
- [ ] Monitor conversion rates
- [ ] Check new backlinks

### Monthly Tasks
- [ ] SEO performance report
- [ ] Update sitemap lastmod dates
- [ ] Content performance analysis
- [ ] Technical SEO audit (Screaming Frog)

---

## TOOLS NEEDED

### Immediate
- [x] Google Search Console (Free)
- [ ] Plausible Analytics ($9/mo)
- [ ] Ahrefs or SEMrush ($99-119/mo)

### Optional
- [ ] Screaming Frog SEO Spider (Free/£149/year)
- [ ] Hotjar or Microsoft Clarity (Free)
- [ ] Canva Pro ($12.99/mo)

---

## QUICK REFERENCE: FILE PATHS

**Files to Edit:**
- `/public/sitemap.xml` - Add /how-to-buy
- `/index.html` - Add GSC verification, Plausible script
- `/src/pages/HowToBuyPage.tsx` - Add HowTo schema
- `/src/pages/ToolsPageSimplified.tsx` - Add Product schema
- `/src/pages/HomePage.tsx` - Add AggregateRating schema
- `/src/components/FAQSection.tsx` - Add FAQ schema

**Files to Create:**
- `/src/utils/analytics.ts` - Analytics helpers
- `/src/pages/BlogPage.tsx` - Blog listing
- `/src/pages/BlogPostPage.tsx` - Single post template
- `/src/pages/FAQPage.tsx` - Dedicated FAQ page
- `/public/downloads/tokenomics.pdf` - Downloadable PDF

**Files to Delete:**
- `/src/pages/ToolsPage.tsx` - Unused (simplified version active)
- `/src/pages/RoadmapPage.tsx` - Unused (simplified version active)

---

## VALIDATION CHECKLIST

Before marking complete:
- [ ] All changes tested locally (`npm run dev`)
- [ ] No TypeScript errors (`npm run lint`)
- [ ] Structured data validated (https://validator.schema.org/)
- [ ] Sitemap validated (https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- [ ] Analytics receiving test events
- [ ] All links working (no 404s)
- [ ] Mobile responsive (test on phone)

---

## SUCCESS METRICS

Track these KPIs weekly:
- **GSC Impressions:** Target 1,000+ by week 4
- **GSC Clicks:** Target 50+ by week 4
- **Organic Sessions:** Target 500+ by week 4
- **Newsletter Signups:** Target 10+ from organic
- **Pages Indexed:** 10/10 pages
- **Structured Data:** 0 errors

---

## QUESTIONS? CONTACT:

- **SEO Agent:** seo-analytics-agent
- **Technical Architect:** technical-architect
- **Frontend Dev:** frontend-dev
- **Content Writer:** privacy-gecko-content-writer

---

*Last Updated: October 31, 2025*
*Next Review: November 7, 2025*
