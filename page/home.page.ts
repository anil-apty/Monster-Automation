import type { Page } from '@playwright/test';
import { HOME_PAGE_LOCATORS } from '../locator/home.locator.js';

export function getHomePageElements(page: Page) {
  const document = page.locator(HOME_PAGE_LOCATORS.DOCUMENT);

  return {
    getDocumentLocator: () => document,

    open: async (url: string) => {
      // Use the full URL so application paths and query parameters are preserved.
      return page.goto(url, { waitUntil: 'load' });
    },
  };
}
