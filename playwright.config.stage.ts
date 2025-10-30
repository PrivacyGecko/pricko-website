import { defineConfig, devices } from '@playwright/test';

/**
 * Configuration for testing the stage deployment
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: false, // Run sequentially for audit
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'test-results/html-report' }]
  ],
  use: {
    baseURL: 'https://stage.pricko.com',
    trace: 'on',
    screenshot: 'on',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // No web server needed - testing deployed site
  timeout: 30000,
  expect: {
    timeout: 10000,
  },
});
