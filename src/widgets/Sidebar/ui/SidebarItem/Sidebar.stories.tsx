import type { Meta, StoryObj } from '@storybook/react';
import { SidebarItem } from './SidebarItem';

const meta: Meta<typeof SidebarItem> = {
  title: 'widgets/SidebarItem',
  component: SidebarItem,
};

export default meta;
type Story = StoryObj<typeof SidebarItem>;

export const Primary: Story = {};
export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark',
  },
};
