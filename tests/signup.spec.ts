import { test, expect } from '@playwright/test';
import { HomePage } from '../src/home.page';
import { VehicleDialog } from '../src/vehicle.dialog';
import { ChargePage } from '../src/charge.page';
import { EnergyPage } from '../src/energy.page';


test('Signup test', async ({ page }) => {
  const homePage: HomePage = new HomePage(page);
  const vehicleDialog: VehicleDialog = new VehicleDialog(page);
  const chargePage: ChargePage = new ChargePage(page);
  const energyPage: EnergyPage = new EnergyPage(page);
  
  // interact with home page object
  await homePage.gotoHomePage(); 
  await homePage.gotoVehicleDialog();

  // interact with vehicle dialog object
  await vehicleDialog.gotoEVCharging();

  //interact with charge page object
  await chargePage.gotoEnergyPage();

  //interact with energy page object
  await energyPage.gotoSignupPage();

});