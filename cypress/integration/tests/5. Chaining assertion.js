describe("CY Practise", () => {
  it("Drop Down Menu", () => {
    cy.visit("https://www.globalsqa.com/demo-site/select-dropdown-menu/");
    cy.get("select")
      .find("option")
      .should("have.length", 249)
      .and("have.text", "Ukraine");
  });
});
