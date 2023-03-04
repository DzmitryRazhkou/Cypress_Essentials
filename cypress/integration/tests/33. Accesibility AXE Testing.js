// 1) Install cypress-axe from npm:
// For Cypress v10 and above install latest cypress-axe
// npm install --save-dev cypress-axe

// 2) For Cypress v10 and above update cypress/support/e2e.js file to include the cypress-axe commands by adding:
// For Cypress v9 and below update cypress/support/index.js file to include the cypress-axe commands by adding:
// import 'cypress-axe'

// 3) cy.injectAxe() - This will inject the axe-core runtime into the page under test. You must run this after a call to cy.visit() and before you run the checkAlly command.
// 4) cy.checkAlly() - This will run axe againast the document at the point in which it is called. This means you can call this interacting with your page and uncover accessibility.

// cy.checkAlly(arg1, arg2, arg3)
// arg1 - Selector (Default is Document, Select a specific selector, Exclude a specific selector)
// arg2 - Change the default rules
// arg3 - Callback to work with violations