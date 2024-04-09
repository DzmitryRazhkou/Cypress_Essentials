// let templateLayoutNamesList = Cypress._.map($el, 'innerText')
//.filter(name => !['Two Columns 1', 'Two Columns 2'].includes(name))


cy.get('your-selector')
  .invoke('map', 'innerText')
  .then(innerTextArray => {
    const filteredArray = innerTextArray.filter(name => !['Two Columns 1', 'Two Columns 2'].includes(name));
    // Continue your test logic with filteredArray
  });


  cy.get('div[class*="dialog-content"]>div>div>div>span:first-of-type')
    .then($elements => {
      // Exclude the second and third elements
      const filteredElements = $elements.filter((index, element) => index !== 1 && index !== 2);
      // Now, you can perform your assertions or actions on filteredElements
      cy.wrap(filteredElements).should('have.length', $elements.length - 2); // Ensure only the desired elements are present
      // Continue your test logic...
    });
