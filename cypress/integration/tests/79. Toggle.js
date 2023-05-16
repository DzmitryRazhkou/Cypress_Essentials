describe('Toggle Test', () => {
    beforeEach(() => {
        // Visit the page with the toggle element
        cy.visit('https://example.com');
    });

    it('should check or uncheck the toggle based on condition', () => {
        cy.get('#toggle-checkbox').then(($checkbox) => {
            // Check the initial state of the toggle checkbox
            const isChecked = $checkbox.is(':checked');

            if (!isChecked) {
                // Check the toggle checkbox if it is not already checked
                cy.get('#toggle-checkbox').check();

                // Assert that the toggle is checked
                cy.get('#toggle-checkbox').should('be.checked');
            } else {
                // Uncheck the toggle checkbox if it is already checked
                cy.get('#toggle-checkbox').uncheck();

                // Assert that the toggle is unchecked
                cy.get('#toggle-checkbox').should('not.be.checked');
            }
        });
    });
});

// In this example, we assume that there is a toggle checkbox with the ID toggle-checkbox on the page. The test visits the page, retrieves the checked state of the toggle checkbox, and uses an if/else condition to determine whether to check or uncheck the toggle based on its state. If the toggle checkbox is not already checked, it checks it using the .check() command and asserts that it is checked. If the toggle checkbox is already checked, it unchecks it using the .uncheck() command and asserts that it is unchecked.
//
//     Make sure to update the selectors ('#toggle-checkbox') to match the actual selector used in your HTML.






