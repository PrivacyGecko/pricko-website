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
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  
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
  className = '',
  animate = true,
  alt = 'Privacy Gecko Mascot'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Size configuration
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
      container: 'w-30 h-30', // 120px
      image: 'w-24 h-24', // 96px (24px padding total)
      padding: 'p-3'
    },
    lg: {
      container: 'w-40 h-40', // 160px
      image: 'w-32 h-32', // 128px (32px padding total)
      padding: 'p-4'
    },
    xl: {
      container: 'w-50 h-50', // 200px
      image: 'w-40 h-40', // 160px (40px padding total)
      padding: 'p-5'
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

  // Only apply heavy animations (float, breathe, glow) to XL size (homepage)
  const isHeroMascot = size === 'xl';

  return (
    <motion.div
      className={`
        ${currentSize.container}
        ${currentSize.padding}
        bg-white
        rounded-full
        shadow-xl
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
        boxShadow: [
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 20px rgba(45, 212, 191, 0.2)",
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 35px rgba(45, 212, 191, 0.4)",
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 20px rgba(45, 212, 191, 0.2)"
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
        <div className="absolute inset-0 flex items-center justify-center bg-white/90 rounded-full">
          <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Mascot image */}
      <img
        src="/logo.png"
        alt={alt}
        className={`
          ${currentSize.image}
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
