import { test, expect } from '@playwright/test';

test('verify global 3d background and logo', async ({ page }) => {
  // Go to About page (non-home page)
  await page.goto('http://localhost:3000/about');

  // Check for Global 3D Background
  // Since it's in Layout, it should be present.
  // It has a canvas.
  // We have multiple canvases now (Logo, Global, potentially Home hero).
  // Global BG is -z-50.
  // Logo is in Navbar.

  const canvases = page.locator('canvas');
  // Expect at least 2 canvases (Global BG + Logo)
  await expect(canvases).toHaveCount(2);

  // Check if About page container has backdrop blur class
  const aboutContainer = page.locator('.backdrop-blur-sm');
  await expect(aboutContainer).toBeVisible();

  // Take screenshot of About page
  await page.screenshot({ path: '/home/jules/verification/02_about_3d.png' });

  // Go to Home page
  await page.goto('http://localhost:3000/');

  // Home has Hero3D + GlobalBG + Logo = 3 canvases
  // Note: GlobalBG is always there. Hero3D is there. Logo is there.
  await expect(canvases).toHaveCount(3);

  // Take screenshot of Home page
  await page.screenshot({ path: '/home/jules/verification/03_home_updated.png' });
});
