import {StepLogger} from "../logger/logger";

const stepLogger = new StepLogger()
describe("Keyboards Action", () => {
    beforeEach(() => {
        cy.visit("https://extendsclass.com/text-compare")
    })
    it('Keyboard Cypress', function () {
        stepLogger.stepNumber(0)
        stepLogger.precondition("Prepare Locators. ")

        cy.get('#dropZone > .row-container').as("source")
        cy.get('#dropZone2 > .row-container').as("target")

        stepLogger.stepNumber(1)
        stepLogger.precondition("Command + C. ")
        cy.get("@source").type('{command}+a+{command}+c')
        cy.get("@target").type('{command}+a+{command}+v')
            .then(() => {
                cy.get('#nb-diff').invoke('text')
                    .should('equal', '2 difference(s) between the two text documents')
            })
    });
})


//Steps:
// 1. npm i -D @shelex/cypress-allure-plugin
// 2.
// const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";
//
// module.exports = defineConfig({
//     e2e: {
//         setupNodeEvents(on, config) {
//             allureWriter(on, config);
//             return config;
//         }
//     }
// });

//3.
// Register commands in cypress/support/e2e.js file:
// import '@shelex/cypress-allure-plugin';
