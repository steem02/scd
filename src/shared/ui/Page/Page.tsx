import { type PropsWithChildren, Suspense } from 'react'
import s from './Page.module.scss'
import { cn } from '@/shared/libs/classNames'

interface PageProps {
  className?: string
}

export function Page({ children, className }: PropsWithChildren<PageProps>) {
  return <div className={ cn([className, s.root]) }>
    <Suspense fallback={ 'Loading...' }>
      { children }
    </Suspense>
  </div>
}
