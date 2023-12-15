import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const initialStore = {
  counter: { value: 10 },
};
const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [StoreDecorator(initialStore)],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Primary: Story = {};
export const PrimaryDark: Story = {
  parameters: {
    theme: 'dark',
  },
};
