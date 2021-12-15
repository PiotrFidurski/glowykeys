describe('search', () => {
  beforeEach(() => {
    cy.task('clearNock');
  });

  it('each search result is a link that redirects to details page', () => {
    cy.intercept({ url: '/api/search?query=a', query: { query: 'a' } }, { fixture: 'search.json' }).as('getResults');

    cy.mockServerData({ path: '/api/keyboards/gigabyte-force-k81', fixture: 'geforce.json' });
    cy.visit('/');

    cy.findByRole('button', { name: /open search dialog/i }).click();

    cy.findByRole('textbox', { name: /search/i }).type('a');

    cy.wait('@getResults');

    cy.findByRole('link', { name: /gigabyte force k81/i }).click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/keyboards/gigabyte-force-k81`);
  });
});

// eslint-disable-next-line jest/no-export
export {};
