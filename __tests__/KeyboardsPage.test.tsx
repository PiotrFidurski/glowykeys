import KeyboardsPage from '@pages/keyboards';
import { screen } from '@testing-library/react';
import { testData } from '@utils/test-utils/data';
import { render } from '@utils/test-utils/test-utils';

test('it renders only filtered results based on "?variants=gaming" queryParams', () => {
  render(
    <KeyboardsPage keyboards={testData} />,
    {},
    {
      route: '/keyboards',
      pathname: '/keyboards',
      query: { variant: ['gaming'] },
      asPath: '',
    }
  );

  const productList = screen.getByRole('region', { name: /list of products/i });

  expect(productList.children).toHaveLength(2);
});

test('it renders only filtered results based on "?connectivity=wired" queryParams', () => {
  render(
    <KeyboardsPage keyboards={testData} />,
    {},
    {
      route: '/keyboards',
      pathname: '/keyboards',
      query: { connectivity: ['wired'] },
      asPath: '',
    }
  );

  const productList = screen.getByRole('region', { name: /list of products/i });

  expect(productList.children).toHaveLength(2);
});
