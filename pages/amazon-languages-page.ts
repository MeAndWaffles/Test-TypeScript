import type { Page } from 'playwright';
import { ElementHandle } from 'playwright';
import { isVisible } from '../framework/common-actions';


export class AmazonLanguagesPage {
    // сторінка ноутів Amazon

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto(' ');
    }

    // поміняти на español
    async switchToSpanish() {
        await this.page.waitForSelector("//span[contains(.,'espa')]/parent::span");
        await this.page.click("//span[contains(.,'espa')]/parent::span");
        await this.page.waitForSelector("//input[contains(@aria-labelledby,'announce')]");
        await this.page.click("//input[contains(@aria-labelledby,'announce')]");
    }

    // поміняти на Arabic
    async switchToArabic() {
        await this.page.waitForSelector("//span[contains(.,'ربية')]/parent::span");
        await this.page.click("//span[contains(.,'ربية')]/parent::span");
        await this.page.waitForSelector("//input[contains(@aria-labelledby,'announce')]");
        await this.page.click("//input[contains(@aria-labelledby,'announce')]");
    }

    // поміняти на Deutsch
    async switchToDeutsch() {
        await this.page.waitForSelector("//span[contains(.,'Deutsch')]/parent::span");
        await this.page.click("//span[contains(.,'Deutsch')]/parent::span");
        await this.page.waitForSelector("//input[contains(@aria-labelledby,'announce')]");
        await this.page.click("//input[contains(@aria-labelledby,'announce')]");
    }

    // поміняти на Hebrew
    async switchToHebrew() {
        await this.page.waitForSelector("//span[contains(.,'רית')]/parent::span");
        await this.page.click("//span[contains(.,'רית')]/parent::span");
        await this.page.waitForSelector("//input[contains(@aria-labelledby,'announce')]");
        await this.page.click("//input[contains(@aria-labelledby,'announce')]");
    }


}