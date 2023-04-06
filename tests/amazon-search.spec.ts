import { test, expect } from '@playwright/test';

import { AmazonHomePage } from '../pages/amazon-home-page';
import { AmazonClothingPage } from '../pages/amazon-clothing-page';
import { AmazonBoxToysPage } from '../pages/amazon-box-toys';
import { Helper } from '../pages/helper';


test('Amazon search test', async ({ page }) => {
    const homepage = new AmazonHomePage(page);
    
    await homepage.open();
    await homepage.stayInTheDirectory();
    await homepage.writeInSearchField("clothing");
    await page.waitForLoadState('load');

    const clothingpage = new AmazonClothingPage(page);
    await clothingpage.onTheSearchPageClothing();
    const isUrlMatchclothing = await Helper.includesUrl(page, 'clothing');
    if (isUrlMatchclothing) {
    } else {console.error(`Error: The current URL does not include the expected text 'clothing'.`);
  }
    await clothingpage.clearAndWriteInSearchField("box toys");

    const toyspage = new AmazonBoxToysPage(page);
    await toyspage.onTheSearchPageToys();
    const isUrlMatchToys = await Helper.includesUrl(page, 'box+toys');
    if (isUrlMatchToys) {
    } else {console.error(`Error: The current URL does not include the expected text 'box+toys'.`);
  }
  });