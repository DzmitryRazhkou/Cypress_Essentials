describe("CY Practise", () => {
  it("Handle Web Tables", () => {
    cy.visit("https://codenboxautomationlab.com/practice/");

    cy.get("table >tbody >tr td:nth-child(2)").each(($el, index, list) => {
      let text = $el.text();
      if (text.includes("Appium (Selenium)")) {
        cy.get("table >tbody >tr td:nth-child(3)")
          .eq(index)
          .then((price) => {
            let actPrice = Number(price.text().trim());
            expect(actPrice).to.equal(20);
          });
      }
    });
  });
});
