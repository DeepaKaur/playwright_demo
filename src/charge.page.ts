import { test, expect, Page } from '@playwright/test';

export class ChargePage {
    energyURL: string = 'https://energy.ampol.com.au';
    page: Page;
    constructor(page: Page) {
      this.page = page;
    }
   
    async clickEnergyIconOnPage() {
      
      await this.page.getByRole('link' , {name: this.energyURL}).click();
      //Verify sign-up link is visible
      await expect(this.page.getByRole('link', {name: '/sign-up/postcode'})).toBeVisible();
    }


}