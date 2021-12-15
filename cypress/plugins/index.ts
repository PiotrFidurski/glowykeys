/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

import http from 'http';
import next from 'next';
import nock from 'nock';

module.exports = async (on, config) => {
  const app = next({ dev: true });
  const handleNextRequests = app.getRequestHandler();
  await app.prepare();

  const customServer = new http.Server(async (req, res) => handleNextRequests(req, res));

  await new Promise((resolve) => {
    customServer.listen(3000, () => {
      resolve('resolved');
      return null;
    });
  });

  on('task', {
    clearNock() {
      nock.restore();
      nock.cleanAll();

      return null;
    },

    async nock({ hostname, method, path, statusCode, body }) {
      if (!nock.isActive()) {
        nock.activate();

        const lowerCaseMethod = method.toLowerCase();

        nock(hostname)[lowerCaseMethod](path).reply(statusCode, body);

        return null;
      }
      return null;
    },
  });

  return config;
};
