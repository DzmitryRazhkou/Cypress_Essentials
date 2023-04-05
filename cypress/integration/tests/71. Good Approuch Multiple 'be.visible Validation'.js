describe("Refactor Common Command Repetition in Cypress Test", () => {
    it('Shows The Expected Elements', function () {
        cy.visit('/')
        cy.get('header').should('be.visible')
        cy.get('footer').should('be.visible')
        cy.get('.new-todo').should('be.visible')

        const selectors = ['header', 'footer', '.new-todo']
        selectors.forEach(selector => {
            cy.get(selector).should('be.visible')
        })
    });
})