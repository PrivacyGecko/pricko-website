import React, { memo, useState, useEffect, useRef } from 'react';
import { MeshGradient } from '@paper-design/shaders-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useDeviceCapability } from '../../hooks/useDeviceCapability';
import { SHADER_PRESETS, CSS_FALLBACKS, type ShaderPreset } from '../../constants/shaderPresets';

export type ShaderVariant = 'hero' | 'section' | 'ambient' | 'protocol' | 'cta' | 'interactive';

interface ShaderBackgroundProps {
  variant: ShaderVariant;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  overlayOpacity?: number;
  customPreset?: Partial<ShaderPreset>;
  lazy?: boolean;
  rootMargin?: string;
  'aria-label'?: string;
}

export const ShaderBackground = memo<ShaderBackgroundProps>(({
  variant,
  className = '',
  children,
  disabled = false,
  overlayOpacity = 0.4,
  customPreset,
  lazy = true,
  rootMargin = '100px',
  'aria-label': ariaLabel,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const { isLowEnd, isMobile, hasWebGL } = useDeviceCapability();
  const [isVisible, setIsVisible] = useState(!lazy);
  const [mounted, setMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Track container dimensions for MeshGradient
  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [mounted]);

  useEffect(() => {
    if (!lazy || !mounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, mounted, rootMargin]);

  const shouldDisable = disabled || prefersReducedMotion || isLowEnd || !hasWebGL;

  const preset = SHADER_PRESETS[variant] || SHADER_PRESETS.hero;
  const mergedPreset: ShaderPreset = customPreset
    ? { ...preset, ...customPreset }
    : preset;

  const effectiveSpeed = shouldDisable
    ? 0
    : isMobile
      ? mergedPreset.speed * 0.5
      : mergedPreset.speed;

  const fallbackClass = CSS_FALLBACKS[variant] || CSS_FALLBACKS.hero;
  // Don't add 'relative' - let className control positioning
  const containerClasses = `overflow-hidden ${className}`;

  const hasDimensions = dimensions.width > 0 && dimensions.height > 0;

  // Render fallback
  if (!mounted || shouldDisable || !isVisible || !hasDimensions) {
    return (
      <div
        ref={containerRef}
        className={containerClasses}
        role="presentation"
        aria-label={ariaLabel}
      >
        <div className={`absolute inset-0 ${fallbackClass}`} />
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={containerClasses}
      role="presentation"
      aria-label={ariaLabel}
    >
      {/* MeshGradient - requires explicit pixel dimensions */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: dimensions.width,
          height: dimensions.height,
        }}
      >
        <MeshGradient
          colors={mergedPreset.colors}
          speed={effectiveSpeed}
          distortion={mergedPreset.distortion}
          swirl={mergedPreset.swirl}
          style={{
            width: dimensions.width,
            height: dimensions.height,
          }}
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: overlayOpacity, zIndex: 1 }}
      />

      {/* Content */}
      <div className="relative" style={{ zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
});

ShaderBackground.displayName = 'ShaderBackground';

export default ShaderBackground;
