describe("CY SELECT", () => {
    it("CYPRESS PRACTICE", () => {
        const tool = "Selenium"
        cy.visit("https://letcode.in/selectable")
        cy.get("#container>div>h3")
            .should('be.visible')
            .and('have.length', 9)
            .as("f")

        cy.get("@f").each((el, ind, arr) => {
            const arrayList = el.text()
            if (arrayList.includes(tool)) {
                cy.get("@f").eq(ind).invoke('text').should('equal', tool)
            }
        })
    })
})