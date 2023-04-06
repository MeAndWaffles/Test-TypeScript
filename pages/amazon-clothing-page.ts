import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';


export class AmazonClothingPage {
    // сторінка одягу Amazon

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://www.amazon.com/s?k=clothing');
    }

    // чи є елемент коли заходиш з пошуку з назвою пошуку
    async onTheSearchPageClothing(): Promise<boolean> {
        return await isVisible(this.page, "//span[@class='a-color-state a-text-bold'][contains(.,'clothing')]");
    } 


    // поле в пошуку, щоб щось таки шукати і стерти перед цим все що в полі
    async clearAndWriteInSearchField(search: string) {
        const inputField = await this.page.waitForSelector("//input[@name='field-keywords']");
        await inputField.evaluate((input: HTMLInputElement) => {
        input.value = '';
        });
        await this.page.type("//input[@name='field-keywords']", search);
        await this.page.waitForSelector("//input[@value='Go']");
        await this.page.click("//input[@value='Go']");
    }

    // Amazon Fashion фільтр Our Brands
    async boxFilterOurBrands() {
        await this.page.waitForSelector("//li[contains(@id,'16926165011')]/child::*");
        await this.page.click("//li[contains(@id,'16926165011')]/child::*");
    }
    

    // Amazon Fashion фільтр Our Brands OF
    async boxFilterOurBrandsOf() {
        await this.page.waitForSelector("//ul[@data-csa-c-content-id='14630382011']/child::li[contains(@class,'item')]/child::*");
        await this.page.click("//ul[@data-csa-c-content-id='14630382011']/child::li[contains(@class,'item')]/child::*");
    }

    // Brand фільтр Amazon Essentials
    async boxFilterAmazonEssentials() {
        await this.page.waitForSelector("//li[contains(@id,'p_89/Amazon')]/child::*");
        await this.page.click("//li[contains(@id,'p_89/Amazon')]/child::*");
    }

    // Brand фільтр Amazon Essentials OF
    async boxFilterAmazonEssentialsOf() {
        await this.page.waitForSelector("//ul[@data-csa-c-content-id='2528832011']/child::li[contains(@class,'item')]/child::*");
        await this.page.click("//ul[@data-csa-c-content-id='2528832011']/child::li[contains(@class,'item')]/child::*");
    }

    // Price фільтр 25$50$
    async boxFilterPrice() {
        await this.page.waitForSelector("//li[contains(@id,'2661613011')]/child::*");
        await this.page.click("//li[contains(@id,'2661613011')]/child::*");
    }

    // Price фільтр 25$50$ OF
    async boxFilterPriceOf() {
        await this.page.waitForSelector("//ul[@data-csa-c-content-id='2661611011']/child::li[contains(@class,'item')]/child::*");
        await this.page.click("//ul[@data-csa-c-content-id='2661611011']/child::li[contains(@class,'item')]/child::*");
    }

    // New Arrivals фільтр Last 90 days
    async boxFilterLast90Days() {
        await this.page.waitForSelector("//li[contains(@id,'15196853011')]/child::*");
        await this.page.click("//li[contains(@id,'15196853011')]/child::*");
    }

    // New Arrivals фільтр Last 90 days OF
    async boxFilterLast90DaysOf() {
        await this.page.waitForSelector("//ul[@data-csa-c-content-id='15196851011']/child::li[contains(@class,'item')]/child::*");
        await this.page.click("//ul[@data-csa-c-content-id='15196851011']/child::li[contains(@class,'item')]/child::*");
    }

    // Payment Plan фільтр Layaway Eligible
    async boxFilterLayawayEligible() {
        await this.page.waitForSelector("//li[contains(@id,'24003598011')]/child::*");
        await this.page.click("//li[contains(@id,'24003598011')]/child::*");
    }
    
    // Payment Plan фільтр Layaway Eligible OF
    async boxFilterLayawayEligibleOf() {
        await this.page.waitForSelector("//ul[@data-csa-c-content-id='24003597011']/child::li[contains(@class,'item')]/child::*");
        await this.page.click("//ul[@data-csa-c-content-id='24003597011']/child::li[contains(@class,'item')]/child::*");
    }

    
    // перевіряє чи є елемент, якщо немає то все добре 
    async isElementsAbsent(): Promise<boolean> {
        const elements = await this.page.$$("//ul[contains(@data-csa-c-content-id,'')]/child::li[contains(@class,'item')]/child::*");
        return elements.length === 0;
      }
    
}