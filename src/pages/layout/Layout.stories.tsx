import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';
import type React from 'react';

const meta: Meta<typeof Layout> = {
  title: 'pages/Layout',
  component: Layout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Primary: Story = {};
export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark',
  },
};
