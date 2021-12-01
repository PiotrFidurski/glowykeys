describe('Product Filters', () => {
  it('can filter products by brand', () => {
    cy.visitAndControlNextData({ url: '/keyboards', type: 'keyboards', fixture: 'keyboards.json' });

    cy.findByRole('region', { name: /list of products/i }).as('productList');

    cy.findByRole('checkbox', { name: /^YKB$/ }).click();

    cy.get('@productList').children().eq(0).should('contain.text', 'YKB 3600').should('contain.text', '499.99$');
  });

  it('can filter products by color', () => {
    cy.visitAndControlNextData({ url: '/keyboards', type: 'keyboards', fixture: 'keyboards.json' });

    cy.findByRole('region', { name: /list of products/i }).as('productList');

    cy.findByRole('checkbox', { name: /^white$/ }).click();

    cy.get('@productList').children().eq(0).should('contain.text', 'Vulcan 122 AIMO').should('contain.text', '159.99$');
  });

  it('can filter products by connectivity', () => {
    cy.visitAndControlNextData({ url: '/keyboards', type: 'keyboards', fixture: 'keyboards.json' });

    cy.findByRole('region', { name: /list of products/i }).as('productList');

    cy.findByRole('checkbox', { name: /^wireless$/ }).click();

    cy.get('@productList').children().should('have.length', 2);

    cy.get('@productList').children().eq(0).should('contain.text', 'Pyro').should('contain.text', '99.99$');

    cy.get('@productList').children().eq(1).should('contain.text', 'Vulcan 122 AIMO').should('contain.text', '159.99$');
  });

  it('can apply multiple filters to products', () => {
    cy.visitAndControlNextData({ url: '/keyboards', type: 'keyboards', fixture: 'keyboards.json' });

    cy.findByRole('region', { name: /list of products/i }).as('productList');

    cy.findByRole('checkbox', { name: /^wired$/ }).click();

    cy.findByRole('checkbox', { name: /^roccat$/ }).click();

    cy.get('@productList').children().should('have.length', 2);

    cy.get('@productList').children().eq(0).should('contain.text', 'Magma').should('contain.text', '59.99$');
  });

  it('can remove filters by clicking on filter buttons', () => {
    cy.visitAndControlNextData({ url: '/keyboards', type: 'keyboards', fixture: 'keyboards.json' });

    cy.findByRole('region', { name: /list of products/i }).as('productList');

    cy.findByRole('checkbox', { name: /^wired$/ }).click();

    cy.get('@productList').children().should('have.length', 5);

    cy.findByRole('button', { name: /wired filter/ }).click();

    cy.get('@productList').children().should('have.length', 7);
  });

  it('can remove filters by clicking the same checkbox twice', () => {
    cy.visitAndControlNextData({ url: '/keyboards', type: 'keyboards', fixture: 'keyboards.json' });

    cy.findByRole('region', { name: /list of products/i }).as('productList');

    cy.findByRole('checkbox', { name: /^wired$/ })
      .as('wiredCheckbox')
      .click();

    cy.get('@productList').children().should('have.length', 5);

    cy.get('@wiredCheckbox').click();

    cy.get('@productList').children().should('have.length', 7);
  });

  it('can sort products by ascending and descending price', () => {
    cy.visitAndControlNextData({ url: '/keyboards', type: 'keyboards', fixture: 'keyboards.json' });

    cy.findByRole('region', { name: /list of products/i }).as('productList');

    cy.findByRole('checkbox', { name: /^descending$/ }).click();

    cy.get('@productList').children().should('have.length', 7);

    cy.get('@productList').children().eq(0).should('contain.text', 'YKB 3600').should('contain.text', '499.99$');

    cy.findByRole('checkbox', { name: /^ascending$/ }).click();

    cy.get('@productList').children().should('have.length', 7);

    cy.get('@productList').children().eq(0).should('contain.text', 'Magma').should('contain.text', '59.99$');
  });

  it('can display filters from modal', () => {
    cy.viewport('iphone-6');
    cy.visitAndControlNextData({ url: '/keyboards', type: 'keyboards', fixture: 'keyboards.json' });

    cy.findByRole('region', { name: /list of products/i }).as('productList');

    cy.findByRole('button', { name: /open product filters/i }).click();

    cy.findByRole('checkbox', { name: /roccat/i, hidden: true }).click({ force: true });

    cy.findByRole('button', { name: /close filter dialog/i }).click();

    cy.get('@productList').children().should('have.length', 4);
  });
});

// eslint-disable-next-line jest/no-export
export {};
