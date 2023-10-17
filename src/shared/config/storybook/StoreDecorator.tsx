import { type Story } from '@storybook/react';
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator =
  (initialState?: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={initialState as StateSchema}>
      <StoryComponent />
    </StoreProvider>
  );
