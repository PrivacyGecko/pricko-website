# PHASE 1: Technical Component Specifications

**Status:** For Technical Architect & Frontend Dev Review  
**Created:** November 13, 2025  
**Author:** Orchestrator Agent  
**Reviewers:** Technical Architect, Frontend Lead, UI/UX Reviewers

---

## Overview

This document specifies 3 new visualization components required for Phase 2 implementation of the GeckoCore ecosystem integration.

---

## Component 1: UtilityTimelineComponent

### Purpose
Visual timeline showing Privacy Gecko's progression from live products (2025) to decentralized protocol (2026+).

### File Location
`/src/components/ui/UtilityTimeline.tsx`

### Visual Design

**Desktop Layout:** Horizontal timeline with milestone nodes
```
[2024-2025] ----✅----> [Q4 2025] ----🚧----> [Q1 2026] ----🔮----> [Q2-Q3 2026] ----🔮----> [2027+]
```

**Mobile Layout:** Vertical timeline
```
[2024-2025] ✅
    |
    v
[Q4 2025] 🚧
    |
    v
[Q1 2026] 🔮
    |
    v
...
```

### Component Structure

```typescript
interface TimelineMilestone {
  id: string;
  period: string; // e.g., "2024-2025", "Q1 2026"
  heading: string;
  status: 'completed' | 'in-progress' | 'planned' | 'long-term';
  items: string[]; // Array of achievement/deliverable strings
  icon: IconType; // react-icons
  delay?: number; // Animation delay
}

interface UtilityTimelineProps {
  milestones: TimelineMilestone[];
  variant?: 'brand' | 'protocol'; // Green theme or protocol theme
}
```

### Data Structure Example

```typescript
const TIMELINE_DATA: TimelineMilestone[] = [
  {
    id: 'phase-1',
    period: '2024-2025',
    heading: 'Product Development',
    status: 'completed',
    items: [
      'Gecko Advisor launched (2024)',
      'Gecko Share SaaS deployed (2025)',
      'Gecko Guard browser extension (2025)',
      'Gecko Lock password manager (2025)',
      '4 remaining tools in development'
    ],
    icon: FaCheckCircle,
    delay: 0.1
  },
  {
    id: 'phase-2',
    period: 'Q4 2025',
    heading: '$PRICKO Token Launch',
    status: 'in-progress',
    items: [
      'Token generation event (November 2025)',
      'DEX listing (Raydium/Jupiter)',
      'Community airdrop campaign',
      'Premium feature integration'
    ],
    icon: FaRocket,
    delay: 0.2
  },
  // ... more milestones
];
```

### Styling Requirements

**Status Colors:**
- `completed`: Green (#4ade80) - use `.text-accent` and `.border-accent`
- `in-progress`: Orange (#f97316) - use `.text-orange-500` and `.border-orange-500`
- `planned`: Cyan (#06b6d4) - use `.text-protocol-primary` and `.border-protocol-primary`
- `long-term`: Purple (#8b5cf6) - use `.text-protocol-secondary` and `.border-protocol-secondary`

**Timeline Connector:**
- Desktop: Horizontal line using `.protocol-timeline-line` class
- Mobile: Vertical line (absolute positioned)
- Gradient from previous status color to next status color

**Milestone Nodes:**
- Large icon (48px desktop, 32px mobile)
- Period badge (e.g., "Q1 2026")
- Heading (bold, 18px desktop, 16px mobile)
- Items list (expandable on mobile to save space)

### Animations

- **Entrance:** Fade in + slide from left (desktop) or top (mobile)
- **Stagger:** 0.1s delay between each milestone
- **Hover:** Scale icon 1.1x, add glow effect
- **Connector:** Animate drawing from left to right (desktop)

### Responsive Breakpoints

- **< 768px (Mobile):** Vertical layout, compact spacing
- **≥ 768px (Tablet):** Vertical layout, more spacing
- **≥ 1024px (Desktop):** Horizontal layout

### Accessibility

- Each milestone wrapped in `<article>` tag
- Heading level: `<h3>` for milestone headings
- Icon has `aria-label` describing status
- Timeline connector is decorative (`aria-hidden="true"`)
- Keyboard navigation: Tab through milestones

### Technical Notes

- Use Framer Motion for animations (`initial`, `whileInView`, `viewport={{ once: true }}`)
- Use `card-interactive` or `card-protocol` for milestone cards (depends on variant prop)
- Connector line should use CSS gradient matching status colors
- On mobile, items array collapses into "Show more" expandable (if > 3 items)

---

## Component 2: TokenFlowDiagram

### Purpose
Visual representation of the token economy loop: Users → Treasury → Node Operators → Community → [loop back]

### File Location
`/src/components/ui/TokenFlowDiagram.tsx`

### Visual Design

**Circular Flow (Desktop):**
```
         [Users Pay]
              |
              v
        [Treasury] -----> [Node Operators]
              ^                 |
              |                 v
         [Community] <----[Rewards Earned]
```

**Simplified Vertical Flow (Mobile):**
```
[Users Pay for Features]
         ↓
    [Treasury]
         ↓
 [Fund Node Operators]
         ↓
 [Operators Earn Rewards]
         ↓
  [Community Governs]
         ↓
   [Loop Continues]
```

### Component Structure

```typescript
interface FlowNode {
  id: string;
  label: string;
  description: string;
  icon: IconType;
  color: 'accent' | 'protocol-primary' | 'protocol-secondary' | 'protocol-accent';
}

interface FlowConnection {
  from: string; // Node ID
  to: string; // Node ID
  label?: string; // Optional label for the arrow
}

interface TokenFlowDiagramProps {
  nodes: FlowNode[];
  connections: FlowConnection[];
  animated?: boolean; // Default: true
  variant?: 'circular' | 'vertical'; // Auto-detect based on screen size
}
```

### Data Structure Example

```typescript
const FLOW_NODES: FlowNode[] = [
  {
    id: 'users',
    label: 'Users',
    description: 'Pay $PRICKO for premium features',
    icon: FaUsers,
    color: 'accent'
  },
  {
    id: 'treasury',
    label: 'Treasury',
    description: 'Receives fees, funds operations',
    icon: FaCoins,
    color: 'protocol-primary'
  },
  {
    id: 'operators',
    label: 'Node Operators',
    description: 'Run infrastructure, earn rewards',
    icon: FaServer,
    color: 'protocol-secondary'
  },
  {
    id: 'community',
    label: 'Community',
    description: 'Governs protocol, benefits from growth',
    icon: FaVoteYea,
    color: 'protocol-accent'
  }
];

const FLOW_CONNECTIONS: FlowConnection[] = [
  { from: 'users', to: 'treasury', label: 'Premium Fees' },
  { from: 'treasury', to: 'operators', label: 'Staking Rewards' },
  { from: 'operators', to: 'community', label: 'Network Value' },
  { from: 'community', to: 'users', label: 'Better Products' }
];
```

### Styling Requirements

**Node Cards:**
- Use `.card-protocol` for all nodes
- Icon centered, 64px size (desktop), 48px (mobile)
- Label: Bold, 18px (desktop), 16px (mobile)
- Description: Gray-300, 14px (desktop), 12px (mobile)
- Glow effect using node's color

**Connection Arrows:**
- SVG arrows with gradient matching from/to node colors
- Animated path drawing (1s duration, staggered)
- Arrow label in small text (12px), positioned at midpoint

**Annotations (Desktop Only):**
- 3 floating annotations around diagram:
  1. "Sustainable utility model—no infinite inflation"
  2. "Real value creation through functional products"
  3. "Community ownership via staking & governance"
- Each in small badge (`.badge-protocol` style)

### Animations

- **Entrance:** Nodes fade in sequentially (users → treasury → operators → community)
- **Arrows:** Animate drawing from start to end after nodes appear
- **Hover:** Node scales 1.05x, shows full description in tooltip
- **Continuous:** Subtle pulsing glow on each node (2s cycle, offset timing)

### Responsive Behavior

- **< 768px:** Vertical layout, simplified annotations
- **≥ 768px:** Vertical layout with more spacing
- **≥ 1024px:** Circular layout with full annotations

### Accessibility

- Diagram wrapped in `<figure>` with `<figcaption>`
- Each node has proper ARIA labels
- Text descriptions visible (not just icons)
- Keyboard accessible: Tab through nodes
- Screen reader: Announces flow connections

### Technical Notes

- Use SVG for arrows/connections (more control over gradients)
- Consider using D3.js for advanced circular layout (optional, if complexity needed)
- Simpler approach: Absolute positioned nodes with calculated arrow paths
- Animations via Framer Motion + SVG path animations
- Mobile: Stack vertically, use simple down arrows (↓) instead of curved paths

---

## Component 3: ProtocolArchitectureDiagram

### Purpose
Simplified infographic showing GeckoCore's layered architecture: User Layer → API Gateway → Node Network → Products

### File Location
`/src/components/ui/ProtocolArchitectureDiagram.tsx`

### Visual Design

**Stacked Layers (Desktop & Mobile):**
```
┌─────────────────────────────────────┐
│        USER LAYER                   │
│  (Wallets, dApps, Browsers)         │
└─────────────────────────────────────┘
             ↓ API Requests
┌─────────────────────────────────────┐
│       API GATEWAY                   │
│  (Authentication, Rate Limiting)    │
└─────────────────────────────────────┘
             ↓ Verified Requests
┌─────────────────────────────────────┐
│      GECKOCORE NODE NETWORK         │
│  (Distributed Privacy Verification) │
└─────────────────────────────────────┘
             ↓ Encrypted Data
┌─────────────────────────────────────┐
│      PRIVACY TOOLS LAYER            │
│  (8 Products: Advisor, Share, etc.) │
└─────────────────────────────────────┘
```

### Component Structure

```typescript
interface ArchitectureLayer {
  id: string;
  name: string;
  description: string;
  examples: string[]; // Examples of components in this layer
  color: 'accent' | 'protocol-primary' | 'protocol-secondary' | 'protocol-accent';
  icon: IconType;
}

interface ProtocolArchitectureDiagramProps {
  layers: ArchitectureLayer[];
  showExamples?: boolean; // Default: true on desktop, false on mobile
  animated?: boolean; // Default: true
}
```

### Data Structure Example

```typescript
const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    id: 'user-layer',
    name: 'User Layer',
    description: 'User-facing interfaces and entry points',
    examples: ['Phantom Wallet', 'Web Browsers', 'Mobile Apps', 'dApp Integrations'],
    color: 'accent',
    icon: FaUser
  },
  {
    id: 'api-gateway',
    name: 'API Gateway',
    description: 'Authentication, rate limiting, request routing',
    examples: ['Token Verification', 'Usage Quotas', 'Load Balancing'],
    color: 'protocol-primary',
    icon: FaShieldAlt
  },
  {
    id: 'node-network',
    name: 'GeckoCore Node Network',
    description: 'Distributed nodes verifying privacy proofs',
    examples: ['Privacy Verification', 'Encrypted Storage', 'Consensus Layer'],
    color: 'protocol-secondary',
    icon: FaNetworkWired
  },
  {
    id: 'tools-layer',
    name: 'Privacy Tools Layer',
    description: 'The 8 products delivering utility to users',
    examples: ['Gecko Advisor', 'Gecko Share', 'Gecko Guard', 'Gecko Lock', '+ 4 more'],
    color: 'protocol-accent',
    icon: FaTools
  }
];
```

### Styling Requirements

**Layer Cards:**
- Full-width stacked layout
- Each layer uses `.card-protocol` with custom border color matching `color` prop
- Icon in top-left corner (32px)
- Name: Bold, 20px (desktop), 18px (mobile)
- Description: Gray-300, 14px
- Examples: Small pills/badges below description (only if `showExamples` is true)

**Connection Arrows:**
- Downward arrow (↓) between each layer
- Label on arrow: "API Requests", "Verified Requests", "Encrypted Data"
- Protocol gradient color

**Side Annotations (Desktop Only):**
- Left side: "Decentralized" label next to Node Network layer
- Right side: "User-Owned Infrastructure" label
- Small badges with protocol theme

### Animations

- **Entrance:** Layers slide in from bottom, staggered 0.15s delay
- **Arrows:** Fade in after layers appear
- **Hover:** Layer card highlights, shows more detailed examples (if hidden)
- **Continuous:** Subtle shimmer effect on borders (optional)

### Responsive Behavior

- **< 768px:** Hide examples by default, collapse to simpler view
- **≥ 768px:** Show examples in compact badges
- **≥ 1024px:** Full examples, side annotations visible

### Accessibility

- Diagram wrapped in `<section>` with heading
- Each layer is a `<div role="region" aria-labelledby="layer-{id}">`
- Arrow icons have `aria-label="flows to"`
- Examples list uses semantic `<ul>` tags
- Keyboard: Tab through each layer

### Technical Notes

- Simple stacked layout (no complex SVG needed)
- Use Framer Motion for entrance animations
- Arrows can be simple div with down-arrow Unicode (↓) or react-icons `FaArrowDown`
- Examples badges use `.badge-protocol` class
- Consider "Expand" button on mobile to toggle `showExamples`

---

## Implementation Priority

1. **UtilityTimeline** (HIGH) - Needed for Ecosystem page Section 3
2. **TokenFlowDiagram** (MEDIUM) - Needed for Ecosystem page Section 4
3. **ProtocolArchitectureDiagram** (LOW) - Nice-to-have, can be text-only initially

---

## Design Review Checklist

### Before Development Starts
- [ ] Wireframes/mockups approved by UI Reviewer
- [ ] Color scheme fits with existing brand (green) + protocol (cyan/purple)
- [ ] Component complexity appropriate (not over-engineered)
- [ ] Mobile-first responsive breakpoints defined
- [ ] Animation performance considerations (avoid jank on mobile)

### After Development Complete
- [ ] Lighthouse performance score >85
- [ ] WCAG 2.1 AA compliance (color contrast, focus states)
- [ ] Tested on Chrome, Firefox, Safari, Edge
- [ ] Mobile tested on iOS Safari, Android Chrome
- [ ] Animations respect `prefers-reduced-motion`
- [ ] TypeScript: 0 errors, 0 warnings
- [ ] Build size impact: <10 kB gzipped per component

---

## Technical Architect Sign-Off

**Architect Name:** ___________________________  
**Review Date:** ___________________________  
**Feasibility Assessment:** [ ] APPROVED [ ] NEEDS REVISION  
**Estimated Development Time:**  
- UtilityTimeline: _____ hours  
- TokenFlowDiagram: _____ hours  
- ProtocolArchitectureDiagram: _____ hours

**Comments:** ___________________________

---

**END OF PHASE 1 TECHNICAL SPECIFICATIONS**
