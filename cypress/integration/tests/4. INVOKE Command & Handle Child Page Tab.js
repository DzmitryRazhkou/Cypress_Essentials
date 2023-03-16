describe("CY Practise", () => {
    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    })

    it("Handle Child Page Tab (Official Way)", () => {
        cy.get("#opentab").invoke("removeAttr", "target").click();
        cy.get(".pull-left > .logo > a > img").should("be.visible");
    });

    it("Handle Child Page Tab (2nd Way)", () => {
        cy.get("#opentab").then(($el) => {
            const url = $el.prop("href");
            cy.log(url);
            cy.visit(url);
        });
        cy.get(".pull-left > .logo > a > img").should("be.visible");
    });

    it("'Invoke' To Get Attribute", () => {
        cy.get("#opentab").as("openTab")
        cy.get("@openTab").invoke("attr", "target").then(targetAttr =>
            cy.log(targetAttr)
        )
        cy.get("@openTab").should("have.attr", "target", "_blank")
    });
    it('Invoke To Get Text', function () {
        cy.get("legend[class='switch-tab']").invoke("text").then(textValue => {
            cy.log(textValue)
        })
    });
    it.only("Invoke To Remove Target Attribute", () => {
        cy.get("#opentab").invoke("removeAttr", "target")
        cy.get("#opentab").click()
        cy.location().then(yieldObject => cy.log(yieldObject.href))
        cy.get(".pull-left > .logo > a > img").should("be.visible");
    });
});
