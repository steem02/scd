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

export const Cleared: Story = {
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

export const Square: Story = {
  args: {
    variant: 'square',
    children: '<',
  },
};

export const SquareDark: Story = {
  args: {
    variant: 'square',
    children: '<',
  },
  parameters: {
    theme: 'dark',
  },
};

export const SizeS: Story = {
  args: {
    size: 's',
  },
};

export const SizeM: Story = {
  args: {
    size: 'm',
  },
};

export const SizeL: Story = {
  args: {
    size: 'l',
  },
};
