describe('Set Multiple Input Fields Inside A Form At Once', () => {
    beforeEach(() => {
        cy.visit("https://letcode.in/edit")
    })
    it('Cypress Way', function () {
        cy.get('#fullName').type("Philadelphia, PA")
    });
    it.only('Cypress Invoke Way', function () {
        cy.get('#fullName').invoke('val', "Philadelphia, PA")
    });

    it('Cypress Document Invoke Way', function () {
        cy.document().its("input[id='fullName']")
    });
})