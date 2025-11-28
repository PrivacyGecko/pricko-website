import React, { useRef, useState, useEffect, memo } from 'react';
import { ShaderBackground, type ShaderVariant } from './ShaderBackground';

interface LazyShaderProps {
  /**
   * Preset variant to use
   */
  variant: ShaderVariant;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Child elements to render on top of shader
   */
  children?: React.ReactNode;

  /**
   * Root margin for intersection observer
   * Default: '200px' (starts loading before visible)
   */
  rootMargin?: string;

  /**
   * Unload shader when scrolled out of view
   * Useful for pages with many shader sections
   * Default: false
   */
  unloadWhenHidden?: boolean;

  /**
   * Custom overlay opacity (0-1)
   */
  overlayOpacity?: number;
}

/**
 * LazyShader - Shader that only renders when in viewport
 *
 * Use this component for:
 * - Multiple shader sections on a page
 * - Performance-sensitive scenarios
 * - Below-the-fold content
 *
 * The shader will start loading when within rootMargin of the viewport,
 * providing a seamless experience as users scroll.
 *
 * Usage:
 * ```tsx
 * <LazyShader variant="section">
 *   <SectionContent />
 * </LazyShader>
 * ```
 */
export const LazyShader = memo<LazyShaderProps>(({
  variant,
  className = '',
  children,
  rootMargin = '200px',
  unloadWhenHidden = false,
  overlayOpacity = 0.4,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const nowVisible = entry.isIntersecting;
        setIsVisible(nowVisible);

        if (nowVisible && !hasBeenVisible) {
          setHasBeenVisible(true);
        }
      },
      {
        rootMargin,
        threshold: 0.1,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, hasBeenVisible]);

  // Determine if shader should render
  // - If unloadWhenHidden: render only when visible
  // - Otherwise: render once visible, keep rendered
  const shouldRenderShader = unloadWhenHidden ? isVisible : hasBeenVisible;

  return (
    <div ref={ref} className={className}>
      <ShaderBackground
        variant={variant}
        disabled={!shouldRenderShader}
        overlayOpacity={overlayOpacity}
        lazy={false} // We handle lazy loading at this level
      >
        {children}
      </ShaderBackground>
    </div>
  );
});

LazyShader.displayName = 'LazyShader';

export default LazyShader;
