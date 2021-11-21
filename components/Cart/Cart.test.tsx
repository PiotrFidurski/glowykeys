import HomePage from '@pages/index';
import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { render } from '@utils/test-utils';
import Cart from './Cart';

const portalElement = document.createElement('div');

portalElement.setAttribute('id', 'portal');
portalElement.setAttribute('aria-label', 'Cart menu');

beforeEach(() => {
  document.body.appendChild(portalElement);
});

afterEach(() => {
  document.body.removeChild(portalElement);
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

test('it closes cart menu when users clicks close button', async () => {
  render(<HomePage />, { container: document.querySelector('__next') });

  fireEvent.click(screen.getByRole('button', { name: /open cart menu/ }));

  expect(screen.getByText(/Shopping cart/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /close/i }));

  const cartMenu = screen.getByLabelText(/^Cart menu$/);

  await waitForElementToBeRemoved(cartMenu.firstChild);

  expect(cartMenu.firstChild).toBe(null);
});

test('cart items quantity can be incremented and decremented', () => {
  render(<Cart />);

  const incrementBtn = screen.getByRole('button', { name: /add one more vulcan pro to cart/i });

  const decrementBtn = screen.getByRole('button', { name: /remove one vulcan pro from cart/i });

  const price = screen.getByText(/price: 199.99/);

  fireEvent.click(incrementBtn);

  expect(price).toHaveTextContent('399.98$');
  expect(screen.getByText(/subtotal/i)).toHaveTextContent('$ 399.98');

  fireEvent.click(decrementBtn);

  expect(price).toHaveTextContent('199.99$');
  expect(screen.getByText(/subtotal/i)).toHaveTextContent('$ 199.99');
});

test('items can be removed from cart by decrementing twice', () => {
  render(<Cart />);

  const decrementBtn = screen.getByRole('button', { name: /remove one vulcan pro from cart/i });

  fireEvent.click(decrementBtn);
  fireEvent.click(decrementBtn);

  expect(screen.getByRole('heading', { name: /shopping cart with/i })).toHaveTextContent('0 items');
});

test('items can be removed by clicking remove from cart button', () => {
  render(<Cart />);

  const removeBtn = screen.getByRole('button', { name: /remove vulcan pro from cart/i });

  fireEvent.click(removeBtn);

  expect(screen.getByRole('heading', { name: /shopping cart with/i })).toHaveTextContent('0 items');
});
