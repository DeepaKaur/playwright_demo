import { test, expect } from '@playwright/test';
import Ajv from 'ajv';

const jsonSchema = {
    "type": "object",
    "properties": {
        "location": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "region": {
                    "type": "string"
                },
                "country": {
                    "type": "string"
                },
                "lat": {
                    "type": "number"
                },
                "lon": {
                    "type": "number"
                },
                "tz_id": {
                    "type": "string"
                },
                "localtime_epoch": {
                    "type": "integer"
                },
                "localtime": {
                    "type": "string"
                }
            },
            "required": [
                "name",
                "region",
                "country",
                "lat",
                "lon",
                "tz_id",
                "localtime_epoch",
                "localtime"
            ]
        },
        "current": {
            "type": "object",
            "properties": {
                "last_updated_epoch": {
                    "type": "integer"
                },
                "last_updated": {
                    "type": "string"
                },
                "temp_c": {
                    "type": "number"
                },
                "temp_f": {
                    "type": "number"
                },
                "is_day": {
                    "type": "integer"
                },
                "condition": {
                    "type": "object",
                    "properties": {
                        "text": {
                            "type": "string"
                        },
                        "icon": {
                            "type": "string"
                        },
                        "code": {
                            "type": "integer"
                        }
                    },
                    "required": [
                        "text",
                        "icon",
                        "code"
                    ]
                },
                "wind_mph": {
                    "type": "number"
                },
                "wind_kph": {
                    "type": "number"
                },
                "wind_degree": {
                    "type": "integer"
                },
                "wind_dir": {
                    "type": "string"
                },
                "pressure_mb": {
                    "type": "number"
                },
                "pressure_in": {
                    "type": "number"
                },
                "precip_mm": {
                    "type": "number"
                },
                "precip_in": {
                    "type": "number"
                },
                "humidity": {
                    "type": "integer"
                },
                "cloud": {
                    "type": "integer"
                },
                "feelslike_c": {
                    "type": "number"
                },
                "feelslike_f": {
                    "type": "number"
                },
                "vis_km": {
                    "type": "number"
                },
                "vis_miles": {
                    "type": "number"
                },
                "uv": {
                    "type": "number"
                },
                "gust_mph": {
                    "type": "number"
                },
                "gust_kph": {
                    "type": "number"
                }
            },
            "required": [
                "last_updated_epoch",
                "last_updated",
                "temp_c",
                "temp_f",
                "is_day",
                "condition",
                "wind_mph",
                "wind_kph",
                "wind_degree",
                "wind_dir",
                "pressure_mb",
                "pressure_in",
                "precip_mm",
                "precip_in",
                "humidity",
                "cloud",
                "feelslike_c",
                "feelslike_f",
                "vis_km",
                "vis_miles",
                "uv",
                "gust_mph",
                "gust_kph"
            ]
        }
    },
    "required": [
        "location",
        "current"
    ]
};

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
        expect(response.ok()).toBeTruthy();

        console.log("API response validated to be Ok");

        const body = await response.json();
        const ajv = new Ajv();
        const validate = ajv.compile(jsonSchema);
        const validResponse = validate(body);
        expect(validResponse).toBeTruthy();
        console.log("Response JSON schema validated");

        const locationName = body.location.name;
        expect(locationName).toBe('Sydney');
        console.log("Response location validated to be Sydney");
        const temperature = body.current.temp_c;
        console.log(locationName + ' temperature in degree C ' + temperature);
    } catch (e) {
        console.error("Unexpected error occured", e);
        await page.screenshot({ path: 'error.png' });
        await page.close();
        expect('success').toBe('Test failed with unexpected error, please see logs');

    }

});

