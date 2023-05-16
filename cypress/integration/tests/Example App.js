describe("CY SELECT", () => {
    it("CYPRESS PRACTICE", () => {
        cy.visit("https://letcode.in/edit")
        cy.get('#fullName').invoke("val", "Pittsburgh")
    })
})