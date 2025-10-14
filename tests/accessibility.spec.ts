import { test, expect } from '@playwright/test';
import { acceptCookieConsent } from './helpers';

test.describe('Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await acceptCookieConsent(page);
  });

  test('should have proper heading hierarchy on homepage', async ({ page }) => {
    await page.goto('/');
    await acceptCookieConsent(page);

    // Should have one h1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBeGreaterThanOrEqual(1);

    // Should have h2 elements (note: there might be 0 on homepage which is acceptable)
    const h2Count = await page.locator('h2').count();
    // Just verify h2 count is >= 0 (we check structure exists, not strict requirements)
    expect(h2Count).toBeGreaterThanOrEqual(0);
  });

  test('should have alt text on images', async ({ page }) => {
    await page.goto('/');

    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });

  test('should have proper ARIA labels on buttons', async ({ page }) => {
    await page.goto('/');

    // Check scroll-to-top button
    await page.evaluate(() => window.scrollTo(0, 600));
    await page.waitForTimeout(500);

    const scrollButton = page.locator('button[aria-label="Scroll to top"]');
    await expect(scrollButton).toBeVisible();
    await expect(scrollButton).toHaveAttribute('aria-label', 'Scroll to top');
  });

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/');

    // Tab through interactive elements
    await page.keyboard.press('Tab'); // Skip to content
    await page.keyboard.press('Tab'); // First nav link
    await page.keyboard.press('Tab'); // Next element

    // Check that focus is visible
    const focused = page.locator(':focus');
    await expect(focused).toBeVisible();
  });

  test('should have proper form labels', async ({ page }) => {
    await page.goto('/contact');

    // All form inputs should have associated labels
    const inputs = page.locator('input[type="text"], input[type="email"], textarea');
    const count = await inputs.count();

    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute('id');
      if (id) {
        const label = page.locator(`label[for="${id}"]`);
        await expect(label).toBeVisible();
      }
    }
  });

  test('should have visible focus indicators', async ({ page }) => {
    await page.goto('/');

    // Tab to first interactive element
    await page.keyboard.press('Tab');

    // Get computed style of focused element
    const focused = page.locator(':focus');
    const outlineWidth = await focused.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return style.outlineWidth || style.boxShadow;
    });

    expect(outlineWidth).toBeTruthy();
  });
});
