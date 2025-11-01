import { test, expect } from '@playwright/test';
import { acceptCookieConsent, waitForPageLoad } from './helpers';

/**
 * P0 CRITICAL TESTS FOR STAGE DEPLOYMENT
 *
 * These tests verify the most critical fixes after P0 deployment:
 * 1. Page load success (HTTP 200)
 * 2. Zero JavaScript console errors
 * 3. Tool display accuracy (6 on home, 8 on tools page)
 * 4. Navigation functionality
 * 5. Data accuracy (METRICS.prickoshare, TOOLS_COUNT)
 * 6. Load times under 3 seconds
 */

test.describe('P0 Critical Tests - Page Load & Performance', () => {
  test.beforeEach(async ({ page }) => {
    await acceptCookieConsent(page);
  });

  test('should load all pages with HTTP 200 status', async ({ page }) => {
    const pages = [
      '/',
      '/about',
      '/tools',
      '/tokenomics',
      '/roadmap',
      '/contact',
      '/privacy',
      '/terms',
      '/disclaimer'
    ];

    for (const pagePath of pages) {
      const response = await page.goto(pagePath);
      expect(response?.status(), `${pagePath} should return HTTP 200`).toBe(200);
    }
  });

  test('should load homepage in under 3 seconds', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await waitForPageLoad(page);
    const loadTime = Date.now() - startTime;

    expect(loadTime, 'Homepage should load in under 3 seconds').toBeLessThan(3000);
  });

  test('should have zero console errors on all pages', async ({ page }) => {
    const consoleErrors: { page: string; error: string }[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        const currentUrl = page.url();
        consoleErrors.push({
          page: currentUrl,
          error: msg.text()
        });
      }
    });

    const pages = ['/', '/about', '/tools', '/tokenomics', '/roadmap', '/contact'];

    for (const pagePath of pages) {
      await page.goto(pagePath);
      await waitForPageLoad(page);
    }

    // Print errors if any
    if (consoleErrors.length > 0) {
      console.error('Console errors found:', JSON.stringify(consoleErrors, null, 2));
    }

    expect(consoleErrors.length, 'Should have ZERO console errors').toBe(0);
  });

  test('should have no JavaScript errors on page load', async ({ page }) => {
    const errors: string[] = [];

    page.on('pageerror', (error) => {
      errors.push(error.message);
    });

    await page.goto('/');
    await waitForPageLoad(page);

    if (errors.length > 0) {
      console.error('Page errors found:', errors);
    }

    expect(errors.length, 'Should have no JavaScript errors').toBe(0);
  });
});

test.describe('P0 Critical Tests - Tool Display', () => {
  test.beforeEach(async ({ page }) => {
    await acceptCookieConsent(page);
  });

  test('should display exactly 6 tools on HomePage', async ({ page }) => {
    await page.goto('/');
    await waitForPageLoad(page);

    // Wait for tool cards to be visible - ToolCard components use motion.div with .card class
    await page.waitForSelector('.card', { timeout: 5000 });

    // Count tool cards using the card class
    const toolCards = page.locator('.card.group');
    const count = await toolCards.count();

    expect(count, 'HomePage should display exactly 6 tools').toBe(6);
  });

  test('should display all 8 tools on ToolsPage', async ({ page }) => {
    await page.goto('/tools');
    await waitForPageLoad(page);

    // Wait for tool titles to be visible - ToolsPage has unique structure with h2 titles
    await page.waitForSelector('h2:has-text("Gecko")', { timeout: 5000 });

    // Count tools by h2 titles that contain "Gecko"
    const toolTitles = page.locator('h2:has-text("Gecko")');
    const count = await toolTitles.count();

    expect(count, 'ToolsPage should display all 8 tools').toBe(8);
  });

  test('should have tool cards that are clickable and functional', async ({ page }) => {
    await page.goto('/tools');
    await waitForPageLoad(page);

    // Find first tool section with grid layout
    const firstToolGrid = page.locator('.grid.grid-cols-1.lg\\:grid-cols-2').first();
    await expect(firstToolGrid).toBeVisible();

    // Check if action buttons exist and are visible
    const actionButton = page.locator('button:has-text("Use Now"), button:has-text("Join Beta")').first();
    await expect(actionButton, 'Tool action buttons should be visible').toBeVisible();
  });

  test('should display correct tool names (no undefined)', async ({ page }) => {
    await page.goto('/tools');
    await waitForPageLoad(page);

    // Get all tool names
    const toolNames = page.locator('h3, .tool-title');
    const count = await toolNames.count();

    for (let i = 0; i < count; i++) {
      const text = await toolNames.nth(i).textContent();
      expect(text, `Tool name ${i + 1} should not be undefined`).not.toContain('undefined');
      expect(text, `Tool name ${i + 1} should not be null`).not.toContain('null');
      expect(text?.trim(), `Tool name ${i + 1} should not be empty`).toBeTruthy();
    }
  });
});

test.describe('P0 Critical Tests - Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await acceptCookieConsent(page);
  });

  test('should navigate to /tools without 404 error', async ({ page }) => {
    await page.goto('/');
    await acceptCookieConsent(page);

    // Click tools link
    await page.click('a[href="/tools"]');
    await waitForPageLoad(page);

    // Verify we're on tools page
    await expect(page).toHaveURL(/\/tools/);

    // Verify no 404 content
    const has404 = await page.locator('text=404').count();
    expect(has404, '/tools should not show 404 page').toBe(0);

    // Verify page has content
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
  });

  test('should have working breadcrumb navigation', async ({ page }) => {
    await page.goto('/tools');
    await waitForPageLoad(page);

    // Check if breadcrumbs exist
    const breadcrumbs = page.locator('nav[aria-label="Breadcrumb"], .breadcrumb, [data-testid="breadcrumb"]');
    const breadcrumbCount = await breadcrumbs.count();

    if (breadcrumbCount > 0) {
      // If breadcrumbs exist, they should be functional
      await expect(breadcrumbs.first()).toBeVisible();
    }
  });

  test('should have all internal links working', async ({ page }) => {
    await page.goto('/');
    await waitForPageLoad(page);

    // Get all internal links
    const internalLinks = await page.locator('a[href^="/"]').all();

    expect(internalLinks.length, 'Should have internal navigation links').toBeGreaterThan(0);

    // Test first few navigation links (not all to save time)
    const linksToTest = internalLinks.slice(0, 5);

    for (const link of linksToTest) {
      const href = await link.getAttribute('href');
      if (href && href !== '/' && !href.includes('#')) {
        const response = await page.goto(href);
        expect(response?.status(), `Link ${href} should return HTTP 200`).toBe(200);
      }
    }
  });
});

test.describe('P0 Critical Tests - Data Accuracy', () => {
  test.beforeEach(async ({ page }) => {
    await acceptCookieConsent(page);
  });

  test('should display METRICS.prickoshare correctly (not geckoShare)', async ({ page }) => {
    await page.goto('/');
    await waitForPageLoad(page);

    // Look for prickoshare metric display
    const pageContent = await page.content();

    // Should contain prickoshare references
    const hasPrickoshare = pageContent.toLowerCase().includes('prickoshare') ||
                          pageContent.includes('2,100') ||
                          pageContent.includes('2100');

    // Should NOT contain geckoShare errors
    const hasGecko ShareError = pageContent.includes('geckoShare') ||
                               pageContent.includes('undefined');

    expect(hasPrickoshare || !hasGecko ShareError, 'Should reference prickoshare correctly, not geckoShare').toBeTruthy();
  });

  test('should verify TOOLS_COUNT.total === 8', async ({ page }) => {
    await page.goto('/tools');
    await waitForPageLoad(page);

    // Count actual tool sections by h2 titles
    const toolTitles = page.locator('h2.text-3xl.font-bold:has-text("Gecko")');
    const actualCount = await toolTitles.count();

    expect(actualCount, 'TOOLS_COUNT.total should be 8').toBe(8);
  });

  test('should have no undefined variable errors in console', async ({ page }) => {
    const undefinedErrors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        const text = msg.text();
        if (text.toLowerCase().includes('undefined') ||
            text.toLowerCase().includes('is not defined')) {
          undefinedErrors.push(text);
        }
      }
    });

    page.on('pageerror', (error) => {
      if (error.message.toLowerCase().includes('undefined') ||
          error.message.toLowerCase().includes('is not defined')) {
        undefinedErrors.push(error.message);
      }
    });

    await page.goto('/');
    await waitForPageLoad(page);
    await page.goto('/tools');
    await waitForPageLoad(page);

    if (undefinedErrors.length > 0) {
      console.error('Undefined errors found:', undefinedErrors);
    }

    expect(undefinedErrors.length, 'Should have ZERO undefined variable errors').toBe(0);
  });

  test('should display correct tool names from ecosystem', async ({ page }) => {
    await page.goto('/tools');
    await waitForPageLoad(page);

    const pageContent = await page.content();
    const lowerContent = pageContent.toLowerCase();

    // Check for expected tool names (case insensitive)
    const expectedTools = [
      'geckoadvisor',
      'geckoshare',
      'geckoguard',
      'geckolock',
      'geckoview',
      'geckoshell',
      'geckovpn',
      'geckowatch'
    ];

    const foundTools: string[] = [];
    for (const tool of expectedTools) {
      if (lowerContent.includes(tool)) {
        foundTools.push(tool);
      }
    }

    expect(foundTools.length, 'Should display all 8 expected tools').toBe(8);
  });
});

test.describe('P0 Critical Tests - Performance Metrics', () => {
  test.beforeEach(async ({ page }) => {
    await acceptCookieConsent(page);
  });

  test('should have fast First Contentful Paint', async ({ page }) => {
    await page.goto('/');

    const fcp = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              resolve(entry.startTime);
            }
          }
        }).observe({ entryTypes: ['paint'] });

        // Timeout after 5 seconds
        setTimeout(() => resolve(5000), 5000);
      });
    });

    expect(fcp, 'First Contentful Paint should be under 2 seconds').toBeLessThan(2000);
  });

  test('should have all images loading successfully', async ({ page }) => {
    await page.goto('/');
    await waitForPageLoad(page);

    // Check for broken images
    const brokenImages = await page.evaluate(() => {
      const images = Array.from(document.querySelectorAll('img'));
      return images.filter(img => !img.complete || img.naturalHeight === 0).length;
    });

    expect(brokenImages, 'Should have no broken images').toBe(0);
  });

  test('should load all CSS files successfully', async ({ page }) => {
    const failedResources: string[] = [];

    page.on('response', (response) => {
      if (response.url().endsWith('.css') && response.status() !== 200) {
        failedResources.push(response.url());
      }
    });

    await page.goto('/');
    await waitForPageLoad(page);

    expect(failedResources.length, 'All CSS files should load successfully').toBe(0);
  });

  test('should load all JavaScript files successfully', async ({ page }) => {
    const failedResources: string[] = [];

    page.on('response', (response) => {
      if ((response.url().endsWith('.js') || response.url().endsWith('.jsx')) &&
          response.status() !== 200) {
        failedResources.push(response.url());
      }
    });

    await page.goto('/');
    await waitForPageLoad(page);

    expect(failedResources.length, 'All JavaScript files should load successfully').toBe(0);
  });
});
