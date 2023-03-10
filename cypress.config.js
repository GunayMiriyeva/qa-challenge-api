const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '36nfxk',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    qaUrl: 'https://qa-challenge-api.scratchpay.com',
  },
});