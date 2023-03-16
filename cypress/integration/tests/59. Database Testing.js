describe('Database Testing', function () {
    it('Create an Airport Table', function () {
        cy.task("queryDatabase", "CREATE TABLE airports(name VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, state VARCHAR(5) NOT NULL, address VARCHAR(255) NOT NULL)").then((result) => {
            expect(result.message).to.equal("")
        })
    });
    it('Insert Three Airports', function () {
        cy.task("queryDatabase", "INSERT INTO airports VALUES('Los Angeles International Airport - LAX', 'Los Angeles', 'CA', '1 World Way, Los Angeles, CA 90045'), ('John F. Kennedy International Airport - JFK', 'New York City', 'NY', 'Queens, NY 11430'), ('Chicago O Hare International Airport - ORD', 'Chicago', 'IL', '10000 W Balmoral Ave, Chicago, IL 60666')").then((result) => {
            expect(result.affectedRows).to.equal(3)
            // expect(result.message).to.equal("&Records: 3 Duplicates: 0 Warnings: 0")
        })
    });
    it('Select All Movies', function () {
        cy.task("queryDatabase", "SELECT * FROM airports;").then((result) => {
            cy.log("First Row Validation").then(() => {
                expect(result[0].name).to.equal("Los Angeles International Airport - LAX")
                expect(result[0].city).to.equal("Los Angeles")
                expect(result[0].state).to.equal("CA")
                expect(result[0].address).to.equal("1 World Way, Los Angeles, CA 90045")
            })
            // expect(result.message).to.equal("&Records: 3 Duplicates: 0 Warnings: 0")
        })
    });
    it('Select Row', function () {
        cy.task("queryDatabase", "SELECT * FROM airports WHERE city='New York City';").then((result) => {
            cy.log("Special Row").then(() => {
                expect(result[0].city).to.equal("New York City")
            })
        })
    });
    it('Delete Table', function () {
        cy.task("queryDatabase", "DROP TABLE airports;").then((result) => {
            cy.log("Delete Table").then(() => {
                expect(result.message).to.be.empty
            })
        })
    });
});