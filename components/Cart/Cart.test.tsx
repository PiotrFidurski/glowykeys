import HomePage from '@pages/index';
import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { render } from '@utils/test-utils';

const portalEl = document.createElement('div');

portalEl.setAttribute('id', 'portal');
portalEl.setAttribute('aria-label', 'Cart menu');

beforeEach(() => {
  document.body.appendChild(portalEl);
});

afterEach(() => {
  document.body.removeChild(portalEl);
});

test('it opens cart menu when cart button is clicked', () => {
  render(<HomePage />, { container: document.querySelector('__next') });

  fireEvent.click(screen.getByRole('button', { name: /open cart menu/ }));

  expect(screen.getByText(/Shopping cart/i)).toBeInTheDocument();
});

test('it closes cart menu when users clicks outside of cart container', async () => {
  render(<HomePage />, { container: document.querySelector('__next') });

  fireEvent.click(screen.getByRole('button', { name: /open cart menu/ }));

  expect(screen.getByText(/Shopping cart/i)).toBeInTheDocument();

  fireEvent.click(screen.getByLabelText(/close cart/i));

  const cartMenu = screen.getByLabelText(/^Cart menu$/);

  await waitForElementToBeRemoved(cartMenu.firstChild);

  expect(cartMenu.firstChild).toBe(null);
});

test('it closes cart menu when users clicks close button inside of cart', async () => {
  render(<HomePage />, { container: document.querySelector('__next') });

  fireEvent.click(screen.getByRole('button', { name: /open cart menu/ }));

  expect(screen.getByText(/Shopping cart/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /close/i }));

  const cartMenu = screen.getByLabelText(/^Cart menu$/);

  await waitForElementToBeRemoved(cartMenu.firstChild);

  expect(cartMenu.firstChild).toBe(null);
});
