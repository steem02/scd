import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Normal: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        username: 'admin',
        password: '123',
      },
    }),
  ],
};
export const Error: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        error: 'Ошибка формы',
      },
    }),
  ],
};
export const Loading: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        isLoading: true,
      },
    }),
  ],
};
