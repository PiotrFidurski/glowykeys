describe('Add to cart functionality', () => {
  beforeEach(() => {
    cy.task('clearNock');
  });

  it('can add products to cart', () => {
    cy.mockServerData({ path: '/api/keyboards', fixture: 'keyboards.json' });

    cy.visit('/keyboards');

    cy.findByRole('region', { name: /list of products/i });

    cy.findByRole('button', { name: /add magma to cart/i }).click();

    cy.findByRole('button', { name: /open cart/i }).click();

    cy.findByRole('article', { name: /cart item/i });
  });

  it('cannot add the same products twice', () => {
    cy.mockServerData({ path: '/api/keyboards', fixture: 'keyboards.json' });

    cy.visit('/keyboards');

    cy.findByRole('region', { name: /list of products/i });

    cy.findByRole('button', { name: /add magma to cart/i })
      .click()
      .click();

    cy.findByRole('button', { name: /open cart/i }).click();

    cy.findByRole('article', { name: /cart item/i });
  });
});

// eslint-disable-next-line jest/no-export
export {};
