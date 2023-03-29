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
    it.only("Check If An Image Loads", function () {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=common/home")
        cy.get('#logo>a>img')
            .should('be.visible')
            .and('have.prop', 'naturalWidth')
            .then(cy.log)
    });
    it.skip("Do Not Use cy Commands Inside A Should Callback Function", function () {
        function checkFruit(fruit){
            console.log('checking', fruit)
            cy.contains("#fruit", fruit)
        }
        cy.intercept('GET', '/fruit').as('fruit')
        cy.visit('/')
        cy.wait('@wait')
            .its('response.body.fruit')
            .should('be.a', 'string')
            .then(checkFruit)
    });
})