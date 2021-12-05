describe('HomePage tests', () => {
  beforeEach(() => {
    cy.task('clearNock');
  });

  it('has a link to "/keyboards"', () => {
    cy.mockServerData({ path: '/api/keyboards', fixture: 'keyboards.json' });

    cy.visit('/');

    cy.findByRole('link', { name: /go to keyboards page/i }).click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/keyboards`);
  });

  it('has a link to "/keycaps"', () => {
    cy.mockServerData({ path: '/api/keycaps', fixture: 'keycaps.json' });

    cy.visit('/');

    cy.findByRole('link', { name: /go to keycaps page/i }).click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/keycaps`);
  });

  it('has a link to "/switches"', () => {
    cy.mockServerData({ path: '/api/switches', fixture: 'switches.json' });

    cy.visit('/');

    cy.findByRole('link', { name: /go to switches page/i }).click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/switches`);
  });

  it('has a link to "/keyboards?variants=gaming"', () => {
    cy.mockServerData({ path: '/api/keyboards', fixture: 'keyboards.json' });

    cy.visit('/');

    cy.findByRole('link', { name: /gaming keyboards/i }).click();

    cy.findByRole('checkbox', { name: /gaming/ });

    cy.should('be.checked');

    cy.findByRole('button', { name: /gaming filter/ });
  });

  it('has a link to "/keyboards?variants=casual"', () => {
    cy.mockServerData({ path: '/api/keyboards', fixture: 'keyboards.json' });

    cy.visit('/');

    cy.findByRole('link', { name: /casual keyboards/i }).click();

    cy.findByRole('checkbox', { name: /casual/ });

    cy.should('be.checked');

    cy.findByRole('button', { name: /casual filter/ });
  });
});

// eslint-disable-next-line jest/no-export
export {};
