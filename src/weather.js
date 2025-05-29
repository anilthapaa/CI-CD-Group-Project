// src/weather.js
import fetch from 'node-fetch';
const fetch = require('node-fetch');
const apiKey = '8c8530f0f5f0040c40f60275a4355cd1'; // Will be replaced during CI

async function getWeather(city) {
  if (!city) {
    throw new Error('City name is required');
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('City not found');
    const data = await res.json();
    return {
      temperature: data.main.temp,
      city: data.name,
      condition: data.weather[0].description,
    };
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = getWeather;
