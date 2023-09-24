import { test, expect, Page } from '@playwright/test';

export class HomePage {
  homeURL: string = 'https://www.ampol.com.au/';
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async gotoHomePage() {
    await this.page.goto(this.homeURL);
    console.log("Validating home page is visible");
    //Verify Ampol home is visible
    await expect(this.page.getByAltText("Ampol Home")).toBeVisible();
    console.log("Taking homepage screenshot");
    //capture a screenshot on home page
    await this.page.screenshot({ path: 'homepage.png' });
  }

  async gotoVehicleDialog() {
    console.log("Validating your vehicle link is visible");
    //Verify vehicle link visible
    await expect(this.page.getByRole('link', { name: 'Your Vehicle' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Your Vehicle' }).hover();
    await this.page.waitForTimeout(1000);
    console.log("Taking your vehicle link hover dialog screenhot")
    //capture a screenshot on vehicle dialog
    await this.page.screenshot({ path: 'hoverovervehicle.png' });
  }
}