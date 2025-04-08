import { test, expect } from '@playwright/test';

test.describe('Career Path Game View', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/careerPath');
  });

  test('starts game and shows career path game', async ({ page }) => {
    await expect(page.getByText('The Career Path')).toBeVisible();

    await page.getByText('Start Game').click();

    await expect(page.getByText(/Guess the Footballer/i)).toBeVisible();
    const logoCount = await page.locator('.club-logo').count();
    expect(logoCount).toBeGreaterThan(0);
  });

  test('shows correct number of lives and decrements after wrong guess', async ({ page }) => {
    await page.getByText('Start Game').click();

    await expect(page.getByText('4 Lives Remaining')).toBeVisible();

    await page.getByTestId('guess-input').fill('Cristiano Ronaldo');
    await page.getByText('Cristiano Ronaldo').click();
    await page.getByText('Submit').click();

    await expect(page.locator('.lives')).toHaveText('3 Lives Remaining', { timeout: 5000 });
  });

  test('displays winning message after correct guess', async ({ page }) => {

    await page.getByText('Start Game').click();

    const allPlayers = ['Lionel Messi', 'Cristiano Ronaldo'];

    for (const name of allPlayers) {
      await page.getByTestId('guess-input').fill(name);

      const suggestion = page.getByText(name);
      await suggestion.click();
      await page.getByText('Submit').click();

      const winMessage = page.locator('.winner');
      if (await winMessage.isVisible()) {
        await expect(winMessage).toContainText('Correct! The player was');
        break;
      }
    }
  });
});
