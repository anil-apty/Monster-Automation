import { test, expect } from '@playwright/test';


test('Enter registration form in web automation lab', async ({ page, baseURL }) => {

    if (!baseURL) throw new Error('Set baseURL in playwright.config.ts.');
    await page.goto(baseURL);

    await test.step('Open the registration form', async () => {
    await page.getByTestId('nav-forms').click();
    await expect(page.getByTestId('page-title')).toHaveText('Registration Form');
    });

    await test.step('Open the registration form', async () => {
    await page.getByTestId('nav-forms').click();
    await expect(page.getByTestId('page-title')).toHaveText('Registration Form');
    });

    await test.step('Open the registration form', async () => {
    await page.getByTestId('nav-forms').click();
    await expect(page.getByTestId('page-title')).toHaveText('Registration Form');
    });
  });