# PHASE 1: Analytics Tracking Plan

**Status:** For Technical Architect Approval  
**Created:** November 13, 2025  
**Author:** Orchestrator Agent  
**Reviewer:** Technical Architect, Backend Integration Specialist

---

## Overview

This document defines analytics tracking for the GeckoCore ecosystem integration. We'll track user engagement with new content, identify conversion bottlenecks, and measure the effectiveness of protocol messaging.

---

## Recommended Analytics Platform

### Option 1: Plausible Analytics (RECOMMENDED)
**Pros:**
- Privacy-first (GDPR compliant by default)
- Lightweight (<1 KB script)
- No cookie banners required
- Simple event tracking API
- Aligns with Privacy Gecko brand values

**Cons:**
- Paid (€9/month for 10K monthly views)
- Less feature-rich than Google Analytics

**Implementation:**
```html
<!-- Add to index.html <head> -->
<script defer data-domain="pricko.com" src="https://plausible.io/js/script.js"></script>
```

### Option 2: Google Analytics 4
**Pros:**
- Free tier generous
- Advanced funnel analysis
- Integration with Google ecosystem
- Detailed user journey tracking

**Cons:**
- Privacy concerns (conflicts with brand)
- Requires cookie consent banner
- Heavier script (45 KB)
- More complex setup

**Recommendation:** Use Plausible for brand alignment + privacy credibility

---

## Custom Events to Track

### Homepage Events

#### Event: `ecosystem_teaser_view`
**Trigger:** User scrolls "Powers the Ecosystem" section into view  
**Properties:**
- `section_name`: "powers_ecosystem"
- `scroll_depth`: percentage (25, 50, 75, 100)

**Implementation:**
```typescript
// In HomePage.tsx, use Intersection Observer
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        trackEvent('ecosystem_teaser_view', {
          section_name: 'powers_ecosystem',
          scroll_depth: calculateScrollDepth()
        });
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(ecosystemSectionRef.current);
}, []);
```

#### Event: `ecosystem_cta_click`
**Trigger:** User clicks "Explore the Ecosystem" button  
**Properties:**
- `button_text`: "Explore the Ecosystem"
- `destination`: "/ecosystem"
- `source_section`: "homepage_powers_ecosystem"

**Implementation:**
```typescript
<button 
  className="btn-primary"
  onClick={() => {
    trackEvent('ecosystem_cta_click', {
      button_text: 'Explore the Ecosystem',
      destination: '/ecosystem',
      source_section: 'homepage_powers_ecosystem'
    });
    navigate('/ecosystem');
  }}
>
  Explore the Ecosystem →
</button>
```

---

### Ecosystem Page Events

#### Event: `ecosystem_page_view`
**Trigger:** User lands on /ecosystem page  
**Properties:**
- `referrer`: document.referrer
- `timestamp`: Date.now()
- `user_type`: "new_visitor" | "returning_visitor" (from localStorage)

**Implementation:**
```typescript
// In EcosystemPage.tsx useEffect
useEffect(() => {
  const userType = localStorage.getItem('pricko_visitor') ? 'returning_visitor' : 'new_visitor';
  localStorage.setItem('pricko_visitor', 'true');
  
  trackEvent('ecosystem_page_view', {
    referrer: document.referrer,
    timestamp: Date.now(),
    user_type: userType
  });
}, []);
```

#### Event: `product_card_click`
**Trigger:** User clicks on a live product card (Gecko Advisor, Share, Guard, Lock)  
**Properties:**
- `product_name`: "Gecko Advisor" | "Gecko Share" | "Gecko Guard" | "Gecko Lock"
- `product_status`: "live"
- `section`: "live_products"

**Implementation:**
```typescript
<Link 
  to="/gecko-advisor"
  onClick={() => {
    trackEvent('product_card_click', {
      product_name: 'Gecko Advisor',
      product_status: 'live',
      section: 'live_products'
    });
  }}
>
  Use Gecko Advisor →
</Link>
```

#### Event: `protocol_section_view`
**Trigger:** User scrolls GeckoCore Protocol section into view  
**Properties:**
- `section_name`: "geckocore_infrastructure"
- `time_to_scroll`: milliseconds from page load

**Implementation:**
```typescript
const [pageLoadTime] = useState(Date.now());

useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        trackEvent('protocol_section_view', {
          section_name: 'geckocore_infrastructure',
          time_to_scroll: Date.now() - pageLoadTime
        });
      }
    });
  }, { threshold: 0.3 });
  
  observer.observe(protocolSectionRef.current);
}, []);
```

#### Event: `whitepaper_click`
**Trigger:** User clicks "Read the Whitepaper" button  
**Properties:**
- `source_section`: "geckocore_infrastructure"
- `destination`: "privacygecko.com/geckocore/whitepaper" (or wherever hosted)
- `user_engaged`: true (if they scrolled past 50% of page)

**Implementation:**
```typescript
<button 
  className="btn-protocol"
  onClick={() => {
    trackEvent('whitepaper_click', {
      source_section: 'geckocore_infrastructure',
      destination: 'https://privacygecko.com/geckocore/whitepaper',
      user_engaged: scrollDepth > 50
    });
  }}
>
  Read the Whitepaper →
</button>
```

#### Event: `buy_pricko_click`
**Trigger:** User clicks "Buy $PRICKO" CTA  
**Properties:**
- `source_page`: "ecosystem"
- `button_position`: "footer_primary" | "header" | "inline"
- `scroll_depth`: percentage (how far they scrolled before clicking)

**Implementation:**
```typescript
<button 
  className="btn-primary"
  onClick={() => {
    trackEvent('buy_pricko_click', {
      source_page: 'ecosystem',
      button_position: 'footer_primary',
      scroll_depth: calculateScrollDepth()
    });
    navigate('/how-to-buy');
  }}
>
  Buy $PRICKO
</button>
```

#### Event: `timeline_milestone_hover`
**Trigger:** User hovers over a timeline milestone (in UtilityTimeline component)  
**Properties:**
- `milestone_period`: "Q1 2026" | "Q2-Q3 2026" | "2027+"
- `milestone_status`: "completed" | "in-progress" | "planned"

**Implementation:**
```typescript
<motion.div
  onMouseEnter={() => {
    trackEvent('timeline_milestone_hover', {
      milestone_period: milestone.period,
      milestone_status: milestone.status
    });
  }}
>
  {/* Milestone content */}
</motion.div>
```

---

### Tokenomics Page Events

#### Event: `utility_distribution_view`
**Trigger:** User scrolls to "Utility Distribution" section  
**Properties:**
- `section_name`: "utility_distribution"
- `referrer_page`: previous page URL

**Implementation:**
```typescript
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        trackEvent('utility_distribution_view', {
          section_name: 'utility_distribution',
          referrer_page: document.referrer
        });
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(utilityDistributionRef.current);
}, []);
```

#### Event: `learn_more_ecosystem_click`
**Trigger:** User clicks "Learn more about the ecosystem" link  
**Properties:**
- `source_page`: "tokenomics"
- `destination`: "/ecosystem"

**Implementation:**
```typescript
<Link 
  to="/ecosystem"
  onClick={() => {
    trackEvent('learn_more_ecosystem_click', {
      source_page: 'tokenomics',
      destination: '/ecosystem'
    });
  }}
>
  Learn more about the ecosystem →
</Link>
```

---

### Roadmap Page Events

#### Event: `protocol_milestone_expand`
**Trigger:** User expands a GeckoCore protocol milestone (Q1 2026, Q2 2026, 2027+)  
**Properties:**
- `milestone_id`: "q1-2026-testnet" | "q2-2026-node-program" | "2027-geckoDAO"
- `milestone_status`: "planned" | "long-term"

**Implementation:**
```typescript
<button
  onClick={() => {
    setExpanded(!expanded);
    if (!expanded) {
      trackEvent('protocol_milestone_expand', {
        milestone_id: 'q1-2026-testnet',
        milestone_status: 'planned'
      });
    }
  }}
>
  {expanded ? 'Show Less' : 'Show More'}
</button>
```

---

### About Page Events

#### Event: `beyond_the_meme_view`
**Trigger:** User scrolls to "Beyond the Meme" section  
**Properties:**
- `section_name`: "beyond_the_meme"
- `time_on_page`: seconds since page load

**Implementation:**
```typescript
const [pageLoadTime] = useState(Date.now());

useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        trackEvent('beyond_the_meme_view', {
          section_name: 'beyond_the_meme',
          time_on_page: Math.floor((Date.now() - pageLoadTime) / 1000)
        });
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(beyondTheMemeRef.current);
}, []);
```

---

## Global Scroll Depth Tracking

### Event: `scroll_depth`
**Trigger:** User scrolls past 25%, 50%, 75%, 100% of page  
**Properties:**
- `page`: "/ecosystem" | "/tokenomics" | "/roadmap" | etc.
- `depth_percentage`: 25 | 50 | 75 | 100
- `time_to_depth`: milliseconds from page load

**Implementation:**
```typescript
// In Layout.tsx or analytics utility
const [scrollMilestones, setScrollMilestones] = useState<Set<number>>(new Set());

useEffect(() => {
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (window.scrollY / scrollHeight) * 100;
    
    [25, 50, 75, 100].forEach(milestone => {
      if (scrollPercent >= milestone && !scrollMilestones.has(milestone)) {
        trackEvent('scroll_depth', {
          page: window.location.pathname,
          depth_percentage: milestone,
          time_to_depth: Date.now() - pageLoadTime
        });
        setScrollMilestones(prev => new Set(prev).add(milestone));
      }
    });
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [scrollMilestones]);
```

---

## Conversion Funnel Tracking

### Primary Funnel: Homepage → Ecosystem → Buy

1. **Step 1:** Homepage "Powers the Ecosystem" section view
   - Event: `ecosystem_teaser_view`

2. **Step 2:** Click "Explore the Ecosystem" CTA
   - Event: `ecosystem_cta_click`

3. **Step 3:** Ecosystem page view
   - Event: `ecosystem_page_view`

4. **Step 4:** Scroll to GeckoCore section
   - Event: `protocol_section_view`

5. **Step 5:** Click "Buy $PRICKO"
   - Event: `buy_pricko_click`

6. **Step 6:** How to Buy page view
   - Event: `how_to_buy_page_view` (already tracked in existing analytics)

**Analysis Goal:** Measure drop-off at each step. Optimize sections with highest abandonment.

---

## Implementation Utility Function

### File: `/src/utils/analytics.ts`

```typescript
/**
 * Analytics tracking utility for GeckoCore ecosystem integration
 * Uses Plausible Analytics (privacy-first, GDPR compliant)
 */

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, any> }) => void;
  }
}

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Only track in production
  if (import.meta.env.MODE !== 'production') {
    console.log('[Analytics - Dev Mode]', eventName, properties);
    return;
  }

  // Plausible tracking
  if (typeof window.plausible === 'function') {
    window.plausible(eventName, { props: properties });
  }
};

export const trackPageView = (pagePath: string) => {
  // Plausible automatically tracks pageviews, but we can manually trigger for SPAs
  if (typeof window.plausible === 'function') {
    window.plausible('pageview', { props: { path: pagePath } });
  }
};

export const calculateScrollDepth = (): number => {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (window.scrollY / scrollHeight) * 100;
  return Math.round(scrollPercent);
};
```

---

## Privacy & GDPR Compliance

### Plausible Advantages
- No cookies (no consent banner needed)
- No personal data collection
- EU-hosted servers (GDPR compliant)
- Open-source analytics

### Privacy Policy Update
Add section to Privacy Policy page:

**"Analytics and Usage Tracking"**

"We use Plausible Analytics, a privacy-first analytics platform, to understand how users interact with our website. Plausible:
- Does not use cookies
- Does not collect personal data
- Does not track you across websites
- Stores data on EU servers (GDPR compliant)
- Provides aggregate statistics only

For more information, see Plausible's data policy: https://plausible.io/data-policy"

---

## Dashboard & Reporting

### Key Metrics to Monitor (Weekly)

1. **Ecosystem Page Performance:**
   - Total views
   - Avg. time on page
   - Scroll depth distribution
   - Bounce rate

2. **Conversion Funnel:**
   - Homepage teaser views → Ecosystem page views (conversion %)
   - Ecosystem page views → Buy CTA clicks (conversion %)
   - Overall funnel completion rate

3. **Engagement Signals:**
   - Whitepaper clicks
   - Product card clicks
   - Timeline milestone hovers
   - Scroll depth (% reaching 75%+)

4. **Traffic Sources:**
   - Referrer breakdown (Twitter, Reddit, direct, etc.)
   - Campaign attribution (if using UTM parameters)

### Alerts to Set Up
- Alert if ecosystem page bounce rate >70% (indicates content issue)
- Alert if "Buy $PRICKO" CTR <5% (indicates weak value prop)
- Alert if whitepaper click rate <10% (indicates low interest in protocol)

---

## A/B Testing Opportunities (Phase 3+)

1. **Ecosystem Hero Copy:**
   - Variant A: "8 privacy tools. 1 decentralized protocol."
   - Variant B: "Real products. Real utility. Real mission."

2. **Protocol Section Placement:**
   - Variant A: GeckoCore section above live products
   - Variant B: GeckoCore section below live products (current)

3. **CTA Button Text:**
   - Variant A: "Explore the Ecosystem"
   - Variant B: "See What's Possible"

---

## Technical Architect Approval

**Platform Choice:** [ ] Plausible [ ] Google Analytics 4 [ ] Other: ___________

**Implementation Timeline:**
- Setup analytics account: Day ___
- Add tracking script to index.html: Day ___
- Implement event tracking utility: Day ___
- Deploy to staging for testing: Day ___
- Deploy to production: Day ___

**Estimated Cost:** €9/month (Plausible) or $0/month (GA4)

**Sign-Off:**  
**Name:** ___________________________  
**Date:** ___________________________  
**Status:** [ ] APPROVED [ ] NEEDS REVISION

---

**END OF PHASE 1 ANALYTICS PLAN**
