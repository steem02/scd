import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import type React from 'react';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
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
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark',
  },
};

export const ClearedLight: Story = {
  args: {
    variant: 'cleared',
  },
};

export const ClearedDark: Story = {
  args: {
    variant: 'cleared',
  },
  parameters: {
    theme: 'dark',
  },
};
