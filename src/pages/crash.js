import * as pages from './index';

export class Crash {
    constructor(page) {
        this.page = page;
        this.acceptButton = this.page.getByRole('button', { name: 'Accept cookies' });
        this.paginationOver = this.page.getByRole('link', { name: '50' });
        this.paginationAbove = this.page.locator('a.what-we-offer-pagination-link').filter({ hasText: '10' });
    }

    async open(url) {
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    }

    async pagination() {
        await this.paginationOver.click();
    }

    async pagination1() {
        await this.paginationAbove.click();
    }
}