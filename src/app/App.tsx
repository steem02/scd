import { BrowserRouter } from 'react-router-dom';
import '@/app/styles/index.scss';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { AppRouter } from '@/app/providers/RouterProvider/ui/AppRouter';
import '@/shared/config/i18n/i18n';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ErrorBoundary>
          <AppRouter />
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  );
}
