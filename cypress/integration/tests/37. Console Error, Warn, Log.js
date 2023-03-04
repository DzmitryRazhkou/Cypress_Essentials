// Insert code into e2e.js

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