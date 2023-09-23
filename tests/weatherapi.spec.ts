import { test, expect } from '@playwright/test';

test('WeatherAPI test', async ({ page }) => {
    const response = await page.request.get('https://api.weatherapi.com/v1/current.json',{
        params: {
            'Key': 'a1d00a04f312407cb0670944232209',
            'q' : 'Sydney',
            'aqi': 'no',
        }
    });

 //   console.log('Response from weatherAPI ' + await response.body());
    const responseBody = JSON.parse(await response.text());
    expect(response.ok()).toBeTruthy();
    const locationName = responseBody.location.name;
    expect(locationName).toBe('Sydney');
    const temperature = responseBody.current.temp_c;
    console.log(locationName + ' temperature in degree C ' + temperature);

});

