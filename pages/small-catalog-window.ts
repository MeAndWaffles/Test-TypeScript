import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';

export class AmazonSmallCatalogWindow {
    // головна сторінка Amazon

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // відкрити вікно каталог і не тільки
    async openSmallCatalog() {
        await this.page.waitForSelector("//i[@class='hm-icon nav-sprite']");
        await this.page.click("//i[@class='hm-icon nav-sprite']");
    }

    // у вікні перейти до музикі амазона
    async goInSmallCatalogAmazonMusic() {
        await this.page.waitForSelector("//a[@data-ref-tag='nav_em_1_1_1_2']");
        await this.page.click("//a[@data-ref-tag='nav_em_1_1_1_2']");
    }

    // у вікні перейти до музикі амазона Unlimited
    async goInSmallCatalogAmazonMusicUnlimited() {
        await this.page.waitForSelector("//a[contains(@href,'0_2_2_2')]");
        await this.page.click("//a[contains(@href,'0_2_2_2')]");
    }

    // у вікні перейти до Appstore амазона
    async goInSmallCatalogAmazonAppstore() {
        await this.page.waitForSelector("//a[@data-ref-tag='nav_em_1_1_1_4']");
        await this.page.click("//a[@data-ref-tag='nav_em_1_1_1_4']");
    }

    // у вікні перейти до Game амазона
    async goInSmallCatalogAmazonMusicGame() {
        await this.page.waitForSelector("//a[contains(@href,'0_2_4_3')]");
        await this.page.click("//a[contains(@href,'0_2_4_3')]");
    }
    

    // у вікні перейти до музикі амазона Free
    async goInSmallCatalogAmazonMusicFree() {
        await this.page.waitForSelector("//a[contains(@href,'nw_0_2_2_3')]");
        await this.page.click("//a[contains(@href,'nw_0_2_2_3')]"); 
    }
    // у вікні перейти до музикі амазона webplayer
    async goInSmallCatalogAmazonMusicWebPlayer() {
        await this.page.waitForSelector("//a[contains(@href,'webplayer_0_2_2_5')]");
        await this.page.click("//a[contains(@href,'webplayer_0_2_2_5')]"); 
    }

    // у вікні перейти до музикі амазона App
    async goInSmallCatalogAmazonMusicApp() {
        await this.page.waitForSelector("//a[contains(@href,'ms_0_2_2_7')]");
        await this.page.click("//a[contains(@href,'ms_0_2_2_7')]"); 
    }
    
}