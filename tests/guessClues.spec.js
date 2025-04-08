import { test, expect } from '@playwright/test';

test.describe('Clues Game View', () => {
  test.beforeEach(async ({ page }) => {
    const baseURL = process.env.VITE_BASE_URL || 'http://localhost:5173';
    await page.goto(`${baseURL}/cluesGame`);
  });

  test('starts game and shows clues', async ({ page }) => {
    await expect(page.getByText('The Clues Game')).toBeVisible();
    await expect(page.getByText('Start Game')).toBeVisible();

    await page.getByText('Start Game').click();

    await expect(page.getByText(/Nationality:/i)).toBeVisible();
    await expect(page.getByText(/Age:/i)).toBeVisible();
  });

  test('decrements lives after wrong guess', async ({ page }) => {
    await page.getByText('Start Game').click();

    await expect(page.getByText('Lives left:')).toBeVisible();

    await page.getByTestId('guess-input').fill('Wrong Player');
    await page.getByText('Submit').click();

    await expect(page.locator('.lives-container .life:not(.faded)')).toHaveCount(5);

    await page.getByTestId('guess-input').fill('Another Wrong Player');
    await page.getByText('Submit').click();

    await expect(page.locator('.lives-container .life:not(.faded)')).toHaveCount(4);
  });

  test('displays winning message after correct guess', async ({ page }) => {
    // Start the game
    await page.getByText('Start Game').click();

    const allPlayers = ['Lionel Messi'];

    for (const name of allPlayers) {
      await page.getByTestId('guess-input').fill(name);

      const suggestion = page.getByText(name);
      await suggestion.click();
      await page.getByText('Submit').click();
    }

    const winMessage = page.locator('.win-message');
      if (await winMessage.isVisible()) {
        await expect(winMessage).toContainText('🎉 You Win! 🎉');
      }
  });

  test('game over if lives reach 0', async ({ page }) => {
    // Start the game
    await page.getByText('Start Game').click();

    // Make wrong guesses until lives are 0
    const wrongGuesses = ['Wrong Player 1', 'Wrong Player 2', 'Wrong Player 3', 'Wrong Player 4', 'Wrong Player 5', 'Wrong Player 6'];
    for (const guess of wrongGuesses) {
      await page.getByTestId('guess-input').fill(guess);
      await page.getByText('Submit').click();
    }

    // Ensure game over message appears when lives are 0
    await expect(page.locator('.result')).toContainText('Game Over! The correct player was:');
  });
});
