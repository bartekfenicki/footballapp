import { test, expect } from '@playwright/test';

test.describe('Filtered Players View', () => {
  test.beforeEach(async ({ page }) => {
    const baseURL = process.env.VITE_BASE_URL || 'http://localhost:5173';
    await page.goto(`${baseURL}/`);
  });

  test('loads the page and shows filtering options', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'All Players' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Position' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Nationality' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Club' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Goals & Assists' })).toBeVisible();


    await expect(page.locator('.player-list')).toBeVisible();
  });

  test('filters players by position', async ({ page }) => {

    await page.getByText('Position').click();

    await page.locator('select').selectOption({ label: 'Goalkeeper' });

    const players = await page.locator('.player-card').allTextContents();
    players.forEach(player => {
      expect(player).toContain('Goalkeeper');
    });
  });

  test('filters players by nationality', async ({ page }) => {

    await page.getByText('Nationality').click();

    await page.locator('input[type="text"]').fill('Brazil');

    const players = await page.locator('.player-card').allTextContents();
    players.forEach(player => {
      expect(player).toContain('Brazil');
    });
  });

  test('filters players by club', async ({ page }) => {

    await page.getByText('Club').click();

    await page.locator('input[type="text"]').fill('Barcelona');

    const players = await page.locator('.player-card').allTextContents();
    players.forEach(player => {
      expect(player).toContain('Barcelona');
    });
  });

  test('filters players by goals and assists', async ({ page }) => {
    await page.getByRole('button', { name: 'Goals & Assists' }).click();

    const goalInput = page.locator('input[type="number"]:nth-of-type(1)');
    const assistInput = page.locator('input[type="number"]:nth-of-type(2)');

    await expect(goalInput).toBeVisible();
    await expect(assistInput).toBeVisible();

    await goalInput.fill('150');
    await assistInput.fill('150');

    const players = await page.locator('.player-card').allTextContents();
    players.forEach(player => {
      const goals = parseInt(player.match(/(\d+) Goals/)[1], 10);
      const assists = parseInt(player.match(/(\d+) Assists/)[1], 10);
      expect(goals).toBeGreaterThanOrEqual(150);
      expect(assists).toBeGreaterThanOrEqual(150);
    });
  });

  test('shows all players in the "All Players" tab', async ({ page }) => {
    await page.getByRole('button', { name: 'All Players' }).click();

    const players = await page.locator('.player-card').allTextContents();
    expect(players.length).toBeGreaterThan(0);
  });

});
