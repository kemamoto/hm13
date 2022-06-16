const { I } = inject();

module.exports = {
  fields: {
    searchBox: ".search-box-text",
  },

  buttons: {
    searchButton: "input[class='button-1 search-box-button']",
  },

  headers: {
    shoppingCart: "//div[@class='header-links-wrapper']//a[contains(@class, 'ico-cart')]",
    logInEmail: "//div[@class='header-links-wrapper']//a[contains(@class, 'account')]",
    wishlist: "//div[@class='header-links-wrapper']//a[contains(@class, 'ico-wishlist')]",
  },

  async getProfileEmail () {
    const emailText = await I.grabTextFrom(this.headers.logInEmail); 
    return emailText;
  },

  async inputSearchText (text) {
    I.click(this.fields.searchBox);
    I.fillField(this.fields.searchBox, text);
    I.click(this.buttons.searchButton);
  },

  async goToCart () {
    I.click(this.headers.shoppingCart);
  },

  async goToWishlist () {
    I.click(this.headers.wishlist);
  },
}
