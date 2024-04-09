describe("CY Practise", () => {

it.only("Get Multiple Values From The Page Via Aliases And Test Context Properties", () => {
        cy.visit("https://letcode.in/selectable");

        let values = ["XCUITest", "Cypress", "Selenium", "Appium"]
        cy.get('#clour li').each(($el, index) => {
           cy.wrap($el).type(values[index])
        })
    });
});
