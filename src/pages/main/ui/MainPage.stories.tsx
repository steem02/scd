import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';
import type React from 'react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const initialStore = {
  counter: { value: 10 },
};
const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  decorators: [StoreDecorator(initialStore)],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Primary: Story = {};
export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark',
  },
};
