import { test, expect, Page } from '@playwright/test';

export class HomePage {
    homeURL: string = 'https://www.ampol.com.au/';
    page: Page;
    constructor(page: Page) {
      this.page = page;
    }
   
    async gotoHomePage() {
      await this.page.goto(this.homeURL);
      await expect(this.page.getByAltText("Ampol Home")).toBeVisible();
    }

    async gotoVehicle() {
        await expect( this.page.getByRole('link', { name: 'Your Vehicle' })).toBeVisible();
        await this.page.getByRole('link', { name: 'Your Vehicle' }).hover();
        await this.page.waitForTimeout(1000);
        await expect(this.page.getByRole('link', {name:'EV Charging', exact: true})).toBeVisible();
       // this.page.getByRole('link', {name:'EV Charging', exact: true}).click();
    }
}