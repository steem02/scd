import type { Preview } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator';
import { RouteDecorator } from '@/shared/config/storybook/RouteDecorator';
import i18n from '@/shared/config/i18n/i18nForStorybook';

const preview: Preview = {
  globals: {
    locale: 'ru',
    locales: {
      en: 'English',
      ru: 'Русский',
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    i18n,
  },
  decorators: [RouteDecorator, StyleDecorator, ThemeDecorator],
};

export default preview;
