describe('Product details page', () => {
  beforeEach(() => {
    cy.task('clearNock');
  });

  it('products can be added to cart', () => {
    cy.mockServerData({ path: '/api/keyboards/magma', fixture: 'magma.json' });

    cy.visit('/keyboards/magma');

    cy.findByRole('button', { name: /add magma to cart/i }).click();

    cy.findByRole('button', { name: /open cart/i }).click();

    cy.findByRole('article', { name: /cart item/i });
  });
});

// eslint-disable-next-line jest/no-export
export {};
