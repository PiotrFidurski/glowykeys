/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to mock data returned from server
     * @params {string} path - string representing api route to mock e.g /api/keyboards
     * @params {string} fixture - string representing json file in fixtures folder e.g 'keycaps.json'
     * @example cy.mockServerData({path:"/api/keyboards", fixture: 'keyboards.json'})
     */
    mockServerData({ path, fixture }: { path: string; fixture: string }): Cypress.Chainable;
  }
}
