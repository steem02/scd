import type * as React from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './Test.module.scss';

type TextProps<C extends React.ElementType = 'p'> = {
  variant?: 'text' | 'error';
  as?: C;
  className?: string;
} & React.ComponentProps<C>;

export function Text<C extends React.ElementType = 'p'>(props: TextProps<C>) {
  const { as = 'p', children, className, variant = 'text', ...rest } = props;
  const Component = as;
  const mods = {
    [s.error]: variant === 'error',
  };
  return (
    <Component className={cn([s.text, className], mods)} {...rest}>
      {children}
    </Component>
  );
}
