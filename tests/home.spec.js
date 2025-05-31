// home.spec.js
import { test, expect } from '@playwright/test';

test.describe('HomeView Page', () => {

  test.beforeEach(async ({ page }) => {
    const baseURL = process.env.VITE_BASE_URL || 'http://localhost:5173';
    await page.goto(`${baseURL}/footballapp/`); // Adjust the URL if needed
  });

  test('should render QuickPlayCard boxes', async ({ page }) => {
    const cards = await page.locator('.games-container .container');
    await expect(cards).toHaveCount(4);
  });

test('should navigate to correct page when a QuickPlayCard is clicked', async ({ page }) => {
  // Locate the first card
  const card = await page.locator('.games-container .container').first();

  // Click a tracker element within the card
  const tracker = await card.locator('.tracker').first();
  await tracker.click();

  // Adjust this to match the expected URL after click
  await expect(page).toHaveURL(/tic-tac-toe|cluesGame|footdle|careerPath/);
});

  test('should show hover effects on QuickPlayCard', async ({ page }) => {
    const card = await page.locator('.games-container .container').first();
    // Hover on the card and check if the subtitle highlight appears
    await card.hover();
    const subtitle = await card.locator('.subtitle .highlight');
    await expect(subtitle).toBeVisible();
  });

  test('should render the 3D model avatar', async ({ page }) => {
    const modelContainer = await page.locator('.model-card .viewer canvas');
    await expect(modelContainer).toBeVisible();
  });

  test('should rotate the 3D model on mouse drag', async ({ page }) => {
    const viewer = await page.locator('.model-card .viewer canvas');

    // Get the initial rotation (approximated by pixel color in a small region)
    const initialScreenshot = await viewer.screenshot();

    // Simulate drag to rotate the model
    const box = await viewer.boundingBox();
    const startX = box.x + box.width / 2;
    const startY = box.y + box.height / 2;
    await page.mouse.move(startX, startY);
    await page.mouse.down();
    await page.mouse.move(startX + 50, startY, { steps: 10 });
    await page.mouse.up();

    // Take a screenshot after rotation
    const rotatedScreenshot = await viewer.screenshot();

    // They should differ, indicating rotation
    expect(initialScreenshot).not.toEqual(rotatedScreenshot);
  });

});
