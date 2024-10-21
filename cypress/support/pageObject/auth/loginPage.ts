import { loginSelector } from "../../selector/selector";

class LoginPage {
	visitLoginPage() {
		cy.visit(`${Cypress.env("loginPath")}`);
	}
	getUsernameField() {
		return cy.get(loginSelector.usernameField);
	}
	getPasswordField() {
		return cy.get(loginSelector.passwordField);
	}
	getLoginButton() {
		return cy.get(loginSelector.loginButton);
	}
	getForgotYourPassword() {
		return cy.get(loginSelector.forgotPassword);
	}
	getRegisterButton() {
		return cy.get(loginSelector.registerButton);
	}
	getEmailFieldValidation() {
		return cy
			.get(loginSelector.emailFieldValidation)
			.should("contain", `${Cypress.env("message").emailRequiredField}`);
	}
	getPasswordFieldValidation() {
		return cy
			.get(loginSelector.passwordFieldValidation)
			.should("contain", `${Cypress.env("message").passwordRequiredField}`);
	}
	getLoginValidationError() {
		return cy
			.get(loginSelector.loginValdiation)
			.should("contain", `${Cypress.env("message").loginValidation}`);
	}
	typeUsername(username: string) {
		this.getUsernameField().type(username);
	}
	typePassword(password: string) {
		this.getPasswordField().type(password);
	}
	clickLogin() {
		this.getLoginButton().click();
	}
}

export const loginPage = new LoginPage();
