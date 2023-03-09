describe("CY Practise", () => {
  beforeEach(() => {
    cy.visit("http://localhost:7080/iframe");
  });

  it("iFrame - Type in the body - Javascript Way", () => {
    cy.get("iframe[id='mce_0_ifr']").within((fr) => {
      const [myIframe] = fr.get();
      myIframe.contentDocument.body.getElementsByTagName("p")[0].textContent =
        "Your content goes here.";
    });
  });

  it.only("iFrame - Type in the body - Javascript Way", () => {
    cy.get("iframe[id='mce_0_ifr']").within(($frame) => {
      const body = $frame.contents().find("body#tinymce"); // body[id='tinymce']
      cy.wrap(body).clear().type("Gans");
    });
  });
});

