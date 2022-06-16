const assert = require ("assert");
Feature('auth');
Before (({I}) => {
    I.amOnPage('/login');
});

Scenario('Authorization', async ({ I, loginPage, mainPage }) => {
    await loginPage.login ("milecks@mail.ru","d63mf44f!");
    const email = await mainPage.getProfileEmail();
    assert.deepStrictEqual(email, "milecks@mail.ru", "Log in failed");
});