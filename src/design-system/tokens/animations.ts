/**
 * Privacy Gecko Design System - Animation Tokens
 * Duration scale and easing functions
 */

export const animations = {
  // DURATION SCALE
  duration: {
    instant: '0ms',
    fastest: '75ms',
    fast: '150ms',
    normal: '200ms',
    moderate: '300ms',
    slow: '400ms',
    slower: '600ms',
    slowest: '1000ms',
  },

  // EASING FUNCTIONS (cubic-bezier)
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    snappy: 'cubic-bezier(0.4, 0, 0.6, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    anticipate: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
  },

  // DELAYS
  delay: {
    none: '0ms',
    short: '100ms',
    medium: '200ms',
    long: '300ms',
  },
} as const;

export type AnimationToken = typeof animations;
