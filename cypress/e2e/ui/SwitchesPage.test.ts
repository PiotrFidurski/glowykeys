describe('Switches page tests', () => {
  beforeEach(() => {
    cy.task('clearNock');
  });

  it('displays only filtered results if there are present in url query params', () => {
    cy.mockServerData({ path: '/api/switches', fixture: 'switches.json' });

    cy.visit('/switches?brand=Idobao&color=white');

    cy.findByRole('button', { name: /idobao filter/i });

    cy.findByRole('button', { name: /white filter/i });

    cy.findByRole('region', { name: /list of products/i })
      .children()
      .should('have.length', 1);
  });
});

// eslint-disable-next-line jest/no-export
export {};
