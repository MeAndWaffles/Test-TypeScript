import { ElementHandle, Page } from 'playwright';

export class ElementWaiter {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForElement(selector: string): Promise<ElementHandle> {
    const element = await this.page.waitForSelector(selector);
    return element;
  }

  // хм, пізніше
//   async waitForElementText(selector: string, text: string): Promise<ElementHandle> {
//     const element = await this.page.waitForSelector(selector, { state: 'visible' });
//     await this.page.waitForFunction(
//       (selector, text) => {
//         const el = document.querySelector(selector);
//         return el && el.textContent.includes(text);
//       },
//       { timeout: 5000 },
//       selector,
//       text
//     );
//     return element;
//   }

  async waitForElementVisible(selector: string): Promise<ElementHandle> {
    const element = await this.page.waitForSelector(selector, { state: 'visible' });
    return element;
  }

  async waitForElementHidden(selector: string): Promise<void> {
    await this.page.waitForSelector(selector, { state: 'hidden' });
  }

  async waitForElementEnabled(selector: string): Promise<ElementHandle> {
    const element = await this.page.waitForSelector(selector, { state: 'visible' });
    await element.waitForElementState('enabled');
    return element;
  }

  async waitForElementDisabled(selector: string): Promise<void> {
    const element = await this.page.waitForSelector(selector, { state: 'visible' });
    await element.waitForElementState('disabled');
  }
}