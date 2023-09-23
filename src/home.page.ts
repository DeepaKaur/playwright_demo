import { test, expect, Page } from '@playwright/test';

export class HomePage {
  homeURL: string = 'https://www.ampol.com.au/';
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async gotoHomePage() {
    await this.page.goto(this.homeURL);
    //Verify Ampol home is visible
    await expect(this.page.getByAltText("Ampol Home")).toBeVisible();
    //capture a screenshot on home page
    await this.page.screenshot({ path: 'homepage.png' });
  }

  async gotoVehicleDialog() {
    //Verify vehicle link visible
    await expect(this.page.getByRole('link', { name: 'Your Vehicle' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Your Vehicle' }).hover();
    await this.page.waitForTimeout(1000);
    //capture a screenshot on vehicle dialog
    await this.page.screenshot({ path: 'hoverovervehicle.png' });
  }
}