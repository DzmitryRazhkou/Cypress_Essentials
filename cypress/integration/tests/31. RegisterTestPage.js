import loginPage from "../pages/LoginPage";

const loginData = require("../../fixtures/koelLogin.json")
require("../../fixtures/koelLogin.json");

describe("KOEL Register Feature Thru Cy.task", () => {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.clearCookies();
        cy.visit(Cypress.env("url"))
    })

    it("Register New User", () => {
        cy.task("emailRegistration").then((obj) => {
            const emailRegistration = obj.email
            const registrationSuccessMessage = loginData.registrationSuccessMessage

            loginPage.clickRegisterButton()
            loginPage.typeEmailRegistration(emailRegistration)
            loginPage.clickEventuallyRegister()
            loginPage.validateRegistrationSuccessMessage(registrationSuccessMessage)
        })
    })
})