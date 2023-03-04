describe("CY Practise", () => {
  beforeEach(() => {
    cy.visit("https://selectorshub.com/xpath-practice-page/");
  });

  it("Cypress Shadow Username", () => {
    cy.get("#userName").as("shadow");
    cy.get("@shadow").scrollIntoView();
    cy.get("@shadow").shadow().find("#kils").type("Nofx");
  });

  it.only("JQuery Shadow", () => {
    cy.get("#userName").should((e) => {
      const [dom] = e.get();
      expect(dom.shadowRoot.querySelector("#kils").textContent).to.equal(
        "enter name"
      );
      dom.shadowRoot.getElementById("kils").value = "SF";
    });
  });
});
