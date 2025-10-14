import { test, expect } from '@playwright/test';
import { acceptCookieConsent } from './helpers';

test.describe('Content and SEO', () => {
  test.beforeEach(async ({ page }) => {
    await acceptCookieConsent(page);
  });

  test('should have proper meta tags on homepage', async ({ page }) => {
    await page.goto('/');
    await acceptCookieConsent(page);

    // Check title
    await expect(page).toHaveTitle(/PRICKO/);

    // Check meta description (if implemented)
    const metaDescription = page.locator('meta[name="description"]');
    if (await metaDescription.count() > 0) {
      const content = await metaDescription.getAttribute('content');
      expect(content).toBeTruthy();
    }
  });

  test('should have robots.txt accessible', async ({ request }) => {
    const response = await request.get('/robots.txt');
    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('User-agent');
  });

  test('should have sitemap.xml accessible', async ({ request }) => {
    const response = await request.get('/sitemap.xml');
    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('urlset');
  });

  test('should have manifest.json accessible', async ({ request }) => {
    const response = await request.get('/manifest.json');
    expect(response.status()).toBe(200);

    const json = await response.json();
    expect(json.name).toBeTruthy();
  });

  test('should display key homepage content', async ({ page }) => {
    await page.goto('/');
    await acceptCookieConsent(page);

    // Check for main value propositions
    await expect(page.locator('text=/privacy|gecko|meme/i').first()).toBeVisible();

    // Check for CTA buttons
    const buttons = page.locator('button, a.btn-primary');
    const count = await buttons.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should have tokenomics information', async ({ page }) => {
    await page.goto('/tokenomics');
    await acceptCookieConsent(page);

    // Check for key tokenomics data
    await expect(page.locator('text=/80%|20%|distribution/i').first()).toBeVisible();
    await expect(page.locator('text=/pump.fun|launch/i').first()).toBeVisible();
  });

  test('should have tools page with tools listed', async ({ page }) => {
    await page.goto('/tools');
    await acceptCookieConsent(page);

    // Check for tool cards
    await expect(page.locator('text=/GeckoShare|GeckoGuard/i').first()).toBeVisible();
  });

  test('should have contact information', async ({ page }) => {
    await page.goto('/contact');
    await acceptCookieConsent(page);

    // Check for email addresses
    await expect(page.locator('text=@pricko.com').first()).toBeVisible();

    // Check for social media links (scroll to footer to ensure they're visible)
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);

    await expect(page.locator('a[href*="twitter"], a[href*="x.com"]').first()).toBeVisible();

    // Check for telegram or t.me links
    const telegramCount = await page.locator('a[href*="telegram"], a[href*="t.me"]').count();
    expect(telegramCount).toBeGreaterThan(0);
  });

  test('should have legal pages accessible', async ({ page }) => {
    // Privacy Policy
    await page.goto('/privacy');
    await acceptCookieConsent(page);
    await expect(page.locator('h1').first()).toBeVisible();

    // Terms of Service
    await page.goto('/terms');
    await acceptCookieConsent(page);
    await expect(page.locator('h1').first()).toBeVisible();

    // Disclaimer
    await page.goto('/disclaimer');
    await acceptCookieConsent(page);
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('should load all pages without console errors', async ({ page }) => {
    const errors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    const pages = ['/', '/about', '/tools', '/tokenomics', '/roadmap', '/contact'];

    for (const pagePath of pages) {
      await page.goto(pagePath);
      await page.waitForLoadState('networkidle');
    }

    // Should have minimal console errors (none ideally)
    expect(errors.length).toBe(0);
  });
});
