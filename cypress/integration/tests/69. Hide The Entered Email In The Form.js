describe("Hide The Entered Email In The Form", () => {
    it("Login With Hidden Psw", () => {
        const email = Cypress.env("email")
        const psw = Cypress.env("psw")

// it is ok for the username to be visible in the Command Log
        expect(email, 'email was set').to.be.a('string').and.not.be.empty
// but the password value should not be shown
        if (typeof psw !== 'string' || !psw) {
            throw new Error('Missing password value, set using CYPRESS_password=...')
        }

        expect(email, 'username was set').to.be.a('string').and.not.be.empty
        expect(psw, 'password was set').to.be.a('string').and.not.be.empty

        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
        cy.get('#input-email').type(email, {log: false})
        cy.get('#input-password').type(psw, {log: false}).should(el$ => {
            if (el$.val() !== psw) {
                throw new Error('Different value of typed password')
            }
        })
        cy.get('form > .btn').click()
    })
    it('Avoid UI Login', function () {
        const email = Cypress.env("email")
        const psw = Cypress.env("psw")

// it is ok for the username to be visible in the Command Log
        expect(email, 'email was set').to.be.a('string').and.not.be.empty
// but the password value should not be shown
        if (typeof psw !== 'string' || !psw) {
            throw new Error('Missing password value, set using CYPRESS_password=...')
        }

        expect(email, 'username was set').to.be.a('string').and.not.be.empty
        expect(psw, 'password was set').to.be.a('string').and.not.be.empty

        cy.request({
            method: 'POST',
            url: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
            form: true,
            body: {
                email,
                psw
            }
        })
        cy.getCookie("OCSESSID").should('exist')
    })
})

// {
//   "env": {
//     "email": "dimagadjilla@gmail.com",
//     "psw": ""
//   }
// }

//Cypress allows several ways to pass the environment variables, in this case, the secure way is to use an environment variable CYPRESS_password=... when running Cypress. Cypress will stick all unknown environment variables that start with prefix CYPRESS_ into the env object automatically.
//$ CYPRESS_password=secret npx cypress open|run


// 1
// 2
// 3
// [kps]
// ; group of environment variables for keep-password-secret app
// CYPRESS_password=secret
//as-a kps npx cypress open