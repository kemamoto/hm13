const { I } = inject();

module.exports = {

  elements: {
   itemInCart: "//a[@class='product-name']",
   emptyCart: "//div[@class='order-summary-content']"
  },

  checkboxes: {
    removeCheckbox: "input[name='removefromcart']",
  },

  buttons: {
    updateButton: "input[value='Update shopping cart']"
  },

  async removeItem () {
    I.click(this.checkboxes.removeCheckbox);
    I.click(this.buttons.updateButton);
  },
  
  async getItemName () {
    const itemText = await I.grabTextFrom(this.elements.itemInCart); 
    return itemText;
  },

  async checkThatEmpty () {
    const emptyText = await I.grabTextFrom(this.elements.emptyCart); 
    return emptyText;
  },
}
