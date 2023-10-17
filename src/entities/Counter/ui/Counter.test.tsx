import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithStore } from '@/shared/config/jest/renderWithStore';
import { type StateSchema } from '@/app/providers/StoreProvider';
import { Counter } from '@/entities/Counter';

describe('Counter component', () => {
  test('increment', async () => {
    const initialStore: StateSchema = {
      counter: {
        value: 10,
      },
    };
    renderWithStore(<Counter />, initialStore);
    const increment = screen.getByTestId('increment-btn');
    const value = screen.getByTestId('counter-value');

    expect(value).toHaveTextContent('10');
    await userEvent.click(increment);
    expect(value).toHaveTextContent('11');
  });

  test('decrement', async () => {
    const initialStore: StateSchema = {
      counter: {
        value: 10,
      },
    };
    renderWithStore(<Counter />, initialStore);
    const value = screen.getByTestId('counter-value');
    const decrement = screen.getByTestId('decrement-btn');

    expect(value).toHaveTextContent('10');
    await userEvent.click(decrement);
    expect(value).toHaveTextContent('9');
  });
});
