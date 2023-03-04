describe("CY Practise", () => {
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
});
