import { test, expect } from '@playwright/test';

import { AmazonHomePage } from '../pages/amazon-home-page';
import { AmazonLaptopsPage } from '../pages/amazon-laptops-page';


test('Amazon filter test', async ({ page }) => {
    const homepage = new AmazonHomePage(page);
    
    await homepage.open();
    await homepage.stayInTheDirectory();
    await homepage.writeInSearchField("laptops");
    await page.waitForLoadState('load');

    const laptopspage = new AmazonLaptopsPage(page);
    await laptopspage.onTheSearchPageLaptops();
    await laptopspage.boxFilterLenovo();
    await page.waitForLoadState('load');
    await laptopspage.writeInLowPriceField("200","300");
    await page.waitForLoadState('load');
    await laptopspage.checkPriceOfGoods(199,301);
  });