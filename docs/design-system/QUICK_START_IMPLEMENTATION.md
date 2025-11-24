# PRICKO Design System - Quick Start Implementation Guide

This guide provides step-by-step instructions for implementing the professional design system.

## Phase 1: Foundation (Week 1) - START HERE

### Step 1: Update Tailwind Configuration (2-3 hours)

**File**: `tailwind.config.js`

Replace the `extend.colors` section with the enhanced palette:

```javascript
extend: {
  colors: {
    // Core backgrounds
    primary: '#000000',
    secondary: '#18181b',
    
    // Accent colors (Privacy Green - Brand)
    accent: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',  // PRIMARY BRAND GREEN
      500: '#22c55e',  // Hover
      600: '#16a34a',  // Pressed
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    'accent-hover': '#22c55e', // Keep for backwards compatibility
    
    // Secondary accent (Electric Cyan - Tech/Innovation)
    cyan: {
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
    },
    
    // Tertiary accent (Royal Purple - Premium/Governance)
    purple: {
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
    },
    
    // Semantic colors
    success: {
      400: '#4ade80',
      500: '#22c55e',
    },
    warning: {
      400: '#fbbf24',
      500: '#f59e0b',
    },
    error: {
      400: '#f87171',
      500: '#ef4444',
    },
    info: {
      400: '#60a5fa',
      500: '#3b82f6',
    },
    
    // Grays/Neutrals (expanded)
    muted: '#d4d4d8',
    border: '#27272a',
  },
  
  // Add typography scale
  fontSize: {
    'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '900' }],
    'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '900' }],
    'display-lg': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '800' }],
    'h1': ['2.5rem', { lineHeight: '1.25', letterSpacing: '-0.025em', fontWeight: '900' }],
    'h2': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.025em', fontWeight: '700' }],
    'h3': ['1.625rem', { lineHeight: '1.3', letterSpacing: '-0.015em', fontWeight: '700' }],
    'h4': ['1.375rem', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '600' }],
    'h5': ['1.125rem', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '600' }],
    'h6': ['1rem', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '600' }],
    'body-xl': ['1.25rem', { lineHeight: '1.625', letterSpacing: '0' }],
    'body-lg': ['1.125rem', { lineHeight: '1.625', letterSpacing: '0' }],
    'body-base': ['1rem', { lineHeight: '1.625', letterSpacing: '0' }],
    'body-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0' }],
    'body-xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
  },
  
  // Add font families
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
    mono: ['JetBrains Mono', 'Fira Code', 'SF Mono', 'Monaco', 'Cascadia Code', 'Consolas', 'monospace'],
  },
  
  // Add box shadows
  boxShadow: {
    'glow-accent': '0 0 20px rgba(74, 222, 128, 0.3)',
    'glow-accent-strong': '0 0 40px rgba(74, 222, 128, 0.5)',
    'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.3)',
    'glow-purple': '0 0 20px rgba(192, 132, 252, 0.3)',
    'professional': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    'professional-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
}
```

### Step 2: Add New Component Classes to index.css (3-4 hours)

**File**: `src/index.css`

Add these new component classes to the `@layer components` section:

```css
@layer components {
  /* === BUTTON VARIANTS === */
  
  /* Tertiary Button (NEW) */
  .btn-tertiary {
    @apply bg-accent/10 text-accent hover:bg-accent/20 font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary;
  }
  
  /* Danger Button (NEW) */
  .btn-danger {
    @apply bg-gradient-to-r from-error-400 to-error-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-error-400 focus:ring-offset-2 focus:ring-offset-primary;
  }
  
  /* Info Button (NEW) */
  .btn-info {
    @apply bg-gradient-to-r from-info-400 to-info-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-info-400 focus:ring-offset-2 focus:ring-offset-primary;
  }
  
  /* Link Button (NEW) */
  .btn-link {
    @apply bg-transparent text-accent hover:text-accent-500 font-medium py-2 px-0 underline underline-offset-4 decoration-transparent hover:decoration-accent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary;
  }
  
  /* Button Sizes */
  .btn-xs {
    @apply py-1.5 px-3 text-xs;
  }
  
  .btn-sm {
    @apply py-2 px-4 text-sm;
  }
  
  .btn-lg {
    @apply py-4 px-8 text-lg;
  }
  
  .btn-xl {
    @apply py-5 px-10 text-xl;
  }
  
  /* === CARD VARIANTS === */
  
  /* Card Elevated (NEW) */
  .card-elevated {
    @apply bg-secondary border border-border rounded-xl p-6 shadow-lg hover:shadow-professional-lg hover:-translate-y-1 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent;
  }
  
  /* Card Interactive (NEW) */
  .card-interactive {
    @apply bg-secondary border border-border rounded-xl p-6 cursor-pointer hover:bg-zinc-800 hover:border-accent/50 hover:scale-[1.02] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent;
  }
  
  /* Card Glass (NEW) */
  .card-glass {
    @apply bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent;
  }
  
  /* Card Outlined (NEW) */
  .card-outlined {
    @apply bg-transparent border-2 border-zinc-700 rounded-xl p-6 hover:border-accent/50 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent;
  }
  
  /* Card Premium (NEW) */
  .card-premium {
    @apply bg-gradient-to-br from-purple-400/10 to-purple-500/5 border border-purple-400 rounded-xl p-6 shadow-glow-purple transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent;
  }
  
  /* === BADGE VARIANTS === */
  
  .badge {
    @apply inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider;
  }
  
  .badge-live {
    @apply bg-gradient-to-r from-accent-400 to-accent-500 text-white shadow-glow-accent;
  }
  
  .badge-beta {
    @apply bg-gradient-to-r from-warning-400 to-warning-500 text-black shadow-[0_0_15px_rgba(251,191,36,0.3)];
  }
  
  .badge-development {
    @apply bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-[0_0_15px_rgba(251,146,60,0.3)];
  }
  
  .badge-coming-soon {
    @apply bg-gradient-to-r from-info-400 to-info-500 text-white shadow-[0_0_15px_rgba(96,165,250,0.3)];
  }
  
  .badge-premium {
    @apply bg-gradient-to-r from-purple-400 to-purple-500 text-white shadow-glow-purple;
  }
  
  .badge-success {
    @apply bg-success-400 text-white;
  }
  
  .badge-warning {
    @apply bg-warning-400 text-black;
  }
  
  .badge-error {
    @apply bg-error-400 text-white;
  }
  
  .badge-info {
    @apply bg-info-400 text-white;
  }
  
  .badge-subtle {
    @apply bg-accent/10 text-accent border border-accent/30;
  }
  
  /* === GRADIENT TEXT VARIANTS === */
  
  .gradient-text-hero {
    @apply bg-gradient-to-r from-accent-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent;
  }
  
  .gradient-text-cyan {
    @apply bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent;
  }
  
  .gradient-text-purple {
    @apply bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent;
  }
  
  /* === LOADING STATES === */
  
  .skeleton {
    @apply bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-[length:200%_100%] animate-shimmer rounded;
  }
  
  .spinner {
    @apply border-4 border-zinc-800 border-t-accent rounded-full w-8 h-8 animate-spin;
  }
  
  .pulse-dot {
    @apply animate-pulse;
  }
  
  /* === TYPOGRAPHY HELPERS === */
  
  .text-professional {
    font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
    text-rendering: optimizeLegibility;
  }
  
  .heading-1 {
    @apply text-h1 font-black leading-tight tracking-tight text-professional;
  }
  
  .heading-2 {
    @apply text-h2 font-bold leading-tight tracking-tight text-professional;
  }
  
  .heading-3 {
    @apply text-h3 font-bold leading-snug text-professional;
  }
  
  .body-text {
    @apply text-body-base leading-relaxed text-professional;
  }
  
  .code-text {
    @apply font-mono text-body-sm text-accent-300 bg-zinc-950 px-2 py-1 rounded;
  }
}
```

### Step 3: Add New Animation Keyframes (1 hour)

Add to the end of `src/index.css`:

```css
/* === ENHANCED ANIMATIONS === */

/* Shimmer for skeleton loading */
@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Gradient animation for hero text */
@keyframes gradient-shift-hero {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Add to tailwind config animations */
/*
animation: {
  'shimmer': 'shimmer 1.5s ease-in-out infinite',
  'gradient-hero': 'gradient-shift-hero 6s ease infinite',
}
*/
```

### Step 4: Create New Component Files

#### Component: TrustBadge.tsx

**File**: `src/components/ui/TrustBadge.tsx`

```tsx
import React from 'react';
import { IconType } from 'react-icons';

interface TrustBadgeProps {
  icon: IconType;
  title: string;
  subtitle?: string;
  variant?: 'default' | 'accent' | 'cyan' | 'purple';
  className?: string;
}

const TrustBadge: React.FC<TrustBadgeProps> = ({
  icon: Icon,
  title,
  subtitle,
  variant = 'default',
  className = ''
}) => {
  const variantClasses = {
    default: 'border-zinc-800 text-accent-400',
    accent: 'border-accent-400/30 text-accent-400 bg-accent-400/5',
    cyan: 'border-cyan-400/30 text-cyan-400 bg-cyan-400/5',
    purple: 'border-purple-400/30 text-purple-400 bg-purple-400/5',
  };

  return (
    <div className={`
      flex items-center gap-3 bg-secondary border rounded-lg px-4 py-3
      ${variantClasses[variant]}
      ${className}
    `}>
      <Icon className="text-xl flex-shrink-0" />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-white truncate">{title}</p>
        {subtitle && (
          <p className="text-xs text-muted truncate">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default TrustBadge;
```

#### Component: ProgressBar.tsx

**File**: `src/components/ui/ProgressBar.tsx`

```tsx
import React from 'react';

interface ProgressBarProps {
  value: number; // 0-100
  label?: string;
  showPercentage?: boolean;
  variant?: 'accent' | 'cyan' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  label,
  showPercentage = true,
  variant = 'accent',
  size = 'md',
  className = ''
}) => {
  const clampedValue = Math.min(100, Math.max(0, value));
  
  const variantClasses = {
    accent: 'bg-gradient-to-r from-accent-400 to-accent-500',
    cyan: 'bg-gradient-to-r from-cyan-400 to-cyan-500',
    purple: 'bg-gradient-to-r from-purple-400 to-purple-500',
  };
  
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  return (
    <div className={className}>
      {(label || showPercentage) && (
        <div className="flex items-center justify-between mb-2">
          {label && <span className="text-sm text-muted">{label}</span>}
          {showPercentage && (
            <span className="text-sm font-bold text-accent-400">
              {clampedValue}%
            </span>
          )}
        </div>
      )}
      <div className={`w-full bg-zinc-800 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div
          className={`${variantClasses[variant]} ${sizeClasses[size]} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
```

## Quick Test

After implementing Steps 1-4, test the new design system:

1. Start dev server: `npm run dev`
2. Open browser console
3. Inspect elements using new classes
4. Test new button variants:
   ```tsx
   <button className="btn-tertiary">Tertiary</button>
   <button className="btn-danger">Danger</button>
   ```
5. Test new card variants:
   ```tsx
   <div className="card-elevated">Elevated Card</div>
   <div className="card-glass">Glass Card</div>
   ```
6. Test new components:
   ```tsx
   <TrustBadge icon={FaShieldAlt} title="Audited" subtitle="Smart Contracts" />
   <ProgressBar value={90} label="Development Progress" />
   ```

## Next Steps

Once foundation is complete, move to:
- **Week 2**: Enhance homepage hero and tools page
- **Week 3**: Add trust indicators and proof of development
- **Week 4**: Polish about page and roadmap
- **Week 5**: Accessibility and performance optimization

See `PRICKO_PROFESSIONAL_DESIGN_STRATEGY.md` for full implementation roadmap.
