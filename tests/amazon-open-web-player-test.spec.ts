import { test, expect } from '@playwright/test';

import { AmazonHomePage } from '../pages/amazon-home-page';
import { AmazonSmallCatalogWindow } from '../pages/small-catalog-window';
import { AmazonMusicPage } from '../pages/amazon-music-page';
import { AmazonOpenWebPlayer } from '../pages/music-player-amazon-page';
import { Helper } from '../pages/helper';


test('Amazon open web player test', async ({ page }) => {
    const homepage = new AmazonHomePage(page);
    
    await homepage.open();
    await homepage.openSmallCatalog();

    const catalogwindow = new AmazonSmallCatalogWindow(page);

    await catalogwindow.goInSmallCatalogAmazonMusic();
    await catalogwindow.goInSmallCatalogAmazonMusicApp();
    
    const isUrlMatchMusic = await Helper.includesUrl(page, 'www.amazon.com/gp/');
    if (isUrlMatchMusic) {
    } else {console.error(`Error: The current URL does not include the expected text 'www.amazon.com/gp/'.`);
  }

    const musicpage = new AmazonMusicPage(page);
    await new Helper().delay();
    await musicpage.goToOpenWebPlayer();
    await page.waitForLoadState('load');
    const isUrlOpenWebPlayer = await Helper.includesUrl(page, 'music.amazon.com');
    if (isUrlOpenWebPlayer) {
    } else {console.error(`Error: The current URL does not include the expected text 'music.amazon.com'.`);
  }
    
    const playerpage = new AmazonOpenWebPlayer(page)

    await new Helper().delay();
    await playerpage.goToPodcastsPlayer();
    await page.waitForLoadState('load');
    await new Helper().delay();
    const isUrlPodcastsPlayer = await Helper.includesUrl(page, 'podcasts');
    if (isUrlPodcastsPlayer) {
    } else {console.error(`Error: The current URL does not include the expected text 'podcasts'.`);
  }

    await new Helper().delay();
    await playerpage.goToSearchPlayer();
    await page.waitForLoadState('load');
    const isUrlSearchPlayer = await Helper.includesUrl(page, 'music.amazon.com/search');
    if (isUrlSearchPlayer) {
    } else {console.error(`Error: The current URL does not include the expected text 'music.amazon.com/search'.`);
  }

    await new Helper().delay();
    await playerpage.onThePagePodcasts();
    await playerpage.onThePageDJMode();
    await playerpage.onThePageMerch();
  });