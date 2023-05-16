describe("Find Broken Tags", () => {
    before(() => {
        cy.visit("https://charter97.org/")
    })
    it('Identify The Broken Links', function () {
        const listOfBrokenLinks = []
        const listOfWorkingLinks = []
        cy.get('a').each(link => {
            const url = link.prop("href")

            cy.request({
                url,
                failOnStatusCode: false
            }).then(response => {
                if (response.status >= 400) {
                    // cy.log(`${url} is a broken link`)
                    listOfBrokenLinks.push(url)
                } else {
                    // cy.log(`${url} is a working link`)
                    listOfWorkingLinks.push(url)
                }
            })
        })
        listOfBrokenLinks.forEach((el) => {
            cy.log(el)
        })
    });
})