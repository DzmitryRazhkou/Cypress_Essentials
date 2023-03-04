describe("CY Practise", () => {
  it("Dynamic Drop-down", () => {
    let locators = {
      SEARCH_FIELD: () => cy.get(".gLFyf"),
      MENU: () => cy.get("ul[jsname='bw4e9b']"),
      ADD: () => find("li div div div span"),
      VALIDATE: () => cy.get(".mEgaLc"),
    };

    cy.visit("https://www.google.com/");
    locators.SEARCH_FIELD().type("ukr");
    locators
      .MENU()
      .find("li div div div span")
      .each(($el, index, list) => {
        let titles = $el.text();
        if (titles == "ukraine war") {
          cy.wrap($el).click();
          //   $el.click();
        }
      });
    locators.VALIDATE().then((el) => {
      let f = el.text();
      cy.log(f);
    });
  });
});
