import { test, expect } from '@playwright/test';

import { noUser } from './not-a-real-test-date';
import { AmazonHomePage } from '../pages/amazon-home-page';
import { AmazonLoginPage } from '../pages/amazon-login-page';
import { AmazonRegistrationPage } from '../pages/amazon-registration-page';

test('Amazon registration, negative', async ({ page }) => {
    const homepage = new AmazonHomePage(page);

    await homepage.open();
    await homepage.goToLoginPage();

    const loginpage = new AmazonLoginPage(page);
    await loginpage.goToRegistrPage();
    
    // await new AmazonRegistrationPage(page).registr(noUser.Name, noUser.Email ,noUser.Password ,noUser.CheckPassword);

    const registrpage = new AmazonRegistrationPage(page);

    await registrpage.registr(noUser.Name, noUser.Email ,noUser.Password ,noUser.CheckPassword);

    await registrpage.onPageRegistrationAlertEmail();
    await registrpage.onPageRegistrationAlertPassword();
    await registrpage.onPageRegistrationAlertPasswordMismatch();

  });