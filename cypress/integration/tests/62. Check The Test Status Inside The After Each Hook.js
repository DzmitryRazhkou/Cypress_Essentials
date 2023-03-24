it('Passes', function () {
    expect(1).to.equal(1)
});

it('Fails', function () {
    expect(1).to.equal("Hello")
});

afterEach(function () {
    console.log(this.currentTest)
    if (this.currentTest.state === 'Failed') {
        cy.log("FAILED!!!")
    } else {
        cy.log('OK')
    }
})