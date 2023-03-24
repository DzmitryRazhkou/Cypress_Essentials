describe("Web-Tables Cypress", () => {
    beforeEach(() => {
        cy.visit("https://letcode.in/table")
    })
    it('Web-Tables', function () {
        const headings = ['First name', 'Last name', 'Email address', 'Present/Absent']
        cy.get("table[id='simpletable']>thead>tr>th").each((y, index) => {
            const el = y.text()
            expect(Cypress.$(y).text()).to.equal(headings[index])
            expect(el).to.equal(headings[index])
        })
    });
})