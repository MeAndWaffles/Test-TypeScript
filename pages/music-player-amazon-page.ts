import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';

export class AmazonOpenWebPlayer {
    // сторінка музикі амазона

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://music.amazon.com/');
    }

    // перейти до Podcasts Player
    async goToPodcastsPlayer() {
        await this.page.waitForSelector("//music-button[@aria-label='Podcasts']/parent::*");
        await this.page.click("//music-button[@aria-label='Podcasts']/parent::*");
    }

    // перейти до Search Player
    async goToSearchPlayer() {
        await this.page.waitForSelector("//input[@placeholder='Search']");
        await this.page.click("//input[@placeholder='Search']");
    }

    // чи є елемент на сторінці пошуку Podcasts
    async onThePagePodcasts(): Promise<boolean> {
        return await isVisible(this.page, "//music-pill-item[@id='pillNavigatorButton1']/parent::*");
    } 

    // чи є елемент на сторінці пошуку DJ Mode
    async onThePageDJMode(): Promise<boolean> {
        return await isVisible(this.page, "//music-pill-item[@id='pillNavigatorButton2']/parent::*");
    } 

    // чи є елемент на сторінці пошуку Merch
    async onThePageMerch(): Promise<boolean> {
        return await isVisible(this.page, "//music-pill-item[@id='pillNavigatorButton3']/parent::*");
    } 
}