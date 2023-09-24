import { test, expect, Page } from '@playwright/test';

export class ChargePage {
  energyURL: string = 'https://energy.ampol.com.au';
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async gotoEnergyPage() {
    await this.page.locator('//div[@class="nav-bar--level-1--content--brands"]/a[2]').click();
    console.log("Validating energy URL");
    //Verify URL
    await expect(this.page).toHaveURL(this.energyURL);
    await this.page.waitForTimeout(1000);
    console.log("Taking energy page screenhot")
    //capture a screenshot on energy page
    await this.page.screenshot({ path: 'energy.png' });
  }


}