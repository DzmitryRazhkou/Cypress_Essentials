static customizePreOrderSummaryAddImageClassVerifySOF(widthStyle, heightStyle, timeout = null) {
    this.addCustomCSSForm.addCustomCSSIDEEditor
        .type(`{upArrow}${`width: ${widthStyle};`}{enter}${`height: ${heightStyle};`}{enter}${`display: block;`}{enter}${`content: `}`).then(() => {
        this.addCustomCSSForm.addImageBtn.click()
        this.selectExistingImages()
    })
    cy.wait(CommonConstants.timeout.xxxxs)
    this.addCustomCSSForm.imageId.then((txt) => {
        let imageIdValue = txt.text().replace(/{|}/g, '').replace("image-id:", "")

        this.addCustomCSSForm.autosaveIconAddCustomCSSForm.should('have.text', "Saved", {timeout: timeout})
        this.addCustomCSSForm.doneAddCustomCSSBtn.click()

        this.doClickOnPreviewLink()
        this.sofOrderForm.sofPreOrderSummary.then(($el) => {
            const styles = window.getComputedStyle($el[0], '::after')
            const {height, width, content} = styles;

            expect(width).to.equal(widthStyle)
            expect(height).to.equal(heightStyle)
            expect(content).to.includes(imageIdValue)
        })
    })
}