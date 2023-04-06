import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';

export class AmazonMusicPage {
    // сторінка музикі амазона

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // перейти до  Unlimited
    async goToUnlimited() {
        await this.page.waitForSelector("//a[contains(@aria-label,'Unlimited')]");
        await this.page.click("//a[contains(@aria-label,'Unlimited')]");
    }

    // перейти до  Podcasts
    async goToPodcasts() {
        await this.page.waitForSelector("//a[contains(@aria-label,'Podcasts')]");
        await this.page.click("//a[contains(@aria-label,'Podcasts')]");
    }

    // перейти до  Download the app
    async goToDownloadApp() {
        await this.page.waitForSelector("//a[contains(@aria-label,'app')]");
        await this.page.click("//a[contains(@aria-label,'app')]");
    }

    // перейти до  Open Web Player
    async goToOpenWebPlayer() {
        await this.page.waitForSelector("//a[contains(@href,'sv_dmusic_8')]");
        await this.page.click("//a[contains(@href,'sv_dmusic_8')]");
    }
    
    
}