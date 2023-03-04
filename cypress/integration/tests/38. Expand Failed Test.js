describe("Expand Failed Test", () => {
    it("Cypress Expand Test", () => {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
        cy.task("login").then((obj) => {
            const email = obj.email
            const psw = obj.password

            cy.get('#input-email').type(email)
            cy.get('#input-password').type(psw)
            cy.get('form > .btn').click()
            cy.get('.alert').should("be.visible").then(($el) => {
                const txt = $el.text()
                cy.log(txt)
                expect(txt).to.equal("Warning: No match for E-Mail Address and/or Password.")
            })
        })
    })
    afterEach(function () {
        if (this.currentTest.state === "failed") {
            cy.wait(10000)
        }
    })
})