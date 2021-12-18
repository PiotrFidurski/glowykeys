import KeyboardsPage from '@pages/keyboards';
import { fireEvent, screen } from '@testing-library/react';
import { testData } from '@utils/test-utils/data';
import { render } from '@utils/test-utils/test-utils';

test('clicking on logo redirects back to HomePage', () => {
  render(<KeyboardsPage keyboards={testData} />);

  expect(screen.getByText(/glowykeys/).closest('a')).toHaveAttribute('href', '/');
});

test('clicking on sign in link links to sign in page', () => {
  render(<KeyboardsPage keyboards={testData} />);

  expect(screen.getByText(/Sign in/i)).toHaveAttribute('href', '/signin');
});

test('clicking on a hamburger icon opens menu', () => {
  render(<KeyboardsPage keyboards={testData} />);

  const openMenuBtn = screen.getByRole('button', { name: /open menu/i });

  expect(openMenuBtn).toHaveAttribute('aria-controls', 'menubar');
  expect(openMenuBtn).toHaveAttribute('aria-expanded', 'false');

  fireEvent.click(openMenuBtn);

  expect(openMenuBtn).toHaveAttribute('aria-expanded', 'true');
});
