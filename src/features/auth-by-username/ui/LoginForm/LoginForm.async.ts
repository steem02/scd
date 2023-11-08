import { type FC, lazy } from 'react';
import { delayForDemo } from '@/shared/lib/delayForDemo';
import { type LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  // @ts-expect-error так надо
  delayForDemo(async () => await import('./LoginForm'))
);
