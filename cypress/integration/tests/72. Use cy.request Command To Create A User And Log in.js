describe("Use cy.request Command To Create A User And Log in", () => {
    it('User And Log In', function () {
        cy.request({
            method: 'POST',
            url: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
            form: true,
            body: {
                email: 'dimagadjilla@gmail.com',
                password: '3036057Dr'
            }
        })
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/account') // URL after POST Call
    });
})