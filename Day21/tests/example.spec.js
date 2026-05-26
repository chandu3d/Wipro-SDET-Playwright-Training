// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('jio mart test', () => {

  test('login and save auth', async ({ page }) => {
    await page.goto('https://www.jiomart.com/');

    // login steps here

    await page.context().storageState({ path: 'auth.json' });
  });

  test.describe('after login tests', () => {
    test.use({ storageState: 'auth.json' });

    test('profile', async ({ page }) => {
      await page.goto('https://www.jiomart.com/customer/account/profile');
    });
  });

});