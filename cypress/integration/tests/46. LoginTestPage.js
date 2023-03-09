import login_Page from "../pages/Login_Page";
import main_Page from "../pages/Main_Page";

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

        login_Page.login(email, psw)
        main_Page.validateMainPage()
    })
})