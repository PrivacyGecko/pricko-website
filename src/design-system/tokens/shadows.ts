/**
 * Privacy Gecko Design System - Shadow Tokens
 * Elevation system for depth hierarchy
 */

export const shadows = {
  // ELEVATION SHADOWS
  elevation: {
    none: 'none',
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  },

  // GLOW SHADOWS (green accent)
  glow: {
    sm: '0 0 10px rgba(74, 222, 128, 0.2)',
    md: '0 0 20px rgba(74, 222, 128, 0.3)',
    lg: '0 0 30px rgba(74, 222, 128, 0.4)',
    xl: '0 0 40px rgba(74, 222, 128, 0.5)',
  },

  // PROTOCOL GLOW (cyan/purple)
  protocolGlow: {
    sm: '0 0 10px rgba(6, 182, 212, 0.2), 0 0 20px rgba(139, 92, 246, 0.1)',
    md: '0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)',
    lg: '0 0 30px rgba(6, 182, 212, 0.4), 0 0 60px rgba(139, 92, 246, 0.3)',
  },

  // COMBINED (elevation + glow)
  combined: {
    card: '0 8px 25px -5px rgba(74, 222, 128, 0.15), 0 4px 10px -5px rgba(0, 0, 0, 0.1)',
    cardHover: '0 20px 35px -10px rgba(0, 0, 0, 0.2), 0 0 30px -5px rgba(74, 222, 128, 0.2)',
  },
} as const;

export type ShadowToken = typeof shadows;
