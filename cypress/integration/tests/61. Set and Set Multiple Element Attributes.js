describe("Get and Set Multiple Elements Attributes", () => {
    beforeEach(() => {
        cy.visit("https://letcode.in/buttons")
    })
    it.skip("Get Multiple Elements Attributes", () => {
        cy.get("div[class='card-content']>div>div>button").should('have.length', 6)
            .invoke("attr", "id", (k, value) => {
                return `${k + 1} - ${value}`
            }).should('deep.equal', ['1 - home', '2 - position', '3 - color', '4 - property', '5 - isDisabled', '5 - isDisabled'])
    })

    it("Get Multiple Elements Attributes", () => {
        cy.get("div[class='card-content']>div>div>button").should('have.length', 6)
            .mapInvoke("getAttribute", "id").should('deep.equal', ['home', 'position', 'color', 'property', 'isDisabled', 'isDisabled'])
    })

})