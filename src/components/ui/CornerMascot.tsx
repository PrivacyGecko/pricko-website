import React from 'react';
import { motion } from 'framer-motion';

interface CornerMascotProps {
  /** Custom greeting message */
  greeting?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Position in the container */
  position?: 'bottom-right' | 'bottom-left';
  /** Additional className */
  className?: string;
}

/**
 * Corner Mascot Component
 *
 * Displays the Privacy Gecko mascot in a corner with animated glow effects
 * matching the site's shader theme (purple/teal/cyan).
 */
const CornerMascot: React.FC<CornerMascotProps> = ({
  greeting = "gm, privacy fren! 🦎",
  size = 'md',
  position = 'bottom-right',
  className = '',
}) => {
  // Size configurations
  const sizeClasses = {
    sm: 'w-32 h-32 lg:w-40 lg:h-40',
    md: 'w-40 h-40 lg:w-52 lg:h-52',
    lg: 'w-56 h-56 lg:w-72 lg:h-72',
  };

  // Position configurations
  const positionClasses = {
    'bottom-right': 'bottom-16 right-4 lg:right-12',
    'bottom-left': 'bottom-16 left-4 lg:left-12',
  };

  // Speech bubble position based on mascot position
  const bubblePosition = position === 'bottom-right'
    ? 'right-full mr-6'
    : 'left-full ml-6';

  const arrowPosition = position === 'bottom-right'
    ? 'right-0 translate-x-2 border-r border-t'
    : 'left-0 -translate-x-2 border-l border-b';

  return (
    <div className={`absolute ${positionClasses[position]} z-20 hidden md:block ${className}`}>
      <motion.div
        className="relative group cursor-pointer"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Animated gradient glow - matching hero shader theme */}
        {/* Outer glow - purple/navy (Privacy, Blockchain) */}
        <motion.div
          className="absolute inset-0 rounded-full blur-[80px] scale-[2.5]"
          style={{ background: 'radial-gradient(circle, rgba(45,31,94,0.6) 0%, rgba(26,26,62,0.4) 50%, transparent 70%)' }}
          animate={{
            scale: [2.5, 2.8, 2.5],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Middle glow - teal/cyan (Secure, Protocol) */}
        <motion.div
          className="absolute inset-0 rounded-full blur-[50px] scale-[1.8]"
          style={{ background: 'radial-gradient(circle, rgba(13,74,90,0.7) 0%, rgba(15,61,77,0.5) 50%, transparent 70%)' }}
          animate={{
            scale: [1.8, 2.1, 1.8],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Inner glow - cyan highlight (Trust) */}
        <motion.div
          className="absolute inset-0 rounded-full blur-[30px] scale-125"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.4) 0%, rgba(13,74,90,0.3) 50%, transparent 70%)' }}
          animate={{
            scale: [1.25, 1.4, 1.25],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Mascot - SVG with theme-matched drop shadow */}
        <motion.div
          className={`relative ${sizeClasses[size]}`}
          whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <img
            src="/logo.svg"
            alt="Privacy Gecko Mascot"
            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.5)] group-hover:drop-shadow-[0_0_50px_rgba(34,211,238,0.8)] transition-all duration-300"
          />
        </motion.div>

        {/* Speech bubble on hover - theme matched */}
        <motion.div
          className={`absolute ${bubblePosition} top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none`}
          initial={{ x: position === 'bottom-right' ? 10 : -10, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
        >
          <div className="bg-black/90 backdrop-blur-xl border border-cyan-500/40 rounded-2xl px-5 py-3 whitespace-nowrap shadow-2xl shadow-cyan-500/20">
            <span className="text-base font-semibold text-white">{greeting}</span>
          </div>
          {/* Arrow */}
          <div className={`absolute ${arrowPosition} top-1/2 -translate-y-1/2 w-4 h-4 bg-black/90 border-cyan-500/40 rotate-45`} />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default CornerMascot;
