import KeyboardsPage from '@pages/keyboards';
import { fireEvent, screen } from '@testing-library/react';
import { testData } from '@utils/test-utils/data';
import { render } from '@utils/test-utils/test-utils';

test('products can be filtered by connectivity or variant', () => {
  render(<KeyboardsPage keyboards={testData} />);

  const productList = screen.getByRole('region', { name: /list of products/i });

  expect(productList.children).toHaveLength(4);

  const wiredFilter = screen.getByRole('checkbox', { name: /wired/i, hidden: true });

  fireEvent.click(wiredFilter);

  expect(productList.children).toHaveLength(2);

  fireEvent.click(wiredFilter);

  fireEvent.click(screen.getByRole('checkbox', { name: /gaming/i, hidden: true }));
  fireEvent.click(wiredFilter);

  expect(productList.children).toHaveLength(1);
});
