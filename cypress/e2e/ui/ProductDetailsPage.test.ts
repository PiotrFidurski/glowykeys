describe('Product details page', () => {
  beforeEach(() => {
    cy.task('clearNock');
  });

  it('displays only filtered results if there are present in url query params', () => {
    cy.mockServerData({ path: '/api/keyboards', fixture: 'keyboards.json' });

    cy.visit('/keyboards');

    cy.findByRole('link', { name: /magma/i }).click();
  });
});

// eslint-disable-next-line jest/no-export
export {};
