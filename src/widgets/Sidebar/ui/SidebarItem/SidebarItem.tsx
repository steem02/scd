import { AppLink } from '@/shared/ui';
import s from './SidebarItem.module.scss';
import { memo } from 'react';
import { type MenuItem } from '@/entities/Menu';

interface SidebarItemProps {
  menuItem: MenuItem;
  collapsed?: boolean;
}

export const SidebarItem = memo(function SidebarItem(props: SidebarItemProps) {
  const { collapsed = false, menuItem } = props;
  const { routeConfig } = menuItem;

  return (
    <AppLink to={routeConfig.path ?? ''} variant={'inverse'} className={s.link}>
      {menuItem.icon}
      {!collapsed && <span>{menuItem.title}</span>}
    </AppLink>
  );
});
