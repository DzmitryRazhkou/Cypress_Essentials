describe("CY Practise", () => {

//   'Load Shipping Info' Button ---> Shipped 1 day ago

    it.only("Query Multiple In Order #1 (It's a lot of code)", () => {
        cy.get('#shipping')
           .should('be.visible')
           .within(() => {
              cy.contains('button', 'Load').click()
              cy.contains('.shipped', 'Shipped')
           })
        });

//        Better:

        cy.get('#shipping')
           .should('be.visible')
           .within(() => {
              cy.contains('button', 'Load').click()
           })
        cy.get('#shipping')
            .should('be.visible')
            .within(() => {
              cy.contains('.shipped', 'Shipped')
        });
    });
});
