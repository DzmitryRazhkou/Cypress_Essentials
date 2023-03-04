describe("CY Practise", () => {
    it("Cypress Drop Down Static JQuery", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("a > .btn").trigger("click");
    });

    it("Cypress Mouse Trigger", () => {
        cy.visit("https://www.amazon.com/");
        cy.get("#nav-link-accountList").trigger("mouseover__");
        cy.contains("Customer Service").click();
    });

    it.only("Cypress Without Trigger", () => {
        cy.visit("https://www.amazon.com/");

        cy.contains("Customer Service").click({force: true});
    });
});
