import { BrowserRouter } from 'react-router-dom';
import '@/app/styles/index.scss';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { AppRouter } from '@/app/providers/RouterProvider/ui/AppRouter';
import '@/shared/config/i18n/i18n';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';
import React from 'react';

const initialState = {
  counter: { value: 0 },
  user: { username: '', id: 1 },
};

export function App() {
  return (
    <StoreProvider initialState={initialState}>
      <BrowserRouter>
        <ThemeProvider>
          <ErrorBoundary>
            <AppRouter />
          </ErrorBoundary>
        </ThemeProvider>
      </BrowserRouter>
    </StoreProvider>
  );
}
