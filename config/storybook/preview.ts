import type { Preview } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator';
import { RouteDecorator } from '@/shared/config/storybook/RouteDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [RouteDecorator, StyleDecorator, ThemeDecorator],
};

export default preview;
