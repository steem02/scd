import { type PropsWithChildren, Suspense } from 'react';
import s from './Page.module.scss';
import { cn } from '@/shared/lib/classNames/classNames';
import { PageLoader } from '@/widgets/Page/ui/PageLoader/PageLoader';

interface PageProps {
  className?: string;
}

export function Page({ children, className }: PropsWithChildren<PageProps>) {
  return (
    <div className={cn([className, s.root])}>
      <Suspense fallback={<PageLoader />}>{children}</Suspense>
    </div>
  );
}
