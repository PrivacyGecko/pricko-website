import { HTMLAttributes, ReactNode } from 'react';

export type CardVariant =
  | 'default'
  | 'elevated'
  | 'interactive'
  | 'glass'
  | 'outlined'
  | 'premium'
  | 'protocol';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hoverable?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
