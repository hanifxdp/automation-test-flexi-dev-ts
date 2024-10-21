import { profileSelector } from "../../selector/selector";

class ProfilePage {
	visitProfilePage() {
		cy.visit(`${Cypress.env("profilePath")}`);
	}
	getPageTitle() {
		return cy.get(profileSelector.myAccountTitle);
	}
	getNavigationFavoriteButton() {
		return cy.get(profileSelector.navFavoriteButton);
	}
	getNavigationProfileButton() {
		return cy.get(profileSelector.navProfileButton);
	}
	getNavigationInvoiceButton() {
		return cy.get(profileSelector.navInvoiceButton);
	}
	getNavigationMessageButton() {
		return cy.get(profileSelector.navMessageButton);
	}

	clickFavoriteButton() {
		this.getNavigationFavoriteButton().click();
	}
	clickProfileButton() {
		this.getNavigationProfileButton().click();
	}
	clickInvoiceButton() {
		this.getNavigationInvoiceButton().click();
	}
	clickMessageButton() {
		this.getNavigationMessageButton().click();
	}
}
export const profilePage = new ProfilePage();
