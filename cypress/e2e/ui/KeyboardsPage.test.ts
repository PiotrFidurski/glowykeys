describe('Keyboards page tests', () => {
  beforeEach(() => {
    cy.task('clearNock');
  });

  it('displays only filtered results if there are present in url query params', () => {
    cy.mockServerData({ path: '/api/keyboards', fixture: 'keyboards.json' });

    cy.visit('/keyboards?variant=casual&color=black');

    cy.findByRole('button', { name: /black filter/i });

    cy.findByRole('button', { name: /casual filter/i });

    cy.findByRole('region', { name: /list of products/i })
      .children()
      .should('have.length', 4);
  });
});

// eslint-disable-next-line jest/no-export
export {};
