import { test, expect } from '@playwright/test';
import { getHomePageElements } from '../page/home.page.js';

test('launch the application URL', async ({ page, baseURL }) => {
  if (!baseURL) throw new Error('Set baseURL in playwright.config.ts.');

  const homePage = getHomePageElements(page);
  const response = await homePage.open(baseURL);

  expect(response, 'Navigation should return a response').not.toBeNull();
  expect(response!.ok(), 'The application should return a successful response').toBeTruthy();
  await expect(homePage.getDocumentLocator()).toBeVisible();

  // Add application scenarios here once the required actions are defined.
});
