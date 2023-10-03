import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';
import type React from 'react';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  args: {
    children: 'Ссылка',
    to: '/',
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {};
export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark',
  },
};

export const Inverse: Story = {
  args: {
    variant: 'inverse',
  },
  parameters: {
    theme: 'dark',
  },
};
