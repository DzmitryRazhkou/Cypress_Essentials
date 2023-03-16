describe("Easiest Way to Handle iFrame", () => {
    it("Cypress iFrame", () => {
        cy.visit('https://www.hyrtutorials.com/p/frames-practice.html')
        // let's test iframe
        cy.get('#frm2')
            .should('be.visible')
            .should('not.be.empty')
            .then(($iframe) => {
                const $body = $iframe.contents().find('body')
                cy.wrap($body)
                    .find(`#firstName`)
                    .type('Cypress{enter}')
            })
    })
})