import { test, expect, Page } from '@playwright/test';
import { Console } from 'console';

export class EnergyPage {
  signupURL: string = 'https://energy.ampol.com.au/sign-up/postcode';
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async gotoSignupPage() {

    console.log("Validating Switch now button is visible");
    await this.page.getByRole('contentinfo').getByRole('link', { name: 'Switch now' }).click();

    console.log("Validating signup URL");
    //Verify URL
    await expect(this.page).toHaveURL(this.signupURL);
    await this.page.waitForTimeout(2000);

    console.log("Taking signup page screenhot")
    //capture a screenshot on signup page
    await this.page.screenshot({ path: 'signup.png' });
  }


}