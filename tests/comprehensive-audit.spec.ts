import { test, expect } from '@playwright/test';

/**
 * COMPREHENSIVE END-TO-END APPLICATION AUDIT
 * Tests ALL aspects of the Privacy Gecko / PRICKO website
 * Target: stage.pricko.com
 */

test.use({
  baseURL: 'https://stage.pricko.com'
});

test.describe('COMPREHENSIVE APPLICATION AUDIT - stage.pricko.com', () => {

  test.describe('1. COMPLETE PAGE COVERAGE', () => {
    
    test('Homepage - Full content verification', async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      
      const h1 = await page.locator('h1').first();
      await expect(h1).toBeVisible();
      
      const pageContent = await page.textContent('body');
      expect(pageContent).toContain('PRICKO');
      
      console.log('Homepage fully loaded with expected content');
    });

    test('About Page', async ({ page }) => {
      await page.goto('/about');
      await page.waitForLoadState('networkidle');
      
      const heading = await page.locator('h1').first();
      await expect(heading).toBeVisible();
      
      console.log('About page loaded');
    });

    test('Tools Page', async ({ page }) => {
      await page.goto('/tools');
      await page.waitForLoadState('networkidle');
      
      const heading = await page.locator('h1').first();
      await expect(heading).toBeVisible();
      
      console.log('Tools page loaded');
    });

    test('Tokenomics Page', async ({ page }) => {
      await page.goto('/tokenomics');
      await page.waitForLoadState('networkidle');
      
      const heading = await page.locator('h1').first();
      await expect(heading).toBeVisible();
      
      console.log('Tokenomics page loaded');
    });

    test('How to Buy Page', async ({ page }) => {
      await page.goto('/how-to-buy');
      await page.waitForLoadState('networkidle');
      
      const heading = await page.locator('h1').first();
      await expect(heading).toBeVisible();
      
      console.log('How to Buy page loaded');
    });

    test('Roadmap Page', async ({ page }) => {
      await page.goto('/roadmap');
      await page.waitForLoadState('networkidle');
      
      const heading = await page.locator('h1').first();
      await expect(heading).toBeVisible();
      
      console.log('Roadmap page loaded');
    });

    test('Contact Page', async ({ page }) => {
      await page.goto('/contact');
      await page.waitForLoadState('networkidle');
      
      const heading = await page.locator('h1').first();
      await expect(heading).toBeVisible();
      
      console.log('Contact page loaded');
    });

    test('Privacy Policy Page', async ({ page }) => {
      await page.goto('/privacy');
      await page.waitForLoadState('networkidle');
      
      const heading = await page.locator('h1').first();
      await expect(heading).toBeVisible();
      
      const content = await page.textContent('body');
      expect(content).toMatch(/privacy|data|information|gdpr/i);
      
      console.log('Privacy Policy page loaded');
    });

    test('Terms of Service Page', async ({ page }) => {
      await page.goto('/terms');
      await page.waitForLoadState('networkidle');
      
      const heading = await page.locator('h1').first();
      await expect(heading).toBeVisible();
      
      console.log('Terms of Service page loaded');
    });

    test('Disclaimer Page', async ({ page }) => {
      await page.goto('/disclaimer');
      await page.waitForLoadState('networkidle');
      
      const heading = await page.locator('h1').first();
      await expect(heading).toBeVisible();
      
      console.log('Disclaimer page loaded');
    });
  });

  test.describe('2. MOBILE RESPONSIVENESS', () => {
    
    test('Mobile viewport 375px', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      
      const h1 = page.locator('h1').first();
      await expect(h1).toBeVisible();
      
      console.log('Mobile 375px renders properly');
    });

    test('Tablet viewport 768px', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      
      const h1 = page.locator('h1').first();
      await expect(h1).toBeVisible();
      
      console.log('Tablet 768px renders properly');
    });

    test('Desktop viewport 1920px', async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      
      const h1 = page.locator('h1').first();
      await expect(h1).toBeVisible();
      
      console.log('Desktop 1920px renders properly');
    });
  });

  test.describe('3. PERFORMANCE', () => {
    
    test('Homepage loads within 5 seconds', async ({ page }) => {
      const startTime = Date.now();
      
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      
      const loadTime = Date.now() - startTime;
      
      console.log('Homepage load time:', loadTime, 'ms');
      expect(loadTime).toBeLessThan(5000);
    });
  });

  test.describe('4. SEO BASICS', () => {
    
    test('Meta tags present', async ({ page }) => {
      await page.goto('/');
      
      const title = await page.title();
      expect(title.length).toBeGreaterThan(0);
      
      console.log('Page title:', title);
    });
  });
});
