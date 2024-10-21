import {
	productSelector,
	proudctDetailSelector,
} from "../../selector/selector";

class ProductPage {
	visitProductPage() {
		return cy.visit("/");
	}
	getSortDropdown() {
		return cy.get(productSelector.sortDropdown);
	}
	getSortDropdownItem() {
		this.getSortDropdown().children();
	}
	getSortByNameAsc() {
		this.getSortDropdown().select(1);
	}
	getSortByNameDesc() {
		this.getSortDropdown().select(2);
	}
	getSortByPriceDesc() {
		this.getSortDropdown().select(4);
	}
	getSortByPriceAsc() {
		this.getSortDropdown().select(3);
	}
	getSearchBar() {
		return cy.get(productSelector.searchField);
	}
	getSearchButton() {
		return cy.get(productSelector.searchButton);
	}
	getSearchKeyword() {
		return cy.get(productSelector.searchKeyword);
	}
	getProduct() {
		return cy.get(productSelector.productList);
	}
	getProductName() {
		return cy.get(productSelector.productName);
	}
	getProductPrice() {
		this.getProduct().find(productSelector.productPrice);
	}
	getDetailName() {
		return cy.get(productSelector.productName);
	}
	getDetailPrice() {
		return cy.get(proudctDetailSelector.productDetailPrice);
	}
	getDetailDescription() {
		return cy.get(proudctDetailSelector.productDescription);
	}
	getRelatedProduct() {
		return cy.get(proudctDetailSelector.productRelated);
	}
	getIncreaseQuantityButton() {
		return cy.get(proudctDetailSelector.productIncreaseItem);
	}
	getDecreaseQuantityButton() {
		return cy.get(proudctDetailSelector.productDecreasedItem);
	}
	getQuantityField() {
		return cy.get(proudctDetailSelector.productQuantityField);
	}
	getAddToCartButton() {
		return cy.get(proudctDetailSelector.addToCartButton);
	}
	getAddedToCartMessage() {
		return cy
			.get(proudctDetailSelector.toastMessage)
			.should("contain", "Product added to shopping cart");
	}
	getAddToFavoriteButton() {
		return cy.get(proudctDetailSelector.addToFavoriteButton);
	}
	getAddedToFavoriteButton() {
		return cy.get(proudctDetailSelector.toastMessage);
	}

	fillSearchBar(keyword: string) {
		this.getSearchBar().type(keyword);
	}
	clickSearchButton() {
		this.getSearchButton().click();
	}
	clickIncreaseQuantity() {
		this.getIncreaseQuantityButton().click();
	}
	clickDecreaseQuantity() {
		this.getDecreaseQuantityButton().click();
	}
	typeQuantity(quanity: number) {
		this.getQuantityField().type(`${quanity}`);
	}
	clickAddToCart() {
		this.getAddToCartButton().click();
	}
	clickAddToFavorite() {
		this.getAddToFavoriteButton().click();
	}
	clicktRelatedProduct() {
		this.getRelatedProduct().first().click();
	}
}
export const productPage = new ProductPage();
