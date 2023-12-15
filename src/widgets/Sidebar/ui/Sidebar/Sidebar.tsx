import { ThemeSwitcher } from '@/features/switch-theme';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react';
import { LangSwitcher } from '@/features/switch-lang';
import { Button } from '@/shared/ui/Button';
import { useMenuConfigs } from '@/app/hooks/useMenuConfigs';
import { SidebarItem } from '@/widgets/Sidebar/ui/SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  // TODO в дальнейшем это должен быть контекст или стор, который инициализируется в app
  const menuConfigs = useMenuConfigs();

  const menuItems = useMemo(
    () =>
      menuConfigs.map((item) => (
        <SidebarItem menuItem={item} collapsed={collapsed} key={item.routeConfig.path} />
      )),
    [menuConfigs, collapsed]
  );

  return (
    <div
      data-testid={'sidebar'}
      className={cn([s.sidebar, className], { [s.collapsed]: collapsed })}
    >
      <div className={s.nav}>{menuItems}</div>

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
});
