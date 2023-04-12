describe("CY Practise", () => {
    it.skip("GET - Limit Scope - Example, scope is check", () => {
        // cy.get("body").click("multiple: true"); error out
        cy.visit("https://www.globalsqa.com/samplepagetest/");
        cy.get(".container > .sixteen").within((div) => {
            cy.get(
                "div[class='grunion-field-wrap grunion-field-checkbox-multiple-wrap'] label"
            ).click("multiple: true");
        });
    });
    it("GET - Limit Scope", () => {
        cy.visit("https://www.globalsqa.com/samplepagetest/");
        cy.get(
            "div[class='grunion-field-wrap grunion-field-checkbox-multiple-wrap'] label"
        ).as("sf");

        cy.get("@sf").first().click();
        cy.get("@sf").eq(1).click();
        cy.get("@sf").eq(-1).click();
        cy.get("@sf").last().click();
    });
    it("GET - Limit Scope", () => {
        cy.visit("https://www.globalsqa.com/samplepagetest/");
        cy.get(
            "div[class='grunion-field-wrap grunion-field-checkbox-multiple-wrap'] label"
        ).as("sf");

        cy.get("@sf").each((spn) => {
            spn.hide();
        });
    });
    it.only("Randomly Pick Two Checkboxes Out Of Four And Click On Them", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#checkbox-example>fieldset>label>input")
            .should('be.visible')
            .and('have.length', 3)
            .then(($items) => {
                return Cypress._.sampleSize($items.toArray(), 2)
            })
            .should('have.length', 2)
            .click({multiple: true})
        cy.get("#checkbox-example>fieldset>label>input:checked")
    });
    it('Confirm Total Sum Using Data Attributes And Automatic Waiting', function () {
        let sum = 0
        cy.visit('https://demoqa.com/webtables')
        cy.get("div[class='rt-tr-group']>div>div:nth-child(5)")
            .should('have.length.greaterThan', 1)
            .each(($item) => {
                sum += Number($item.text())
            })
            .then(() => {
                cy.log(sum)
            })

    });
    it('jQuery :has and :contains Selectors in Cypress Tests', function () {
        cy.visit("http://the-internet.herokuapp.com/status_codes")
        cy.get('li:has(a:contains("404"))')
        // cy.get('li:has(.label:contains("New"))')
    });
});
