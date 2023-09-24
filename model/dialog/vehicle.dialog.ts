import { test, expect, Page } from '@playwright/test';

export class VehicleDialog {
    chargeURL: string = 'https://ampcharge.ampol.com.au';
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async gotoEVCharging() {
        //Verify EV charging link visible
        await expect(this.page.getByRole('link', { name: 'EV Charging', exact: true })).toBeVisible();
        await this.page.getByRole('link', { name: 'EV Charging', exact: true }).click();

        console.log("Validating charge URL");
        //Verify URL
        await expect(this.page).toHaveURL(this.chargeURL);
        await this.page.waitForTimeout(1000);
        //capture a screenshot on ev charging (amp charge)page
        await this.page.screenshot({ path: 'evcharging.png' });
        //verify AMP charge page
        await expect(this.page.getByRole('heading', { name: 'Introducing AmpCharge' })).toBeVisible();
    }
}

