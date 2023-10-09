import type * as React from 'react';
import { cn } from '@/shared/libs/classNames/classNames';
import s from './Button.module.scss';

export type ButtonProps<C extends React.ElementType = 'button'> = {
  as?: C;
  variant?: 'cleared' | 'primary' | 'square';
  size?: 's' | 'm' | 'l';
  inverted?: boolean;
  className?: string;
} & React.ComponentProps<C>;

export function Button<C extends React.ElementType = 'button'>(props: ButtonProps<C>) {
  const { as, children, className, size = 'm', inverted, variant = 'primary', ...rest } = props;
  const Component = as ?? 'button';
  console.log(variant);
  return (
    <Component
      data-testid={'test-button'}
      className={cn([className, s.root, s[variant], s[size]], { [s.inverted]: inverted })}
      {...rest}
    >
      {children}
    </Component>
  );
}
