import { productPage } from "../../support/pageObject/product/productPage";
import { productSelector } from "../../support/selector/selector";

const keyword = "Hammer";
describe("Product Page", () => {
	context(`Product List`, () => {
		beforeEach(() => {
			cy.viewport(1920, 1080);
			productPage.visitProductPage();
		});
		// Product List
		it(`Product List is visible`, () => {
			productPage.getProduct().should("be.visible");
		});
		it(`Asserting the sort dropdown`, () => {
			productPage
				.getSortDropdown()
				.children()
				.should(($list) => {
					expect($list, "5 items").to.have.length(5);
					expect($list.eq(0), "First item").to.have.text("");
					expect($list.eq(1), "Second item").to.contain("Name (A - Z)");
					expect($list.eq(2), "Thrid item").to.contain("Name (Z - A)");
					expect($list.eq(3), "Fourth item").to.contain("Price (High - Low)");
					expect($list.eq(4), "Fifth item").to.contain("Price (Low - High)");
				});
		});
		it(`Sorting based on name ASC`, () => {
			productPage.getSortDropdown().select(1);
		});
		it(`Sorting based on name DESC`, () => {
			productPage.getSortByNameDesc();
		});
		it(`Sorting based on price ASC`, () => {
			let firstItemPrice = 0;
			let secondItemPrice = 0;
			productPage.getSortByPriceAsc();
			cy.wait(3000);
			productPage
				.getProduct()
				.find(productSelector.productPrice)
				.eq(0)
				.invoke("text")
				.then((firstPriceText) => {
					const firstPrice = parseInt(firstPriceText.trim().replace("$", ""));
					firstItemPrice = firstPrice;
					cy.log(`First price is: ${firstPrice}`);
				});
			productPage
				.getProduct()
				.find(productSelector.productPrice)
				.eq(1)
				.invoke("text")
				.then((secondPriceText) => {
					const secondPrice = parseInt(secondPriceText.trim().replace("$", ""));
					secondItemPrice = secondPrice;
					cy.log(`Second price is: ${secondPrice}`);
				});
			expect(firstItemPrice).to.be.gte(secondItemPrice);
		});
		it(`Sorting based on price DESC`, () => {
			productPage.getSortByPriceDesc();
		});
		it(`Searching the product`, () => {
			productPage.fillSearchBar(keyword);
			productPage.clickSearchButton();
			productPage.getSearchKeyword().should("contain", keyword);
			productPage.getProductName().should("contain", keyword);
		});
	});
	context("Product Detail", () => {
		beforeEach(() => {
			cy.clearAllSessionStorage();
			cy.viewport(1920, 1080);
			cy.productDetail();
			cy.wait(3000);
		});
		it(`Look on to the detail page`, () => {
			productPage.getDetailName().should("be.visible");
			productPage.getDetailPrice().should("be.visible");
			productPage.getDetailDescription().should("be.visible");
			productPage.getRelatedProduct().should("be.visible").first().click();
		});
		it("Look on to the detail from the related product", () => {
			productPage.getRelatedProduct();
		});
		it(`Add to cart`, () => {
			productPage.clickAddToCart();
			productPage.getAddedToCartMessage();
		});
		it("Add the quantity then add to cart", () => {
			productPage.clickIncreaseQuantity();
			productPage.clickAddToCart();
		});
		it("Add the quantitiy, decrease the quantity then add to cart", () => {
			productPage.clickIncreaseQuantity();
			productPage.clickDecreaseQuantity();
			productPage.clickAddToCart();
		});
		it("Add the product to favorite without login", () => {
			productPage.clickAddToFavorite();
			productPage
				.getAddedToFavoriteButton()
				.should(
					"contain",
					"Unauthorized, can not add product to your favorite list."
				);
		});
	});
});
