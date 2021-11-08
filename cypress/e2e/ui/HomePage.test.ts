describe('HomePage tests', () => {
  it('renders hello', () => {
    cy.visit('/');
    cy.findByText(/hello/i);
  });
});

// eslint-disable-next-line jest/no-export
export {};
