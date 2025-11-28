/**
 * Shader Presets for Privacy Gecko / Pricko.com
 *
 * Design Philosophy: "Confident Restraint"
 * - Slow, barely perceptible movement
 * - Dark base with subtle accent tints (10-15% opacity)
 * - Professional, not flashy
 *
 * Color Strategy:
 * - Hero: Subtle green undertone (brand color)
 * - Protocol: Cyan/purple tints (technical sophistication)
 * - Ambient: Near-black variations (texture only)
 */

export interface ShaderPreset {
  colors: [string, string, string, string];
  speed: number;
  distortion: number;
  swirl: number;
}

export const SHADER_PRESETS: Record<string, ShaderPreset> = {
  /**
   * Hero Background
   * - Primary visual impact area
   * - Subtle green undertone from brand accent
   * - Slowest movement for sophistication
   */
  hero: {
    // Privacy, Secure, Trust, Protocol, Blockchain, Solana themed
    // Deep purple (Privacy/Blockchain) + Teal (Secure/Protocol) + Solana brand hints
    colors: [
      '#1a1a3e', // Deep navy-purple (Privacy, Blockchain)
      '#0f3d4d', // Deep teal (Secure, Protocol)
      '#2d1f5e', // Purple (Solana, Blockchain)
      '#0d4a5a', // Cyan-teal (Trust, Protocol)
    ],
    speed: 0.12,
    distortion: 0.45,
    swirl: 0.4,
  },

  /**
   * Section Dividers / Content Sections
   * - More muted than hero
   * - Provides visual separation without distraction
   */
  section: {
    colors: ['#0a0a0a', '#18181b', '#0d1f17', '#18181b'],
    speed: 0.05,
    distortion: 0.2,
    swirl: 0.1,
  },

  /**
   * Ambient / Footer
   * - Barely perceptible texture
   * - Near-black variations only
   * - Adds depth without attention
   */
  ambient: {
    colors: ['#0a0a0a', '#0f0f0f', '#0a0a0a', '#0f0f0f'],
    speed: 0.03,
    distortion: 0.1,
    swirl: 0.05,
  },

  /**
   * Protocol / Technical Sections
   * - Cyan/purple tints for GeckoCore branding
   * - Communicates technical sophistication
   * - Used for protocol-related content
   */
  protocol: {
    colors: ['#0a0f14', '#0f0a14', '#0a0a0f', '#0f0f14'],
    speed: 0.06,
    distortion: 0.25,
    swirl: 0.15,
  },

  /**
   * CTA / Highlight Areas
   * - Slightly more visible accent
   * - Draws attention to conversion areas
   * - Still restrained compared to typical crypto sites
   */
  cta: {
    colors: ['#0a0a0a', '#0f1a14', '#0a1510', '#0d0d0d'],
    speed: 0.1,
    distortion: 0.35,
    swirl: 0.25,
  },

  /**
   * Loading / Interactive State
   * - Most visible preset
   * - Used for loading states or hover effects
   * - Still professional, not flashy
   */
  interactive: {
    colors: ['#0d1a12', '#0a1510', '#0f1a14', '#0a0f0c'],
    speed: 0.15,
    distortion: 0.4,
    swirl: 0.3,
  },
};

/**
 * CSS Fallbacks for when shaders are disabled
 * Used for:
 * - Low-end devices
 * - Users who prefer reduced motion
 * - Browsers without WebGL support
 */
export const CSS_FALLBACKS: Record<string, string> = {
  hero: 'bg-gradient-to-b from-black via-zinc-950 to-black',
  section: 'bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950',
  ambient: 'bg-zinc-950',
  protocol: 'bg-gradient-to-br from-slate-950 via-zinc-950 to-slate-950',
  cta: 'bg-gradient-to-br from-zinc-950 via-emerald-950/20 to-zinc-950',
  interactive: 'bg-gradient-to-br from-emerald-950/30 via-zinc-950 to-emerald-950/30',
};

/**
 * Speed multipliers for different contexts
 */
export const SPEED_MULTIPLIERS = {
  desktop: 1,
  mobile: 0.5,
  reducedMotion: 0,
  lowEnd: 0,
};

/**
 * Performance thresholds
 */
export const PERFORMANCE_CONFIG = {
  maxConcurrentShaders: 2,
  mobileMaxShaders: 1,
  lowEndMaxShaders: 0,
  intersectionThreshold: 0.1,
  intersectionRootMargin: '100px',
};

export default SHADER_PRESETS;
