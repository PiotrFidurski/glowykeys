import KeyboardsPage from '@pages/keyboards';
import { fireEvent, screen } from '@testing-library/react';
import { searchData, testData } from '@utils/test-utils/data';
import { render } from '@utils/test-utils/test-utils';
import { server } from 'mocks/server';
import { rest } from 'msw';
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

  const openDialogBtn = screen.getByRole('button', { name: /open search dialog/i });

  fireEvent.click(openDialogBtn);

  expect(screen.getByRole('button', { name: /close search dialog/i })).toBeInTheDocument();
});

test('clicking on a close search dialog button closes dialog', async () => {
  render(<KeyboardsPage keyboards={testData} />);

  const openDialogBtn = screen.getByRole('button', { name: /open search dialog/i });

  fireEvent.click(openDialogBtn);

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

  const productLink = await screen.findByRole('link', { name: /vulcan/i });

  expect(productLink).toBeInTheDocument();
  expect(productLink).toHaveAttribute('href', '/keyboards/vulcan-pro');
});

test('search results are categorized', async () => {
  server.use(
    rest.get(`${process.env.BASE_URL}/api/search`, (req, res, ctx) => {
      const query = req.url.searchParams.get('query');

      return res(
        ctx.status(200),
        ctx.json({
          query,
          data: searchData,
        })
      );
    })
  );

  render(<SearchModal isOpen setOpen={() => {}} />);

  const input = screen.getByLabelText('search');

  fireEvent.change(input, { target: { value: 'a' } });

  const keyboardCategory = await screen.findByRole('list', { name: /keyboards/i });
  const keycapsCategory = await screen.findByRole('list', { name: /keycaps/i });
  const switchesCategory = await screen.findByRole('list', { name: /switches/i });

  expect(keyboardCategory.children[1]).toHaveTextContent('Vulcan Pro');
  expect(keycapsCategory.children[1]).toHaveTextContent('Razer Phantom Keycap - White');
  expect(switchesCategory.children[1]).toHaveTextContent('Alloy Origins - Red');
});

test('when there are no results found the message is displayed to the user', async () => {
  server.use(
    rest.get(`${process.env.BASE_URL}/api/search`, (req, res, ctx) => {
      const query = req.url.searchParams.get('query');

      return res(
        ctx.status(200),
        ctx.json({
          query,
          data: [],
        })
      );
    })
  );

  render(<SearchModal isOpen setOpen={() => {}} />);

  const input = screen.getByLabelText('search');

  fireEvent.change(input, { target: { value: 'aasdasdasdasd' } });

  expect(await screen.findByText('No matches found, try searching for something else')).toBeInTheDocument();
});
