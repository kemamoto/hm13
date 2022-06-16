const { I } = inject();

module.exports = {

  elements: {
    itemInList: "//td[@class='product']//a",
  },
  
  async getItemText () {
    const itemText = await I.grabTextFrom(this.elements.itemInList); 
    return itemText;
  },
}
