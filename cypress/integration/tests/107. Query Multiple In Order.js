describe("CY Practise", () => {

//
//   Live HTML
//   Subtotal: $ 20.15
//   Total: $ 24.85
//   Fees:
//   Tax: $ 1.70
//   Tip: $ 3.00


    it.only("Query Multiple In Order #1 (It's a lot of code)", () => {
        cy.get('#subtotal')
           .should('not.have.text', '--')
           .map('innerText')
           .map(Number)
           .its(0)
           .as('subtotal')

        cy.get('#total')
            .should('not.have.text', '--')
            .map('innerText')
            .map(Number)
            .its(0)
            .as('total')

        cy.get('#tax')
            .should('not.have.text', '--')
            .map('innerText')
            .map(Number)
            .its(0)
            .as('tax')

        cy.get('#tip')
            .should('not.have.text', '--')
            .map('innerText')
            .map(Number)
            .its(0)
            .as('tip')

            .then(function () {
            this.subtotal + this.tax + this.tip, 'total sum'
            }).to.be.closeTo(this.total, 0.001)

        });
    it.only("Query Multiple In Order #2 (Better, But if we change order of the elements)", () => {
            cy.get('#subtotal, #total, #tax, #tip')
               .map('innerText')
               .map(Number)
               .should([subtotal, total, tax, tip]) => {
            expect(subtotal + tax + tip, 'total sum').to.be.closeTo(total, 0.001)
            )
        });
    });
    it.only("Query Multiple In Order #3 (Better, But if we change order of the elements)", () => {
                cy.getInOrder('#subtotal, #tax, #tip, #total')
                   .map('innerText')
                   .map(Number)
                   .print()
                   .should([subtotal, tax, tip, total]) => {
                expect(subtotal + tax + tip, 'total sum').to.be.closeTo(total, 0.001)
                )
            });
        });
});
