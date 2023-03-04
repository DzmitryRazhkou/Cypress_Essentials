export class LoginPage {
    constructor() {
        this.email = "input[type='email']"
        this.password = "input[type='password']"
        this.loginBtn = "button[type='submit']"
        this.registrationBtn = "a[type='submit']"
        this.emailRegistration = "#email"
        this.register = '#button'
        this.registrationSuccessfulMessage = 'h3'
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

const loginPage = new LoginPage()
export default loginPage