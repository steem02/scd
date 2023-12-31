import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import type React from 'react';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  args: {
    children: 'Очень много текста',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    isOpen: true,
  },
};
export const PrimaryDark: Story = {
  args: {
    isOpen: true,
  },
  parameters: {
    theme: 'dark',
  },
};
