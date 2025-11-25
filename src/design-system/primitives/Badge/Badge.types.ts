import { HTMLAttributes, ReactNode } from 'react';

export type BadgeVariant =
  | 'default'
  | 'live'
  | 'beta'
  | 'coming-soon'
  | 'in-dev'
  | 'premium'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'protocol';

export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  pulse?: boolean;
  children: ReactNode;
  className?: string;
}
