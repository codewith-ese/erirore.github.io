// Define variables for temperature and wind speed
const temperature = 10;
const windSpeed = 5;

// Define a function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
  // Formula for calculating wind chill in Celsius
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

// Calculate the wind chill factor
const windChill = calculateWindChill(temperature, windSpeed);

// Display the wind chill factor in the "Weather" section of the page
document.getElementById("weather").innerHTML = `
  <h2>Weather</h2>
  <p>Temperature: ${temperature} °C</p>
  <p>Conditions: Partly Cloudy</p>
  <p>Wind: ${windSpeed} km/h</p>
  <p>Wind Chill: ${windChill.toFixed(1)} °C</p>
`;