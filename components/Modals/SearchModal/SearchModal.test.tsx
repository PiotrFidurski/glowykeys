import KeyboardsPage from '@pages/keyboards';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '@utils/test-utils';
import { testData } from 'data';
import Modal from 'react-modal';
import SearchModal from './SearchModal';

const modalRoot = document.createElement('div');

modalRoot.setAttribute('id', '__next');

beforeEach(() => {
  document.body.appendChild(modalRoot);
  Modal.setAppElement('#__next');
});

test('clicking on a search icon opens search modal', () => {
  render(<KeyboardsPage keyboards={testData} />);

  const searchBtn = screen.getByRole('button', { name: /open search dialog/i });

  fireEvent.click(searchBtn);

  expect(screen.getByRole('button', { name: /close search dialog/i })).toBeInTheDocument();
});

test('clicking on a close search dialog button closes dialog', async () => {
  render(<KeyboardsPage keyboards={testData} />);

  const searchBtn = screen.getByRole('button', { name: /open search dialog/i });

  fireEvent.click(searchBtn);

  fireEvent.click(screen.getByRole('button', { name: /close search dialog/i }));

  expect(document.body.className).toBe('');
});

test('users can search for products', async () => {
  render(<SearchModal isOpen setOpen={() => {}} />);

  const input = screen.getByLabelText('search');

  fireEvent.change(input, { target: { value: 'roccat' } });

  expect(await screen.findByRole('link', { name: /vulcan/i })).toBeInTheDocument();
});

test('each product can be linked to details page', async () => {
  render(<SearchModal isOpen setOpen={() => {}} />);

  const input = screen.getByLabelText('search');

  fireEvent.change(input, { target: { value: 'roccat' } });

  expect(await screen.findByRole('link', { name: /vulcan/i })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('link', { name: /vulcan/i }));

  expect(screen.getByRole('link', { name: /vulcan/i })).toHaveAttribute('href', '/keyboards/vulcan-pro');
});
