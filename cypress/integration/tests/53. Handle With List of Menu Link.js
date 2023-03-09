describe("Cypress Handle Menu Link", () => {
    it("Verifies the Length And The Text of All th Menu Link Items", () => {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login")

        const listOfNames = [
            "Account",
            "Login",
            "My Account",
            "Order History",
            "Wish List",
            "Newsletter"
        ]

        cy.get(":nth-child(4) > ul li a").should('have.length', 7)
        cy.get(":nth-child(4) > ul li a").each(($el, index, list) => {
            // cy.wrap($el).should("contain.text", listOfNames[index])
            expect(Cypress.$($el).text()).to.eq(listOfNames[index])
        })
    })
})