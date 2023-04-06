import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  // Timeout
  timeout: 40000,

  use: {
    // Browser options
    headless: false,

    // Context options
    // viewport: { width: 1920, height: 1080 },

    // Artifacts
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'Chrome',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
  ],
};

export default config;
