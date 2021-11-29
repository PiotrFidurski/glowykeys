import KeyboardsPage from '@pages/keyboards';
import { screen } from '@testing-library/react';
import { render } from '@utils/test-utils';
import { testData } from 'data';

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

test('when queryParams are "?variants=gaming" it renders only filtered results', () => {
  useRouter.mockImplementation(() => ({
    route: '/keyboards',
    pathname: '/keyboards',
    query: { variant: ['gaming'] },
    asPath: '',
    push: jest.fn(),
  }));

  render(<KeyboardsPage keyboards={testData} />);

  const productList = screen.getByRole('region', { name: /list of products/i });

  expect(productList.children).toHaveLength(2);
});

test('when queryParams are "?connectivity=wired" it renders only filtered results', () => {
  useRouter.mockImplementation(() => ({
    route: '/keyboards',
    pathname: '/keyboards',
    query: { connectivity: ['wired'] },
    asPath: '',
    push: jest.fn(),
  }));

  render(<KeyboardsPage keyboards={testData} />);

  const productList = screen.getByRole('region', { name: /list of products/i });

  expect(productList.children).toHaveLength(2);

  jest.restoreAllMocks();
});
