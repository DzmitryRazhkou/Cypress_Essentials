static doDeleteRecentlyUploadedImageFromExistingImages(imageAltText, action) {
    this.imageContent.listOfImagesExistingGallery
        .then(($els) => {
            const altValues = $els.map((index, el) => Cypress.$(el).attr('alt')).get();
            expect(altValues).includes(imageAltText)

            altValues.forEach((el, index) => {
                if (el === imageAltText) {
                    if (action == 'Delete') {
                        this.imageContent.existingImageDeleteIcon.eq(index).click({force: true})
                        this.imageContent.areYouSureYouWantToDeleteThisImageDeleteBtn.click()
                    } else {
                        this.imageContent.existingImageDeleteIcon.eq(index).click({force: true})
                        this.imageContent.areYouSureYouWantToDeleteThisImageGoBackBtn.click()
                    }
                }
            })
        })
    cy.wait(1000, {log: false})
}