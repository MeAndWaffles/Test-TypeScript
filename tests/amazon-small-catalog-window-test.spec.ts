import { test, expect } from '@playwright/test';

import { AmazonHomePage } from '../pages/amazon-home-page';
import { AmazonSmallCatalogWindow } from '../pages/small-catalog-window';
import { Helper } from '../pages/helper';


test('Amazon small catalog window test', async ({ page }) => {
    const homepage = new AmazonHomePage(page);
    
    await homepage.open();
    await homepage.openSmallCatalog();

    const catalogwindow = new AmazonSmallCatalogWindow(page);
    await catalogwindow.goInSmallCatalogAmazonMusic();
    await catalogwindow.goInSmallCatalogAmazonMusicUnlimited();
    await page.waitForLoadState('load');
    
    const isUrlMatchMusic = await Helper.includesUrl(page, 'music');
    if (isUrlMatchMusic) {
    } else {console.error(`Error: The current URL does not include the expected text 'music'.`);
  }

    await catalogwindow.openSmallCatalog();
    await catalogwindow.goInSmallCatalogAmazonAppstore();
    await catalogwindow.goInSmallCatalogAmazonMusicGame();
    await page.waitForLoadState('load');

    const isUrlMatchGame = await Helper.includesUrl(page, 'www.amazon.com/gp');
    if (isUrlMatchGame) {
    } else {console.error(`Error: The current URL does not include the expected text 'www.amazon.com/gp'.`);
  }
    
  });