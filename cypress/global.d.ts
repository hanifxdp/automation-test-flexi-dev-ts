/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable {
		/**
		 * login by UI
		 */
		login(username: string, password: string): void;
		productDetail(): void;
	}
}
