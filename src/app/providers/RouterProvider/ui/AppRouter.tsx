import { Layout } from '@/pages/layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '@/app/providers/RouterProvider/config/routerConfig';

interface AppRouterProps {}

export function AppRouter(props: AppRouterProps) {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        {routerConfig.map((route) => (
          <Route key={route.path?.toString()} {...route} />
        ))}
      </Route>
    </Routes>
  );
}
