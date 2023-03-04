import loginPage from "../pages/LoginPage";
import mainPage from "../pages/MainPage";

const loginData = require("../../fixtures/koelLogin.json")

describe("KOEL Login Feature", () => {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.clearCookies();
        cy.visit(Cypress.env("url"))
    })

    it("Login Correct Credentials", () => {
        const email = loginData.email
        const psw = loginData.psw

        loginPage.login(email, psw)
        mainPage.validateMainPage()
    })
})