const assert = require ("assert");
Feature('findElement');

Before (({I}) => {
    I.amOnPage('/login');
});

Scenario('Find an item via search box', async ({ I, loginPage, mainPage, searchResultsPage}) => {
    await loginPage.login ("milecks@mail.ru","d63mf44f!");
    await mainPage.inputSearchText("book");
    const item = await searchResultsPage.getSearchResultsTitle();
    assert.deepStrictEqual(item, "Health Book", "Item not found");
});