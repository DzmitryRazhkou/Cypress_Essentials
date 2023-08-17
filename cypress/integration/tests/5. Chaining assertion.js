describe("CY Practise", () => {
    it("Drop Down Menu", () => {
        cy.visit("https://www.globalsqa.com/demo-site/select-dropdown-menu/");
        cy.get("select")
            .find("option")
            .should("have.length", 249)
            .and("have.text", "Ukraine");
    });
    it.skip('Multiple Elements and Should(\'be.visible\') Assertion', function () {
        cy.visit("https://www.globalsqa.com/demo-site/select-elements/")
        cy.get("#selectable>li")
            .not(":visible")
            .should('have.length', 1)
            .and('have.', 'second')
    });
});
