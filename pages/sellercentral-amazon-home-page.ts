import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';

export class SellercentralAmazonHomePage {
    // головна сторінка Sellercentral Amazon Заохочення для нових продавців там не тільки

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://sellercentral.amazon.com/');
    }
}