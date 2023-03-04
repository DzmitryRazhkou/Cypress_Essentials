describe("CY Practise", () => {
  beforeEach(() => {
    cy.visit("https://www.globalsqa.com/samplepagetest/");
  });

  it.skip("GET - Limit Scope - Example, scope is check", () => {
    // cy.get("body").click("multiple: true"); error out

    cy.get(".container > .sixteen").within((div) => {
      cy.get(
        "div[class='grunion-field-wrap grunion-field-checkbox-multiple-wrap'] label"
      ).click("multiple: true");
    });
  });

  it("GET - Limit Scope", () => {
    cy.get(
      "div[class='grunion-field-wrap grunion-field-checkbox-multiple-wrap'] label"
    ).as("sf");

    cy.get("@sf").first().click();
    cy.get("@sf").eq(1).click();
    cy.get("@sf").eq(-1).click();
    cy.get("@sf").last().click();
  });

  it.only("GET - Limit Scope", () => {
    cy.get(
      "div[class='grunion-field-wrap grunion-field-checkbox-multiple-wrap'] label"
    ).as("sf");

    cy.get("@sf").each((spn) => {
      spn.hide();
    });
  });
});
