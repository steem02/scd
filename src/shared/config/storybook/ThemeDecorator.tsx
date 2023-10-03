import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { type Story, type StoryContext } from '@storybook/react';

import React from 'react';

export const ThemeDecorator = (StoryComponent: Story, context: StoryContext) => {
  return (
    <ThemeProvider>
      <div className={`app ${context.parameters.theme ?? 'light'}`}>
        <StoryComponent className={'app'} />
      </div>
    </ThemeProvider>
  );
};
