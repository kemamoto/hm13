const { I } = inject();

module.exports = {

  elements: {
    productTitle: "//div[@class='product-item']//h2//a",
    addToCartButton: "input[value='Add to cart']"

  },

  buttons: {
    addToWishlist: ".add-to-wishlist-button",
  },

 
  async getSearchResultsTitle () {
    const titleText = await I.grabTextFrom(this.elements.productTitle); 
    return titleText;
  },

  async addToCart () {
    I.click(this.elements.addToCartButton);
  },

  async goToItemPage () {
    I.click(this.elements.productTitle);
  },

  async addToWishlist () {
    I.click(this.buttons.addToWishlist);
  }

}
