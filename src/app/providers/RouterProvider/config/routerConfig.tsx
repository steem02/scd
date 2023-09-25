import { type RouteProps } from 'react-router-dom';
import { AboutPage } from '@/pages/about';
import { MainPage } from '@/pages/main';

enum RouterPath {
  Main = '/main',
  About = '/about',
}

export const routerConfig: RouteProps[] = [
  {
    path: RouterPath.Main,
    element: <MainPage />,
  },
  {
    path: RouterPath.About,
    element: <AboutPage />,
  },
];
