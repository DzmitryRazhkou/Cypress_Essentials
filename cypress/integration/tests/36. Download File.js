describe("Cypress Download File With Third Party Plugin", () => {
    beforeEach(() => {
        cy.task('deleteDownloads')
    })
    it("Cypress Plugin Download", () => {
        cy.visit("http://localhost:7080/download ")
        cy.downloadFile("http://localhost:7080/download/some-file.txt", "cypress/downloads", "some-file.txt0")
    })
    it.only('Download a Text File', function () {
        cy.visit('https://demoqa.com/upload-download')
        cy.get("#downloadButton").as('w')
        cy.get("@w").click()
        // cy.readFile('/Users/dzmitryrazhkou/Downloads/sampleFile.jpeg').should(([img]) => {
        //     // expect(img.naturalWidth).to.equal(90)
        // })
    });
})