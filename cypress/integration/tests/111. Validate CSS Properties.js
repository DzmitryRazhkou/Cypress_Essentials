
let elements = ExitOfferBuilderPage.clickHereBtn

   elements.
    .should('have.css', 'border-color', 'rgba(44, 32, 223, 0)')
    .and('have.css', 'border-width', '4px')
    .and('have.css', 'border-style', 'solid');