describe('HomePage tests', () => {
  it('has a link to "/keyboards"', () => {
    cy.visit('/');

    cy.findByRole('link', { name: /go to keyboards page/i }).click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/keyboards`);
  });

  it('has a link to "/keycaps"', () => {
    cy.visit('/');

    cy.findByRole('link', { name: /go to keycaps page/i }).click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/keycaps`);
  });

  it('has a link to "/switches"', () => {
    cy.visit('/');

    cy.findByRole('link', { name: /go to switches page/i }).click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/switches`);
  });

  it('has a link to "/keyboards?variants=gaming"', () => {
    cy.visit('/');

    cy.findByRole('link', { name: /gaming keyboards/i }).click();

    cy.findByRole('checkbox', { name: /gaming/ });

    cy.should('be.checked');

    cy.findByRole('button', { name: /gaming filter/ });
  });

  it('has a link to "/keyboards?variants=casual"', () => {
    cy.visit('/');

    cy.findByRole('link', { name: /casual keyboards/i }).click();

    cy.findByRole('checkbox', { name: /casual/ });

    cy.should('be.checked');

    cy.findByRole('button', { name: /casual filter/ });
  });
});

// eslint-disable-next-line jest/no-export
export {};
