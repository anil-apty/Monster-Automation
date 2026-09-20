import { test, expect } from '@playwright/test';

import { getFormElementsPageElements } from '../page/form-elements.page.js';
import { getHomePageElements } from '../page/home.page.js';

test('enter and verify form values', async ({ page, baseURL }) => {
  if (!baseURL) throw new Error('Set baseURL in playwright.config.ts.');

  await getHomePageElements(page).open(baseURL);
  const formElements = getFormElementsPageElements(page);

  await test.step('Enter and verify Monster in the text input', async () => {
    //action
    await formElements.enterText('Monster');
    await page.waitForTimeout(1000);
    //assertion
    await expect(formElements.getTextInputLocator()).toHaveValue('Monster');
    await page.waitForTimeout(1000);
  });

  await test.step('Enter and verify Password in the password input', async () => {
    await formElements.enterPassword('Password');
    await page.waitForTimeout(1000);
    await expect(formElements.getPasswordInputLocator()).toHaveValue('Password');
    await page.waitForTimeout(1000);
  });

  await test.step('Click Dialog and Expect it is visible', async () => {
    await page.locator('[style="display: block; margin: 0px auto;"]').click();
    await page.waitForTimeout(1000);
    await page.locator('Close').click()
    await page.waitForTimeout(1000);
  });

});
