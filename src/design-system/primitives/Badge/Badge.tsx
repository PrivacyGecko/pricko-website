import React from 'react';
import { cn } from '../../utils/cn';
import { BadgeProps } from './Badge.types';

const variantStyles: Record<string, string> = {
  default: 'bg-secondary text-muted border border-border',
  live: 'bg-accent/20 text-accent border border-accent/30',
  beta: 'bg-warning/20 text-warning border border-warning/30',
  'coming-soon': 'bg-info/20 text-info border border-info/30',
  'in-dev': 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
  premium: 'bg-purple-royal/20 text-purple-royal border border-purple-royal/30',
  success: 'bg-success/20 text-success border border-success/30',
  warning: 'bg-warning/20 text-warning border border-warning/30',
  error: 'bg-error/20 text-error border border-error/30',
  info: 'bg-info/20 text-info border border-info/30',
  protocol: 'bg-gradient-to-r from-protocol-primary/20 to-protocol-secondary/20 text-cyan-300 border border-protocol-primary/30',
};

const sizeStyles: Record<string, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  pulse = false,
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-medium rounded-full',
        variantStyles[variant],
        sizeStyles[size],
        pulse && 'animate-pulse-glow',
        className
      )}
      {...props}
    >
      {(variant === 'live' || pulse) && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
        </span>
      )}
      {children}
    </span>
  );
};

export default Badge;
