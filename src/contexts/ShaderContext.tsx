import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { useDeviceCapability } from '../hooks/useDeviceCapability';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface ShaderContextValue {
  // State
  activeShaders: number;
  maxShaders: number;
  isDisabled: boolean;

  // Device info
  isMobile: boolean;
  isLowEnd: boolean;
  hasWebGL: boolean;
  prefersReducedMotion: boolean;

  // Actions
  registerShader: () => boolean;
  unregisterShader: () => void;
  canRenderShader: () => boolean;

  // Speed multiplier based on device
  speedMultiplier: number;
}

const ShaderContext = createContext<ShaderContextValue | null>(null);

interface ShaderProviderProps {
  children: React.ReactNode;
  forceDisable?: boolean;
}

/**
 * ShaderProvider - Manages shader resources across the application
 *
 * Responsibilities:
 * - Track active shader count
 * - Enforce maximum concurrent shaders based on device capability
 * - Provide device information to shader components
 * - Manage speed multipliers for performance
 */
export const ShaderProvider: React.FC<ShaderProviderProps> = ({
  children,
  forceDisable = false,
}) => {
  const [activeShaders, setActiveShaders] = useState(0);
  const { isLowEnd, isMobile, hasWebGL, maxShaders: deviceMaxShaders } = useDeviceCapability();
  const prefersReducedMotion = useReducedMotion();

  // Determine if shaders should be globally disabled
  const isDisabled = forceDisable || isLowEnd || !hasWebGL || prefersReducedMotion;

  // Maximum shaders allowed
  const maxShaders = isDisabled ? 0 : deviceMaxShaders;

  // Speed multiplier based on context
  const speedMultiplier = useMemo(() => {
    if (isDisabled) return 0;
    if (isMobile) return 0.5;
    return 1;
  }, [isDisabled, isMobile]);

  // Register a new shader (returns true if allowed)
  const registerShader = useCallback(() => {
    if (isDisabled) return false;
    if (activeShaders >= maxShaders) return false;

    setActiveShaders((prev) => prev + 1);
    return true;
  }, [activeShaders, maxShaders, isDisabled]);

  // Unregister a shader
  const unregisterShader = useCallback(() => {
    setActiveShaders((prev) => Math.max(0, prev - 1));
  }, []);

  // Check if a new shader can be rendered
  const canRenderShader = useCallback(() => {
    if (isDisabled) return false;
    return activeShaders < maxShaders;
  }, [activeShaders, maxShaders, isDisabled]);

  const value = useMemo(
    () => ({
      activeShaders,
      maxShaders,
      isDisabled,
      isMobile,
      isLowEnd,
      hasWebGL,
      prefersReducedMotion,
      registerShader,
      unregisterShader,
      canRenderShader,
      speedMultiplier,
    }),
    [
      activeShaders,
      maxShaders,
      isDisabled,
      isMobile,
      isLowEnd,
      hasWebGL,
      prefersReducedMotion,
      registerShader,
      unregisterShader,
      canRenderShader,
      speedMultiplier,
    ]
  );

  return (
    <ShaderContext.Provider value={value}>
      {children}
    </ShaderContext.Provider>
  );
};

/**
 * Hook to access shader context
 * Must be used within ShaderProvider
 */
export const useShaderContext = (): ShaderContextValue => {
  const context = useContext(ShaderContext);
  if (!context) {
    throw new Error('useShaderContext must be used within ShaderProvider');
  }
  return context;
};

/**
 * Hook for shader components to register/unregister themselves
 * Returns whether the shader should render
 */
export const useShaderRegistration = (): {
  shouldRender: boolean;
  speedMultiplier: number;
} => {
  const context = useContext(ShaderContext);

  // If no provider, allow rendering but with default values
  if (!context) {
    return { shouldRender: true, speedMultiplier: 1 };
  }

  return {
    shouldRender: !context.isDisabled && context.activeShaders < context.maxShaders,
    speedMultiplier: context.speedMultiplier,
  };
};

export default ShaderProvider;
