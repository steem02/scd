import '@/app/styles/index.scss';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { AppRouter } from '@/app/providers/RouterProvider/ui/AppRouter';
import '@/shared/config/i18n/i18n';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userActions } from '@/entities/User';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, []);

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </ThemeProvider>
  );
}
