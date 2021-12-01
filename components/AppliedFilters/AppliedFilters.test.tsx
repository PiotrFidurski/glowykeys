import KeyboardsPage from '@pages/keyboards';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '@utils/test-utils';
import { testData } from 'data';

test('when removed filters buttons are clicked filters are removed', () => {
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

  expect(screen.getByRole('region', { name: /list of products/i }).children).toHaveLength(1);

  fireEvent.click(screen.getByRole('button', { name: /remove wired filter/i }));

  expect(screen.getByRole('region', { name: /list of products/i }).children).toHaveLength(2);

  fireEvent.click(screen.getByRole('button', { name: /remove gaming filter/i }));

  expect(screen.getByRole('region', { name: /list of products/i }).children).toHaveLength(4);
});
