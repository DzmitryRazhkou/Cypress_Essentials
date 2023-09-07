describe('Slice Multiple Elements', function () {
    it('Slice Unneccesary Elements', function () {
        cy.get('selector-for-multiple-elements').then(($elements) => {
            // Exclude the first and second elements
            const filteredElements = $elements.slice(2);

            // Now you can perform actions on the filtered elements
            filteredElements.each(($element) => {
                // Your actions here
            });
        });
    });
});