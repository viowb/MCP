const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // No global baseUrl — tests use full URLs to support multiple targets
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
