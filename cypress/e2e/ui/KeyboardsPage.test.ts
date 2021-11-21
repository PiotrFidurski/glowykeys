describe('Keyboards page tests', () => {
  it('has a list of products that can be added to cart', () => {
    cy.visit('/keyboards');

    cy.findByRole('region', { name: /list of products/i });

    cy.findByRole('button', { name: /add magma to cart/i }).click();

    cy.findByRole('button', { name: /open cart menu/i }).click();

    cy.findByRole('article', { name: /cart item/i });
  });

  it('has a filter section that can filter list of products', () => {
    cy.visit('/keyboards');

    cy.findByRole('region', { name: /list of products/i }).as('productList');

    cy.findByRole('checkbox', { name: /wired/i }).click();

    cy.url().should('equal', `${Cypress.config().baseUrl}/keyboards?connectivity=wired`);

    cy.get('@productList').children().should('have.length', 3);

    cy.findByRole('checkbox', { name: /casual/i }).click();

    cy.get('@productList').children().should('have.length', 2);

    cy.url().should('equal', `${Cypress.config().baseUrl}/keyboards?variants=casual&connectivity=wired`);
  });

  it('has a remove filter buttons if there are any applied', () => {
    cy.visit('/keyboards');

    cy.findByRole('region', { name: /list of products/i }).as('productList');

    cy.findByRole('checkbox', { name: /wired/i }).click();

    cy.get('@productList').children().should('have.length', 3);

    cy.findByRole('button', { name: /wired filter/i }).click();

    cy.get('@productList').children().should('have.length', 5);
  });

  it('has a sort section that can sort products by price', () => {
    cy.visit('/keyboards');

    cy.findByRole('region', { name: /list of products/i }).as('productList');

    cy.findByRole('checkbox', { name: /ascending/ }).as('ascendingCheckbox');

    cy.should('be.checked');

    cy.get('@productList').children().eq(1).should('contain.text', '59.99$');

    cy.findByRole('checkbox', { name: /descending/ }).click();

    cy.should('be.checked');

    cy.get('@productList').children().eq(1).should('contain.text', '199.99$');

    cy.get('@ascendingCheckbox').click();

    cy.get('@productList').children().eq(1).should('contain.text', '59.99$');
  });
});

// eslint-disable-next-line jest/no-export
export {};
