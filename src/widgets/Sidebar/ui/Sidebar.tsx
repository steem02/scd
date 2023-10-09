import { ThemeSwitcher } from '@/features/switch-theme';
import { cn } from '@/shared/libs/classNames/classNames';
import s from './Sidebar.module.scss';
import { useState } from 'react';
import { LangSwitcher } from '@/features/switch-lang';
import { useTranslate } from '@/shared/hooks/useTranslate';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui';
import Main from '@/shared/assets/icons/main.svg';
import About from '@/shared/assets/icons/about.svg';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const t = useTranslate();
  return (
    <div
      data-testid={'sidebar'}
      className={cn([s.sidebar, className], { [s.collapsed]: collapsed })}
    >
      <div className={s.nav}>
        <AppLink to={'/main'} variant={'inverse'} className={s.link}>
          <Main className={s.menuIcon} />
          {!collapsed && <span>{t('title', { ns: 'main' })}</span>}
        </AppLink>
        <AppLink to={'/about'} variant={'inverse'} className={s.link}>
          <About className={s.menuIcon} />
          {!collapsed && <span>{t('title', { ns: 'about' })}</span>}
        </AppLink>
      </div>

      <Button
        className={s.collapsedButton}
        data-testid={'sidebar-toggle'}
        variant={'square'}
        size={'l'}
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={s.actions}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
}
