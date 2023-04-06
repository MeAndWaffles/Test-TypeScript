import type { Page } from 'playwright';
import { ElementHandle } from 'playwright';
import { isVisible } from '../framework/common-actions';


export class AmazonLaptopsPage {
    // сторінка ноутів Amazon

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto(' ');
    }

    // чи є елемент коли заходиш з пошуку з назвою пошуку
    async onTheSearchPageLaptops(): Promise<boolean> {
        return await isVisible(this.page, "//span[@class='a-color-state a-text-bold'][contains(.,'laptops')]");
    } 

    // нажати на фільтр ленова
    async boxFilterLenovo() {
        await this.page.waitForSelector("//li[@id='p_89/Lenovo']/child::*");
        await this.page.click("//li[@id='p_89/Lenovo']/child::*");
    }

    // поле ціни від і до
    async writeInLowPriceField(LowPrice: string, HighPrice: string ) {
        await this.page.waitForSelector("//input[@name='low-price']");
        await this.page.type("//input[@name='low-price']", LowPrice);
        await this.page.waitForSelector("//input[@name='high-price']");
        await this.page.type("//input[@name='high-price']", HighPrice);
        await this.page.waitForSelector("//input[contains(@aria-labelledby,'announce')]");
        await this.page.click("//input[contains(@aria-labelledby,'announce')]");
    }

    // взяти лист, поміняти на числові
    async getPriceOfGoods(): Promise<number[]> {
        await this.page.waitForSelector("//span[@class='a-price-whole']");
        const numbersList = await this.page.$$eval("//span[@class='a-price-whole']", liList => liList.map(li => parseInt(li.textContent ?? '')));
        return numbersList;
      }

    // не меньше і не більше вказаних
    async checkPriceOfGoods( min: number, max: number): Promise<boolean> {
        const numbersList = await this.getPriceOfGoods();
        return numbersList.length === 1 && numbersList[0] >= min && numbersList[0] <= max;
      }

      
    // // поле ціни до 
    // async writeInHighPriceField(search: string) {
    //     await this.page.waitForSelector("//input[@name='high-price']");
    //     await this.page.type("//input[@name='high-price']", search);
    //     await this.page.waitForSelector("//input[@aria-labelledby='a-autoid-5-announce']");
    //     await this.page.click("//input[@aria-labelledby='a-autoid-5-announce']");
    // }
}