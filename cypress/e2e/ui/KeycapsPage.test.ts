describe('Keycaps page tests', () => {
  beforeEach(() => {
    cy.task('clearNock');
  });

  it('displays only filtered results if there are present in url query params', () => {
    cy.mockServerData({ path: '/api/keycaps', fixture: 'keycaps.json' });

    cy.visit('/keycaps?brand=Razer&color=black');

    cy.findByRole('button', { name: /razer filter/i });

    cy.findByRole('button', { name: /black filter/i });

    cy.findByRole('region', { name: /list of products/i })
      .children()
      .should('have.length', 1);
  });
});

// eslint-disable-next-line jest/no-export
export {};
