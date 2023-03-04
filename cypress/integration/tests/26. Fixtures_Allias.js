describe("CY Practise", () => {
    beforeEach(() => {
        cy.fixture("loginDetails.json").as("login")
    })
    it("Cypress Fixture - Fixture Alias", function () { /// Not use arrow function
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
        cy.get("#input-email").type(this.login.email)
        cy.get("#input-password").type(this.login.password)
        cy.get("input[type='submit']").click()
        cy.get('.breadcrumb > :nth-child(2) > a').should('have.text', "Account")
    })
})

