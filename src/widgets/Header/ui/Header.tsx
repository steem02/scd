import { cn } from '@/shared/libs/classNames/classNames';

import s from './Header.module.scss';
import { useTranslate } from '@/shared/hooks/useTranslate';

interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps) {
  const { className } = props;
  const t = useTranslate(['main', 'about']);

  return <div className={cn([className, s.root])}></div>;
}
