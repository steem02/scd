import { cn } from '@/shared/libs/classNames/classNames';

import s from './Header.module.scss';
import { useTranslate } from '@/shared/hooks/useTranslate';
import { Button } from '@/shared/ui/Button';
import { useState } from 'react';
import { LoginModal } from '@/features/auth-by-username';

interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps) {
  const { className } = props;
  const t = useTranslate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn([className, s.root])}>
      <Button onClick={() => setIsOpen(true)}>{t('login')}</Button>
      <LoginModal isOpen={isOpen} onSubmit={() => setIsOpen(false)} />
    </div>
  );
}
