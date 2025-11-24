import React, { useState } from 'react';


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

  return (
    <div
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
    </div>
  );
};

export default MascotImage;
