import HomePage from '@pages/index';
import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { render } from '@utils/test-utils';
import Modal from 'react-modal';
import Cart from './Cart';

const modalRoot = document.createElement('div');

modalRoot.setAttribute('id', '__next');

beforeEach(() => {
  document.body.appendChild(modalRoot);
  Modal.setAppElement('#__next');
});

test('it opens cart menu when open cart button is clicked', () => {
  render(<HomePage />);

  fireEvent.click(screen.getByRole('button', { name: /open cart menu/ }));

  expect(screen.getByText(/Shopping cart/i)).toBeInTheDocument();
  expect(screen.getByText(/Subtotal/i)).toBeInTheDocument();
});

test('it closes cart menu when users clicks close button', async () => {
  render(<HomePage />);

  fireEvent.click(screen.getByRole('button', { name: /open cart menu/ }));

  expect(screen.getByText(/Shopping cart/i)).toBeInTheDocument();

  expect(document.body.className).toBe('ReactModal__Body--open');

  fireEvent.click(screen.getByRole('button', { name: /close menu/i }));

  await waitForElementToBeRemoved(() => screen.getByText(/Shopping cart/i));

  expect(document.body.className).toBe('');
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
