it('Array Last Thru Item.length', function () {
    const list = [1, 2, 3]
    cy.wrap(list).then((item) => {
        return item[item.length - 1]
    }).should('equal', 3)
});
it("Array Last Thru 'At'", function () {
    const list = [1, 2, 3]
    cy.wrap(list).then((item) => {
        return item.at(-1)
    }).should('equal', 3)
});
it("Array Last Thru 'Invoke'", function () {
    const list = [1, 2, 3]
    cy.wrap(list).invoke('at', -1).should('equal', 3)
    cy.wrap(list).then(Cypress._.last).should('equal', 3)
});
it.only('Validate Each Array Item', function () {
    cy.wrap([1, 2, 3])
        .should('be.an', 'array')
        .and('not.empty')
        .each((x, v) => {
            expect(x)
                .to.be.a('number')
                .and.equal((v + 1))
                .and.be.within(1, 3)
        })
});