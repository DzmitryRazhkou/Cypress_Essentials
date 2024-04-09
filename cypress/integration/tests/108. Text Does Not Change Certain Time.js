describe("CY Practise", () => {

//   My Plugin [cypress-map] https://github.com/bahmutov/cypress-map

    it.only("Query Multiple In Order #1 (It's a lot of code)", () => {
        cy.get('#msg')
           .stable('text', 1500)
           .should('have.text', 'Hello')
        });
});
