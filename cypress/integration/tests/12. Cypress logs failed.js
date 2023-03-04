// Add this module as a dev dependency to your project

// npm install --save-dev cypress cypress-failed-log
// # if using Yarn
// yarn add -D cypress-failed-log

// Then include this module from your cypress/support/e2e.js file

// // in your cypress/support/e2e.js
// // or spec file
// // https://github.com/bahmutov/cypress-failed-log
// require('cypress-failed-log')
// // you can use the "import" keyword
// import "cypress-failed-log"

// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 500,
  e2e: {
    setupNodeEvents(on, config) {
      // https://github.com/bahmutov/cypress-failed-log
      require("cypress-failed-log/on")(on);
    },
  },
});
