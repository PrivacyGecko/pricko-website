import { Page } from '@playwright/test';

/**
 * Accepts cookie consent if visible
 * Call this in beforeEach or at the start of tests
 */
export async function acceptCookieConsent(page: Page): Promise<void> {
  try {
    // Look for Accept button in cookie consent dialog
    const acceptButton = page.locator('button:has-text("Accept")').first();

    if (await acceptButton.isVisible({ timeout: 2000 })) {
      await acceptButton.click();
      // Wait for dialog to close
      await page.waitForTimeout(500);
    }
  } catch {
    // Cookie consent not found or already accepted - that's okay
  }
}

/**
 * Waits for page to be fully loaded including lazy content
 */
export async function waitForPageLoad(page: Page): Promise<void> {
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(300);
}
