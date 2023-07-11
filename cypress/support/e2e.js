// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.

const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
    if (opts.displayName === "script" || opts.name === "request") {
        return;
    }
    return origLog(opts, ...other);
};

//
// You can read more here:
// https://on.cypress.io/configuration
require("@cypress/xpath");
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import '@shelex/cypress-allure-plugin';

Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});
// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on("test:after:run", (test, runnable) => {
    if (test.state === "failed") {
        const screenshot = 'screenshots/$(Cypress.spec.name)/$(runnable.parent.title) -- ${test.title} (failed).png'
        addContext({test}, screenshot)
    }
})

// in your cypress/support/e2e.js
// or spec file
// https://github.com/bahmutov/cypress-failed-log
require("cypress-failed-log");
// you can use the "import" keyword
import "cypress-failed-log";

// Cypress.on("window:before:load", (win) => {
//     cy.stub(win.console, "error").callsFake((msg) => {
//         // log out to the ternimal
//         cy.now("task", "error", msg);
//         // log to Command Log and Fail the test
//         throw new Error(msg);
//     });
//     cy.stub(win.console, "warn").callsFake((msg) => {
//         // log out to the ternimal
//         cy.now("task", "warn", msg);
//         // log to Command Log and Fail the test
//         throw new Error(msg);
//     });
// });
