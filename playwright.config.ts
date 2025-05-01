import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    extraHTTPHeaders: {
      'x-vercel-protection-bypass':
        process.env.VERCEL_AUTOMATION_BYPASS_SECRET || '',
      'x-vercel-set-bypass-cookie': 'true',
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  testMatch: ['**/*.spec.ts', '**/*.test.ts'],
});
