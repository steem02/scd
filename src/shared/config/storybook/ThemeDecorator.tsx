import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { type Story, type StoryContext } from '@storybook/react';

import React from 'react';

export const ThemeDecorator = (StoryComponent: Story, context: StoryContext) => {
  React.useEffect(() => {
    document.body.className = context.parameters.theme ?? 'light';
  }, [context.parameters.theme]);

  return (
    <ThemeProvider>
      <div className={'app'}>
        <StoryComponent className={'app'} />
      </div>
    </ThemeProvider>
  );
};
