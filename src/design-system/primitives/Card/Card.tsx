import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cardHoverVariants } from '../../animations/framer-variants';
import { cn } from '../../utils/cn';
import { CardProps } from './Card.types';

const variantStyles: Record<string, string> = {
  default: 'bg-secondary border border-border rounded-xl p-6',
  elevated: 'bg-secondary border border-border rounded-xl p-6 shadow-lg shadow-black/20',
  interactive: 'bg-secondary border border-border rounded-xl p-6 cursor-pointer hover:border-accent/50 transition-colors',
  glass: 'bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6',
  outlined: 'bg-transparent border border-border rounded-xl p-6 hover:border-accent/30 transition-colors',
  premium: 'bg-gradient-to-br from-purple-royal/10 to-transparent border border-purple-royal/20 rounded-xl p-6',
  protocol: 'bg-gradient-to-br from-protocol-primary/10 via-protocol-secondary/10 to-transparent border border-protocol-primary/20 rounded-xl p-6',
};

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  hoverable,
  children,
  className,
  onClick,
  ...props
}) => {
  const isInteractive = onClick || variant === 'interactive';
  const shouldHover = hoverable ?? isInteractive;

  if (shouldHover) {
    return (
      <motion.div
        variants={cardHoverVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className={cn(
          variantStyles[variant],
          isInteractive && 'cursor-pointer',
          className
        )}
        onClick={onClick}
        {...(props as HTMLMotionProps<'div'>)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={cn(variantStyles[variant], className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
