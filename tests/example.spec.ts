import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('GitHub icon is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const GitHubIcon = page.getByLabel("GitHub repository")

  await expect(GitHubIcon).toBeVisible();

});
test('Discord icon is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const discordIcon = page.getByLabel("Discord server")

  await expect(discordIcon).toBeVisible();

});
test('Color mode icon is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const colorModeIcon = page.getByTitle("system mode")

  await expect(colorModeIcon).toBeVisible();
});
