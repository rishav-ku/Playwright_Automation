// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
 
  reporter: 'html',

  use: {
    screenshot:"on-first-failure",
    trace: 'on-first-retry',
    baseURL:"https://opensource-demo.orangehrmlive.com/",
    headless:false,
    
  },

  /* Configure projects for major browsers */
  projects: [
{
    name:'setup',
    testMatch:"auth.setup.spec.js",
    
}
    ,
    {
      name: 'chromium',
      use: {
         ...devices['Desktop Chrome'] ,
        storageState:"utills/auth.json",
      },
      dependencies:["setup"]
    }

   
  ],

});

