import { defineConfig, devices } from '@playwright/test';

// Set BASE_URL to override the default application URL.
const baseURL = process.env.BASE_URL ?? 'https://monster.development.apty.io/';
const parsedURL = new URL(baseURL);
if (!['http:', 'https:'].includes(parsedURL.protocol)) {
  throw new Error('BASE_URL must be an absolute HTTP or HTTPS URL.');
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  timeout: 30_000,
  expect: { timeout: 5_000 },
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL,
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
