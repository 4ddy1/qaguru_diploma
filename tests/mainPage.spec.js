// @ts-check
import { test, expect } from '@playwright/test';
import * as pages from '../src/pages/index';
import 'dotenv/config';

test.describe('Main page', () => {
  test.beforeEach(async ({page}) => {
    const app = new pages.App(page);
    await app.mainPage.open(process.env.MAIN_URL);
  })
  test('pagination 50 click', async ({ page }) => {
    const app = new pages.App(page);
    await app.mainPage.pagination();

    await expect(page.getByRole('heading', { name: 'You found a crash bug,' })).toBeVisible();
  });

  test('pagination 10 click', async ({ page }) => {
    const app = new pages.App(page);
    await app.mainPage.pagination1();

    await expect(page.getByRole('heading', { name: 'You found a crash bug,' })).toBeVisible();
  });

  test('imageClick', async ({ page }) => {
    const app = new pages.App(page);
    await app.visual.cardImageCheck();

    await expect(app.visual.mistakeMessage).toBeVisible();
  });
});