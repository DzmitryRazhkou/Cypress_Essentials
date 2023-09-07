describe("Keyboards Action", () => {
    beforeEach(() => {
        cy.visit("https://extendsclass.com/text-compare")
    })
    it('Keyboard Cypress', {tags: '@Smoke'}, function () {
        cy.get('#dropZone > .row-container').as("source")
        cy.get('#dropZone2 > .row-container').as("target")

        cy.get("@source").type('{command}+a+{command}+c')
        cy.get("@target").type('{command}+a+{command}+v')
            .then(() => {
                cy.get('#nb-diff').invoke('text')
                    .should('equal', '2 difference(s) between the two text documents')
            })
    });
    it('Keyboard Cypress', function () {
        cy.get('#dropZone > .row-container').as("source")
        cy.get('#dropZone2 > .row-container').as("target")

        cy.get("@source").type('{command}+a+{command}+c')
        cy.get("@target").type('{command}+a+{command}+v')
            .then(() => {
                cy.get('#nb-diff').invoke('text')
                    .should('equal', '2 difference(s) between the two text documents')
            })
    });
    it('Keyboard Cypress', function () {
        cy.get('#dropZone > .row-container').as("source")
        cy.get('#dropZone2 > .row-container').as("target")

        cy.get("@source").type('{command}+a+{command}+c')
        cy.get("@target").type('{command}+a+{command}+v')
            .then(() => {
                cy.get('#nb-diff').invoke('text')
                    .should('equal', '2 difference(s) between the two text documents')
            })
    });
    it('Keyboard Cypress', function () {
        cy.get('#dropZone > .row-container').as("source")
        cy.get('#dropZone2 > .row-container').as("target")

        cy.get("@source").type('{command}+a+{command}+c')
        cy.get("@target").type('{command}+a+{command}+v')
            .then(() => {
                cy.get('#nb-diff').invoke('text')
                    .should('equal', '2 difference(s) between the two text documents')
            })
    });
})