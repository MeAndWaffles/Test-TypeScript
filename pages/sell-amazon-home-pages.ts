import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';

export class SellAmazonHomePage {
    // головна сторінка Sell Amazon на яку можна перейти з Amazon, де заманють продавців і ніби тому подібне

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://sell.amazon.com/');
    }
    
    // перейти до "Заохочення для нових продавців" це головній але там дві кнопки, обережно, перейде на інший сайт
    async goToNewSellerIncentives() {
        await this.page.waitForSelector("//div[contains(@class,'ter color-w')]");
        await this.page.click("//div[contains(@class,'ter color-w')]");
    }

    // перейти до "дізнатися більше", це на новій сторінці і інший сайт, перейде на ще один
    async goToLearnmore() {
        await this.page.waitForSelector("//a[contains(@class,'external-dark')]");
        await this.page.click("//a[contains(@class,'external-dark')]");
    }
}