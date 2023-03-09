describe("Cypress Elements Logics", () => {
    it("Web Element Logic Attribute", function () {
        cy.visit(Cypress.env("url"))
        cy.get('[type="email"]').invoke("attr", "required").then((isActive) => {
            if (isActive) {
                cy.get('[type="email"]').should("have.attr", "required")
            } else {
                cy.get('[type="email"]').should("not.have.attr", "required")
            }
        })
    });
})