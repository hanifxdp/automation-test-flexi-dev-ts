import { faker } from "@faker-js/faker";
import { cartPage } from "../../support/pageObject/cart/cartPage";
import { productPage } from "../../support/pageObject/product/productPage";

describe("Cart Page", () => {
	context("Checkout Without Login and Payment", () => {
		before(() => {
			cy.viewport(1920, 1080);
			cy.productDetail();
		});
		it("Add to cart then go to checkout but not logged in", () => {
			productPage.clickIncreaseQuantity();
			productPage.clickAddToCart();
			productPage.getAddedToCartMessage();
			cartPage.visitCartPage();
			cartPage.getProductNameOnCart().should("be.visible");
		});
		it("Remove The product from the cart", () => {
			productPage.clickIncreaseQuantity();
			productPage.clickAddToCart();
			productPage.getAddedToCartMessage();
			cartPage.visitCartPage();
			cartPage.clickDeleteProduct();
			cartPage.getTotalPrice().should("contain", "$0.00");
		});
	});
	context("Checkout With Login", () => {
		beforeEach(() => {
			cy.viewport(1920, 1080);
			cy.login(
				`${Cypress.env("user").email}`,
				`${Cypress.env("user").password}`
			);
		});
		it("Add to cart then go to checkout, logged in", () => {
			cy.productDetail();
			productPage.clickIncreaseQuantity();
			productPage.clickAddToCart();
			productPage.getAddedToCartMessage();
			cartPage.visitCartPage();
			cartPage.clickProceedToCheckout();
			cartPage.clickProceedToCheckout2();
		});
	});
	context("Checkout with Login then payment", () => {
		beforeEach(() => {
			cy.viewport(1920, 1080);
			cy.login(
				`${Cypress.env("user").email}`,
				`${Cypress.env("user").password}`
			);
			cy.productDetail();
			productPage.clickIncreaseQuantity();
			productPage.clickAddToCart();
			productPage.getAddedToCartMessage();
		});
		it("Fill the Billing Address", () => {
			cartPage.visitCartPage();
			cartPage.clickProceedToCheckout();
			cartPage.clickProceedToCheckout2();
			cy.wait(1000);
			cartPage.getBillingAddressAddresses().clear();
			cartPage.getBillingAddressCity().clear();
			cartPage.getBillingAddressState().clear();
			cartPage.getBillingAddressCountry().clear();
			cartPage.getBillingAddressPostCode().clear();
			cartPage.fillAddress(faker.location.street());
			cartPage.fillCity(faker.location.city());
			cartPage.fillState(faker.location.state());
			cartPage.fillCounty(faker.location.country());
			cartPage.fillPostCode(faker.location.zipCode());
			cartPage.clickProceedToCheckout3();
		});
	});
	context("Pick the various payment method", () => {
		beforeEach(() => {
			cy.viewport(1920, 1080);
			cy.login(
				`${Cypress.env("user").email}`,
				`${Cypress.env("user").password}`
			);
			cy.productDetail();
			productPage.clickIncreaseQuantity();
			productPage.clickAddToCart();
			productPage.getAddedToCartMessage();
			cartPage.visitCartPage();
			cartPage.clickProceedToCheckout();
			cartPage.clickProceedToCheckout2();
			// cartPage.fillAddress(faker.location.street());
			// cartPage.fillCity(faker.location.city());
			// cartPage.fillState(faker.location.state());
			// cartPage.fillCounty(faker.location.country());
			// cartPage.fillPostCode(faker.location.zipCode());
			cartPage.clickProceedToCheckout3();
		});
		it("Use the bank transfer", () => {
			cartPage.getPaymentMethodBankTransfer();
			cartPage.fillBankName(faker.finance.currencyName());
			cartPage.fillAccountName(faker.finance.accountName());
			cartPage.fillAccountNumber(Number(faker.finance.accountNumber(5)));
			cartPage.clickConfirmButton();
			cartPage.getPaymentSuccessMessage().should("be.visible");
		});
		it("Use the Cash on Delivery", () => {
			cartPage.getPaymentMethodCashOnDelivery();
			cartPage.clickConfirmButton();
			cartPage.getPaymentSuccessMessage();
		});
		it("Use the Credit Card", () => {
			cartPage.getPaymentMethodCreditCard();
			cartPage.fillCreditCardNumber(
				Number(
					faker.finance.creditCardNumber({ issuer: "63[7-9]#-####-####-###L" })
				)
			);
			cartPage.fillCreditCardExpiredDate(`10/30`);
			cartPage.fillCCVNumber(Number(faker.finance.creditCardCVV()));
			cartPage.fillCardHolderName(
				faker.person.fullName({ firstName: "Joann" })
			);
			cartPage.clickConfirmButton();
			cartPage.getPaymentSuccessMessage();
		});
		it("Use the paylater", () => {
			cartPage.getPaymentMethodPayLater();
			cartPage.getPayLaterThreeMonths();
			cartPage.clickConfirmButton();
			cartPage.getPaymentSuccessMessage();
		});
		it("Use the Gift Card", () => {
			cartPage.getPaymentMethodGiftCard();
			cartPage.fillGiftCardNumber(
				Number(faker.finance.bic({ includeBranchCode: true }))
			);
			cartPage.fillGiftCardValidationCode(
				Number(faker.finance.creditCardCVV())
			);
		});
	});
});
