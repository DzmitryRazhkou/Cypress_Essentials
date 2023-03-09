// Do not Run
describe('Shopping Cart', () => {
    it('displays the correct total price', () => {
        cy.visit('/cart')
        cy.get('.item-price').each(($price) => {
            const price = parseFloat($price.text())
            cy.wrap(price).should('be.gte', 0)
        })
        cy.get('.total-price').then(($total) => {
            const total = parseFloat($total.text())
            const expectedTotal = Cypress.$('.item-price').toArray().reduce((sum, el) => sum + parseFloat(el.innerText), 0)
            expect(total).to.equal(expectedTotal)
        })
    })
})
