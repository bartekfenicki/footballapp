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


  test('plays game and verifies winning message & guess history', async ({ page }) => {
  await page.getByText('Start Game').click();

      const allPlayers = [
  'Bruno Fernandes',
  'Bernardo Silva',
  'Nuno Tavares',
  'Juan Mata',
  'Rodri',
  'Mikel Merino',
  'Marouane Fellaini',
  'Leandro Trossard',
  'Jérémy Doku',
  'Michy Batshuayi',
  'André Gomes',
  'Pedro Neto',
  'Paul Pogba',
  'Olivier Giroud',
  'Thierry Henry',
  'Sergio Busquets',
  'Jorginho',
  'Riccardo Calafiori',
  'Stephan El Shaarawy',
  'Matteo Darmian',
  'Bukayo Saka',
  'Mason Mount',
  'Marcus Rashford',
  'Emiliano Martínez',
  'Lisandro Martínez',
  'Enzo Fernández',
  'Marco Asensio',
  'Ángel Di María'
];
  let guessCount = 0;

  for (const name of allPlayers) {
    await page.getByTestId('guess-input').fill(name);

    const suggestion = page.getByText(name);
    await suggestion.click();
    await page.getByText('Submit').click();
    guessCount++;

    const winMessage = page.locator('.winner');
    if (await winMessage.isVisible()) {
      await expect(winMessage).toContainText('Correct! The player was');
      break;
    }
  }

  // After guessing correctly, verify the guess history
  const historyRows = page.locator('.guess-table .guess-row');
  await expect(historyRows).toHaveCount(guessCount + 1);
});

});
