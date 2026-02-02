import { test, expect } from '@playwright/test';

test('verify home page has 3d canvas', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Check if canvas exists
  const canvas = page.locator('canvas');
  await expect(canvas).toBeVisible();

  // Check if text is visible on top
  await expect(page.getByText('Free Education for Every Child')).toBeVisible();

  // Wait for animation to finish (0.8s)
  await page.waitForTimeout(2000);

  // Take screenshot
  await page.screenshot({ path: '/home/jules/verification/01_home_3d_settled.png' });
});
