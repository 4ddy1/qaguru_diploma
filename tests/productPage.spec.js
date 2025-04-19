// @ts-check
import { test, expect } from '@playwright/test';
import * as pages from '../src/pages/index';
import 'dotenv/config';

test.describe.serial('Product page', () => {
  test('twitter click', async ({ page }) => {
    const mainPage = new pages.Crash(page);
    const visual = new pages.Visual(page);
    const product = new pages.Product(page);

    await mainPage.open(process.env.MAIN_URL);
    await visual.cardLinkCheck();
    await product.twitterLinkClick();

    await expect(product.mistakeMessage).toBeVisible();
  });

  test('Product comment', async ({ page }) => {
    const mainPage = new pages.Crash(page);
    const visual = new pages.Visual(page);
    const product = new pages.Product(page);

    await mainPage.open(process.env.MAIN_URL);
    await visual.cardLinkCheck();
    await product.addComment("adilTest");

    await expect(product.mistakeMessage).toBeVisible({timeout:25000});
  });
});