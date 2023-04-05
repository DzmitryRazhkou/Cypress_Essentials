describe("Detect Document Reload", () => {
    it('Reload', function () {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
        cy.get("div[class='col-sm-6']:last-of-type")
            .should('be.visible')
            .within(() => {
                cy.get('#input-email').type("dimagadjilla@gmail.com")
                cy.get('#input-password').type("3036057Dr")

                cy.document().then((doc) => {
                    cy.get('form > .btn').click()
                    cy.document().should((d) => assert(d !== doc))
                })
            })
    });
})