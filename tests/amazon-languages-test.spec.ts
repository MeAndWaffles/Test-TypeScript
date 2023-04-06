import { test, expect } from '@playwright/test';

import { AmazonHomePage } from '../pages/amazon-home-page';
import { AmazonLanguagesPage } from '../pages/amazon-languages-page';
import { Helper } from '../pages/helper';


test('Amazon languages test', async ({ page }) => {
    const homepage = new AmazonHomePage(page);
    
    await homepage.open();
    await homepage.stayInTheDirectory();
    const isUrlEnglish = await Helper.includesUrl(page, 'en_US');
        if (isUrlEnglish) {
        } else {console.error(`Error: The current URL does not include the expected text 'en_US'.`);
    }

    await homepage.goToLanguagesPage();
    const languagespage = new AmazonLanguagesPage(page);
    await languagespage.switchToSpanish();
    const isUrlSpanish = await Helper.includesUrl(page, 'es_US');
        if (isUrlSpanish) {
        } else {console.error(`Error: The current URL does not include the expected text 'es_US'.`);
    }

    await homepage.goToLanguagesPage();
    await languagespage.switchToArabic();
    const isUrlArabic = await Helper.includesUrl(page, 'ar_AE');
        if (isUrlArabic) {
        } else {console.error(`Error: The current URL does not include the expected text 'ar_AE'.`);
    }

    await homepage.goToLanguagesPage();
    await languagespage.switchToDeutsch();
    const isUrlDeutsch = await Helper.includesUrl(page, 'de_DE');
        if (isUrlDeutsch) {
        } else {console.error(`Error: The current URL does not include the expected text 'de_DE'.`);
    }

    await homepage.goToLanguagesPage();
    await languagespage.switchToHebrew();
    const isUrlHebrew = await Helper.includesUrl(page, 'he_IL');
        if (isUrlHebrew) {
        } else {console.error(`Error: The current URL does not include the expected text 'he_IL'.`);
    }
  });