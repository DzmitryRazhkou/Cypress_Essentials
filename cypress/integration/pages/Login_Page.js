import {loginPage} from "../../support/selectors";

export class Login_Page {
    constructor() {
        this.email = loginPage.email
        this.password = loginPage.password
        this.loginBtn = loginPage.loginBtn
        this.registrationBtn = loginPage.registrationBtn
        this.emailRegistration = loginPage.emailRegistration
        this.register = loginPage.register
        this.registrationSuccessfulMessage = loginPage.registrationSuccessfulMessage
    }

    get #emailField() {
        return cy.get(this.email)
    }

    get #passwordField() {
        return cy.get(this.password)
    }

    get #loginButton() {
        return cy.get(this.loginBtn)
    }

    login(email, psw) {
        this.#emailField.type(email)
        this.#passwordField.type(psw)
        this.#loginButton.click()
    }

    get #registrationButton() {
        return cy.get(this.registrationBtn)
    }

    clickRegisterButton() {
        this.#registrationButton.click()
    }

    get #emailRegistrationField() {
        return cy.get(this.emailRegistration)
    }

    typeEmailRegistration(email) {
        this.#emailRegistrationField.type(email)
    }

    get #registerFinal() {
        return cy.get(this.register)
    }

    clickEventuallyRegister() {
        this.#registerFinal.click()
    }

    get #successMessage() {
        return cy.get(this.registrationSuccessfulMessage)
    }

    validateRegistrationSuccessMessage(txt) {
        this.#successMessage.should("be.visible").and('have.text', txt)
    }
}

const login_Page = new Login_Page()
export default login_Page