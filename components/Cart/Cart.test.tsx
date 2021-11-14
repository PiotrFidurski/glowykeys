import HomePage from '@pages/index';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '@utils/test-utils';

test('it opens cart menu when cart button is clicked', () => {
  const portalEl = document.createElement('div');

  portalEl.setAttribute('id', 'portal');
  portalEl.setAttribute('data-testid', 'portalContainer');

  document.body.appendChild(portalEl);

  render(<HomePage />, { container: document.querySelector('__next') });

  fireEvent.click(screen.getByRole('button', { name: /open cart menu/ }));

  expect(screen.getByText(/your cart items/)).toBeInTheDocument();
});
