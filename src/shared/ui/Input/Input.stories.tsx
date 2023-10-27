import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import type React from 'react';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  args: {
    value: 'Какой-то текст',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {};
export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark',
  },
};

export const Placeholder: Story = {
  args: {
    value: undefined,
    placeholder: 'Введите что-то',
  },
};

export const PlaceholderDark: Story = {
  args: {
    value: undefined,
    placeholder: 'Введите что-то',
  },
  parameters: {
    theme: 'dark',
  },
};
