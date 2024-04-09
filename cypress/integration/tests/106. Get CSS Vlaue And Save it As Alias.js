describe("CY Practise", () => {

    it.only("Get Multiple Values From The Page Via Aliases And Test Context Properties", () => {
        cy.visit("https://letcode.in/selectable");

        cy.get('#element').invoke('css', 'background').as('backgroundValue');
        cy.get('@backgroundValue').then((backgroundValue) => {

        // Use the background value as needed
        cy.log('Background value:', backgroundValue);

        // Perform assertions or other actions based on the background value
        });
    });
});
