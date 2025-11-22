import { useState, useEffect } from 'react';

/**
 * Custom hook to detect user's motion preference
 * Respects prefers-reduced-motion system setting for WCAG 2.1 AA compliance
 * 
 * @returns {boolean} true if user prefers reduced motion, false otherwise
 */
export const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Check if browser supports matchMedia
    if (!window.matchMedia) {
      return;
    }

    // Create media query for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Handler for media query changes
    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setPrefersReducedMotion(event.matches);
    };

    // Listen for changes (modern browsers)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } 
    // Fallback for older browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return prefersReducedMotion;
};

/**
 * Helper function to get animation properties based on reduced motion preference
 * 
 * @param {boolean} prefersReducedMotion - User's motion preference
 * @param {object} fullAnimation - Full animation properties (when motion is enabled)
 * @param {object} reducedAnimation - Reduced animation properties (when motion is reduced)
 * @returns {object} Animation properties to use
 * 
 * @example
 * const prefersReducedMotion = useReducedMotion();
 * const animationProps = getAnimationProps(
 *   prefersReducedMotion,
 *   { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } },
 *   { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.2 } }
 * );
 */
export const getAnimationProps = <T extends Record<string, any>>(
  prefersReducedMotion: boolean,
  fullAnimation: T,
  reducedAnimation?: Partial<T>
): T => {
  if (prefersReducedMotion) {
    // If reduced animation provided, use it; otherwise return minimal fade
    return (reducedAnimation as T) || {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.2 }
    } as T;
  }
  return fullAnimation;
};

/**
 * Helper function to conditionally apply animation duration
 * 
 * @param {boolean} prefersReducedMotion - User's motion preference
 * @param {number} normalDuration - Duration in seconds for full animation
 * @param {number} reducedDuration - Duration in seconds for reduced animation (default: 0.2s)
 * @returns {number} Duration to use
 */
export const getAnimationDuration = (
  prefersReducedMotion: boolean,
  normalDuration: number,
  reducedDuration: number = 0.2
): number => {
  return prefersReducedMotion ? reducedDuration : normalDuration;
};

/**
 * Helper function to conditionally apply animation delay
 * 
 * @param {boolean} prefersReducedMotion - User's motion preference
 * @param {number} normalDelay - Delay in seconds for full animation
 * @returns {number} Delay to use (0 if reduced motion preferred)
 */
export const getAnimationDelay = (
  prefersReducedMotion: boolean,
  normalDelay: number
): number => {
  return prefersReducedMotion ? 0 : normalDelay;
};
