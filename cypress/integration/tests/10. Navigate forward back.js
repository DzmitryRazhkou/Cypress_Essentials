describe("CY Practise", () => {
  it("Navigate Forward Back", () => {
    cy.visit("https://www.globalsqa.com/");
    cy.get("#menu-item-6898").click();

    cy.wait(2000);
    cy.go("back");
    cy.wait(2000);
    cy.go("forward");
  });
});
