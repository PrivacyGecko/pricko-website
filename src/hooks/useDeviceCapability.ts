import { useState, useEffect } from 'react';

export interface DeviceCapability {
  isLowEnd: boolean;
  isMobile: boolean;
  hasWebGL: boolean;
  maxShaders: number;
  gpuTier: 'low' | 'medium' | 'high';
}

/**
 * Hook to detect device capabilities for performance-aware rendering
 * Determines if device can handle GPU-accelerated shaders
 */
export const useDeviceCapability = (): DeviceCapability => {
  const [capability, setCapability] = useState<DeviceCapability>({
    isLowEnd: false,
    isMobile: false,
    hasWebGL: true,
    maxShaders: 2,
    gpuTier: 'high',
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkCapability = () => {
      // Mobile detection
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
        window.matchMedia('(max-width: 768px)').matches ||
        ('ontouchstart' in window);

      // WebGL support detection
      let hasWebGL = false;
      let gpuTier: 'low' | 'medium' | 'high' = 'high';

      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        hasWebGL = !!gl;

        if (gl) {
          // Try to detect GPU tier from renderer info
          const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
          if (debugInfo) {
            const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            const rendererLower = renderer.toLowerCase();

            // Detect low-end GPUs
            if (
              rendererLower.includes('intel') ||
              rendererLower.includes('mesa') ||
              rendererLower.includes('swiftshader') ||
              rendererLower.includes('llvmpipe')
            ) {
              gpuTier = 'low';
            } else if (
              rendererLower.includes('apple') ||
              rendererLower.includes('adreno 6') ||
              rendererLower.includes('mali-g')
            ) {
              gpuTier = 'medium';
            }
          }
        }
      } catch {
        hasWebGL = false;
        gpuTier = 'low';
      }

      // Low-end device detection
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 4;

      const isLowEnd =
        hardwareConcurrency <= 2 ||
        deviceMemory <= 2 ||
        !hasWebGL ||
        gpuTier === 'low';

      // Max concurrent shaders based on capability
      let maxShaders = 2;
      if (isLowEnd) {
        maxShaders = 0;
      } else if (isMobile || gpuTier === 'medium') {
        maxShaders = 1;
      }

      setCapability({ isLowEnd, isMobile, hasWebGL, maxShaders, gpuTier });
    };

    checkCapability();

    // Re-check on resize (mobile/desktop switch)
    const handleResize = () => {
      const wasMobile = capability.isMobile;
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      if (wasMobile !== isMobile) {
        checkCapability();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return capability;
};

export default useDeviceCapability;
