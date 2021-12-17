import KeyboardsPage from '@pages/keyboards';
import { screen } from '@testing-library/react';
import { testData } from '@utils/test-utils/data';
import { render } from '@utils/test-utils/test-utils';

test('when queryParams are "?variants=gaming" it renders only filtered results', () => {
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

test('when queryParams are "?connectivity=wired" it renders only filtered results', () => {
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
