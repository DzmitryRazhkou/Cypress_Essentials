describe("CY Practise", () => {
  beforeEach(() => {
    cy.visit("http://localhost:7080/upload");
  });

  it("Cypress File Upload", () => {
    cy.get("#file-upload").attachFile({
      filePath: "example.json",
      fileName: "saucedemo.json",
      lastModified: new Date().getTime(),
    });
    cy.get("#file-submit").click();
    cy.get("h3").should("have.text", "File Uploaded!");
  });
});



// describe('File Upload', () => {
//   it('uploads a file correctly', () => {
//     cy.visit('/upload')
//     const filename = 'test-file.txt'
//     cy.fixture(filename).then((fileContent) => {
//       cy.get('[type="file"]').attachFile({
//         fileContent,
//         fileName: filename,
//         mimeType: 'text/plain',
//       })
//       cy.get('[type="submit"]').click()
//       cy.get('.success-message').should('be.visible')
//     })
//   })
// })

