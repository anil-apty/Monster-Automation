<<<<<<< HEAD
# Monster Playwright

Playwright and TypeScript with the native Playwright test runner.

## Structure

```text
tests/       All spec files and test assertions
page/        Page objects and page-specific actions
locator/     Element locators grouped by page
utilities/   Shared actions accepting Playwright Locator objects
```

Locator files export selector constants using `as const`. Page files export
functions such as `getHomePageElements(page)` that return locator getters and
actions. The launch spec calls `getHomePageElements(page).open()`. The initial test only
opens the configured URL and checks for a successful response and visible HTML.
The `home` filenames are starting points; rename them to match your application.

## Setup

Use a current Node.js 22 or 24 release and npm.

```sh
npm ci
npm run install:browsers
```

## Set the URL and run

The default application URL is `https://monster.development.apty.io/`.

```sh
npm run test:headed
```

Change `baseURL` in `playwright.config.ts`, or override it from the terminal:

```sh
BASE_URL='https://your-application.example/path' npm run test:headed
```

PowerShell:

```powershell
$env:BASE_URL = 'https://your-application.example/path'
npm run test:headed
```

The full URL, including its path and query string, is used for navigation.
Environment variables are read from the shell; `.env` files are not loaded automatically.

| Command | Purpose |
| --- | --- |
| `npm test` | Run in headless Chromium |
| `npm run test:headed` | Run with a visible browser |
| `npm run test:debug` | Open Playwright Inspector to step through the test |
| `npm run test:ui` | Open Playwright's interactive test runner |
| `npm run report` | View the latest HTML report |
| `npm run typecheck` | Check TypeScript types |

The browser closes when a test completes. Use debug mode to pause and inspect it.
Failed runs save screenshots and traces in `test-results/`; the HTML report is
written to `playwright-report/`.

## Add actions later

1. Define each page's selector constants in `locator/` using `as const`.
2. Create locators inside a `get...PageElements(page)` function in `page/` and return getters and actions, importing shared helpers from `utilities/common-actions.ts`.
3. Call those methods and make assertions in `tests/*.spec.ts`.

For example, `getLoginPageElements(page)` in `page/loginpage.page.ts` returns
`enterUsername`, `enterPassword`, and `clickLoginButton` actions backed by the
supplied selectors in `locator/loginpage.locators.ts`. These use the common
`fill` and `click` helpers. The launch test does not perform login.

The reference's Studio sidebar and logout test IDs come from `lib-client-utilities`,
which is not part of this project. Supply those IDs before adding the Studio
shell getters, logout actions, and the full `loginToStudio` flow.
Common actions use Playwright's native auto-waiting without fixed sleeps or forced clicks.

Reference: [Playwright documentation](https://playwright.dev/docs/intro).
=======

