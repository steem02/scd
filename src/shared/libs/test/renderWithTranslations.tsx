import i18n from '../../config/i18nForTests';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { type ReactNode } from 'react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const renderWithTranslations = (component: ReactNode) => {
  return render(
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
    </ThemeProvider>
  );
};
