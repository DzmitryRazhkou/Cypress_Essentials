describe("Create Todos using API", () => {
    it.skip('Post', function () {
        // Reset The Data On The Server:
        cy.request('POST', "/reset", {todos: []})

        // Pick A Random Number Of The Todos To Create Below:
        const numberOfTodos = Math.floor(Math.random() * 100) + 1
        cy.log(`Creating *** ${numberOfTodos} *** todos. `);

        //     Form The Todos Array With Random Titles:
        const todos = Array.from({length: numberOfTodos}).map((z, v) => {
            return {
                title: `Todos ${v + 1}`,
                completed: false,
                id: `id-${v}`
            }
        })
        //     Tip: You Can Use console.table to Print an Array Of Objects:
        console.table(todos)
        //     Call cy.request to Post Each TODO Item:
        todos.forEach((todo) => {
            cy.request("POST", '/todos', todo)
        })
        cy.visit("https://todomvc.com/examples/react/#/")
        cy.get('.todo').should('have.length', numberOfTodos)
    });
    it('Create A Random Number Of Items', function () {
        // Reset The Data On The Server:
        cy.request('POST', "/reset", {todos: []})

        // Pick A Random Number Of The Todos To Create Below:
        const numberOfTodos = Cypress._.random(1, 10)
        cy.log(`Creating *** ${numberOfTodos} *** todos. `);

        //     Form The Todos Array With Random Titles:
        Cypress._.times(numberOfTodos, (k) => {
            cy.request('POST', '/todos', {
                title: `Todos ${k + 1}`,
                completed: false,
                id: `id-${k}`
            })
        })
        cy.visit("https://todomvc.com/examples/react/#/")
        cy.get('.todo').should('have.length', numberOfTodos)
    });
})