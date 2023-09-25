import { type RouteProps } from 'react-router-dom';
import { AboutPage } from '@/pages/about';
import { MainPage } from '@/pages/main';
import { NotFoundPage } from '@/pages/not-found';

enum RouterPath {
  Main = '/main',
  About = '/about',
  NotFound = '*',
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
  {
    path: RouterPath.NotFound,
    element: <NotFoundPage />,
  },
];
