import KeyboardsPage from '@pages/keyboards';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '@utils/test-utils';
import { data } from 'data';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

test('when removed filters buttons are clicked filters are removed', () => {
  useRouter.mockImplementation(() => ({
    route: '/keyboards',
    pathname: '/keyboards',
    query: { variants: ['gaming'], connectivity: ['wired'] },
    asPath: '',
    push: jest.fn(),
  }));

  render(<KeyboardsPage keyboards={data} />);

  expect(screen.getByRole('region', { name: /list of products/i }).children).toHaveLength(2);

  fireEvent.click(screen.getByRole('button', { name: /remove wired filter/i }));

  expect(screen.getByRole('region', { name: /list of products/i }).children).toHaveLength(3);

  fireEvent.click(screen.getByRole('button', { name: /remove gaming filter/i }));

  expect(screen.getByRole('region', { name: /list of products/i }).children).toHaveLength(5);
});
