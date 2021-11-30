describe('Keyboards page tests', () => {
  it('has a list of products that can be added to cart', () => {
    cy.visit('/keyboards');

    cy.findByRole('region', { name: /list of products/i });

    cy.findByRole('button', { name: /add magma to cart/i }).click();

    cy.findByRole('button', { name: /open cart/i }).click();

    cy.findByRole('article', { name: /cart item/i });
  });
});

// eslint-disable-next-line jest/no-export
export {};
