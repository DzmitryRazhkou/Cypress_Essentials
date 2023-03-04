describe("CY Practise", () => {
  it("Handle Text By Using 'invoke('text')'", () => {
    cy.visit("https://www.globalsqa.com/");
    cy.get(".icon_loc")
      .invoke("text")
      .then(($el) => {
        expect($el).to.equal("146, VP Block, Pitampura, New Delhi-110034");
      });
  });

  it("Handle Text By Using 'JQuery'", () => {
    cy.visit("https://www.globalsqa.com/");
    cy.get(".icon_loc").then((txt) => {
      let fs = txt.text();
      expect(fs).to.equal("146, VP Block, Pitampura, New Delhi-110034");
    });
  });
});
