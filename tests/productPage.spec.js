// @ts-check
import { test, expect } from '@playwright/test';
import * as pages from '../src/pages/index';
import 'dotenv/config';

test.describe('Product page', () => {
    test.beforeEach(async ({page}) => {
      const app = new pages.App(page);
      await app.mainPage.open(process.env.MAIN_URL);
    })
    test('twitter click', async ({ page }) => {
      const app = new pages.App(page);
      await app.visual.cardLinkCheck();
      await app.product.twitterLinkClick();

      await expect(app.product.mistakeMessage).toBeVisible();
  });

  test('Product comment', async ({ page }) => {
    const app = new pages.App(page);
    await app.visual.cardLinkCheck();
    await app.product.addComment("adilTest");

    await expect(app.product.mistakeMessage).toBeVisible();
  });
});