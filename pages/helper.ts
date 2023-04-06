import { Page } from 'playwright';


// перевіряє Url по контейнсу, по тій частині, що вкажеш
export class Helper {
  static async includesUrl(page: Page, urlPart: string): Promise<boolean> {
    const currentUrl = await page.url();
    const urlObject = new URL(currentUrl);
    return urlObject.href.includes(urlPart);
  }

  async delay() {
    return new Promise(resolve => setTimeout(resolve, 3000));
  }

//це на потім, для тестів!
//   const currentUrl = await page.url();
// const urlPart = 'music/unlimited';
// const isUrlMatchUnlimited = await Helper.includesUrl(page, urlPart);

// if (isUrlMatchUnlimited) {
//   console.log(`The current URL (${currentUrl}) includes the text "${urlPart}"`);
// } else {
//   console.error(`Error: The current URL (${currentUrl}) does not include the text "${urlPart}"`);
// }
}