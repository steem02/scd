import { Layout } from '@/pages/layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';

import { NotFoundPage } from '@/pages/not-found';
import { useMenuItems } from '@/app/hooks/useMenuItems';

export function AppRouter() {
  const menuItems = useMenuItems();
  return (
    <Routes>
      <Route index element={<Navigate to='/main' />} />
      <Route path={'/'} element={<Layout />}>
        {menuItems.map(({ routeConfig: route }) => (
          <Route key={route.path?.toString()} {...route} />
        ))}
      </Route>
      <Route path={'*'} element={<NotFoundPage />} />
    </Routes>
  );
}
