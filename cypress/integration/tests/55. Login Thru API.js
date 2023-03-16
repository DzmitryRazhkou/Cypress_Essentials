describe("Login Thru API", () => {
    it("Cypress Login Thru Token", () => {
        const email = "dimagadjilla@gmail.com"
        const psw = "te$t$tudent"

        // 1) Make API Call for retrieve "Token"
        cy.request("POST", "https://bbb.testpro.io/api/me", {
            email: email,
            password: psw,
            failOnStatus: false,
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
    })
})