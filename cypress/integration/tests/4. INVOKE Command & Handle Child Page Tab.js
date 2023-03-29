describe("CY Practise", () => {
    beforeEach(() => {

    })

    it("Handle Child Page Tab (Official Way)", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#opentab").invoke("removeAttr", "target").click();
        cy.get(".pull-left > .logo > a > img").should("be.visible");
    });

    it("Handle Child Page Tab (2nd Way)", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#opentab").then(($el) => {
            const url = $el.prop("href");
            cy.log(url);
            cy.visit(url);
        });
        cy.get(".pull-left > .logo > a > img").should("be.visible");
    });

    it("'Invoke' To Get Attribute", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#opentab").as("openTab")
        cy.get("@openTab").invoke("attr", "target").then(targetAttr => cy.log(targetAttr))
        cy.get("@openTab").should("have.attr", "target", "_blank")
    });
    it('Invoke To Get Text', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("legend[class='switch-tab']").invoke("text").then(textValue => {
            cy.log(textValue)
        })
    });
    it("Invoke To Remove Target Attribute", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#opentab").invoke("removeAttr", "target")
        cy.get("#opentab").click()
        cy.location().then(yieldObject => cy.log(yieldObject.href))
        cy.get(".pull-left > .logo > a > img").should("be.visible");
    });
    it("Open New Window", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.on('uncaught:exception', () => false)
        cy.visit("https://demoqa.com/browser-windows").then((win) => {
            cy.stub(win, 'open').returns({}).as("open")
        })
        cy.get("#messageWindowButton").click()
        cy.get("@open").should('have.been.calledWith', '', 'MsgWindow')
    });
    it("'Invoke' and '_Self'", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.contains('Open Tab', {matchCase: false})
            .should('have.attr', 'target', '_blank')
            .invoke('attr', 'target', '_self')
            .click()
        cy.url().should('contain', 'rahulshettyacademy')
    });
    it.skip('Stub Window Open Method And Confirm The Call Arguments', function () {
        cy.visit("http://the-internet.herokuapp.com/windows")
        cy.window().then(win => {
            cy.stub(win, 'open').as("open")
        })
        cy.get('.example > a').click()
        cy.get("@open").should('have.been.calledWith', Cypress.sinon.match.string, '_blank')
    });
});
