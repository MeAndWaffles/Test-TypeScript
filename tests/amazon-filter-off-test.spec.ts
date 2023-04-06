import { test, expect } from '@playwright/test';

import { AmazonHomePage } from '../pages/amazon-home-page';
import { AmazonClothingPage } from '../pages/amazon-clothing-page';
import { Helper } from '../pages/helper';

test('Amazon filter off test', async ({ page }) => {
    const homepage = new AmazonHomePage(page);

    await homepage.open();
    await homepage.stayInTheDirectory();
    await homepage.writeInSearchField("clothing");
    await page.waitForLoadState('load');

    const clothingpage = new AmazonClothingPage(page);

    await clothingpage.boxFilterOurBrands();
    await clothingpage.boxFilterOurBrandsOf();
    await page.waitForLoadState('load');

    await clothingpage.boxFilterAmazonEssentials();
    await clothingpage.boxFilterAmazonEssentialsOf();
    await page.waitForLoadState('load');
    
    await clothingpage.isElementsAbsent();
    
    // await new Helper().delay();

    // await clothingpage.boxFilterPrice();
    // await clothingpage.boxFilterPriceOf();
    // await page.waitForLoadState('load');
    
    // await new Helper().delay();

    // await clothingpage.boxFilterLast90Days();
    // await clothingpage.boxFilterLast90DaysOf();
    // await page.waitForLoadState('load');
    
    // await clothingpage.boxFilterLayawayEligible();
    // await clothingpage.boxFilterLayawayEligibleOf();
    // await page.waitForLoadState('load');
  });