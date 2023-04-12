describe("Cypress Download File With Third Party Plugin", () => {
    beforeEach(() => {
        cy.task('deleteDownloads')
    })
    it("Cypress Plugin Download", () => {
        cy.visit("http://localhost:7080/download ")
        cy.downloadFile("http://localhost:7080/download/some-file.txt", "cypress/downloads", "some-file.txt0")
    })
    it.skip('Download a Text File', function () {
        cy.downloadFile('http://www.sample-website.com/path/to/sample.doc', 'Downloads', 'test.doc')
        cy.readFile("./Downloads/test.doc").should('contain', 'Text for comparison')
    });
})