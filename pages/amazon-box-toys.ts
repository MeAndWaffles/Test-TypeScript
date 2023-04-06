import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';


export class AmazonBoxToysPage {
    // сторінка іграшок Amazon

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto(' ');
    }
    
    // чи є елемент коли заходиш з пошуку з назвою пошуку
    async onTheSearchPageToys(): Promise<boolean> {
        return await isVisible(this.page, "//span[@class='a-color-state a-text-bold'][contains(.,'box toys')]");
    } 

    // Black фільтр 
    async boxFilterBlack() {
        await this.page.waitForSelector("//div[@class='colorsprite aok-float-left'][contains(@style,':0px')]");
        await this.page.click("//div[@class='colorsprite aok-float-left'][contains(@style,':0px')]");
    }

    // Gray фільтр 
    async boxFilterGray() {
        await this.page.waitForSelector("//div[@class='colorsprite aok-float-left'][contains(@style,':-100px')]");
        await this.page.click("//div[@class='colorsprite aok-float-left'][contains(@style,':-100px')]");
    }

    // OF фільтр 
    async boxFilterColorOfAll() {
        await this.page.waitForSelector("//ul[@data-csa-c-content-id='2488252011']/child::li[contains(@class,'item')]/child::*");
        await this.page.click("//ul[@data-csa-c-content-id='2488252011']/child::li[contains(@class,'item')]/child::*");
    }

    // White фільтр 
    async boxFilterWhite() {
        await this.page.waitForSelector("//div[@class='colorsprite aok-float-left'][contains(@style,':-200px')]");
        await this.page.click("//div[@class='colorsprite aok-float-left'][contains(@style,':-200px')]");
    }





}