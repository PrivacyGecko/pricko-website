import React from 'react';
import { motion } from 'framer-motion';

export interface ProgressBarProps {
  value: number; // 0-100
  label?: string;
  showPercentage?: boolean;
  height?: 'sm' | 'md' | 'lg';
  color?: 'accent' | 'success' | 'warning' | 'info' | 'error' | 'cyan' | 'purple';
  animated?: boolean;
  delay?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  label,
  showPercentage = true,
  height = 'md',
  color = 'accent',
  animated = true,
  delay = 0
}) => {
  // Clamp value between 0 and 100
  const clampedValue = Math.min(Math.max(value, 0), 100);

  // Color mapping for gradient backgrounds
  const colorMap: Record<string, { bg: string; bar: string; text: string }> = {
    accent: {
      bg: 'bg-secondary',
      bar: 'bg-gradient-to-r from-accent to-accent-hover',
      text: 'text-accent'
    },
    success: {
      bg: 'bg-secondary',
      bar: 'bg-gradient-success',
      text: 'text-success'
    },
    warning: {
      bg: 'bg-secondary',
      bar: 'bg-gradient-warning',
      text: 'text-warning'
    },
    info: {
      bg: 'bg-secondary',
      bar: 'bg-gradient-info',
      text: 'text-info'
    },
    error: {
      bg: 'bg-secondary',
      bar: 'bg-gradient-error',
      text: 'text-error'
    },
    cyan: {
      bg: 'bg-secondary',
      bar: 'bg-gradient-cyan',
      text: 'text-cyan-400'
    },
    purple: {
      bg: 'bg-secondary',
      bar: 'bg-gradient-purple',
      text: 'text-purple-400'
    }
  };

  // Height mapping
  const heightMap: Record<string, string> = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };

  const colors = colorMap[color] || colorMap.accent;
  const heightClass = heightMap[height] || heightMap.md;

  return (
    <motion.div
      initial={{ opacity: animated ? 0 : 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {/* Label and Percentage Row */}
      {(label || showPercentage) && (
        <div className="flex items-center justify-between mb-2">
          {label && (
            <span className="text-sm text-muted font-medium">{label}</span>
          )}
          {showPercentage && (
            <span className={`text-sm font-bold ${colors.text}`}>
              {clampedValue}%
            </span>
          )}
        </div>
      )}

      {/* Progress Bar Container */}
      <div className={`w-full ${colors.bg} rounded-full overflow-hidden`}>
        <motion.div
          className={`${colors.bar} ${heightClass} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${clampedValue}%` }}
          transition={{ duration: animated ? 1.2 : 0, delay: animated ? 0.3 : 0 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

export default ProgressBar;
