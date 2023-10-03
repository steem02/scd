import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';
import type React from 'react';

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Primary: Story = {};
export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark',
  },
};
