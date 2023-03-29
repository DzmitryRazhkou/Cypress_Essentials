describe("Cypress Handle Menu Link", () => {
    it("Verifies the Length And The Text of All th Menu Link Items", () => {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?")

        const listOfNames = [
            "MacBook",
            "iPhone",
            "Apple Cinema 30\"",
            "Canon EOS 5D"
        ]

        cy.get("div[class='row']:nth-of-type(2) div div h4 a").should('have.length', 4)
        cy.get("div[class='row']:nth-of-type(2) div div h4 a").each(($el, index, list) => {
            cy.wrap($el).should("contain.text", listOfNames[index]) // Cypress Decision
            expect(Cypress.$($el).text()).to.eq(listOfNames[index]) // JQuery
        })
    })
    it.only("Find Text Item Without Flake Using cy.contains Command", () => {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?")

        const listOfNames = [
            "MacBook",
            "iPhone",
            "Apple Cinema 30\"",
            "Canon EOS 5D"
        ]
        listOfNames.forEach((item) => {
            cy.contains("div[class='row']:nth-of-type(2) div div h4 a", item)
        })
    })
})