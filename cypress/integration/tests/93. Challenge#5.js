describe('Test', () => {
    beforeEach(() => {
        cy.visit('https://letcode.in/selectable');
    });
    it('Challenge Code', () => {
        function verifyComplexAustraliaAddress(address) {
            DefaultOrderFormPage.addressAutocompleteAVS.dropDownList.as("address-list-drop-down")
            cy.get("@address-list-drop-down").then(($el) => {
                const states = {
                    "VIC": "Vic",
                    "NSW": "Nsw",
                    "NT": "Nt",
                    "ACT": "Act",
                    "TAS": "Tas",
                    "WA": "Wa",
                    "SA": "Sa",
                    "QLD": "Qld",
                };
                // Sent Address To Address Autocomplete input:
                const modifiedAddress = address
                    .replace(/\b\w+\b/g, match => states[match] || match) // NSW -> Nsw
                    .replace(/,/g, "")   // , -> ''
                    .replace(/\b\d+\/\d+\b/g, '')   // 1907/1
                    .trim();

                // List Addresses From Drop-Down (Array):
                const addresses = $el.text().replace(/,/g, "").trim()
                const index = addresses.indexOf(modifiedAddress);
                const firstPart = addresses.substring(0, index + modifiedAddress.length);
                const secondPart = addresses.substring(index + modifiedAddress.length);
                const splitAddress = [firstPart, secondPart];
                const cleanedUpAddresses = splitAddress.filter(item => item != '')

                cy.wrap(cleanedUpAddresses).then(splitAddressArray => {
                    if (splitAddressArray.length >= 2) {
                        expect(modifiedAddress).to.oneOf(splitAddressArray)
                    } else {
                        expect(splitAddressArray[0]).to.equal(modifiedAddress)
                    }
                })
            });
        }
    });
});