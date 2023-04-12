describe("CY Practise", () => {
    it("Drop Down Menu", () => {
        cy.visit("https://www.globalsqa.com/demo-site/select-dropdown-menu/");
        cy.get("select").select("Ukraine").should("have.value", "UKR");
    });

    it.only("Select Option By Partial Text", () => {
        cy.visit("https://letcode.in/dropdowns");
        cy.get("#fruits option")
            .contains('Pine')
            .invoke('index')
            .then((index) => {
                cy.get('#fruits').select(index)
            })
        cy.get('#fruits').should('have.value', 4)
    });
});
