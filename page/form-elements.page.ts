import type { Page } from '@playwright/test';

import { FORM_ELEMENTS_LOCATORS } from '../locator/form-elements.locators.js';
import { fill } from '../utilities/common-actions.js';

export function getFormElementsPageElements(page: Page) {
  const textInput = page.locator(FORM_ELEMENTS_LOCATORS.TEXT_INPUT);
  const passwordInput = page.locator(FORM_ELEMENTS_LOCATORS.PASSWORD_INPUT);

  return {
    getTextInputLocator: () => textInput,

    getPasswordInputLocator: () => passwordInput,

    enterText: async (text: string) => {
      await fill(textInput, text);
    },

    enterPassword: async (password: string) => {
      await fill(passwordInput, password);
    },
  };
}
