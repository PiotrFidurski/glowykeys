describe('search functionality', () => {
  it('returns data from an api when users type into search input', () => {
    cy.intercept({ url: '/api/search?query=a', query: { query: 'a' } }, { fixture: 'search.json' }).as('getResults');

    cy.visit('/');

    cy.findByRole('button', { name: /open search dialog/i }).click();

    cy.findByRole('textbox', { name: /search/i }).type('a');

    cy.wait('@getResults');

    cy.findByRole('link', { name: /gigabyte force k81/i });
    cy.findByRole('link', { name: /alloy origins red/i });
    cy.findByRole('link', { name: /razer phantom keycap white/i });
  });
});

// eslint-disable-next-line jest/no-export
export {};
