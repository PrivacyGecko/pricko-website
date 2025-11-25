/**
 * Privacy Gecko Design System - Color Tokens
 * Modern 2025 Design System
 */

export const colors = {
  // PRIMARY BRAND COLORS
  brand: {
    black: '#000000',
    zinc900: '#18181b',
    green: '#4ade80',
    greenHover: '#22c55e',
  },

  // SECONDARY ACCENTS
  accent: {
    cyan: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c3d66',
      bright: '#22d3ee',
    },
    purple: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
      royal: '#c084fc',
    },
  },

  // SEMANTIC COLORS
  semantic: {
    success: '#4ade80',
    warning: '#fbbf24',
    error: '#f87171',
    info: '#60a5fa',
  },

  // PROTOCOL COLORS (GeckoCore)
  protocol: {
    primary: '#06b6d4',
    secondary: '#8b5cf6',
    accent: '#14b8a6',
  },

  // NEUTRALS
  neutral: {
    muted: '#d4d4d8',
    border: '#27272a',
    textMuted: '#a1a1aa',
  },

  // GLASSMORPHISM OVERLAYS (rgba)
  glass: {
    light: 'rgba(255, 255, 255, 0.05)',
    medium: 'rgba(255, 255, 255, 0.1)',
    heavy: 'rgba(255, 255, 255, 0.15)',
    border: 'rgba(255, 255, 255, 0.1)',
    borderBright: 'rgba(255, 255, 255, 0.2)',
  },

  // GRADIENTS (as strings for use in CSS/Tailwind)
  gradients: {
    green: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
    cyan: 'linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%)',
    purple: 'linear-gradient(135deg, #c084fc 0%, #a855f7 100%)',
    protocol: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
    protocolReverse: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
    teal: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
    aurora: 'linear-gradient(135deg, #4ade80 0%, #22d3ee 50%, #a855f7 100%)',
  },
} as const;

export type ColorToken = typeof colors;
