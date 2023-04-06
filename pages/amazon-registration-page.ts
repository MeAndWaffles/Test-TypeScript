import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';

export class AmazonRegistrationPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async registr(Name: string, Email: string, Password: string, CheckPassword: string) {
        await this.page.type("//input[@placeholder='First and last name']", Name);
        await this.page.type("//input[@autocomplete='email']", Email);
        await this.page.type("//input[@name='password']", Password);
        await this.page.type("//input[@name='passwordCheck']", CheckPassword);
        await this.page.click("//input[@aria-labelledby='auth-continue-announce']");
    }

    //перевірка поля, появляється коли не вірне поле Email
    async onPageRegistrationAlertEmail(): Promise<boolean> {
        return await isVisible(this.page, "//div[@id='auth-email-invalid-claim-alert']");
    } 

    //перевірка поля, появляється коли не вірне поле Password
    async onPageRegistrationAlertPassword(): Promise<boolean> {
        return await isVisible(this.page, "//div[@id='auth-password-invalid-password-alert']");
    } 

    //перевірка поля, появляється коли не вірне поле  Re-enter password
    async onPageRegistrationAlertPasswordMismatch(): Promise<boolean> {
        return await isVisible(this.page, "//div[@id='auth-password-mismatch-alert']");
    } 
}
