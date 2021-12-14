import KeyboardsPage from '@pages/keyboards';
import { screen } from '@testing-library/react';
import { render } from '@utils/test-utils';
import { testData } from 'data';

test('clicking on logo redirects back to HomePage', () => {
  render(<KeyboardsPage keyboards={testData} />);

  expect(screen.getByText(/glowykeys/).closest('a')).toHaveAttribute('href', '/');
});

test('clicking on sign in link links to sign in page', () => {
  render(<KeyboardsPage keyboards={testData} />);

  expect(screen.getByText(/Sign in/i)).toHaveAttribute('href', '/signin');
});
