import { test, expect } from '@playwright/test';
import { HomePage } from '../model/pages/home.page';
import { VehicleDialog } from '../model/dialog/vehicle.dialog';
import { ChargePage } from '../model/pages/charge.page';
import { EnergyPage } from '../model/pages/energy.page';


test('Signup test', async ({ page }) => {
  const homePage: HomePage = new HomePage(page);
  const vehicleDialog: VehicleDialog = new VehicleDialog(page);
  const chargePage: ChargePage = new ChargePage(page);
  const energyPage: EnergyPage = new EnergyPage(page);
  
  try {
  console.log("Starting UI test...");
  console.log("Navigating to home page");
  // interact with home page object
  await homePage.gotoHomePage(); 

  console.log("Hover over your vehicle menu");
  await homePage.gotoVehicleDialog();

  console.log("Navigating to EV charging");
  // interact with vehicle dialog object
  await vehicleDialog.gotoEVCharging();

  console.log("Navigating to energy page");
  //interact with charge page object
  await chargePage.gotoEnergyPage();

  console.log("Navigating to sign up page")
  //interact with energy page object
  await energyPage.gotoSignupPage();
  } catch(e) {
      console.error("Unexpected error occured", e);
      await page.screenshot({ path: 'error.png' });
      await page.close();
      expect('success').toBe('Test failed with unexpected error, please see logs');
  } 
});
