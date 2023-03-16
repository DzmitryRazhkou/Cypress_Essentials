describe("Cypress Handle Menu Link", () => {
    it("Verifies the Length And The Text of All th Menu Link Items", () => {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?")

        const listOfNames = []
        cy.get("div[id='carousel0'] > div>div").should('have.length', 21)
        cy.get("div[id='carousel0'] > div>div>img").each((attr) => {
            let $attributes = attr.attr('alt')
            listOfNames.push($attributes)
            listOfNames.forEach((el) => {
                cy.log(el)
            })
        })

    })
})