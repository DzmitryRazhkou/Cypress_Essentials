describe("Silence cy.task and cy.invoke Command Logging", () => {
    it('Silence Logging', function () {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?", {log: false})
        cy.get('#logo > a > .img-responsive', {log: false}).click({multiple: true})
        cy.task("customShit", null, {log: false})
    });
})