import KeyboardsPage from '@pages/keyboards';
import { screen } from '@testing-library/react';
import { render } from '@utils/test-utils';
import { testData } from 'data';

jest.mock('next/link', () => ({ children, href }: React.PropsWithChildren<{ href: string }>) => {
  const React = require('react');

  const clonedChildren = React.cloneElement(React.Children.only(children), { href });

  return clonedChildren;
});

test('clicking on logo redirects back to HomePage', () => {
  render(<KeyboardsPage keyboards={testData} />);

  const logoLink = screen.getByText(/glowykeys/).closest('a');

  expect(logoLink).toHaveAttribute('href', '/');
});

test('clicking on sign in link links to sign in page', () => {
  render(<KeyboardsPage keyboards={testData} />);

  const signInLink = screen.getByText(/Sign in/i);

  expect(signInLink).toHaveAttribute('href', '/signin');

  jest.restoreAllMocks();
});
