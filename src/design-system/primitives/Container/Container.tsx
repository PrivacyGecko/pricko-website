import React, { ReactNode } from 'react';
import { cn } from '../../utils/cn';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export interface ContainerProps {
  size?: ContainerSize;
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const sizeStyles: Record<ContainerSize, string> = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
};

export const Container: React.FC<ContainerProps> = ({
  size = 'xl',
  children,
  className,
  as: Component = 'div',
}) => {
  return (
    <Component
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        sizeStyles[size],
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Container;
