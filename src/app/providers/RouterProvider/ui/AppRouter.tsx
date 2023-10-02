import { Layout } from '@/pages/layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '@/app/providers/RouterProvider/config/routerConfig';
import { NotFoundPage } from '@/pages/not-found';

export function AppRouter() {
  return (
    <Routes>
      <Route index path={'/'} />
      <Route path={'/'} element={<Layout />}>
        {routerConfig.map((route) => (
          <Route key={route.path?.toString()} {...route} />
        ))}
      </Route>
      <Route path={'*'} element={<NotFoundPage />} />
    </Routes>
  );
}
