describe("CY Intercept", () => {
    it('Intercept KOEL', function () {
        const email = "dimagadjilla@gmail.com"
        const psw = "te$t$tudent"
        let id

        // 1) Make API Call for retrieve "Token"
        cy.request("POST", "https://bbb.testpro.io/api/me", {
            email: email, password: psw, failOnStatus: false,
        }).then((response) => {
            expect(response.status).to.equal(200);
            cy.log("The BEARER TOKEN is: " + response.body.token)
            Cypress.env("api-token", response.body.token);
        });

        //     2. Insert Saved in Env into Local Storage:
        cy.visit(Cypress.env("url"), {
            onBeforeLoad: (window) => {
                window.localStorage.setItem("api-token", Cypress.env("api-token"));
            },
        });

        cy.intercept('POST', 'api/playlist').as("playlist")
        cy.get('[data-testid="sidebar-create-playlist-btn"]').click()
        cy.get('[data-testid="playlist-context-menu-create-simple"]').click()
        cy.get('form.create > input').type("Nofx{enter}")
        cy.wait("@playlist").its('response.statusCode').should('equal', 200)
        cy.get("@playlist").then(playlist => {
            cy.log(playlist)
            const playListId = playlist.response.body.id
            cy.wrap(playListId).as('id')
        })
    });
    // after(function () {
    //     cy.request('DELETE', `api/playlist/${this.id}`)
    // })

    it('JSON Placeholder', function () {
        cy.intercept('/users', (req) => {
            return Cypress.Promise.delay(1000).then(() => req.continue())
        }).as("users")
        cy.visit('https://jsonplaceholder.cypress.io/users')
    });

    it.only('JSON Placeholder Mocking', () => {
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('/posts', (req) => {
            return Cypress.Promise.delay(5000).then(() => req.continue())
        }).as("posts")
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
    })

})