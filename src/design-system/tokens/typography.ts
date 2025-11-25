/**
 * Privacy Gecko Design System - Typography Tokens
 * Fluid typography using clamp() for responsive scaling
 */

export const typography = {
  // FONT FAMILIES
  fontFamily: {
    sans: "'Inter', system-ui, -apple-system, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
  },

  // FLUID TYPOGRAPHY SCALE (using clamp)
  fontSize: {
    // Display sizes (hero, landing pages)
    display: {
      xl: 'clamp(3.5rem, 8vw, 6rem)',
      lg: 'clamp(3rem, 6vw, 4.5rem)',
      md: 'clamp(2.5rem, 5vw, 3.75rem)',
      sm: 'clamp(2rem, 4vw, 3rem)',
    },

    // Headings
    h1: 'clamp(2.25rem, 4vw, 3rem)',
    h2: 'clamp(1.875rem, 3vw, 2.25rem)',
    h3: 'clamp(1.5rem, 2.5vw, 1.875rem)',
    h4: 'clamp(1.25rem, 2vw, 1.5rem)',
    h5: 'clamp(1.125rem, 1.5vw, 1.25rem)',
    h6: 'clamp(1rem, 1.25vw, 1.125rem)',

    // Body text
    base: '1rem',
    lg: '1.125rem',
    sm: '0.875rem',
    xs: '0.75rem',

    // Special
    caption: '0.875rem',
    label: '0.8125rem',
    overline: '0.75rem',
  },

  // FONT WEIGHTS
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  // LINE HEIGHTS
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  // LETTER SPACING
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

export type TypographyToken = typeof typography;
