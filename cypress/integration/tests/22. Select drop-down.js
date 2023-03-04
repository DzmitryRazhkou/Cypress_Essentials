describe("CY Practise", () => {
  it("Cypress Drop Down Static JS", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#dropdown-class-example").select("Option3");
    // .should(($el) => {
    //   // JS
    //   let el = $el[3];
    //   expect(el.options[el.selectedIndex].value).to.equal("option3");
    // });
  });

  it("Cypress Drop Down Static JQuery", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#dropdown-class-example")
      .select("Option3")
      .should(($el) => {
        expect($el.val()).to.equal("option3");
        expect($el.find("option:selected").text()).to.equal("Option3");
      });
  });

  it("Cypress Drop Down Static JQuery 2-Way", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#dropdown-class-example")
      .select("Option3")
      .find("option:selected")
      .as("opt");
    cy.get("@opt").invoke("text").should("eq", "Option3");
    cy.get("@opt").invoke("val").should("eq", "option3");
  });

  it.only("Cypress Drop Down Dynamic", () => {
    cy.visit("https://www.globalsqa.com/demo-site/select-dropdown-menu/");
    cy.get("select").type("Ukr{downarrow}{enter}", { force: true }).blur();
  });
});
