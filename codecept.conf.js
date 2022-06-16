const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://demowebshop.tricentis.com',
      show: true,
      browser: 'chromium',
      video: true
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/main.js',
    loginPage: './pages/login.js',
    searchResultsPage: './pages/searchResults.js',
    shoppingCartPage: './pages/shoppingCart.js',
    wishlistPage: './pages/wishlist.js',
  },
  "plugins": {
    "allure": {}
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptJS'
}