describe('Click Cypress Random', () => {
    beforeEach(() => {
        cy.visit("https://www.globalsqa.com/demo-site/accordion-and-tabs/")
    })
    it('CYPRESS Random', function () {

        cy.get("iframe[class='demo-frame lazyloaded']")
            .should('be.visible')
            .then(($iframe) => {
                const $body = $iframe.contents().find('body')
                cy.wrap($body)
                    .find("div[id = 'accordion']>h3")
                    .should('have.length.greaterThan', 0)
                    .its('length')
                    .then(cy.log)
                    .then(n => Cypress._.random(0, n - 1))
                    .then(cy.log)
                    .then((k) => {
                        cy.wrap($body)
                            .find("div[id = 'accordion']>h3").eq(k)
                            .click()
                    })
            })
    });
})