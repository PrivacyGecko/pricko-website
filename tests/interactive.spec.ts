import { test, expect } from '@playwright/test';
import { acceptCookieConsent } from './helpers';

test.describe('Interactive Elements', () => {
  test.beforeEach(async ({ page }) => {
    await acceptCookieConsent(page);
  });

  test('should show scroll-to-top button after scrolling', async ({ page }) => {
    await page.goto('/');
    await acceptCookieConsent(page);

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 600));
    await page.waitForTimeout(500);

    // Scroll-to-top button should be visible
    const scrollButton = page.locator('button[aria-label="Scroll to top"]');
    await expect(scrollButton).toBeVisible();

    // Click scroll-to-top
    await scrollButton.click();
    await page.waitForTimeout(1000);

    // Should be back at top
    const scrollY = await page.evaluate(() => window.pageYOffset);
    expect(scrollY).toBeLessThan(100);
  });

  test('should have skip-to-main-content link', async ({ page }) => {
    await page.goto('/');
    await acceptCookieConsent(page);

    // Verify skip link exists in the DOM
    const skipLink = page.locator('a[href="#main-content"]').first();
    await expect(skipLink).toHaveAttribute('href', '#main-content');

    // Verify main content target exists
    const mainContent = page.locator('#main-content');
    await expect(mainContent).toBeVisible();

    // Verify skip link has proper accessibility classes (sr-only with focus:not-sr-only)
    const classList = await skipLink.getAttribute('class');
    expect(classList).toContain('sr-only');
    expect(classList).toContain('focus:not-sr-only');
  });

  test('should display cookie consent banner', async ({ page, context }) => {
    // Clear cookies to ensure fresh visit
    await context.clearCookies();

    await page.goto('/');

    // Cookie consent should be visible
    const cookieConsent = page.locator('text=/cookie|consent/i').first();
    await expect(cookieConsent).toBeVisible({ timeout: 5000 });
  });

  test('should have working social media links', async ({ page }) => {
    await page.goto('/');

    // Check social links in footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    const twitterLink = page.locator('a[href*="twitter.com"]').first();
    await expect(twitterLink).toBeVisible();
    await expect(twitterLink).toHaveAttribute('target', '_blank');

    const telegramLink = page.locator('a[href*="t.me"]').first();
    await expect(telegramLink).toBeVisible();
    await expect(telegramLink).toHaveAttribute('target', '_blank');
  });

  test('should lazy load images', async ({ page }) => {
    await page.goto('/tools');

    // Find images with loading="lazy"
    const lazyImages = page.locator('img[loading="lazy"]');
    const count = await lazyImages.count();

    expect(count).toBeGreaterThan(0);
  });
});
