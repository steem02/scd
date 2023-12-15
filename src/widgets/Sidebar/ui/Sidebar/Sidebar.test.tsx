import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from '@/widgets/Sidebar';
import { renderWithTranslations } from '@/shared/config/jest/renderWithTranslations';

describe('Sidebar test', () => {
  test('with only first param', () => {
    renderWithTranslations(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('with only first param', () => {
    renderWithTranslations(<Sidebar />);

    const button = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
