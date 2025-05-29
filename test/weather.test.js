// test/weather.test.js
const getWeather = require('../src/weather');

describe('Weather CLI', () => {
  test('fetches weather for a valid city', async () => {
    const data = await getWeather('Kathmandu');
    expect(data).toHaveProperty('temperature');
    expect(data).toHaveProperty('city');
    expect(data).toHaveProperty('condition');
  });

  test('throws an error for invalid city', async () => {
    await expect(getWeather('InvalidCityName12345')).rejects.toThrow('City not found');
  });
});
