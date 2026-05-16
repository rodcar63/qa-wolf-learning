// @ts-check
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

test('add a task to the tracker', async ({ page }) => {
  
  // Go to your deployed app
  await page.goto('https://rodcar63.github.io/qa-wolf-learning/');

  // Type a task
  await page.fill('input', 'Learn Playwright testing');

  // Click Add Task button
  await page.click('button');

  // Verify the task appears in the list
  await expect(page.locator('li')).toContainText('Learn Playwright testing');
});
