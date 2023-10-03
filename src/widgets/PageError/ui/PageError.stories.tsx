import type { Meta, StoryObj } from '@storybook/react';
import { PageError } from './PageError';
import type React from 'react';

const meta: Meta<typeof PageError> = {
  title: 'widgets/PageError',
  component: PageError,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  args: {
    children: 'Кнопка',
  },
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Primary: Story = {};
export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark',
  },
};
