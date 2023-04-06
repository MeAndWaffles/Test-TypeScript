import { test, expect } from '@playwright/test';

import { AmazonHomePage } from '../pages/amazon-home-page';
import { SellAmazonHomePage } from '../pages/sell-amazon-home-pages';
import { Helper } from '../pages/helper';


test('Open Amazon', async ({ page }) => {
    const homepage = new AmazonHomePage(page);
    
    await homepage.open();
    await homepage.stayInTheDirectory();
    await homepage.goToSell();
    await page.waitForLoadState('load');

    const homepageSell = new SellAmazonHomePage(page);
    await homepageSell.goToNewSellerIncentives();
    await page.waitForLoadState('load');

    const isUrlMatch = await Helper.includesUrl(page, 'sell.amazon.com');
    if (isUrlMatch) {
    } else {console.error(`Error: The current URL does not include the expected text 'sell.amazon.com'.`);
  }
  });