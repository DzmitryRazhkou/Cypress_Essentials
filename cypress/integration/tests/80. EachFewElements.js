describe('Toggle Test', () => {
    beforeEach(() => {
        cy.visit('https://letcode.in/selectable');
    });

    it('EACH Elements', () => {
        cy.get("#selectable").as("tools")
            cy.get("@tools").each(($el) => {
            cy.wrap($el).should('be.visible')
        })
    });
});