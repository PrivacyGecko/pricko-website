/**
 * Privacy Gecko Design System - Framer Motion Variants
 * Reusable animation patterns
 */

import { Variants, Transition } from 'framer-motion';

// ===== TRANSITIONS =====

export const transitions = {
  smooth: {
    type: 'tween',
    duration: 0.2,
    ease: [0.4, 0, 0.2, 1],
  } as Transition,

  snappy: {
    type: 'tween',
    duration: 0.15,
    ease: [0.4, 0, 0.6, 1],
  } as Transition,

  bounce: {
    type: 'spring',
    stiffness: 400,
    damping: 10,
  } as Transition,

  elastic: {
    type: 'spring',
    stiffness: 300,
    damping: 20,
  } as Transition,

  slow: {
    type: 'tween',
    duration: 0.4,
    ease: [0.4, 0, 0.2, 1],
  } as Transition,
} as const;

// ===== FADE VARIANTS =====

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.smooth,
  },
  exit: {
    opacity: 0,
    transition: transitions.smooth,
  },
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: transitions.smooth,
  },
};

export const fadeDownVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
};

export const fadeLeftVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.smooth,
  },
};

export const fadeRightVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.smooth,
  },
};

// ===== SCALE VARIANTS =====

export const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.elastic,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: transitions.smooth,
  },
};

export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: transitions.elastic,
  },
};

// ===== CARD VARIANTS =====

export const cardHoverVariants: Variants = {
  initial: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.02,
    transition: transitions.snappy,
  },
  tap: {
    scale: 0.98,
    transition: transitions.snappy,
  },
};

export const cardGlowVariants: Variants = {
  initial: {
    boxShadow: '0 8px 25px -5px rgba(74, 222, 128, 0.15), 0 4px 10px -5px rgba(0, 0, 0, 0.1)',
  },
  hover: {
    boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.2), 0 0 30px -5px rgba(74, 222, 128, 0.2)',
    transition: transitions.smooth,
  },
};

// ===== STAGGER VARIANTS (for lists) =====

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
};

// ===== BUTTON VARIANTS =====

export const buttonVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: transitions.snappy,
  },
  tap: {
    scale: 0.95,
    transition: transitions.snappy,
  },
};

// ===== GLOW PULSE =====

export const glowPulseVariants: Variants = {
  initial: {
    boxShadow: '0 0 10px rgba(74, 222, 128, 0.3)',
  },
  animate: {
    boxShadow: [
      '0 0 10px rgba(74, 222, 128, 0.3)',
      '0 0 20px rgba(74, 222, 128, 0.6)',
      '0 0 10px rgba(74, 222, 128, 0.3)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ===== PROTOCOL GLOW =====

export const protocolGlowVariants: Variants = {
  initial: {
    boxShadow: '0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)',
  },
  animate: {
    boxShadow: [
      '0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)',
      '0 0 30px rgba(6, 182, 212, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)',
      '0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)',
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ===== MODAL VARIANTS =====

export const modalBackdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.smooth,
  },
  exit: {
    opacity: 0,
    transition: transitions.smooth,
  },
};

export const modalContentVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: transitions.elastic,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: transitions.smooth,
  },
};

// ===== SLIDE VARIANTS =====

export const slideUpVariants: Variants = {
  hidden: { y: '100%' },
  visible: {
    y: 0,
    transition: transitions.elastic,
  },
  exit: {
    y: '100%',
    transition: transitions.smooth,
  },
};

export const slideDownVariants: Variants = {
  hidden: { y: '-100%' },
  visible: {
    y: 0,
    transition: transitions.elastic,
  },
  exit: {
    y: '-100%',
    transition: transitions.smooth,
  },
};
