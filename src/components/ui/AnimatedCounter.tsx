import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  /**
   * The target value to count to.
   * Can be a number (e.g., 2100) or a string with suffix (e.g., "2,100+", "90%")
   */
  value: string | number;

  /**
   * Duration of the animation in milliseconds
   * @default 2000
   */
  duration?: number;

  /**
   * Label displayed below the counter
   */
  label?: string;

  /**
   * Icon component to display above the counter
   */
  icon?: React.ReactNode;

  /**
   * Custom className for styling
   */
  className?: string;

  /**
   * Delay before animation starts (in milliseconds)
   * @default 0
   */
  delay?: number;
}

/**
 * AnimatedCounter Component
 *
 * Displays an animated counting effect from 0 to the target value.
 * Supports numbers, percentages, and formatted strings with suffixes.
 *
 * Examples:
 * - <AnimatedCounter value={2100} label="Users" />
 * - <AnimatedCounter value="90%" label="Complete" />
 * - <AnimatedCounter value="2,100+" label="Active Users" />
 */
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2000,
  label,
  icon,
  className = '',
  delay = 0
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Parse the value to extract number, prefix, and suffix
  const parseValue = (val: string | number): { number: number; prefix: string; suffix: string } => {
    if (typeof val === 'number') {
      return { number: val, prefix: '', suffix: '' };
    }

    // Handle percentage (e.g., "90%")
    if (val.includes('%')) {
      const num = parseFloat(val.replace('%', ''));
      return { number: num, prefix: '', suffix: '%' };
    }

    // Handle formatted numbers with suffixes (e.g., "2,100+", "1.5K+")
    const matches = val.match(/^([^\d]*)?([\d,\.]+)([^\d]*)?$/);
    if (matches) {
      const [, prefix = '', numStr, suffix = ''] = matches;
      const num = parseFloat(numStr.replace(/,/g, ''));
      return { number: num, prefix, suffix };
    }

    // Fallback: try to extract any number
    const numMatch = val.match(/[\d\.]+/);
    if (numMatch) {
      return { number: parseFloat(numMatch[0]), prefix: '', suffix: val.replace(numMatch[0], '') };
    }

    return { number: 0, prefix: '', suffix: val };
  };

  const { number: targetNumber, prefix, suffix } = parseValue(value);

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    const startTime = Date.now() + delay;
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();

      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }

      if (now >= endTime) {
        setCount(targetNumber);
        setHasAnimated(true);
        return;
      }

      const progress = (now - startTime) / duration;
      // Ease out cubic for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(targetNumber * easeOut));

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, targetNumber, duration, delay, hasAnimated]);

  // Format the display value
  const formatDisplayValue = (num: number): string => {
    // If original value had commas, add them back
    if (typeof value === 'string' && value.includes(',')) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  const displayValue = `${prefix}${formatDisplayValue(count)}${suffix}`;

  return (
    <motion.div
      ref={ref}
      className={`text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      {icon && (
        <motion.div
          className="text-accent mb-2"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: (delay + 200) / 1000, type: 'spring', stiffness: 200 }}
        >
          {icon}
        </motion.div>
      )}

      <motion.div
        className="text-2xl font-bold text-accent mb-2"
        initial={{ scale: 0.8 }}
        animate={isInView ? { scale: 1 } : { scale: 0.8 }}
        transition={{ duration: 0.4, delay: (delay + 100) / 1000 }}
      >
        {displayValue}
      </motion.div>

      {label && (
        <motion.div
          className="text-sm text-muted"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: (delay + 400) / 1000 }}
        >
          {label}
        </motion.div>
      )}
    </motion.div>
  );
};

export default AnimatedCounter;
