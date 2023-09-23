import { test, expect, Page } from '@playwright/test';

export class EnergyPage {
  signupURL: string = 'https://energy.ampol.com.au/sign-up/postcode';
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async gotoSignupPage() {

    await this.page.getByRole('contentinfo').getByRole('link', { name: 'Switch now' }).click();
    //Verify URL
    await expect(this.page).toHaveURL(this.signupURL);
    await this.page.waitForTimeout(2000);
    //capture a screenshot on signup page
    await this.page.screenshot({ path: 'signup.png' });
  }


}