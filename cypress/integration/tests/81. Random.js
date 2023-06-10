describe("Cy Random Picking", () => {
    it("Click Random Element", () => {
        cy.visit("https://letcode.in/selectable")
        cy.get("#container").find("div").as("listOfArray")

        cy.get("@listOfArray").then(($el) => {
            const itemCount = Cypress.$($el).length
            cy.log(" =====> The Length Of The Web Elements is: " + itemCount + " <===== ")

            let randomElement = Math.floor(Math.random() * itemCount)
            cy.get("@listOfArray").eq(randomElement).then(($option) => {
                cy.wrap($option).click()
            })

        })
    })
})