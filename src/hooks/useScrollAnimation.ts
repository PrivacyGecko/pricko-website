import { useEffect, RefObject } from 'react';

export interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * 
 * Usage:
 * ```tsx
 * const ref = useRef<HTMLDivElement>(null);
 * useScrollAnimation(ref, { threshold: 0.1, triggerOnce: true });
 * 
 * return <div ref={ref} className="animate-on-scroll opacity-0 translate-y-5">...</div>
 * ```
 */
export function useScrollAnimation(
  ref: RefObject<HTMLElement>,
  options: ScrollAnimationOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -10% 0px',
    triggerOnce = true
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, triggerOnce]);
}

/**
 * Utility function for batch Intersection Observer (for multiple elements)
 * 
 * Usage in useEffect:
 * ```tsx
 * useEffect(() => {
 *   return observeScrollAnimations('.animate-on-scroll');
 * }, []);
 * ```
 */
export function observeScrollAnimations(
  selector: string,
  options: ScrollAnimationOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -10% 0px',
    triggerOnce = true
  } = options;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          entry.target.classList.remove('visible');
        }
      });
    },
    { threshold, rootMargin }
  );

  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}
