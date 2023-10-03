import { Button } from '@/shared/ui/Button';
import { render, screen } from '@testing-library/react';

describe('Button test', () => {
  test('with only first param', () => {
    render(<Button>Рендер</Button>);
    expect(screen.getByText('Рендер')).toBeInTheDocument();
  });

  test('cleared button', () => {
    render(<Button variant={'cleared'} />);
    expect(screen.getByTestId('test-button')).toBeInTheDocument();
    expect(screen.getByTestId('test-button')).toHaveClass('cleared');
  });
});
