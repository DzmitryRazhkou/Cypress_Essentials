describe("Cypress Wrap Command", () => {
    it("CY.WRAP", () => {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
        cy.get('#input-email').then((js) => {
            cy.wrap(js).type("Yo")
        })
    })

    it.only("JQuery", () => {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
        cy.get('#input-email').then((js) => {
            js.val("Yeah")
        })
    })
})