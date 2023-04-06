import { test, expect } from '@playwright/test';

import { AmazonHomePage } from '../pages/amazon-home-page';
import { AmazonBoxToysPage } from '../pages/amazon-box-toys';
import { Helper } from '../pages/helper';

test('Amazon filter color test', async ({ page }) => {
    const homepage = new AmazonHomePage(page);

    await homepage.open();
    await homepage.stayInTheDirectory();
    await homepage.writeInSearchField("box toys");
    await page.waitForLoadState('load');

    const toyspage = new AmazonBoxToysPage(page);
    await toyspage.boxFilterBlack();
    const isUrlMatchBlack = await Helper.includesUrl(page, '3A2488255011');
    if (isUrlMatchBlack) {
    } else {console.error(`Error: The current URL does not include the expected text '3A2488255011'.`);
  }
    await toyspage.boxFilterGray();
    const isUrlMatchGray = await Helper.includesUrl(page, '3A2488255011%7C2488256011');
    if (isUrlMatchGray) {
    } else {console.error(`Error: The current URL does not include the expected text '3A2488255011'.`);
  }
    await toyspage.boxFilterColorOfAll();
    const isUrlMatchColorOfAll = await Helper.includesUrl(page, '2488252011');
    if (isUrlMatchColorOfAll) {
    } else {console.error(`Error: The current URL does not include the expected text '3A2488255011'.`);
  }
    await toyspage.boxFilterWhite();
    const isUrlMatchWhite = await Helper.includesUrl(page, '3A2488257011');
    if (isUrlMatchWhite) {
    } else {console.error(`Error: The current URL does not include the expected text '3A2488255011'.`);
  }

  });