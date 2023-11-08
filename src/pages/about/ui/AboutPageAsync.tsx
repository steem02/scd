import { lazy } from 'react';
import { delayForDemo } from '@/shared/lib/delayForDemo';

export const AboutPageAsync = lazy(
  delayForDemo(
    async () =>
      // @ts-expect-error так надо
      await import('./AboutPage')
  )
);
