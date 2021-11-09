import HomePage from '@pages/index';
import { screen } from '@testing-library/react';
import { render } from '@utils/test-utils';

it('renders hello', () => {
  render(<HomePage />);

  expect(screen.getByText(/hello/i)).toBeInTheDocument();
});

// eslint-disable-next-line jest/no-export
export {};
