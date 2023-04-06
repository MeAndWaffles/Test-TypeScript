import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';

export class AmazonHomePage {
    // головна сторінка Amazon

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://www.amazon.com/');
    }

    //кнопка що питає чи змінити місце, вікно заважає тому обовязково нажимати
    async stayInTheDirectory() {
        await this.page.waitForSelector("//input[@data-action-type='DISMISS']");
        await this.page.click("//input[@data-action-type='DISMISS']");
    }

    // піти до "продажи"
    async goToSell() {
        await this.page.waitForSelector("//a[@data-csa-c-content-id='nav_cs_sell']");
        await this.page.click("//a[@data-csa-c-content-id='nav_cs_sell']");
    }

    // кнопка в пошуку, це "шукати в" чи "все"
    async buttonSearchIn() {
        await this.page.waitForSelector("//div[@class='nav-search-scope nav-sprite']");
        await this.page.click("//div[@class='nav-search-scope nav-sprite']");
    }

    // поле в пошуку, щоб щось таки шукати
    async writeInSearchField(search: string) {
        await this.page.waitForSelector("//input[@name='field-keywords']");
        await this.page.type("//input[@name='field-keywords']", search);
        await this.page.waitForSelector("//input[@value='Go']");
        await this.page.click("//input[@value='Go']");
    }

    // відкрити вікно каталог і не тільки
    async openSmallCatalog() {
        await this.page.waitForSelector("//i[@class='hm-icon nav-sprite']");
        await this.page.click("//i[@class='hm-icon nav-sprite']");
    }

    // відкрити сторінку мов
    async goToLanguagesPage() {
        await this.page.waitForSelector("//span[@class='nav-line-2']/span[contains(@class,'cp-nav')]");
        await this.page.click("//span[@class='nav-line-2']/span[contains(@class,'cp-nav')]");
    }

    // відкрити логін сторінку
    async goToLoginPage() {
        await this.page.waitForSelector("//a[@id='nav-link-accountList']");
        await this.page.click("//a[@id='nav-link-accountList']");
    }
    



    // // перейти до "Заохочення для нових продавців" це на новій сторінці і той самий сайт, перейде на інший сайт
    // async goToNewSellerIncentives() {
    //     await this.page.waitForSelector("//div[contains(@class,'ter color-w')]");
    //     await this.page.click("//div[contains(@class,'ter color-w')]");
    // }

    // // перейти до "дізнатися більше", це на новій сторінці і інший сайт, перейде на ще один
    // async goToLearnmore() {
    //     await this.page.waitForSelector("//a[contains(@class,'external-dark')]");
    //     await this.page.click("//a[contains(@class,'external-dark')]");
    // }
    
    // async userIsLoggedIn(): Promise<boolean> {
    //     return await isVisible(this.page, 'a[routerlink="/editor"]');
    // } 

    // async goToSettings() {
    //     await this.page.click('a[routerlink="/settings"]');
    // }
}