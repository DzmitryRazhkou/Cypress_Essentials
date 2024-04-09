function doEditYourContactInfo(typeContactInfo, emailAddress, phoneNumber, action) {
    if (typeContactInfo === "Contact Info") {
        this.editYourContactInfo.editContactInfoBtn.scrollIntoView().click({timeout: CommonConstants.timeout.xxs})
    } else {
        this.editYourContactInfo.editShippingInfoBtn.scrollIntoView().click({timeout: CommonConstants.timeout.xxs})
    }

    this.editYourContactInfo.emailAddressInputEditYourContactInfo.clear()
    this.editYourContactInfo.emailAddressInputEditYourContactInfo.type(emailAddress, {delay: 0})

    this.editYourContactInfo.emailAddressConfirmationInputEditYourContactInfo.clear()
    this.editYourContactInfo.emailAddressConfirmationInputEditYourContactInfo.type(emailAddress, {delay: 0})

    this.editYourContactInfo.phoneNumberInputEditYourContactInfo.clear()
    this.editYourContactInfo.phoneNumberInputEditYourContactInfo.type(phoneNumber, {delay: 0})

    if (action === "Cancel") {
        this.editYourContactInfo.cancelBtnEditYourContactInfo.click()
    } else {
        this.editYourContactInfo.saveChangesBtnEditYourContactInfo.click()
    }
}


function doEditYourContactInfo(typeContactInfo, emailAddress, phoneNumber, action = "Save") {
    const contactInfoBtn = typeContactInfo === "Contact Info" ? this.editYourContactInfo.editContactInfoBtn : this.editYourContactInfo.editShippingInfoBtn;
    contactInfoBtn.scrollIntoView().click({ timeout: CommonConstants.timeout.xxs });

    const emailInput = this.editYourContactInfo.emailAddressInputEditYourContactInfo;
    const confirmEmailInput = this.editYourContactInfo.emailAddressConfirmationInputEditYourContactInfo;
    const phoneInput = this.editYourContactInfo.phoneNumberInputEditYourContactInfo;

    emailInput.clear().type(emailAddress, { delay: 0 });
    confirmEmailInput.clear().type(emailAddress, { delay: 0 });
    phoneInput.clear().type(phoneNumber, { delay: 0 });

    const saveChangesBtn = this.editYourContactInfo.saveChangesBtnEditYourContactInfo;
    const cancelBtn = this.editYourContactInfo.cancelBtnEditYourContactInfo;

    if (action === "Cancel") {
        cancelBtn.click();
    } else {
        saveChangesBtn.click();
    }
}



