import { ThemeSwitcher } from '@/features/switch-theme';
import { cn } from '@/shared/libs/classNames/classNames';
import s from './Sidebar.module.scss';
import { useState } from 'react';
import { LangSwitcher } from '@/features/switch-lang';
import { useTranslate } from '@/shared/hooks/useTranslate';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const t = useTranslate();
  return (
    <div className={cn([s.sidebar, className], { [s.collapsed]: collapsed })}>
      <button
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      >
        {t('toggle')}
      </button>
      <div className={s.actions}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
}
