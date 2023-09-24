import { test, expect } from '@playwright/test';

test('WeatherAPI test', async ({ page }) => {

    try {
        console.log("Starting API test...");
        const response = await page.request.get('https://api.weatherapi.com/v1/current.json', {
            params: {
                'Key': 'a1d00a04f312407cb0670944232209',
                'q': 'Sydney',
                'aqi': 'no',
            }
        });

        //   console.log('Response from weatherAPI ' + await response.body());
        const responseBody = JSON.parse(await response.text());
        expect(response.ok()).toBeTruthy();
        console.log("API response validated to be Ok");
        const locationName = responseBody.location.name;
        expect(locationName).toBe('Sydney');
        console.log("Response location validated to be Sydney");
        const temperature = responseBody.current.temp_c;
        console.log(locationName + ' temperature in degree C ' + temperature);
    } catch (e) {
        console.error("Unexpected error occured", e);
        await page.screenshot({ path: 'error.png' });
        await page.close();
        expect('success').toBe('Test failed with unexpected error, please see logs');

    }

});

