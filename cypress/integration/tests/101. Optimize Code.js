export default class Loh {

const orderIdentifier = addressesThailand[randomAddress].orderIdentifier
const addressOne = addressesThailand[randomAddress].address.addressOne
const addressTwo = addressesThailand[randomAddress].address.addressTwo
const city = addressesThailand[randomAddress].address.city
const state = addressesThailand[randomAddress].address.state
const zipCode = addressesThailand[randomAddress].address.zipCode
const country = addressesThailand[randomAddress].address.country

##########

const {
    orderIdentifier,
    address: {addressOne, addressTwo, city, state, zipCode, country},
} = addressesPortugal[randomAddress];

const graphqlQuery = addressVerifyQuery(orderIdentifier, addressOne, addressTwo, city, state, zipCode, country)

______________________________________________________________________________

function waitAndVerifyGraphQLResponseResultTrue(alias, addressOne, city, zipCode, country) {
    cy.wait(`@${alias}`).then((interception) => {
        expect(interception.response.statusCode).to.equal(200);
        const responseBody = interception.response.body;
        const verifiedSuggestion = responseBody.data.addressVerify.verifiedSuggestion;
        const result = responseBody.data.addressVerify.result;

        if (result === true && verifiedSuggestion === null) {
            expect(result).to.equal(true);
            expect(verifiedSuggestion).to.be.null;
            cy.log(" =====> The Address As Passed In Was Verified!!! <===== ");
        } else if (result === true && verifiedSuggestion !== null) {
            expect(result).to.equal(true);
            expect(verifiedSuggestion).to.not.be.null;

            cy.log(" =====> The Address As Passed In Was Not Verified But We Have A Suggestion For An Address That Is!!! <===== ");

            expect(verifiedSuggestion.addressOne).to.equal(addressOne);
            expect(verifiedSuggestion.city).to.equal(city);
            expect(verifiedSuggestion.zipCode).to.equal(zipCode);
            expect(verifiedSuggestion.country).to.equal(country);
        } else if (result === false && verifiedSuggestion === null) {
            expect(result).to.equal(false);
            expect(verifiedSuggestion).to.be.null;
            throw new Error (" =====> The Address As Passed In Was Not Verified But We Don’t Have Any Better Ideas!!! <=====");
        } else if (result === false && verifiedSuggestion !== null) {
            expect(result).to.equal(false);
            expect(verifiedSuggestion).to.not.be.null;
            throw new Error (" =====> The Address As Passed In Was Not Verified; We Have A Suggestion For An Address That We Think Is Better But Still Not Verified To An Actual Delivery Address!!! <=====");
        } else if (result === null) {
            expect(result).to.be.null;
            throw new Error (" =====> The Address Passed In Looks Completely Incorrect; We’re Pretty Sure There’s Some Kind Of Mistake!!! <===== ");
        } else {
            throw new Error (" =====> WE'VE GOT PROBLEMS!!! <===== ");
        }
    });
}

// Optimized:

static waitAndVerifyGraphQLResponseResultTrue(alias, addressOne, city, zipCode, country) {
  cy.wait(`@${alias}`).then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
    const responseBody = interception.response.body;
    const verifiedSuggestion = responseBody.data.addressVerify.verifiedSuggestion;
    const result = responseBody.data.addressVerify.result;

    switch (result) {
      case true:
        if (verifiedSuggestion === null) {
          expect(result).to.equal(true);
          expect(verifiedSuggestion).to.be.null;
          cy.log("Address Passed In Was Verified!!!");
        } else {
          expect(result).to.equal(true);
          expect(verifiedSuggestion).to.not.be.null;
          cy.log("Address Passed In Was Not Verified, But We Have a Suggestion!");
          expect(verifiedSuggestion.addressOne).to.equal(addressOne);
          expect(verifiedSuggestion.city).to.equal(city);
          expect(verifiedSuggestion.zipCode).to.equal(zipCode);
          expect(verifiedSuggestion.country).to.equal(country);
        }
        break;

      case false:
        if (verifiedSuggestion === null) {
          expect(result).to.equal(false);
          expect(verifiedSuggestion).to.be.null;
          throw new Error("Address Passed In Was Not Verified, and No Suggestions Available!");
        } else {
          expect(result).to.equal(false);
          expect(verifiedSuggestion).to.not.be.null;
          throw new Error("Address Passed In Was Not Verified; We Have a Suggestion, But Still Not Verified to an Actual Delivery Address!");
        }
        break;

      case null:
        expect(result).to.be.null;
        throw new Error("Address Passed In Looks Incorrect; Mistake Likely!");
        break;

      default:
        throw new Error("We've Got Problems!");
    }
  });
}

}