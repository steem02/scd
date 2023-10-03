import { Layout } from '@/pages/layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routerConfig } from '@/app/providers/RouterProvider/config/routerConfig';
import { NotFoundPage } from '@/pages/not-found';

export function AppRouter() {
  return (
    <Routes>
      <Route index element={<Navigate to='/main' />} />
      <Route path={'/'} element={<Layout />}>
        {routerConfig.map((route) => (
          <Route key={route.path?.toString()} {...route} />
        ))}
      </Route>
      <Route path={'*'} element={<NotFoundPage />} />
    </Routes>
  );
}
