import loginPage from "../pages/LoginPage";
import {emailRegistrationData} from "../../support/generatedData";
import {successRegistrationMessages} from "../../support/messages";

const loginData = require("../../fixtures/koelLogin.json")

describe("KOEL Register Feature Thru Cy.task", () => {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.clearCookies();
        cy.visit(Cypress.env("url"))
    })

    it("Register New User", () => {
        const emailRegistration = emailRegistrationData.email
        const registrationSuccessMessage = successRegistrationMessages.msg

        loginPage.clickRegisterButton()
        loginPage.typeEmailRegistration(emailRegistration)
        loginPage.clickEventuallyRegister()
        loginPage.validateRegistrationSuccessMessage(registrationSuccessMessage)
    })
})