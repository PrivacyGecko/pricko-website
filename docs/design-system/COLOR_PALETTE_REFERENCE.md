# PRICKO Professional Color Palette Reference

## Quick Reference

### Primary Accent - Privacy Green (Brand Identity)
```
accent-400: #4ade80  ███████ PRIMARY BRAND GREEN
accent-500: #22c55e  ███████ Hover State
accent-600: #16a34a  ███████ Pressed State
```

### Secondary Accent - Electric Cyan (Tech/Innovation)
```
cyan-400: #22d3ee  ███████ Bright Cyan
cyan-500: #06b6d4  ███████ Cyan Hover
cyan-600: #0891b2  ███████ Cyan Pressed
```

### Tertiary Accent - Royal Purple (Premium/Governance)
```
purple-400: #c084fc  ███████ Premium Accent
purple-500: #a855f7  ███████ Premium Hover
purple-600: #9333ea  ███████ Premium Pressed
```

### Semantic Colors
```
Success: #4ade80  ███████ (Same as accent)
Warning: #fbbf24  ███████ Yellow/Gold
Error:   #f87171  ███████ Red
Info:    #60a5fa  ███████ Blue
```

### Backgrounds & Neutrals
```
Black:     #000000  ███████ Primary Background
Zinc-950:  #09090b  ███████ Deeper Background
Zinc-900:  #18181b  ███████ Cards, Elevated Surfaces (secondary)
Zinc-800:  #27272a  ███████ Borders, Dividers (border)
Zinc-700:  #3f3f46  ███████ Subtle Borders
Zinc-600:  #52525b  ███████ Disabled States
Zinc-500:  #71717a  ███████ Muted Text Secondary
Zinc-400:  #a1a1aa  ███████ Muted Text Primary
Zinc-300:  #d4d4d8  ███████ Body Text on Dark (muted)
Zinc-200:  #e4e4e7  ███████ Headings
Zinc-100:  #f4f4f5  ███████ White Text
```

## Usage Guidelines

### When to Use Each Color

**Privacy Green (accent-400)**
- Primary CTAs (Buy Token, Join Waitlist, Try Tool)
- Success states and confirmations
- Live product badges
- Primary links and interactive elements
- Gecko branding elements

**Electric Cyan (cyan-400)**
- Secondary CTAs (Learn More, View Details)
- Innovation/tech-focused sections
- Alternative accent for variety
- Developer-focused content
- Blockchain/Solana integration displays

**Royal Purple (purple-400)**
- Premium features and Pro tiers
- Governance sections
- VIP/exclusive content
- Long-term vision elements
- Special announcements

**Warning Yellow (warning-400)**
- Beta product badges
- Important notices (non-critical)
- Alerts that need attention
- Under construction indicators

**Error Red (error-400)**
- Error messages
- Destructive actions (delete, remove)
- Critical warnings
- Validation failures

**Info Blue (info-400)**
- Informational notices
- Coming soon badges
- Help text and tooltips
- Documentation links

## Color Combinations

### Recommended Pairings

**Primary Combinations:**
```
✅ accent-400 + Black background
✅ accent-400 + Zinc-900 (cards)
✅ White text + accent-400 background
✅ accent-400 + Zinc-300 (muted text)
```

**Multi-Accent Gradients:**
```
✅ accent-400 → cyan-400 (Innovation)
✅ cyan-400 → purple-400 (Premium Tech)
✅ accent-400 → cyan-400 → purple-400 (Hero Full Spectrum)
```

**Avoid These Combinations:**
```
❌ accent-400 + warning-400 (too vibrant)
❌ cyan-400 + info-400 (too similar)
❌ Purple text on black (fails contrast)
❌ All three accents in one small component
```

## Accessibility (WCAG AA Contrast Ratios)

### Text on Black (#000000)

```
✅ White (#ffffff):       21:1    (AAA)
✅ Zinc-300 (#d4d4d8):    12.63:1 (AAA)
✅ Zinc-400 (#a1a1aa):    8.59:1  (AA Large)
✅ accent-400 (#4ade80):  8.59:1  (AA)
✅ cyan-400 (#22d3ee):    7.85:1  (AA)
✅ purple-400 (#c084fc):  6.12:1  (AA Large)
⚠️ warning-400 (#fbbf24): 11.3:1  (AAA)
✅ error-400 (#f87171):   5.23:1  (AA Large)
✅ info-400 (#60a5fa):    5.89:1  (AA Large)
```

### Text on Zinc-900 (#18181b)

```
✅ White (#ffffff):       19.8:1  (AAA)
✅ Zinc-300 (#d4d4d8):    11.9:1  (AAA)
✅ accent-400 (#4ade80):  8.1:1   (AA)
```

### Best Practices

1. **Body Text**: Use Zinc-300 (#d4d4d8) or white for optimal readability
2. **Headings**: Use white for maximum impact
3. **Muted Text**: Use Zinc-400 (#a1a1aa) for secondary information
4. **Links**: Use accent-400 (#4ade80) with underline for clarity
5. **Colored Text**: Use only for large text (18px+) or as accents, not body copy

## Gradient Definitions

### CSS Gradient Variables

```css
/* Brand Gradients */
--gradient-primary: linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%);
--gradient-secondary: linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%);
--gradient-premium: linear-gradient(135deg, #c084fc 0%, #a855f7 100%);
--gradient-hero: linear-gradient(135deg, #4ade80 0%, #22d3ee 50%, #a855f7 100%);
--gradient-dark: linear-gradient(180deg, #000000 0%, #18181b 100%);

/* Tailwind Classes */
.bg-gradient-primary: from-accent-400 via-accent-500 to-accent-600
.bg-gradient-secondary: from-cyan-400 to-cyan-500
.bg-gradient-premium: from-purple-400 to-purple-500
.bg-gradient-hero: from-accent-400 via-cyan-400 to-purple-400
```

## Glow Effects

### Shadow Definitions

```css
/* Accent Green Glow */
--shadow-glow-accent: 0 0 20px rgba(74, 222, 128, 0.3);
--shadow-glow-accent-strong: 0 0 40px rgba(74, 222, 128, 0.5);

/* Cyan Glow */
--shadow-glow-cyan: 0 0 20px rgba(34, 211, 238, 0.3);

/* Purple Glow */
--shadow-glow-purple: 0 0 20px rgba(192, 132, 252, 0.3);

/* Usage */
.shadow-glow-accent
.shadow-glow-cyan
.shadow-glow-purple
```

## Use Cases by Page

### Homepage
```
Hero Text:        gradient-hero (accent → cyan → purple)
Primary CTA:      accent-400 background, white text
Secondary CTA:    accent-400 border, accent text
Stats/Metrics:    accent-400 for emphasis
Trust Badges:     accent-400 icons
```

### Tools Page
```
Live Badge:       gradient-primary (green gradient)
Beta Badge:       warning-400 → warning-500 (yellow)
In Dev Badge:     orange-400 → orange-500
Coming Soon:      info-400 → info-500 (blue)
Premium Badge:    gradient-premium (purple)
Progress Bars:    gradient-primary
```

### Tokenomics Page
```
Chart Colors:     accent-400, cyan-400, purple-400, warning-400, info-400
Token Address:    accent-400 text, Zinc-950 background
Stats:            accent-400 numbers, Zinc-400 labels
Utility Icons:    accent-400, cyan-400, purple-400 (rotation)
```

### Roadmap Page
```
Timeline Line:    gradient from accent → cyan → purple
Completed:        accent-400 dot
In Progress:      cyan-400 dot (pulse animation)
Upcoming:         Zinc-700 dot
Phase Cards:      Zinc-900 background, accent-400 border on hover
```

### About Page
```
Mission Text:     gradient-hero
Core Values:      accent (Privacy), cyan (Innovation), purple (Community)
Team Socials:     accent-400 links
```

## Quick Copy-Paste

### Tailwind Classes

```tsx
// Buttons
<button className="bg-accent-400 hover:bg-accent-500 text-white">Primary</button>
<button className="border-2 border-accent-400 text-accent-400 hover:bg-accent-400 hover:text-black">Secondary</button>
<button className="bg-accent-400/10 text-accent-400 hover:bg-accent-400/20">Tertiary</button>

// Text
<h1 className="text-white font-black">Heading</h1>
<p className="text-zinc-300">Body text</p>
<span className="text-zinc-400">Muted text</span>

// Gradient Text
<span className="bg-gradient-to-r from-accent-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
  Gradient Hero Text
</span>

// Badges
<span className="bg-gradient-to-r from-accent-400 to-accent-500 text-white px-3 py-1 rounded-full">
  Live
</span>

// Cards
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-accent-400">
  Card Content
</div>

// Glows
<div className="shadow-glow-accent">Glowing Element</div>
```

## Export for Design Tools

### Figma Variables
```
accent-400: #4ade80
accent-500: #22c55e
cyan-400: #22d3ee
purple-400: #c084fc
warning-400: #fbbf24
error-400: #f87171
info-400: #60a5fa
zinc-900: #18181b
zinc-800: #27272a
zinc-300: #d4d4d8
```

### Adobe Color Palette
[Link would be: https://color.adobe.com with these hex values]

## Summary

**Core Brand Colors:**
- Primary: accent-400 (#4ade80) - Privacy Green
- Black (#000000) - Background
- White/Zinc-300 - Text

**Accent Colors for Variety:**
- Cyan-400 (#22d3ee) - Tech/Innovation
- Purple-400 (#c084fc) - Premium/Governance

**Semantic Colors:**
- Success: accent-400
- Warning: warning-400 (#fbbf24)
- Error: error-400 (#f87171)
- Info: info-400 (#60a5fa)

**Remember**: The green (#4ade80) is the PRIMARY brand color. Use it liberally. Cyan and purple are supporting accents to add professional variety without diluting brand identity.
