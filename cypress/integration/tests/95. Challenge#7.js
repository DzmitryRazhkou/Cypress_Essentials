describe('Test', () => {
    beforeEach(() => {
        cy.visit('https://letcode.in/selectable');
    });
    it('Challenge Code', () => {
        function verifyPartialAddressDropDown(address) {
            DefaultOrderFormPage.addressAutocompleteAVS.dropDownList.as("address-list-drop-down")
            cy.get("@address-list-drop-down").then(($el) => {
                // List Addresses From Drop-Down (Array):
                const result = $el.text().replace(/,/g, '').split("\n").map(opt => opt.replace(/\s+/g, ' ').trim())
                const dropDownAddresses = result.filter(item => item != '')

                if (dropDownAddresses.length >= 1) {
                    const assertResult = dropDownAddresses.some((opt => opt.includes(address)))
                    expect(assertResult).to.be.true
                } else {
                    expect(dropDownAddresses[0]).to.include(address)
                }
            })
        }
    });
});