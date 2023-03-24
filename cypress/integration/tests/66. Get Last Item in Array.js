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
it.only("Array Last Thru 'Invoke'", function () {
    const list = [1, 2, 3]
    cy.wrap(list).invoke('at', -1).should('equal', 3)

    cy.wrap(list).then(Cypress._.last).should('equal', 3)
});