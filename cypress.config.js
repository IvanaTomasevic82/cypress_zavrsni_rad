const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://cypress.vivifyscrum-stage.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
