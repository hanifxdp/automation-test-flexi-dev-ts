import { loginPage } from "../../support/pageObject/auth/loginPage";
import { profilePage } from "../../support/pageObject/profile/profilePage";

describe("Authentication - Login", () => {
	context(`Desktop 1080p;`, () => {
		beforeEach(() => {
			cy.viewport(1920, 1080);
		});
		it(`(+) Verify that user can successfully login to the app with their private account`, () => {
			cy.login(
				`${Cypress.env("user").email}`,
				`${Cypress.env("user").password}`
			);
			profilePage.getPageTitle().should("be.visible");
		});
		it(`(-) Verify that user need to login to enter the app`, () => {
			loginPage.visitLoginPage();
			loginPage.clickLogin();
			loginPage.getEmailFieldValidation();
			loginPage.getPasswordFieldValidation();
		});
		it(`(-) Verify that user need the right combination (wrong password) on the credentials to login to the app`, () => {
			cy.login(`${Cypress.env("user").email}`, `lalalala`);
			loginPage.getLoginValidationError();
		});
		it(`(-) Verify that user need the right combination (wrong email) on the credentials to login to the app`, () => {
			cy.login(`testing@gmail.com`, `${Cypress.env("user").password}`);
			loginPage.getLoginValidationError();
		});
		it(`(-) Verify that user need to fill the email in order to logged in`, () => {
			cy.login("", `${Cypress.env("user").password}`);
			loginPage.getEmailFieldValidation();
		});
		it(`(-) Verify that user need to fill the password in order to logged in`, () => {
			cy.login(`${Cypress.env("user").username}`, "");
			loginPage.getPasswordFieldValidation();
		});
		it(`(-) Verify that user need to fill the email and password in order to logged in`, () => {
			cy.login("", "");
			loginPage.getEmailFieldValidation();
			loginPage.getPasswordFieldValidation();
		});
	});
});
