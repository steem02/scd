import type * as React from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './Button.module.scss';

export type ButtonProps<C extends React.ElementType = 'button'> = {
  as?: C;
  variant?: 'cleared' | 'primary' | 'square';
  size?: 's' | 'm' | 'l';
  inverted?: boolean;
  className?: string;
  disabled?: boolean;
} & React.ComponentProps<C>;

export function Button<C extends React.ElementType = 'button'>(props: ButtonProps<C>) {
  const {
    as,
    children,
    className,
    size = 'm',
    inverted,
    variant = 'primary',
    disabled,
    ...rest
  } = props;
  const Component = as ?? 'button';

  const mods = { [s.inverted]: inverted, [s.disabled]: disabled };

  return (
    <Component
      data-testid={'test-button'}
      disabled={disabled}
      className={cn([className, s.root, s[variant], s[size]], mods)}
      {...rest}
    >
      {children}
    </Component>
  );
}
