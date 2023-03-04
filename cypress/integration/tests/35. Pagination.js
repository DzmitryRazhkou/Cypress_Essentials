describe("Cypress Pagination", () => {

    it("Handle Pagination", () => {
        cy.visit("https://examples.bootstrap-table.com/template.html?v=134&url=options%2Ftable-pagination.html")
        findItem("Item 12")

        function findItem(value) {
            function findPage(index) {
                let found = false
                cy.get("li[class='page-item']:not(li[class='page-item page-pre']):not(li[class='page-item page-next'])").as("pages")
                cy.get("@pages").its("length").then((len) => {
                    if (index >= len) {
                        return false
                    } else {
                        cy.get("@pages").eq(index).click()
                        cy.get("table#table tr > td:nth-child(2)").each((itemNameEl) => {
                            const itemTxt = itemNameEl.text();
                            console.log(itemTxt)
                            if (itemTxt === value) {
                                found = true
                                return false
                            }
                        }).then(() => {
                            if (found) {
                                findPage(++index)
                            }
                        })
                    }
                })
            }
        }

    })
})