import { lazy } from 'react';
import { delayForDemo } from '@/shared/lib/delayForDemo';

export const MainPageAsync = lazy(
  delayForDemo(
    async () =>
      // @ts-expect-error так надо
      await import('./MainPage')
  )
);
