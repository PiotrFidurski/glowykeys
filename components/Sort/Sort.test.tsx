import KeyboardsPage from '@pages/keyboards';
import { fireEvent, screen } from '@testing-library/react';
import { testData } from '@utils/test-utils/data';
import { render } from '@utils/test-utils/test-utils';

test('products can be sorted by ascending or descending price', () => {
  render(<KeyboardsPage keyboards={testData} />);

  const productList = screen.getByRole('region', { name: /list of products/i });

  expect(productList.children[0]).toHaveTextContent('Magma');

  fireEvent.click(screen.getByRole('checkbox', { name: /descending/i, hidden: true }));

  expect(productList.children[0]).toHaveTextContent('Vulcan Pro');
});
