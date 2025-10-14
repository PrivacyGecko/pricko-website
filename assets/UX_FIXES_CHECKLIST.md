# PRICKO WEBSITE - UX FIXES CHECKLIST

Quick reference for implementing UX improvements identified in the comprehensive audit.

---

## P0 - CRITICAL (Complete Before Launch)

### Accessibility Fixes (8 hours total)

- [ ] **Add Skip Navigation Link** (30 min)
  - File: `/src/components/common/Header.tsx`
  - Add after line 25: `<a href="#main-content" className="sr-only focus:not-sr-only...">`
  - Add `<main id="main-content">` to each page wrapper

- [ ] **Fix Color Contrast** (15 min)
  - File: `/tailwind.config.js`
  - Line 26: Change `muted: '#a1a1aa'` to `muted: '#b4b4b8'`
  - New contrast ratio: 4.52:1 (meets WCAG AA)

- [ ] **Add ARIA Labels to Icon Buttons** (2 hours)
  - Header hamburger menu (line 82): Add `aria-label="Open navigation menu"`
  - Social media links in footer: Add descriptive labels
  - Tool card expand buttons: Add `aria-expanded` attribute
  - Premium feature icons: Add `aria-label="Premium feature"`

- [ ] **Implement Focus Indicators** (1 hour)
  - File: `/src/index.css`
  - Add global focus styles after line 194
  - Ensure 2px solid outline on all interactive elements

- [ ] **Fix Form Label Associations** (1 hour)
  - File: `/src/pages/ContactPage.tsx`
  - Add explicit `htmlFor` to all labels
  - Add `aria-required="true"` to required inputs
  - Add `aria-invalid` and `aria-describedby` for error states

- [ ] **Hide Decorative Emojis** (1 hour)
  - All pages: Add `aria-hidden="true"` to decorative emoji spans
  - Provide text alternatives where needed
  - Estimated 40+ instances to fix

- [ ] **Add Semantic HTML** (2 hours)
  - Replace divs with proper landmarks: `<main>`, `<aside>`, `<section>`
  - Fix heading hierarchy (no h1→h3 skips)
  - Use `<dl>/<dt>/<dd>` for stats sections

### Form Backend Implementation (8 hours)

- [ ] **Create Contact Form API** (4 hours)
  - Create `/api/contact.ts` endpoint
  - Integrate with email service (SendGrid/Mailchimp)
  - Add rate limiting and validation
  - Return proper JSON responses

- [ ] **Update Contact Form Handler** (2 hours)
  - File: `/src/pages/ContactPage.tsx`
  - Replace mailto: with fetch to API
  - Add loading state management
  - Add success/error feedback UI

- [ ] **Create Newsletter API** (2 hours)
  - Create `/api/newsletter.ts` endpoint
  - Integrate with Mailchimp/ConvertKit
  - Update footer form handler
  - Add double opt-in flow

### Form Validation (4 hours)

- [ ] **Add Real-Time Validation** (2 hours)
  - Email format validation
  - Required field validation
  - Character limits (message 10-500 chars)
  - Display errors on blur

- [ ] **Add Visual Error States** (1 hour)
  - Red border for invalid fields
  - Error message below field
  - Success checkmark for valid fields
  - Character counter for message field

- [ ] **Add Form State Management** (1 hour)
  - Loading state during submission
  - Success state with confirmation
  - Error state with retry option
  - Disable submit button while loading

### Error Handling (4 hours)

- [ ] **Create Error Boundary** (2 hours)
  - File: `/src/components/common/ErrorBoundary.tsx`
  - Create fallback UI component
  - Log errors to monitoring service
  - Wrap app in App.tsx

- [ ] **Create LoadingButton Component** (2 hours)
  - File: `/src/components/ui/LoadingButton.tsx`
  - Add spinner animation
  - Disable during loading
  - Replace all CTA buttons

---

## P1 - HIGH PRIORITY (Complete Within 2 Weeks)

### Loading States (3 hours)

- [ ] **Add Route Transition Loading** (1 hour)
  - Install nprogress or similar
  - Add to router component
  - Style progress bar to match theme

- [ ] **Add Button Loading States** (1 hour)
  - Replace all `<button>` with `<LoadingButton>`
  - Add loading prop management
  - Test all CTAs

- [ ] **Add External Link Warnings** (1 hour)
  - Create modal component
  - Add to Tools page external links
  - Add "Continue" and "Cancel" options

### Mobile Optimization (4 hours)

- [ ] **Fix Hero Logo Size** (30 min)
  - File: `/src/pages/HomePage.tsx`
  - Line 174: Change to `w-64 h-64 md:w-80 md:h-80`

- [ ] **Fix Status Dashboard Grid** (30 min)
  - File: `/src/pages/RoadmapPage.tsx`
  - Line 310: Change to `grid-cols-2 md:grid-cols-4`

- [ ] **Increase Touch Targets** (1 hour)
  - Tool card feature toggle: Add `min-h-[44px]`
  - Verify all interactive elements ≥44x44px
  - Add padding where needed

- [ ] **Fix Form Input Font Size** (30 min)
  - All form inputs: Change to `text-base md:text-sm`
  - Prevents iOS zoom on focus

- [ ] **Optimize Stats Section Mobile** (1 hour)
  - HomePage line 123: Change to `grid-cols-2 md:grid-cols-3`

### Accessibility Improvements (4 hours)

- [ ] **Add Progress Bar ARIA Attributes** (30 min)
  - RoadmapPage: Add `role="progressbar"`, `aria-valuenow`, etc.

- [ ] **Fix Security Accordion ARIA** (30 min)
  - ToolsPage: Add `aria-controls`, `aria-labelledby`

- [ ] **Add Breadcrumbs** (1 hour)
  - Create `/src/components/common/Breadcrumbs.tsx`
  - Add to legal pages

- [ ] **Add Table of Contents to Legal Pages** (2 hours)
  - Create TOC component
  - Add anchor links
  - Add to Privacy, Terms, Disclaimer pages

### Reduced Motion Support (2 hours)

- [ ] **Create Motion Config Utility** (1 hour)
  - File: `/src/utils/motionConfig.ts`
  - Detect `prefers-reduced-motion`
  - Export helper functions

- [ ] **Update All Animations** (1 hour)
  - Use motion config for all Framer Motion props
  - Test with reduced motion enabled

---

## P2 - MEDIUM PRIORITY (Complete Within 1 Month)

### Token Purchase Flow (5 hours)

- [ ] **Add DEX Integration Links** (1 hour)
  - TokenomicsPage: Add Jupiter and Raydium links
  - Add "How to Buy" guide link

- [ ] **Create How to Buy Tutorial** (4 hours)
  - New page: `/src/pages/HowToBuyPage.tsx`
  - Step-by-step wallet setup
  - Step-by-step token purchase
  - Add screenshots/GIFs

### Conversion Optimization (6 hours)

- [ ] **Create Email Capture Modal** (3 hours)
  - File: `/src/components/common/WaitlistModal.tsx`
  - Triggered by CTA buttons
  - Form with validation
  - Success confirmation

- [ ] **Add Exit Intent Popup** (2 hours)
  - Detect mouse leaving viewport
  - Show waitlist signup
  - Cookies to prevent repeat

- [ ] **Add Onboarding Quiz** (1 hour placeholder)
  - "I want to... [Use Tools] [Buy Tokens] [Join Community]"
  - Personalize homepage
  - Track in localStorage

### Visual Improvements (4 hours)

- [ ] **Add Tokenomics Chart** (2 hours)
  - Install Recharts or Chart.js
  - Replace pie chart placeholder
  - Interactive and accessible

- [ ] **Add Token Utility Icons** (1 hour)
  - Visual icons for stake/pay/fiat options
  - Improve scannability

- [ ] **Optimize Tool Card Images** (1 hour)
  - Reduce image sizes
  - Lazy load below fold
  - Add loading placeholders

---

## P3 - LOW PRIORITY (Nice to Have)

### Enhanced Features (Optional)

- [ ] Add dark mode toggle
- [ ] Add keyboard shortcuts (? to show help)
- [ ] Add "Back to top" button
- [ ] Create custom 404 page
- [ ] Add social share buttons
- [ ] Add reading time to legal pages
- [ ] Add print stylesheets
- [ ] Implement lazy loading for all images
- [ ] Add smooth scroll behavior
- [ ] Add Easter eggs

---

## TESTING CHECKLIST

### Before Each Commit

- [ ] Run `npm run lint`
- [ ] Run `npm run type-check`
- [ ] Test on mobile viewport (375px)
- [ ] Test keyboard navigation
- [ ] Check console for errors

### Before PR Merge

- [ ] Run axe DevTools on affected pages
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on iOS and Android
- [ ] Verify no a11y regressions
- [ ] Update CHANGELOG.md

### Before Deployment

- [ ] Full accessibility audit (axe DevTools)
- [ ] Lighthouse audit (score >90)
- [ ] Cross-browser testing
- [ ] Mobile usability test
- [ ] Load testing
- [ ] Verify analytics tracking

---

## RESOURCES & TOOLS

### Accessibility Testing
- axe DevTools (Chrome extension)
- NVDA Screen Reader (Windows)
- VoiceOver (macOS)
- WebAIM Contrast Checker
- WAVE Evaluation Tool

### Performance Testing
- Lighthouse (Chrome DevTools)
- WebPageTest
- GTmetrix
- Chrome DevTools Performance tab

### Mobile Testing
- Chrome DevTools Device Mode
- BrowserStack
- Real device testing (iOS/Android)

### Form Backend Options
- SendGrid (transactional email)
- Mailchimp (newsletter)
- ConvertKit (creator focus)
- EmailJS (simple solution)

---

## CODE SNIPPETS

### Skip Navigation Link
```tsx
// Add to Header.tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
             bg-accent text-black px-4 py-2 rounded-lg z-50 font-semibold"
>
  Skip to main content
</a>
```

### Focus Indicator Styles
```css
/* Add to index.css */
*:focus {
  outline: 2px solid theme('colors.accent');
  outline-offset: 2px;
}

*:focus:not(:focus-visible) {
  outline: none;
}
```

### LoadingButton Component
```tsx
// Create components/ui/LoadingButton.tsx
import { motion } from 'framer-motion';
import { FaSpinner } from 'react-icons/fa';

interface LoadingButtonProps {
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  loading,
  children,
  onClick,
  className = 'btn-primary',
  disabled
}) => (
  <motion.button
    className={className}
    onClick={onClick}
    disabled={loading || disabled}
    whileHover={loading ? {} : { scale: 1.05 }}
    whileTap={loading ? {} : { scale: 0.95 }}
  >
    {loading ? (
      <span className="flex items-center gap-2">
        <FaSpinner className="animate-spin" />
        Loading...
      </span>
    ) : children}
  </motion.button>
);
```

### Form API Example
```typescript
// api/contact.ts
export async function POST(request: Request) {
  const data = await request.json();

  // Validate
  if (!data.email || !data.message) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // Send email (example with SendGrid)
  await sendEmail({
    to: 'community@pricko.com',
    from: data.email,
    subject: `${data.category.toUpperCase()}: ${data.subject}`,
    text: data.message
  });

  return Response.json({ success: true, message: 'Email sent successfully' });
}
```

---

## PROGRESS TRACKING

### Week 1
- [ ] P0: Accessibility (8 hrs)
- [ ] P0: Form Backend (8 hrs)
- [ ] P0: Form Validation (4 hrs)
- [ ] P0: Error Handling (4 hrs)
- [ ] Quick Wins (8 hrs)

### Week 2
- [ ] P1: Loading States (3 hrs)
- [ ] P1: Mobile Optimization (4 hrs)
- [ ] P1: More Accessibility (4 hrs)
- [ ] P1: Reduced Motion (2 hrs)
- [ ] Testing (8 hrs)

### Week 3-4
- [ ] P2: Token Purchase Flow (5 hrs)
- [ ] P2: Conversion Optimization (6 hrs)
- [ ] P2: Visual Improvements (4 hrs)
- [ ] Final Testing (8 hrs)

---

## SUCCESS METRICS

Track these before/after:
- [ ] WCAG 2.1 AA Compliance: ____%
- [ ] Lighthouse Score: _____/100
- [ ] Mobile Usability Errors: _____
- [ ] Email Capture Rate: _____%
- [ ] Avg Session Duration: _____ min
- [ ] Bounce Rate: _____%

---

**Full Documentation**:
- Comprehensive report: `/UX_AUDIT_REPORT.md`
- Executive summary: `/UX_AUDIT_SUMMARY.md`

**Questions?** Review full reports or contact UI/UX Consistency Agent.
