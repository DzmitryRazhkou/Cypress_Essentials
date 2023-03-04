describe("CY Practise", () => {
  it("Drop Down Menu", () => {
    cy.visit("https://www.globalsqa.com/demo-site/select-dropdown-menu/");
    cy.get("select").select("Ukraine").should("have.value", "UKR");
  });
});
