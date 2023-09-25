import type * as React from 'react';
import { cn } from '@/shared/libs/classNames/classNames';
import s from './Button.module.scss';

export type ButtonProps<C extends React.ElementType = 'button'> = {
  as?: C;
  variant?: 'cleared' | 'primary';
  className?: string;
} & React.ComponentProps<C>;

export function Button<C extends React.ElementType = 'button'>(
  props: ButtonProps<C>
) {
  const { as, children, className, variant = 'primary', ...rest } = props;
  const Component = as ?? 'button';

  return (
    <Component className={cn([className, s.root, s[variant]])} {...rest}>
      {children}
    </Component>
  );
}
