import { test, expect, Page } from '@playwright/test';

export class VehicleDialog {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async gotoEVCharging() {
        await expect(this.page.getByRole('link', { name: 'EV Charging', exact: true })).toBeVisible();
        await this.page.getByRole('link', { name: 'EV Charging', exact: true }).click();
        await expect(this.page).toHaveURL('https://ampcharge.ampol.com.au');
        await this.page.waitForTimeout(1000);
        //capture a screenshot on ev charging (amp charge)page
        await this.page.screenshot({ path: 'evcharging.png' });
        //verify AMP charge page
        await expect(this.page.getByRole('heading', { name: 'Introducing AmpCharge' })).toBeVisible();
    }
}

