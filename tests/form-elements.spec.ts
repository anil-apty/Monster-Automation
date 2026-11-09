import { test, expect } from '@playwright/test';

import { getFormElementsPageElements } from '../page/form-elements.page.js';
import { getHomePageElements } from '../page/home.page.js';

test('enter and verify form values', async ({ page, baseURL }) => {
  if (!baseURL) throw new Error('Set baseURL in playwright.config.ts.');

  await getHomePageElements(page).open(baseURL);
  await page.getByTestId('nav-inputs').click();
  const formElements = getFormElementsPageElements(page);

await test.step('Enter and verify Monster in the text input', async () => {
  await formElements.enterText('Monster');
  await expect(formElements.getTextInputLocator()).toHaveValue('Monster');
});

await test.step('Enter and verify Password in the password input', async () => {
  await formElements.enterPassword('Password');
  await expect(formElements.getPasswordInputLocator()).toHaveValue('Password');
});
});