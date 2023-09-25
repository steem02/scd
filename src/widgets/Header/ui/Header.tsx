import { cn } from '@/shared/libs/classNames';

import s from './Header.module.scss';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { useTranslate } from '@/shared/hooks/useTranslate';

interface HeaderProps {
  className?: string;
  dfsf: string;
}

export function Header(props: HeaderProps) {
  const { className } = props;
  const t = useTranslate(['main', 'about']);

  return (
    <div className={cn([className, s.root])}>
      <AppLink to={'/main'} variant={'inverse'} className={s.link}>
        {t('title', { ns: 'main' })}
      </AppLink>
      <AppLink to={'/about'} variant={'inverse'} className={s.link}>
        {t('title', { ns: 'about' })}
      </AppLink>
    </div>
  );
}
