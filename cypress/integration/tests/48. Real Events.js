describe("Tests Real Events", () => {
    it("Real Events", () => {
        cy.visit(Cypress.env("url"))
        // cy.get('#hel').realClick() // perform a native real click on the field
        // cy.realType("Cypress") // fires native system keypress events and fills the field
        // cy.get('#hel').realMouseDown() // perform a native mouse press on the field
        // cy.get('#hel').realMouseUp() // perform a native mouse release on the field
        // cy.focused().realHover() // hovers over the new focuced element
    })
})

// npm install cypress-real-events