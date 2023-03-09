describe("Drag and Drop Functionality Cypress", () => {
    it("Cypress 'Drag'n'Drop'", function () {
        const dataTransfer = new DataTransfer();
        cy.visit("https://demo.automationtesting.in/Static.html")
        cy.get("#node").trigger("dragstart", {
            dataTransfer
        })
        cy.get("#droparea").trigger("drop", {
            dataTransfer
        })
    });
})