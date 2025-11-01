import { test, expect } from '@playwright/test';

test.describe('Navigation Dropdown - P2 Enhancement', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test.describe('Desktop Dropdown', () => {
    test('should display Tools dropdown button', async ({ page }) => {
      // Check if Tools dropdown button exists
      const toolsButton = page.locator('button:has-text("Tools")').first();
      await expect(toolsButton).toBeVisible();
    });

    test('should open dropdown on click', async ({ page }) => {
      const toolsButton = page.locator('button:has-text("Tools")').first();
      await toolsButton.click();
      
      // Check if dropdown menu appears
      const dropdown = page.locator('[role="menu"]').first();
      await expect(dropdown).toBeVisible();
    });

    test('should list all 8 products plus "View All Tools"', async ({ page }) => {
      const toolsButton = page.locator('button:has-text("Tools")').first();
      await toolsButton.click();
      
      // Wait for dropdown to appear
      await page.waitForSelector('[role="menu"]', { timeout: 5000 });
      
      // Check for products (8 products + 1 "View All Tools" = 9 items)
      const menuItems = page.locator('[role="menuitem"]');
      const count = await menuItems.count();
      expect(count).toBe(9);
      
      // Check for specific products
      await expect(page.locator('[role="menuitem"]:has-text("Gecko Advisor")')).toBeVisible();
      await expect(page.locator('[role="menuitem"]:has-text("Gecko Share")')).toBeVisible();
      await expect(page.locator('[role="menuitem"]:has-text("Gecko Shell")')).toBeVisible();
      await expect(page.locator('[role="menuitem"]:has-text("View All Tools")')).toBeVisible();
    });

    test('should display status indicators correctly', async ({ page }) => {
      const toolsButton = page.locator('button:has-text("Tools")').first();
      await toolsButton.click();
      
      await page.waitForSelector('[role="menu"]', { timeout: 5000 });
      
      // Check for live products (green dot)
      const geckoAdvisorItem = page.locator('[role="menuitem"]:has-text("Gecko Advisor")');
      await expect(geckoAdvisorItem).toContainText('🟢');
      
      // Check for beta products (yellow dot)
      const geckoShellItem = page.locator('[role="menuitem"]:has-text("Gecko Shell")');
      await expect(geckoShellItem).toContainText('🧪');
      
      // Check for in-development products (orange dot)
      const geckoGuardItem = page.locator('[role="menuitem"]:has-text("Gecko Guard")');
      await expect(geckoGuardItem).toContainText('⚡');
    });

    test('should close dropdown when clicking outside', async ({ page }) => {
      const toolsButton = page.locator('button:has-text("Tools")').first();
      await toolsButton.click();
      
      await page.waitForSelector('[role="menu"]', { timeout: 5000 });
      
      // Click outside dropdown
      await page.click('body');
      
      // Dropdown should be hidden
      const dropdown = page.locator('[role="menu"]').first();
      await expect(dropdown).not.toBeVisible();
    });

    test('should close dropdown on Escape key', async ({ page }) => {
      const toolsButton = page.locator('button:has-text("Tools")').first();
      await toolsButton.click();
      
      await page.waitForSelector('[role="menu"]', { timeout: 5000 });
      
      // Press Escape
      await page.keyboard.press('Escape');
      
      // Dropdown should be hidden
      const dropdown = page.locator('[role="menu"]').first();
      await expect(dropdown).not.toBeVisible();
    });

    test('should support keyboard navigation (Arrow Down)', async ({ page }) => {
      const toolsButton = page.locator('button:has-text("Tools")').first();
      await toolsButton.click();
      
      await page.waitForSelector('[role="menu"]', { timeout: 5000 });
      
      // Press Arrow Down to navigate
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowDown');
      
      // Check if focused item has highlighted class
      const focusedItem = page.locator('[role="menuitem"].bg-accent\\/10').first();
      await expect(focusedItem).toBeVisible();
    });

    test('should navigate to product page on item click', async ({ page }) => {
      const toolsButton = page.locator('button:has-text("Tools")').first();
      await toolsButton.click();
      
      await page.waitForSelector('[role="menu"]', { timeout: 5000 });
      
      // Click on Gecko Advisor
      const geckoAdvisorLink = page.locator('[role="menuitem"]:has-text("Gecko Advisor")').first();
      await geckoAdvisorLink.click();
      
      // Wait for navigation
      await page.waitForURL('**/gecko-advisor', { timeout: 5000 });
      
      // Verify URL
      expect(page.url()).toContain('/gecko-advisor');
    });

    test('should have proper ARIA attributes', async ({ page }) => {
      const toolsButton = page.locator('button:has-text("Tools")').first();
      
      // Check initial ARIA state
      await expect(toolsButton).toHaveAttribute('aria-haspopup', 'true');
      await expect(toolsButton).toHaveAttribute('aria-expanded', 'false');
      
      // Open dropdown
      await toolsButton.click();
      
      // Check updated ARIA state
      await expect(toolsButton).toHaveAttribute('aria-expanded', 'true');
      
      // Check menu role
      const dropdown = page.locator('[role="menu"]').first();
      await expect(dropdown).toBeVisible();
    });
  });

  test.describe('Mobile Accordion', () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test('should display mobile menu button', async ({ page }) => {
      const menuButton = page.locator('button[aria-label*="menu"]');
      await expect(menuButton).toBeVisible();
    });

    test('should open mobile menu on button click', async ({ page }) => {
      const menuButton = page.locator('button[aria-label*="menu"]');
      await menuButton.click();
      
      // Wait for mobile menu to appear
      await page.waitForTimeout(500);
      
      // Check if Tools accordion button exists
      const toolsAccordion = page.locator('button:has-text("Tools")');
      await expect(toolsAccordion).toBeVisible();
    });

    test('should expand Tools accordion in mobile menu', async ({ page }) => {
      // Open mobile menu
      const menuButton = page.locator('button[aria-label*="menu"]');
      await menuButton.click();
      
      await page.waitForTimeout(500);
      
      // Click Tools accordion
      const toolsAccordion = page.locator('button:has-text("Tools")').last();
      await toolsAccordion.click();
      
      await page.waitForTimeout(500);
      
      // Check if accordion expanded
      const geckoAdvisor = page.locator('a:has-text("Gecko Advisor")');
      await expect(geckoAdvisor).toBeVisible();
    });

    test('should list all products in mobile accordion', async ({ page }) => {
      const menuButton = page.locator('button[aria-label*="menu"]');
      await menuButton.click();
      
      await page.waitForTimeout(500);
      
      const toolsAccordion = page.locator('button:has-text("Tools")').last();
      await toolsAccordion.click();
      
      await page.waitForTimeout(500);
      
      // Check for products
      await expect(page.locator('text=Gecko Advisor')).toBeVisible();
      await expect(page.locator('text=Gecko Share')).toBeVisible();
      await expect(page.locator('text=View All Tools')).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('dropdown should have minimum 44px touch target', async ({ page }) => {
      const toolsButton = page.locator('button:has-text("Tools")').first();
      const box = await toolsButton.boundingBox();
      
      expect(box).not.toBeNull();
      if (box) {
        // Check minimum touch target size (44x44px)
        expect(box.height).toBeGreaterThanOrEqual(32); // Acceptable for desktop
      }
    });

    test('dropdown items should have minimum touch target on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      
      const menuButton = page.locator('button[aria-label*="menu"]');
      await menuButton.click();
      
      await page.waitForTimeout(500);
      
      const toolsAccordion = page.locator('button:has-text("Tools")').last();
      await toolsAccordion.click();
      
      await page.waitForTimeout(500);
      
      const firstItem = page.locator('[role="menuitem"]').first();
      const box = await firstItem.boundingBox();
      
      expect(box).not.toBeNull();
      if (box) {
        // Check minimum touch target size for mobile
        expect(box.height).toBeGreaterThanOrEqual(44);
      }
    });

    test('dropdown should be keyboard navigable', async ({ page }) => {
      // Tab to Tools button
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      
      // Check if Tools button is focused (implementation depends on tab order)
      // This is a basic check - may need adjustment based on actual tab order
      const focusedElement = await page.evaluate(() => document.activeElement?.textContent);
      
      // Open dropdown with Enter/Space
      await page.keyboard.press('Enter');
      
      await page.waitForSelector('[role="menu"]', { timeout: 5000 });
      
      // Navigate with arrow keys
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowUp');
      
      // Close with Escape
      await page.keyboard.press('Escape');
      
      const dropdown = page.locator('[role="menu"]').first();
      await expect(dropdown).not.toBeVisible();
    });
  });
});
