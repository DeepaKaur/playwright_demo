import { test, expect } from '@playwright/test';
import { HomePage } from '../src/home.page';


test('Signup test', async ({ page }) => {
  const homepage: HomePage = new HomePage(page);
  await homepage.gotoHomePage(); 
  await homepage.gotoVehicle();
});