import { type ReactNode } from 'react';
import { type RouteProps } from 'react-router-dom';

export interface MenuItem {
  icon?: ReactNode;
  title: string;
  routeConfig: RouteProps;
}
