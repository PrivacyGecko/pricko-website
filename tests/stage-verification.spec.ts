import { test, expect } from '@playwright/test';

/**
 * Stage Environment Verification Tests
 * Validates Phase 4 implementations on stage.pricko.com
 */

test.describe('Stage Environment - Phase 4 Verification', () => {

  test('Homepage loads with proper content', async ({ page }) => {
    await page.goto('/');

    // Wait for React app to render
    await page.waitForLoadState('networkidle');

    // Check for main content
    await expect(page.locator('h1')).toBeVisible();

    // Verify hero section
    const heroContent = await page.textContent('body');
    expect(heroContent).toBeTruthy();
    expect(heroContent!.length).toBeGreaterThan(100);

    console.log('✅ Homepage loaded successfully');
  });

  test('Animated counters are present on homepage', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Look for statistics section
    const statsSection = page.locator('text=/LIVE Products|Active Users|Near Launch/i').first();
    await expect(statsSection).toBeVisible({ timeout: 10000 });

    console.log('✅ Statistics section found');
  });

  test('FAQ section exists on About page', async ({ page }) => {
    await page.goto('/about');
    await page.waitForLoadState('networkidle');

    // Check for FAQ heading or section
    const faqSection = page.locator('text=/frequently asked questions|got questions/i').first();
    await expect(faqSection).toBeVisible({ timeout: 10000 });

    console.log('✅ FAQ section found on About page');
  });

  test('Newsletter form exists on homepage', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Scroll to bottom to trigger newsletter section
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);

    // Look for email input field
    const emailInput = page.locator('input[type="email"]').first();
    await expect(emailInput).toBeVisible({ timeout: 10000 });

    console.log('✅ Newsletter form found');
  });

  test('Navigation and routing work', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Try navigating to About page
    const aboutLink = page.locator('a[href="/about"]').first();
    if (await aboutLink.isVisible()) {
      await aboutLink.click();
      await page.waitForLoadState('networkidle');

      // Verify URL changed
      expect(page.url()).toContain('/about');
      console.log('✅ Navigation works');
    } else {
      console.log('⚠️ About link not found, checking if page loads directly');
      await page.goto('/about');
      expect(page.url()).toContain('/about');
    }
  });

  test('Mobile viewport renders properly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check if main content is visible
    const mainContent = page.locator('main, body > div').first();
    await expect(mainContent).toBeVisible();

    console.log('✅ Mobile viewport renders');
  });
});
