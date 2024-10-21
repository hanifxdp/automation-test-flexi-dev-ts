import { cartSelector } from "../../selector/selector";

class CartPage {
	visitCartPage() {
		return cy.visit(`${Cypress.env("cartPath")}`);
	}
	getProductNameOnCart() {
		return cy.get(cartSelector.productNameOnCart);
	}
	getTotalPrice() {
		return cy.get(cartSelector.totalPrice);
	}
	getDeleteProductButton() {
		return cy.get(cartSelector.deleteProductButton);
	}
	getProceedToCheckoutButton() {
		return cy.get(cartSelector.proceedCheckout);
	}
	getProceedToCheckout2Button() {
		return cy.get(cartSelector.proceedToCheckout2);
	}
	getProceedToCheckout3Button() {
		return cy.get(cartSelector.proceedToCheckout3);
	}
	getBillingAddressAddresses() {
		return cy.get(cartSelector.billingAddressAddresses);
	}
	getBillingAddressCity() {
		return cy.get(cartSelector.billingAddressCity);
	}
	getBillingAddressState() {
		return cy.get(cartSelector.billingAddressState);
	}
	getBillingAddressCountry() {
		return cy.get(cartSelector.billingAddressCountry);
	}
	getBillingAddressPostCode() {
		return cy.get(cartSelector.billingAddressPostCode);
	}
	getPaymentMethods() {
		return cy.get(cartSelector.paymentMethodDropdown);
	}
	getPaymentMethodBankTransfer() {
		this.getPaymentMethods().select(1);
	}
	getBankName() {
		return cy.get(cartSelector.bankNameField);
	}
	getAccountName() {
		return cy.get(cartSelector.accountNameField);
	}
	getAccountNumber() {
		return cy.get(cartSelector.accountNumberField);
	}
	getPaymentMethodCashOnDelivery() {
		this.getPaymentMethods().select(2);
	}
	getPaymentMethodCreditCard() {
		this.getPaymentMethods().select(3);
	}
	getCreditCardNumber() {
		return cy.get(cartSelector.creditCardNumberField);
	}
	getExpiredDate() {
		return cy.get(cartSelector.creditCardExpiredDateField);
	}
	getCCV() {
		return cy.get(cartSelector.ccvNumberField);
	}
	getCardHolderName() {
		return cy.get(cartSelector.cardHolderNameField);
	}
	getPaymentMethodPayLater() {
		this.getPaymentMethods().select(4);
	}
	getPayLaterDropdown() {
		return cy.get(cartSelector.payLaterDropdown);
	}
	getPayLaterThreeMonths() {
		this.getPayLaterDropdown().select(1);
	}
	getPayLaterSixMonths() {
		this.getPayLaterDropdown().select(2);
	}
	getPayLaterNineMonths() {
		this.getPayLaterDropdown().select(3);
	}
	getPayLaterTweleveMonths() {
		this.getPayLaterDropdown().select(4);
	}
	getPaymentMethodGiftCard() {
		this.getPaymentMethods().select(5);
	}
	getGiftCardNumber() {
		return cy.get(cartSelector.giftCardNumberField);
	}
	getGiftCardValidationCode() {
		return cy.get(cartSelector.giftCardValidationCodeField);
	}
	getConfirmPaymentMethod() {
		return cy.get(cartSelector.confirmPaymentMethod);
	}
	getPaymentSuccessMessage() {
		return cy.get(cartSelector.paymentSuccessMessage);
	}

	clickDeleteProduct() {
		this.getDeleteProductButton().click();
	}
	clickProceedToCheckout() {
		this.getProceedToCheckoutButton().click();
	}
	clickProceedToCheckout2() {
		this.getProceedToCheckout2Button().click();
	}
	clickProceedToCheckout3() {
		this.getProceedToCheckout3Button().click();
	}
	fillAddress(address: string) {
		this.getBillingAddressAddresses().type(address);
	}
	fillCity(city: string) {
		this.getBillingAddressCity().type(city);
	}
	fillState(state: string) {
		this.getBillingAddressState().type(state);
	}
	fillCounty(country: string) {
		this.getBillingAddressCountry().type(country);
	}
	fillPostCode(postCode: string) {
		this.getBillingAddressPostCode().type(postCode);
	}
	fillBankName(bankName: string) {
		this.getBankName().type(bankName);
	}
	fillAccountName(accountName: string) {
		this.getAccountName().type(accountName);
	}
	fillAccountNumber(accountNumber: number) {
		this.getAccountNumber().type(`${accountNumber}`);
	}
	fillCreditCardNumber(creditCardNumber: number) {
		this.getCreditCardNumber().type(`${creditCardNumber}`);
	}
	fillCreditCardExpiredDate(expDate: string) {
		this.getExpiredDate().type(expDate);
	}
	fillCCVNumber(ccv: number) {
		this.getCCV().type(`${ccv}`);
	}
	fillCardHolderName(cardHolderName: string) {
		this.getCardHolderName().type(cardHolderName);
	}
	fillGiftCardNumber(giftCardNumber: number) {
		this.getGiftCardNumber().type(`${giftCardNumber}`);
	}
	fillGiftCardValidationCode(validationCode: number) {
		this.getGiftCardValidationCode().type(`${validationCode}`);
	}
	clickConfirmButton() {
		this.getConfirmPaymentMethod().click();
	}
}

export const cartPage = new CartPage();
