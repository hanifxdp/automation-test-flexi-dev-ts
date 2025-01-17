export const loginSelector = {
	loginForm: `data-test="login-form`,
	usernameField: `[data-test="email"]`,
	passwordField: `[data-test="password"]`,
	loginButton: '[data-test="login-submit"]',
	forgotPassword: '[data-test="forgot-password-link"]',
	registerButton: '[data-test="register-link"]',
	emailFieldValidation: `[data-test="email-error"] > div`,
	passwordFieldValidation: `[data-test="password-error"] > div`,
	loginValdiation: `[data-test="login-error"] > .help-block`,
};
export const productSelector = {
	productImage: `.card-img-top`,
	productName: `[data-test="product-name"]`,
	productPrice: `[data-test="product-price"]`,
	productList: `.col-md-9 > .container`,
	productListAfterSort: `[data-test="sorting-completed"]`,
	sortDropdown: `[data-test="sort"]`,
	searchField: `[data-test="search-query"]`,
	searchResetButton: `[data-test="search-reset"]`,
	searchButton: `[data-test="search-submit"]`,
	searchKeyword: `[data-test="search-caption"]`,
};
export const proudctDetailSelector = {
	productDescription: `[data-test="product-description"]`,
	productDetailPrice: `[data-test="unit-price"]`,
	productRelated: `.col > .container`,
	productDecreasedItem: `[data-test="decrease-quantity"]`,
	productQuantityField: `[data-test="quantity"]`,
	productIncreaseItem: `[data-test="increase-quantity"]`,
	addToCartButton: `[data-test="add-to-cart"]`,
	addToFavoriteButton: `[data-test="add-to-favorites"]`,
	toastMessage: `.toast-message`,
};
export const cartSelector = {
	productNameOnCart: `.product-title`,
	totalPrice: `tfoot > tr > :nth-child(4)`,
	deleteProductButton: `.col-md-1 > .btn`,
	proceedCheckout: `[data-test="proceed-1"]`,
	proceedToCheckout2: `[data-test="proceed-2"]`,
	proceedToCheckout3: `[data-test="proceed-3"]`,
	billingAddressAddresses: `[data-test="address"]`,
	billingAddressCity: `[data-test="city"]`,
	billingAddressState: `[data-test="state"]`,
	billingAddressCountry: `[data-test="country"]`,
	billingAddressPostCode: `[data-test="postcode"]`,
	paymentMethodDropdown: `[data-test="payment-method"]`,
	bankNameField: `[data-test="bank_name"]`,
	accountNameField: `[data-test="account_name"]`,
	accountNumberField: `[data-test="account_number"]`,
	creditCardNumberField: `[data-test="credit_card_number"]`,
	creditCardExpiredDateField: `[data-test="expiration_date"]`,
	ccvNumberField: `[data-test="cvv"]`,
	cardHolderNameField: `[data-test="card_holder_name"]`,
	payLaterDropdown: `[data-test="monthly_installments"]`,
	giftCardNumberField: `[data-test="gift_card_number"]`,
	giftCardValidationCodeField: `[data-test="validation_code"]`,
	confirmPaymentMethod: `[data-test="finish"]`,
	paymentSuccessMessage: `.help-block`,
};

export const profileSelector = {
	profileNavBar: `[data-test="nav-menu"]`,
	gotoMyAccount: `[data-test="nav-my-account"]`,
	myAccountTitle: `[data-test="page-title"]`,
	navFavoriteButton: `[data-test="nav-favorites"]`,
	navProfileButton: `[data-test="nav-profile"]`,
	navInvoiceButton: `[data-test="nav-invoices"]`,
	navMessageButton: `[data-test="nav-messages"]`,
};
