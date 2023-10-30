import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import type React from 'react';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  args: {
    children: 'Какой-то текст',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {};
export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
  },
};

export const ErrorDark: Story = {
  parameters: {
    theme: 'dark',
  },
  args: {
    variant: 'error',
  },
};
