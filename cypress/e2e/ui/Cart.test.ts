describe('Cart tests', () => {
  it('can properly close', () => {
    cy.visit('/keyboards');

    cy.findByRole('button', { name: /open cart menu/i }).click();

    cy.findByRole('button', { name: /close menu/i }).click();

    cy.findByRole('heading', { name: /shopping cart with 0 items/i }).should('not.match');
  });

  it('can increment and decrement product quantity', () => {
    cy.visit('/keyboards');

    cy.findByRole('button', { name: /add magma to cart/i }).click();

    cy.findByRole('button', { name: /open cart menu/i }).click();

    cy.findByRole('heading', { name: /shopping cart with 1 items/i });

    cy.findByRole('button', { name: /remove one magma from cart/i }).click();

    cy.findByRole('textbox', { name: /quantity/i }).should('have.value', 0);

    cy.findByRole('button', { name: /add one more magma to cart/i }).click();

    cy.findByRole('textbox', { name: /quantity/i }).should('have.value', 1);
  });

  it('can remove items from cart', () => {
    cy.visit('/keyboards');

    cy.findByRole('button', { name: /add magma to cart/i }).click();

    cy.findByRole('button', { name: /open cart menu/i }).click();

    cy.findByRole('button', { name: /remove magma from cart/i }).click();

    cy.findByRole('heading', { name: /shopping cart with 0 items/i });
  });

  it('can remove items from cart by pressing decrement button twice', () => {
    cy.visit('/keyboards');

    cy.findByRole('button', { name: /add magma to cart/i }).click();

    cy.findByRole('button', { name: /open cart menu/i }).click();

    cy.findByRole('button', { name: /remove one magma from cart/i })
      .click()
      .click();

    cy.findByRole('heading', { name: /shopping cart with 0 items/i });
  });

  it('proper subtotal value and proper product price when incrementing and decrementing quantity', () => {
    cy.visit('/keyboards');

    cy.findByRole('button', { name: /add magma to cart/i }).click();

    cy.findByRole('button', { name: /open cart menu/i }).click();

    cy.findByRole('button', { name: /add one more magma to cart/i })
      .click()
      .click();

    cy.findByRole('article', { name: /magma cart item/i }).should('contain.text', '179.97');

    cy.findByRole('region', { name: /checkout/i }).should('contain.text', '179.97');

    cy.findByRole('button', { name: /remove one magma from cart/i }).click();

    cy.findByRole('region', { name: /checkout/i }).should('contain.text', '119.98');
  });
});

// eslint-disable-next-line jest/no-export
export {};
