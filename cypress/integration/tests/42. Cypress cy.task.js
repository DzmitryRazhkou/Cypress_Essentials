describe("Cypress Cy.task", () => {
    it("cy.task", () => {
        cy.task("customShit", "Hey There").then((res) => {
            expect(res).to.eq("OK")
        })
    })
})