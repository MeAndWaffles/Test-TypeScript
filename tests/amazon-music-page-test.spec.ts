import { test, expect } from '@playwright/test';

import { AmazonHomePage } from '../pages/amazon-home-page';
import { AmazonSmallCatalogWindow } from '../pages/small-catalog-window';
import { AmazonMusicPage } from '../pages/amazon-music-page';
import { Helper } from '../pages/helper';


test('Amazon music page test', async ({ page }) => {
    const homepage = new AmazonHomePage(page);
    
    await homepage.open();
    await homepage.openSmallCatalog();

    const catalogwindow = new AmazonSmallCatalogWindow(page);

    await catalogwindow.goInSmallCatalogAmazonMusic();
    await catalogwindow.goInSmallCatalogAmazonMusicFree();
    
    const isUrlMatchMusic = await Helper.includesUrl(page, 'music/free');
    if (isUrlMatchMusic) {
    } else {console.error(`Error: The current URL does not include the expected text 'music/free'.`);
  }

    const musicpage = new AmazonMusicPage(page);

    await musicpage.goToUnlimited();
    const isUrlMatchUnlimited = await Helper.includesUrl(page, 'music/unlimited');
    if (isUrlMatchUnlimited) {
    } else {console.error(`Error: The current URL does not include the expected text 'music/unlimited'.`);
  }

    await musicpage.goToPodcasts();
    const isUrlMatchPodcasts = await Helper.includesUrl(page, 'music/lp/podcasts');
    if (isUrlMatchPodcasts) {
    } else {console.error(`Error: The current URL does not include the expected text 'music/lp/podcasts'.`);
  }

    await musicpage.goToDownloadApp();
    const isUrlMatchDownloadApp = await Helper.includesUrl(page, 'amazon.com/b/');
    if (isUrlMatchDownloadApp) {
    } else {console.error(`Error: The current URL does not include the expected text 'amazon.com/b/'.`);
  }
  });