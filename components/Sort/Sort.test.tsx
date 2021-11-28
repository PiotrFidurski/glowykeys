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

test('products can be sorted by ascending or descending price', () => {
  render(<KeyboardsPage keyboards={data} />);

  const productList = screen.getByRole('region', { name: /list of products/i });

  expect(productList.children[0]).toHaveTextContent('Magma');

  const descendingCheckbox = screen.getByRole('checkbox', { name: /descending/i });

  fireEvent.click(descendingCheckbox);

  expect(productList.children[0]).toHaveTextContent('Vulcan Pro');
});
