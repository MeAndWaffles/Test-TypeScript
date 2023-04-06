import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';

export class AmazonLoginPage {
    // головна сторінка Amazon

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://www.amazon.com/');
    }

    // відкрити регістр сторінку
    async goToRegistrPage() {
        await this.page.waitForSelector("//a[@id='createAccountSubmit']");
        await this.page.click("//a[@id='createAccountSubmit']");
    }

}