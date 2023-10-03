import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import type React from 'react';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Primary: Story = {};
export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark',
  },
};
