import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ScrollProgressProps {
  /**
   * Color of the progress bar
   * @default 'accent' - Uses the accent color from theme
   */
  color?: 'accent' | 'gradient';
  /**
   * Height of the progress bar in pixels
   * @default 3
   */
  height?: number;
  /**
   * Whether to show percentage text
   * @default false
   */
  showPercentage?: boolean;
}

/**
 * ScrollProgress Component
 *
 * Displays a progress bar at the top of the page indicating scroll position
 * Uses Framer Motion for smooth animations
 */
const ScrollProgress: React.FC<ScrollProgressProps> = ({
  color = 'accent',
  height = 3,
  showPercentage = false
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (showPercentage) {
      const unsubscribe = scrollYProgress.on('change', (latest) => {
        setPercentage(Math.round(latest * 100));
      });
      return () => unsubscribe();
    }
  }, [scrollYProgress, showPercentage]);

  const bgClass = color === 'gradient'
    ? 'bg-gradient-to-r from-accent via-cyan-400 to-accent'
    : 'bg-accent';

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className={`fixed top-0 left-0 right-0 z-50 origin-left ${bgClass}`}
        style={{
          scaleX,
          height: `${height}px`
        }}
      />

      {/* Optional percentage indicator */}
      {showPercentage && (
        <motion.div
          className="fixed top-4 right-4 z-50 bg-secondary/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-accent border border-accent/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: percentage > 5 ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {percentage}%
        </motion.div>
      )}
    </>
  );
};

export default ScrollProgress;
