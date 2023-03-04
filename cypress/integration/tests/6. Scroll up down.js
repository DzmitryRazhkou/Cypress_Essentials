describe("CY Practise", () => {
  it("Scroll Down, Up, Into View", () => {
    cy.visit("https://www.globalsqa.com/demo-site/select-dropdown-menu/");

    cy.scrollTo("bottom", { timeout: 3000 });
    cy.wait(3000);
    cy.scrollTo("top", { timeout: 3000 });

    cy.wait(3000);
    cy.get("#powered").scrollIntoView();
  });
});
