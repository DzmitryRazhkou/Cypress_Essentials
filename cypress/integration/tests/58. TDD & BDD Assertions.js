describe("Assertion Demo", () => {
    beforeEach(() => {
        cy.visit("https://demoqa.com/radio-button")
    })

    it('TDD Assertions', function () {
        cy.log("-- Length Check")
        cy.get("input[type='radio']")
            .should("have.length", 3)

        cy.log("-- Class Check")
        cy.get("input[type='radio']").eq(2)
            .should("have.class", "disabled")

        cy.log("-- Exist Check")
        cy.get(".mt-3").should("not.exist")

        cy.log("-- Text Check")
        cy.get("input[type='radio']").eq(0).click({force: true})
        cy.get(".mt-3").should("have.text", "You have selected Yes")
            .and("include.text", "Yes")
            .and("not.contain", "test")
        cy.log(" -- CSS Check");

        // cy.get(".text-success").should("have.css", "color", "rgb(40, 167, 69)")
    });

    it.only('BDD Assertions', function () {
        cy.log("-- Length Check - Class Check")
        cy.get("input[type='radio']").should($inputs => {
            expect($inputs).to.have.lengthOf(3)
            expect($inputs).to.have.class("disabled")
        })
        cy.get("div[class='mb-3']").then($response => {
            expect($response).to.have.text("Do you like the site?")
            expect($response).to.include.text("site")
            expect($response).to.not.include.text("No")
        })


    });
})