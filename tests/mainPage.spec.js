// @ts-check
import { test, expect } from '@playwright/test';
import * as pages from '../src/pages/index';
import 'dotenv/config';

test.describe.serial('Main page', () => {
  test('pagination 50 click', async ({ page }) => {
    const mainPage = new pages.Crash(page);

    await mainPage.open(process.env.MAIN_URL);
    await mainPage.pagination();

    await expect(page.getByRole('heading', { name: 'You found a crash bug,' })).toBeVisible();
  });

  test('pagination 10 click', async ({ page }) => {
    const mainPage = new pages.Crash(page);

    await mainPage.open(process.env.MAIN_URL);
    await mainPage.pagination1();

    await expect(page.getByRole('heading', { name: 'You found a crash bug,' })).toBeVisible();
  });

  test('imageClick', async ({ page }) => {
    const mainPage = new pages.Crash(page);
    const visual = new pages.Visual(page);

    await mainPage.open(process.env.MAIN_URL);
    await visual.cardImageCheck();

    await expect(visual.mistakeMessage).toBeVisible();
  });
});