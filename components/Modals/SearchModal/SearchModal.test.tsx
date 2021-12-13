import KeyboardsPage from '@pages/keyboards';
import { act, fireEvent, screen } from '@testing-library/react';
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

  const searchBtn = screen.getByRole('button', { name: /open search menu/i });

  fireEvent.click(searchBtn);

  expect(screen.getByRole('button', { name: /close search dialog/i })).toBeInTheDocument();
});

test('clicking on a close search dialog button closes search modal', () => {
  render(<KeyboardsPage keyboards={testData} />);

  const searchBtn = screen.getByRole('button', { name: /open search menu/i });

  fireEvent.click(searchBtn);

  fireEvent.click(screen.getByRole('button', { name: /close search dialog/i }));

  expect(document.body.className).toBe('');
});

test('users can search for products', async () => {
  jest.useFakeTimers();

  render(<SearchModal isOpen setOpen={() => {}} />);

  // const searchBtn = screen.getByRole('button', { name: /open search menu/i });

  // fireEvent.click(searchBtn);

  const input = screen.getByLabelText('search');
  act(() => {
    jest.advanceTimersByTime(1000);
    jest.runAllTimers();
  });
  fireEvent.change(input, { target: { value: 'roccat' } });

  screen.debug();
});
