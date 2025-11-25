/**
 * Privacy Gecko Design System - Glassmorphism Utilities
 * Helper functions for glassmorphic effects
 */

export type GlassStrength = 'light' | 'medium' | 'heavy';
export type GlassTint = 'none' | 'green' | 'cyan' | 'purple' | 'protocol';

export interface GlassConfig {
  strength?: GlassStrength;
  tint?: GlassTint;
  border?: boolean;
  borderBright?: boolean;
}

const blurValues: Record<GlassStrength, string> = {
  light: 'backdrop-blur-sm',
  medium: 'backdrop-blur-md',
  heavy: 'backdrop-blur-lg',
};

const backgroundValues: Record<GlassStrength, string> = {
  light: 'bg-white/5',
  medium: 'bg-white/10',
  heavy: 'bg-white/15',
};

const tintValues: Record<GlassTint, string> = {
  none: '',
  green: 'bg-gradient-to-br from-accent/5 to-transparent',
  cyan: 'bg-gradient-to-br from-cyan-bright/5 to-transparent',
  purple: 'bg-gradient-to-br from-purple-royal/5 to-transparent',
  protocol: 'bg-gradient-to-br from-protocol-primary/5 via-protocol-secondary/5 to-transparent',
};

/**
 * Generates glassmorphism CSS classes
 */
export function glass({
  strength = 'medium',
  tint = 'none',
  border = true,
  borderBright = false,
}: GlassConfig = {}): string {
  const classes = [
    blurValues[strength],
    backgroundValues[strength],
    tintValues[tint],
  ];

  if (border) {
    classes.push('border');
    classes.push(borderBright ? 'border-white/20' : 'border-white/10');
  }

  return classes.filter(Boolean).join(' ');
}

/**
 * Preset glassmorphism configurations
 */
export const glassPresets = {
  card: glass({ strength: 'medium', tint: 'none', border: true }),
  cardGreen: glass({ strength: 'medium', tint: 'green', border: true }),
  cardProtocol: glass({ strength: 'medium', tint: 'protocol', border: true }),
  header: glass({ strength: 'heavy', tint: 'none', border: false }),
  modal: glass({ strength: 'heavy', tint: 'none', border: true, borderBright: true }),
} as const;
