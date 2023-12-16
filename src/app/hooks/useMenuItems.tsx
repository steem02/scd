import { MainPage } from '@/pages/main';
import { AboutPage } from '@/pages/about';
import { ProfilePage } from '@/pages/profile';
import { useTranslate } from '@/shared/hooks/useTranslate';
import iconStyles from '@/entities/Menu/styles/MenuIcon.module.scss';
import Main from '@/shared/assets/icons/main.svg';
import About from '@/shared/assets/icons/about.svg';
import Profile from '@/shared/assets/icons/profile.svg';
import type { MenuItem } from '@/entities/Menu';
import { useMemo } from 'react';
import { RouterPath } from '../types/RouterPath';

export const useMenuItems = () => {
  const t = useTranslate(['main', 'about', 'profile']);
  return useMemo<MenuItem[]>(
    () => [
      {
        title: t('main:title'),
        icon: <Main className={iconStyles.menuIcon} />,
        routeConfig: {
          path: RouterPath.Main,
          element: <MainPage />,
        },
      },
      {
        title: t('about:title'),
        icon: <About className={iconStyles.menuIcon} />,
        routeConfig: {
          path: RouterPath.About,
          element: <AboutPage />,
        },
      },
      {
        title: t('profile:title'),
        icon: <Profile className={iconStyles.menuIcon} />,
        routeConfig: {
          path: RouterPath.Profile,
          element: <ProfilePage />,
        },
      },
    ],
    [t]
  );
};
