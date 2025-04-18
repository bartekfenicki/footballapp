import { test, expect } from '@playwright/test';

test.describe('Footballdle Game View', () => {
  test.beforeEach(async ({ page }) => {
    const baseURL = process.env.VITE_BASE_URL || 'http://localhost:5173';
    await page.goto(`${baseURL}/footballapp/footdle`);
  });

  test('starts game and shows player guessing interface', async ({ page }) => {

    await expect(page.getByText('The Footballdle')).toBeVisible();
    await expect(page.getByText('Start Game')).toBeVisible();

    await page.getByText('Start Game').click();

    await expect(page.locator('input[data-testid="guess-input"]')).toBeVisible();
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


  test('displays guess history correctly', async ({ page }) => {

    await page.getByText('Start Game').click();

    const wrongGuesses = ['Cristiano Ronaldo', 'Lionel Messi'];
    for (const guess of wrongGuesses) {
      await page.getByTestId('guess-input').fill(guess);
      await page.getByText(guess).click();
      await page.getByText('Submit').click();
    }

    const historyRows = page.locator('.guess-table .guess-row');
    await expect(historyRows).toHaveCount(wrongGuesses.length + 1);
  });
});
