describe('Toggle Test', () => {
    beforeEach(() => {
        cy.visit('https://letcode.in/selectable');
    });

    it('EACH Elements', () => {
        cy.get("#selectable").as("tools")
        cy.get("@tools").each(($el) => {
            cy.wrap($el).invoke('css', "border").then(($el) => {
                const res = el.slice(5, 10)
                return res
            }).should('be.visible')
        })
    });
});