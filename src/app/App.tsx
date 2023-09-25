import { BrowserRouter } from 'react-router-dom';
import '@/app/styles/index.scss';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { AppRouter } from '@/app/providers/RouterProvider/ui/AppRouter';
import '@/shared/config/i18n';

interface AppProps {}

export function App(props: AppProps) {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}
