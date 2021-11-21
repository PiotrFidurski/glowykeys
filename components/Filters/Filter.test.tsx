import KeyboardsPage from '@pages/keyboards';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '@utils/test-utils';
import { data } from 'data';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/keyboards',
      query: {},
      push: jest.fn(),
    };
  },
}));

test('products can be filtered by connectivity or variant', () => {
  render(<KeyboardsPage keyboards={data} />);

  const productList = screen.getByRole('region', { name: /list of products/i });

  expect(productList.children).toHaveLength(5);

  const wiredFilter = screen.getByRole('checkbox', { name: /wired/i });

  fireEvent.click(wiredFilter);

  expect(productList.children).toHaveLength(3);

  fireEvent.click(wiredFilter);

  const gamingFilter = screen.getByRole('checkbox', { name: /gaming/i });

  fireEvent.click(gamingFilter);
  fireEvent.click(wiredFilter);

  expect(productList.children).toHaveLength(2);
});
