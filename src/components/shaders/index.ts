/**
 * Shader Components for Privacy Gecko / Pricko.com
 *
 * GPU-accelerated visual effects using @paper-design/shaders-react
 *
 * Design Philosophy: "Confident Restraint"
 * - Slow, ambient movement (not attention-grabbing)
 * - Dark base with subtle accent tints
 * - Professional appearance, not flashy crypto aesthetics
 *
 * Features:
 * - Automatic device capability detection
 * - Respects prefers-reduced-motion
 * - CSS fallbacks for unsupported devices
 * - Performance-optimized lazy loading
 */

export { ShaderBackground, type ShaderVariant } from './ShaderBackground';
export { LazyShader } from './LazyShader';
export { default as ShaderProvider, useShaderContext, useShaderRegistration } from '../../contexts/ShaderContext';
