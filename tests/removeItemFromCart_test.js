const assert = require ("assert");
Feature('removeItemFromCart');

Before (({I}) => {
    I.amOnPage('/login');
});

Scenario('Check that item is removed to the shopping cart', async ({ I, loginPage, mainPage, searchResultsPage, shoppingCartPage}) => {
    await loginPage.login ("milecks@mail.ru","d63mf44f!");
    await mainPage.inputSearchText("laptop");
    await searchResultsPage.addToCart();
    await mainPage.goToCart();
    await shoppingCartPage.removeItem();
    const empty = await shoppingCartPage.checkThatEmpty();
    const emptyText = empty.replace(/\s/g, '');
    assert.deepStrictEqual(emptyText, "YourShoppingCartisempty!", "Item was not removed from the cart");
});