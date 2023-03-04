describe("CY Practise", () => {
    const availableFixtures = [
        {
            name: "loginDetails#1.json",
            context: "First Login Correct Credentials Set"
        },
        {
            name: "loginDetails#2.json",
            context: "Second Login Correct Credentials Set"
        }
    ]
    availableFixtures.forEach((aFixture) => {
        describe(aFixture.context, () => {
            beforeEach(function () {
                cy.fixture(aFixture.name).as("userDetails")
            })
            it("Login Cypress Test " + aFixture.name, function () {
                cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
                cy.get("#input-email").type(this.userDetails.email)
                cy.get("#input-password").type(this.userDetails.password)
                cy.get("input[type='submit']").click()
                cy.get('.breadcrumb > :nth-child(2) > a').should('have.text', "Account")
            })
        })
    })
})

