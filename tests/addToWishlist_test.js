const assert = require ("assert");
Feature('addToWishlist');

Before (({I}) => {
    I.amOnPage('/login');
});

Scenario('Check that item is added to the wishlist', async ({ I, loginPage, mainPage, searchResultsPage, wishlistPage}) => {
    const search = "Black & White Diamond Heart";
    await loginPage.login ("milecks@mail.ru","d63mf44f!");
    await mainPage.inputSearchText(search);
    const searchItem = await searchResultsPage.getSearchResultsTitle();
    await searchResultsPage.goToItemPage();
    await searchResultsPage.addToWishlist();
    await mainPage.goToWishlist();
    const wishItem = await wishlistPage.getItemText();
    assert.deepStrictEqual(wishItem, search, "Item is not in the wishlist");
});