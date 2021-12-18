import KeyboardsPage from '@pages/keyboards';
import { fireEvent, screen } from '@testing-library/react';
import { testData } from '@utils/test-utils/data';
import { render } from '@utils/test-utils/test-utils';

test('filters can be removed by pressing a button', () => {
  render(
    <KeyboardsPage keyboards={testData} />,
    {},
    {
      route: '/keyboards',
      pathname: '/keyboards',
      query: { variant: ['gaming'], connectivity: ['wired'] },
      asPath: '',
      push: jest.fn(),
    }
  );

  const productListRegion = screen.getByRole('region', { name: /list of products/i });

  expect(productListRegion.children).toHaveLength(1);

  fireEvent.click(screen.getByRole('button', { name: /remove wired filter/i }));

  expect(productListRegion.children).toHaveLength(2);

  fireEvent.click(screen.getByRole('button', { name: /remove gaming filter/i }));

  expect(productListRegion.children).toHaveLength(4);
});
