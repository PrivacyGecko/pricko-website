import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface MascotImageProps {
  /**
   * Size variant for the mascot image
   * - xs: 56px (compact header)
   * - sm: 80px (navigation, footer)
   * - md: 120px (default, cards)
   * - lg: 160px (page heroes)
   * - xl: 200px (homepage hero)
   * - 2xl: 280px (large homepage hero)
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * Visual variant
   * - default: white background (for smaller sizes, page headers)
   * - hero: glass-morphism with gradient border (for homepage hero)
   * - floating: no background, just the mascot with glow
   */
  variant?: 'default' | 'hero' | 'floating';

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Whether to animate on hover
   */
  animate?: boolean;

  /**
   * Alt text for accessibility
   */
  alt?: string;
}

/**
 * MascotImage Component
 *
 * Displays the Privacy Gecko mascot with consistent styling:
 * - White circular background
 * - Drop shadow for depth
 * - Responsive sizing
 * - Loading state
 * - Error handling
 * - Optional hover animation
 */
const MascotImage: React.FC<MascotImageProps> = ({
  size = 'md',
  variant = 'default',
  className = '',
  animate = true,
  alt = 'Privacy Gecko Mascot'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Size configuration (using valid Tailwind classes)
  const sizeClasses = {
    xs: {
      container: 'w-14 h-14', // 56px
      image: 'w-11 h-11', // 44px (12px padding total)
      padding: 'p-1.5'
    },
    sm: {
      container: 'w-20 h-20', // 80px
      image: 'w-16 h-16', // 64px (16px padding total)
      padding: 'p-2'
    },
    md: {
      container: 'w-32 h-32', // 128px (was w-30 which doesn't exist)
      image: 'w-24 h-24', // 96px (32px padding total)
      padding: 'p-4'
    },
    lg: {
      container: 'w-40 h-40', // 160px
      image: 'w-32 h-32', // 128px (32px padding total)
      padding: 'p-4'
    },
    xl: {
      container: 'w-52 h-52', // 208px (was w-50 which doesn't exist)
      image: 'w-40 h-40', // 160px (48px padding total)
      padding: 'p-6'
    },
    '2xl': {
      container: 'w-72 h-72', // 288px
      image: 'w-56 h-56', // 224px (64px padding total)
      padding: 'p-8'
    }
  };

  const currentSize = sizeClasses[size];

  // Handle image load error
  const handleError = () => {
    console.error('Mascot image failed to load');
    setHasError(true);
  };

  // Handle successful load
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // If image fails to load, don't render anything
  if (hasError) {
    return null;
  }

  // Only apply heavy animations (float, breathe, glow) to XL/2XL size (homepage)
  const isHeroMascot = size === 'xl' || size === '2xl';

  // Variant-specific styling
  const getVariantClasses = () => {
    switch (variant) {
      case 'hero':
        // Floating with soft glow - no solid background
        return `
          bg-transparent
          shadow-none
        `;
      case 'floating':
        // No background, just glow effect
        return `
          bg-transparent
          shadow-none
        `;
      default:
        // Original white background
        return `
          bg-white
          shadow-xl
        `;
    }
  };

  // For hero/floating, we don't need padding or rounded container
  const isTransparentVariant = variant === 'hero' || variant === 'floating';

  return (
    <motion.div
      className={`
        ${currentSize.container}
        ${isTransparentVariant ? '' : currentSize.padding}
        ${getVariantClasses()}
        ${isTransparentVariant ? '' : 'rounded-full'}
        flex
        items-center
        justify-center
        relative
        overflow-visible
        ${className}
      `}
      initial={animate ? { scale: 0.9, opacity: 0 } : undefined}
      animate={animate && isHeroMascot ? {
        scale: [1, 1.02, 1],
        y: [0, -8, 0],
        opacity: 1,
        boxShadow: variant === 'hero' ? [
          "0 0 60px rgba(74, 222, 128, 0.15), 0 20px 40px rgba(0, 0, 0, 0.3), inset 0 0 30px rgba(74, 222, 128, 0.05)",
          "0 0 80px rgba(74, 222, 128, 0.25), 0 20px 40px rgba(0, 0, 0, 0.3), inset 0 0 40px rgba(74, 222, 128, 0.1)",
          "0 0 60px rgba(74, 222, 128, 0.15), 0 20px 40px rgba(0, 0, 0, 0.3), inset 0 0 30px rgba(74, 222, 128, 0.05)"
        ] : [
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 20px rgba(74, 222, 128, 0.2)",
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 35px rgba(74, 222, 128, 0.4)",
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 20px rgba(74, 222, 128, 0.2)"
        ]
      } : { scale: 1, opacity: 1 }}
      whileHover={animate ? {
        scale: isHeroMascot ? 1.08 : 1.05,
        rotate: isHeroMascot ? [0, -3, 3, -3, 0] : 0,
        transition: {
          rotate: {
            duration: 0.4,
            ease: "easeInOut"
          },
          scale: {
            duration: 0.2
          }
        }
      } : undefined}
      transition={animate && isHeroMascot ? {
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 0.3 }
      } : { duration: 0.3 }}
    >
      {/* Loading state */}
      {!isLoaded && (
        <div className={`absolute inset-0 flex items-center justify-center rounded-full ${
          variant === 'hero' ? 'bg-zinc-900/90' : 'bg-white/90'
        }`}>
          <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Mascot image */}
      <img
        src="/logo.png"
        alt={alt}
        className={`
          ${isTransparentVariant ? currentSize.container : currentSize.image}
          object-contain
          transition-opacity
          duration-300
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />

      {/* Enhanced glow effect on hover - only for hero mascot */}
      {animate && isHeroMascot && (
        <motion.div
          className="absolute inset-0 rounded-full bg-accent/15"
          initial={{ opacity: 0, scale: 0.95 }}
          whileHover={{ opacity: 1, scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  );
};

export default MascotImage;
