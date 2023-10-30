import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import type React from 'react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof Header> = {
  title: 'widgets/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {};
export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark',
  },
};
export const Authorized: Story = {
  decorators: [
    StoreDecorator({
      user: {
        authData: { id: 0, username: '' },
      },
    }),
  ],
};
