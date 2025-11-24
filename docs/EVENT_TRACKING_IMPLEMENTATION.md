# Event Tracking Implementation Guide

This document describes the analytics event tracking implementation across the PRICKO website using Plausible Analytics.

## Overview

We use Plausible Analytics (privacy-friendly, GDPR-compliant, no cookies) to track user interactions and conversion events. All tracking logic is centralized in `/src/utils/analytics.ts`.

## Tracked Events

### 1. Newsletter Signups
**Location:** Footer (all pages)  
**Event Name:** `Newsletter Signup`  
**Props:** `{ source: 'Footer' | 'Popup' | 'Contact Page' }`

### 2. Waitlist Joins  
**Location:** HowToBuyPage, Product Pages  
**Event Name:** `Waitlist Join`  
**Props:** `{ product: 'Gecko Shell' | 'Gecko Lock' | '$PRICKO' | etc }`

### 3. External Tool Clicks  
**Location:** HomePage, ToolsPage, Product Pages  
**Event Name:** `External Tool Click`  
**Props:** `{ tool: 'Gecko Advisor' | 'Gecko Share', location: 'Hero' | 'Tools Page' | etc }`

### 4. How to Buy CTA Clicks  
**Location:** HomePage Hero, TokenomicsPage, HowToBuyPage  
**Event Name:** `How to Buy Click`  
**Props:** `{ location: 'Hero' | 'Tokenomics Page' | 'Footer' | etc }`

### 5. Social Link Clicks  
**Location:** Footer, ContactPage, AboutPage  
**Event Name:** `Social Link Click`  
**Props:** `{ platform: 'Discord' | 'Telegram' | 'Twitter' | 'GitHub', location: 'Footer' | 'Contact Page' | etc }`

### 6. Product Page Views  
**Location:** Individual product pages  
**Event Name:** `Product Page View`  
**Props:** `{ product: 'Gecko Advisor' | 'Gecko Share' | etc }`

### 7. Product Page CTA Clicks  
**Location:** Individual product pages  
**Event Name:** `Product Page CTA`  
**Props:** `{ product: 'Gecko Advisor', ctaType: 'Try Now' | 'Join Waitlist' | 'Learn More' }`

## Implementation Examples

### Example 1: Track Newsletter Signup (Footer)

```tsx
import { trackConversion } from '../../utils/analytics';

const handleNewsletterSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Track the conversion
  trackConversion.newsletterSignup('Footer');
  
  // Continue with your existing logic
  const subject = encodeURIComponent('Newsletter Subscription Request');
  const body = encodeURIComponent(`Email: ${email}\n\nPlease add me to the PRICKO newsletter.`);
  window.location.href = `mailto:newsletter@pricko.com?subject=${subject}&body=${body}`;
  setEmail('');
};
```

### Example 2: Track External Tool Click (HomePage)

```tsx
import { trackConversion } from '../utils/analytics';

// Inside your ToolCard or Link component
<a 
  href="https://geckoadvisor.com"
  onClick={() => trackConversion.externalToolClick('Gecko Advisor', 'HomePage')}
  className="btn-primary"
>
  Try Gecko Advisor
</a>
```

### Example 3: Track "How to Buy" Button (HomePage Hero)

```tsx
import { trackConversion } from '../utils/analytics';

<Link
  to="/how-to-buy"
  onClick={() => trackConversion.howToBuyClick('Hero')}
  className="btn-primary"
>
  How to Buy $PRICKO
</Link>
```

### Example 4: Track Social Link Click (Footer)

```tsx
import { trackConversion } from '../../utils/analytics';

{socialLinks.map((social) => (
  <a
    key={social.name}
    href={social.href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => trackConversion.socialClick(social.name, 'Footer')}
    className="text-muted hover:text-accent"
  >
    {social.icon}
  </a>
))}
```

### Example 5: Track Waitlist Join (HowToBuyPage)

```tsx
import { trackConversion } from '../utils/analytics';

const handleWaitlistSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Track the conversion
  trackConversion.waitlistJoin('$PRICKO');
  
  // Continue with form submission logic
  console.log('Waitlist signup:', email);
  setIsSubmitted(true);
};
```

### Example 6: Track Product Page View (useEffect)

```tsx
import { useEffect } from 'react';
import { trackConversion } from '../utils/analytics';

const Gecko AdvisorPage: React.FC = () => {
  // Track page view on component mount
  useEffect(() => {
    trackConversion.productPageView('Gecko Advisor');
  }, []);

  return (
    // Your page content
  );
};
```

### Example 7: Track Product Page CTA

```tsx
import { trackConversion } from '../utils/analytics';

<a
  href="https://geckoadvisor.com"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => trackConversion.productPageCTA('Gecko Advisor', 'Try Now')}
  className="btn-primary"
>
  Try Gecko Advisor Now
</a>
```

## Pages Requiring Event Tracking

### HomePage.tsx
- [ ] "How to Buy" CTA button (Hero section)
- [ ] External tool clicks (Gecko Advisor, Gecko Share)
- [ ] Newsletter signup (if present)
- [ ] Social links (if present)

### HowToBuyPage.tsx
- [ ] Waitlist form submission
- [ ] External links (Phantom wallet, Coinbase, pump.fun)
- [ ] Social share buttons (Twitter)

### ToolsPage.tsx / ToolsPageSimplified.tsx
- [ ] External tool clicks (Gecko Advisor, Gecko Share)
- [ ] Waitlist clicks for beta products

### TokenomicsPage.tsx
- [ ] "How to Buy" CTA button
- [ ] Contract address copy (if present)

### ContactPage.tsx
- [ ] Form submission tracking
- [ ] Social link clicks
- [ ] Email link clicks

### Footer.tsx (Global)
- [ ] Newsletter signup form
- [ ] Social link clicks (Twitter, Telegram, Discord, GitHub)
- [ ] Quick links (internal navigation)

### AboutPage.tsx
- [ ] Social links (team members)
- [ ] External links (GitHub, etc.)

### Product Pages (8 pages)
- [ ] Page view tracking (useEffect on mount)
- [ ] Primary CTA ("Try Now" / "Join Waitlist")
- [ ] External product links
- [ ] "Back to All Tools" link

## Testing Event Tracking

### Development Testing
1. Open browser DevTools → Network tab
2. Filter by "plausible" or "analytics"
3. Trigger an event (click button, submit form)
4. Verify network request to Plausible API

### Production Testing
1. Access Plausible dashboard: https://plausible.io/pricko.com
2. Navigate to "Goals" section
3. Verify events appear in real-time
4. Check event properties are correct

## Best Practices

1. **Always include location context**: `{ location: 'Hero' | 'Footer' | 'Product Page' }`
2. **Use descriptive event names**: "Newsletter Signup" not "signup"
3. **Keep props consistent**: Use same prop keys across similar events
4. **Don't track PII**: Never send emails, names, or IP addresses
5. **Test before deploying**: Verify events fire correctly in dev
6. **Document new events**: Update this file when adding tracking

## Privacy Compliance

- **No cookies**: Plausible doesn't use cookies
- **No personal data**: We never track email addresses or names
- **GDPR compliant**: No consent banner required
- **CCPA compliant**: No selling of personal information
- **Anonymous tracking**: IP addresses are anonymized

## Troubleshooting

### Events not appearing in Plausible
1. Check that Plausible script is loaded in `index.html`
2. Verify `data-domain="pricko.com"` matches your site
3. Check browser console for errors
4. Ensure `trackConversion` function is imported correctly

### Events firing multiple times
1. Check for duplicate event handlers
2. Ensure `onClick` isn't attached to both parent and child
3. Use `event.stopPropagation()` if needed

### Props not showing up
1. Verify props are passed as objects: `{ key: 'value' }`
2. Check prop values aren't `undefined` or `null`
3. Ensure prop keys match Plausible dashboard configuration

---

**Last Updated:** October 31, 2025  
**Maintained By:** Privacy Gecko Development Team  
**Questions:** contact@privacygecko.com
