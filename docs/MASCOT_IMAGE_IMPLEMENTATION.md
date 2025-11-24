# Mascot Image Implementation Guide

This document provides implementation instructions for using the `MascotImage` component across the PRICKO website.

## Component Location

`/src/components/ui/MascotImage.tsx`

## Features

- White circular background with drop shadow
- Responsive sizing (sm, md, lg, xl)
- Loading state with spinner
- Error handling (fails silently)
- Optional hover animation
- Lazy loading for performance

## Usage Examples

### Import Statement

```tsx
import MascotImage from '../components/ui/MascotImage';
```

### Size Variants

#### Small (80px) - Navigation & Footer
```tsx
<MascotImage size="sm" />
```

#### Medium (120px) - Default, Tool Cards
```tsx
<MascotImage size="md" />
```

#### Large (160px) - Page Heroes
```tsx
<MascotImage size="lg" />
```

#### Extra Large (200px) - Homepage Hero
```tsx
<MascotImage size="xl" />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size variant |
| `className` | `string` | `''` | Additional CSS classes |
| `animate` | `boolean` | `true` | Enable hover animation |
| `alt` | `string` | `'Privacy Gecko Mascot'` | Alt text for accessibility |

## Implementation Instructions

### 1. Header.tsx (`/src/components/common/Header.tsx`)

**Location:** Navigation logo (top-left)  
**Size:** `sm` (80px)

**Before:**
```tsx
<img src="/logo.png" alt="PRICKO Logo" className="h-10" />
```

**After:**
```tsx
import MascotImage from '../ui/MascotImage';

<Link to="/" className="flex items-center space-x-3">
  <MascotImage size="sm" animate={false} />
  <span className="text-xl font-bold gradient-text">PRICKO</span>
</Link>
```

---

### 2. Footer.tsx (`/src/components/common/Footer.tsx`)

**Location:** Footer logo/branding section  
**Size:** `sm` (80px)

**Before:**
```tsx
<img src="/logo.png" alt="PRICKO" className="h-12 mb-4" />
```

**After:**
```tsx
import MascotImage from '../ui/MascotImage';

<div className="flex items-center justify-center mb-6">
  <MascotImage size="sm" animate={false} />
</div>
```

---

### 3. HomePage.tsx (`/src/pages/HomePage.tsx`)

**Location:** Hero section  
**Size:** `xl` (200px)

**Before:**
```tsx
<img 
  src="/logo.png" 
  alt="PRICKO Mascot" 
  className="w-32 h-32 md:w-40 md:h-40"
/>
```

**After:**
```tsx
import MascotImage from '../components/ui/MascotImage';

<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ delay: 0.2 }}
>
  <MascotImage size="xl" />
</motion.div>
```

---

### 4. AboutPage.tsx (`/src/pages/AboutPage.tsx`)

**Location:** Hero section / Team section  
**Size:** `lg` (160px)

**Before:**
```tsx
<img src="/logo.png" alt="Privacy Gecko" className="w-32 h-32" />
```

**After:**
```tsx
import MascotImage from '../components/ui/MascotImage';

<div className="flex justify-center mb-8">
  <MascotImage size="lg" />
</div>
```

---

### 5. ToolsPageSimplified.tsx (`/src/pages/ToolsPageSimplified.tsx`)

**Location:** Hero section  
**Size:** `lg` (160px)

**Before:**
```tsx
<img src="/logo.png" alt="Privacy Tools" className="w-24 h-24" />
```

**After:**
```tsx
import MascotImage from '../components/ui/MascotImage';

<MascotImage size="lg" className="mb-6" />
```

---

### 6. RoadmapPageSimplified.tsx (`/src/pages/RoadmapPageSimplified.tsx`)

**Location:** Hero section  
**Size:** `lg` (160px)

**Before:**
```tsx
<img src="/logo.png" alt="Roadmap" className="w-24 h-24" />
```

**After:**
```tsx
import MascotImage from '../components/ui/MascotImage';

<div className="flex justify-center mb-6">
  <MascotImage size="lg" />
</div>
```

---

### 7. ContactPage.tsx (`/src/pages/ContactPage.tsx`)

**Location:** Hero section  
**Size:** `lg` (160px)

**Before:**
```tsx
<img src="/logo.png" alt="Contact" className="w-24 h-24" />
```

**After:**
```tsx
import MascotImage from '../components/ui/MascotImage';

<MascotImage size="lg" className="mb-8" />
```

---

### 8. TokenomicsPage.tsx (`/src/pages/TokenomicsPage.tsx`)

**Location:** Hero section (if present)  
**Size:** `lg` (160px)

**Implementation:**
```tsx
import MascotImage from '../components/ui/MascotImage';

<div className="text-center mb-12">
  <MascotImage size="lg" className="mx-auto mb-6" />
  <h1 className="text-4xl font-bold">Tokenomics</h1>
</div>
```

---

### 9. HowToBuyPage.tsx (`/src/pages/HowToBuyPage.tsx`)

**Location:** Hero section  
**Size:** `lg` (160px)

**Implementation:**
```tsx
import MascotImage from '../components/ui/MascotImage';

<div className="text-center mb-12">
  <MascotImage size="lg" className="mx-auto mb-6" />
  <h1 className="text-5xl font-bold gradient-text">How to Buy $PRICKO</h1>
</div>
```

---

### 10. Product Pages (All 8)

**Location:** Hero section  
**Size:** `lg` (160px)

**Implementation Template:**
```tsx
import MascotImage from '../components/ui/MascotImage';

<section className="py-20 text-center">
  <MascotImage size="lg" className="mx-auto mb-6" />
  <h1 className="text-5xl font-bold mb-4">{productName}</h1>
  <p className="text-xl text-muted">{productSubtitle}</p>
</section>
```

---

## Sizing Guidelines

| Context | Size | Pixel Dimensions | Use Case |
|---------|------|------------------|----------|
| Navigation | `sm` | 80px | Header logo, small branding |
| Footer | `sm` | 80px | Footer logo, secondary branding |
| Tool Cards | `md` | 120px | Product cards, feature highlights |
| Page Heroes | `lg` | 160px | Standard page hero sections |
| Homepage Hero | `xl` | 200px | Primary homepage hero |

## Animation Guidelines

- **Enable animation** (`animate={true}`): Page heroes, standalone mascots
- **Disable animation** (`animate={false}`): Navigation, footer (to avoid distraction)

## Accessibility

The `MascotImage` component includes:
- Alt text for screen readers (customizable via `alt` prop)
- Lazy loading for performance
- Error handling (fails silently, doesn't break layout)
- Loading state with spinner

## Testing Checklist

After implementing `MascotImage` across pages:

- [ ] Header logo displays correctly (sm size)
- [ ] Footer logo displays correctly (sm size)
- [ ] HomePage hero mascot displays at xl size with animation
- [ ] All page heroes display at lg size
- [ ] White circular background visible on all mascots
- [ ] Drop shadow provides depth
- [ ] Hover animation works on appropriate contexts
- [ ] Loading spinner appears briefly before image loads
- [ ] No layout shift when image loads
- [ ] Mobile responsive (sizes scale appropriately)
- [ ] No console errors related to mascot image

## Common Patterns

### Centered Mascot with Title
```tsx
<div className="text-center mb-12">
  <MascotImage size="lg" className="mx-auto mb-6" />
  <h1 className="text-5xl font-bold gradient-text">Page Title</h1>
  <p className="text-xl text-muted mt-4">Subtitle text</p>
</div>
```

### Side-by-Side Layout
```tsx
<div className="flex items-center gap-8">
  <MascotImage size="md" />
  <div>
    <h2 className="text-3xl font-bold mb-4">Content Title</h2>
    <p className="text-muted">Description text</p>
  </div>
</div>
```

### Card with Mascot
```tsx
<div className="card p-8 text-center">
  <MascotImage size="md" className="mx-auto mb-6" />
  <h3 className="text-2xl font-bold mb-3">Feature Name</h3>
  <p className="text-muted">Feature description</p>
</div>
```

---

**Implementation Priority:**
1. Header.tsx (Global - highest impact)
2. Footer.tsx (Global - highest impact)
3. HomePage.tsx (Most visible)
4. All other page heroes
5. Product pages

**Estimated Implementation Time:** 1-2 hours for all pages

---

**Last Updated:** October 31, 2025  
**Component Version:** 1.0.0  
**Maintained By:** Privacy Gecko Development Team
