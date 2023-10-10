import i18n from '../i18n/i18nForTests';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { type ReactNode } from 'react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { MemoryRouter } from 'react-router-dom';

export const renderWithTranslations = (component: ReactNode, route: string = '/') => {
  return render(
    <ThemeProvider>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </MemoryRouter>
    </ThemeProvider>
  );
};
