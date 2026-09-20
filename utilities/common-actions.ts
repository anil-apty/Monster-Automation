import type { Locator } from '@playwright/test';

// Delegate to native Locator methods to preserve auto-waiting and error details.
export async function click(locator: Locator, options?: Parameters<Locator['click']>[0]) {
  await locator.click(options);
}

export async function fill(
  locator: Locator,
  value: string,
  options?: Parameters<Locator['fill']>[1],
) {
  await locator.fill(value, options);
}

export async function selectOption(
  locator: Locator,
  value: Parameters<Locator['selectOption']>[0],
  options?: Parameters<Locator['selectOption']>[1],
) {
  return locator.selectOption(value, options);
}

export async function setChecked(
  locator: Locator,
  checked: boolean,
  options?: Parameters<Locator['setChecked']>[1],
) {
  await locator.setChecked(checked, options);
}

export async function hover(locator: Locator, options?: Parameters<Locator['hover']>[0]) {
  await locator.hover(options);
}
