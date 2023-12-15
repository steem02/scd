import { lazy } from 'react';
import { delayForDemo } from '@/shared/lib/delayForDemo';

export const ProfilePageAsync = lazy(
  delayForDemo(
    async () =>
      // @ts-expect-error так надо
      await import('./ProfilePage')
  )
);
