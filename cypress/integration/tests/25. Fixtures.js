const usersRequire = require("../../fixtures/loginDetails.json")
describe("CY Practise", () => {
    let userDetails
    beforeEach(() => {
        cy.fixture("loginDetails.json").then((user) => {
            userDetails = user;
        })
    })
    it("Cypress Fixture - Fixture JSON on the Test Level", () => {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
        cy.fixture("loginDetails").then((user) => {
            cy.get("#input-email").type(user.email)
            cy.get("#input-password").type(user.password)
        })
        cy.get("input[type='submit']").click()
        cy.get('.breadcrumb > :nth-child(2) > a').should('have.text', "Account")
    });
    it.only("Cypress Fixture - Fixture JSON on the Suite Level", () => {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
        cy.get("#input-email").type(userDetails.email)
        cy.get("#input-password").type(userDetails.password)
        cy.get("input[type='submit']").click()
        cy.get('.breadcrumb > :nth-child(2) > a').should('have.text', "Account")
    });
    it("Cypress Fixture - Import Cypress Fixture", () => {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
        cy.get("#input-email").type(usersRequire.email)
        cy.get("#input-password").type(usersRequire.password)
        cy.get("input[type='submit']").click()
        cy.get('.breadcrumb > :nth-child(2) > a').should('have.text', "Account")
    });
    it("Cypress Fixture - Cypress Read Fixture", () => {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
        cy.readFile("cypress/fixtures/loginDetails.json").then((user) => {
            cy.get("#input-email").type(user.email)
            cy.get("#input-password").type(user.password)
        })
        cy.get("input[type='submit']").click()
        cy.get('.breadcrumb > :nth-child(2) > a').should('have.text', "Account")
    });
});

