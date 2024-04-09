function doClickWebElement(selector, force = false, timeout = null) {
    if (timeout !== null) {
        selector.should('exist').click({force, timeout});
    } else {
        selector.should('exist')
            .then(($element) => {
                const options = force ? {force: true} : undefined;
                cy.wrap($element, {log: false}).click(options);
            });
    }
}