describe("CY Practise", () => {
    it("Handle Web Tables", () => {
        cy.visit("https://codenboxautomationlab.com/practice/");

        cy.get("table >tbody >tr td:nth-child(2)").each(($el, index, list) => {
            let text = $el.text();
            cy.log(text);
            if (text.includes("Appium (Selenium)")) {
                cy.get("table >tbody >tr td:nth-child(3)")
                    .eq(index)
                    .then((price) => {
                        let actPrice = Number(price.text().trim());
                        expect(actPrice).to.equal(20);
                    });
            }
        });
    });
    it.only('Handle Tables Include Text', function () {
        const tool = "Selenium"
        cy.visit('https://letcode.in/selectable')
        cy.get('#container>div>h3')
            .should(Cypress.dom.isVisible)
            .and('have.length', 9)
            .as("table")
        cy.get("@table").each(($el, index) => {
            const arrayOfTxt = $el.text()
            if (arrayOfTxt.includes(tool)) {
                cy.get("@table")
                    .eq(index)
                    .invoke('text')
                    .should('equal', tool)
            }
        })
    });
});
