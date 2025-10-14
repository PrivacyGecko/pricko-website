import { test, expect } from '@playwright/test';
import { acceptCookieConsent } from './helpers';

test.describe('Navigation and Routing', () => {
  test.beforeEach(async ({ page }) => {
    await acceptCookieConsent(page);
  });

  test('should load homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/PRICKO/);
    await expect(page.locator('h1').first()).toContainText(/PRICKO|Privacy/);
  });

  test('should navigate to all main pages', async ({ page }) => {
    await page.goto('/');
    await acceptCookieConsent(page);

    // Test About page
    await page.click('a[href="/about"]');
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1').first()).toBeVisible();

    // Test Tools page
    await page.click('a[href="/tools"]');
    await expect(page).toHaveURL('/tools');
    await expect(page.locator('h1').first()).toBeVisible();

    // Test Tokenomics page
    await page.click('a[href="/tokenomics"]');
    await expect(page).toHaveURL('/tokenomics');
    await expect(page.locator('h1').first()).toBeVisible();

    // Test Roadmap page
    await page.click('a[href="/roadmap"]');
    await expect(page).toHaveURL('/roadmap');
    await expect(page.locator('h1').first()).toBeVisible();

    // Test Contact page
    await page.click('a[href="/contact"]');
    await expect(page).toHaveURL('/contact');
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('should show 404 page for invalid routes', async ({ page }) => {
    await page.goto('/this-page-does-not-exist');
    await expect(page.locator('text=404').first()).toBeVisible();
    await expect(page.locator('text=/gecko|lost/i').first()).toBeVisible();
  });

  test('should have working header navigation', async ({ page }) => {
    await page.goto('/');
    await acceptCookieConsent(page);

    // Check logo link
    const logo = page.locator('header a[href="/"]').first();
    await expect(logo).toBeVisible();

    // Check navigation links exist
    await expect(page.locator('nav a[href="/about"]').first()).toBeVisible();
    await expect(page.locator('nav a[href="/tools"]').first()).toBeVisible();
    await expect(page.locator('nav a[href="/tokenomics"]').first()).toBeVisible();
  });

  test('should have working footer links', async ({ page }) => {
    await page.goto('/');

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Check footer navigation
    await expect(page.locator('footer a[href="/privacy"]')).toBeVisible();
    await expect(page.locator('footer a[href="/terms"]')).toBeVisible();
    await expect(page.locator('footer a[href="/contact"]')).toBeVisible();
  });
});
