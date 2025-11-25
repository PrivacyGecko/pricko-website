import React from 'react';
import { motion } from 'framer-motion';
import { buttonVariants } from '../../animations/framer-variants';
import { cn } from '../../utils/cn';
import { ButtonProps } from './Button.types';

const variantStyles: Record<string, string> = {
  primary: 'bg-gradient-to-r from-accent to-accent-hover text-black font-semibold shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30',
  secondary: 'border-2 border-accent text-accent hover:bg-accent hover:text-black',
  tertiary: 'bg-secondary text-white hover:bg-secondary/80',
  danger: 'bg-gradient-to-r from-error to-red-500 text-white shadow-lg shadow-error/25',
  info: 'bg-gradient-to-r from-info to-blue-500 text-white shadow-lg shadow-info/25',
  link: 'text-accent hover:text-accent-hover underline-offset-4 hover:underline',
  protocol: 'bg-gradient-to-r from-protocol-primary to-protocol-secondary text-white shadow-lg shadow-protocol-primary/25',
  ghost: 'text-muted hover:text-white hover:bg-white/5',
};

const sizeStyles: Record<string, string> = {
  sm: 'py-2 px-4 text-sm rounded-lg',
  md: 'py-3 px-6 text-base rounded-xl',
  lg: 'py-4 px-8 text-lg rounded-xl',
  xl: 'py-5 px-10 text-xl rounded-2xl',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <motion.button
      variants={buttonVariants}
      initial="initial"
      whileHover={!disabled && !loading ? 'hover' : undefined}
      whileTap={!disabled && !loading ? 'tap' : undefined}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        (disabled || loading) && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!loading && leftIcon}
      <span>{children}</span>
      {!loading && rightIcon}
    </motion.button>
  );
};

export default Button;
