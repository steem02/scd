import { cn } from '@/shared/lib/classNames/classNames';
import DarkIcon from '../assets/theme-dark.svg';
import LightIcon from '../assets/theme-light.svg';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Button } from '@/shared/ui/Button';

import s from './ThemeSwitcher.module.scss';
import { memo } from 'react';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button className={cn([className, s.button])} variant={'cleared'} onClick={toggleTheme}>
      {theme === 'dark' ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
