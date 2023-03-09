describe("Easiest Way to Handle iFrame", () => {
    it("Cypress iFrame", () => {
        cy.visit('https://iframetester.com/?url=https://www.lambdatest.com/blog')
        //let's test iframe
        cy.get('#iframe-window')
            .should('be.visible')
            .should('not.be.empty')
            .then(($iframe) => {
                const $body = $iframe.contents().find('body')

                cy.wrap($body)
                    .find(`input[name='s']`)
                    .type('Cypress{enter}')

            })
    })
})