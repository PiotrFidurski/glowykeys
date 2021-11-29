/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to intercept a request and search
     * @params {string} url
     * @params {string} type
     * @params {string} fixture
     * @example cy.visitAndControlNextData({url:"/keyboards", type:'keyboards'})
     */
    visitAndControlNextData({
      url,
      type,
      data,
    }: {
      url: string;
      type: string;
      fixture: string;
    }): Cypress.Chainable<Cypress.AUTWindow>;
  }
}
