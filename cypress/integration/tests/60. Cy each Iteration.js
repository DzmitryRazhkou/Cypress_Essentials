it("Cy.each Iterations For Simple", () => {
    const fruits = ['apple', 'bananas', 'orange']
    cy.wrap(fruits).each((fruit, k) => {
        if (k === 2) {
            return true
        }
        console.log('fruit', fruit)
    })
})