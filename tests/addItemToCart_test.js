const assert = require ("assert");
Feature('addItemToCart');

Before (({I}) => {
    I.amOnPage('/login');
});

Scenario('Check that item is added to the shopping cart', async ({ I, loginPage, mainPage, searchResultsPage, shoppingCartPage}) => {
    await loginPage.login ("milecks@mail.ru","d63mf44f!");
    await mainPage.inputSearchText("laptop");
    const searchItem = await searchResultsPage.getSearchResultsTitle();
    await searchResultsPage.addToCart();
    await mainPage.goToCart();
    const itemInCart = await shoppingCartPage.getItemName();
    assert.deepStrictEqual(searchItem, itemInCart, "Item was not added to the cart");
});