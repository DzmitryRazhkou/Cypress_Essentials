describe("Confirm The Responsive Image is Loaded by the Picture Element", () => {
    it('Validate Picture Cypress', function () {
        cy.visit("https://www.globalsqa.com/demo-site/tooltip/")
        cy.get("img[src='images/tower-bridge.jpg']")
            .should("have.attr", 'alt', 'Tower Bridge')
    });
})