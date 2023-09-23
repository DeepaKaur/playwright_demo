import { test, expect } from '@playwright/test';
import { HomePage } from '../src/home.page';
import { VehicleDialog } from '../src/vehicle.dialog';


test('Signup test', async ({ page }) => {
  const homepage: HomePage = new HomePage(page);
  const vehicleDialog: VehicleDialog = new VehicleDialog(page);
  
  // interact with home page object
  await homepage.gotoHomePage(); 
  await homepage.gotoVehicleDialog();

  // interact with vehicle dialog object
  await vehicleDialog.gotoEVCharging();
});