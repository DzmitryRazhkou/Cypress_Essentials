describe("Cypress DownloadFile", () => {
    it("Cypress Plugin Download", () => {
        cy.visit("http://localhost:7080/download ")
        cy.downloadFile("http://localhost:7080/download/some-file.txt", "cypress/downloads", "some-file.txt0")
    })
})