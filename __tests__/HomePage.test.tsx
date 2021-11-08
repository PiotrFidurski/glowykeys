import HomePage from '@pages/index';
import { render, screen } from '@testing-library/react';

it('renders hello', () => {
  render(<HomePage />);

  expect(screen.getByText(/hello/i)).toBeInTheDocument();
});

// eslint-disable-next-line jest/no-export
export {};
