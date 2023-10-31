function getWeatherData() {
    const city = document.getElementById('city-input').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e396d54efb47aa1c851678ce33f347b1`)
      .then(response => response.json())
      .then(data => displayWeather(data))
      .catch(error => console.log('Error:', error));
  }
  document.getElementById('get-weather-btn').addEventListener('click', getWeatherData);

  function updateBackgroundImage(temperature) {
    const bodyElement = document.body;
    if (temperature < 273) {
    // Very cold (below 0 degrees Celsius or 273 Kelvin)
    //alert("i dey work")
     document.body.style.backgroundColor='red'
    // document.body.style.backgroundImage=''
  } else if (temperature >= 273 && temperature < 283) {
    // Cold to moderate (0 to 10 degrees Celsius or 273 to 283 Kelvin)
      document.body.style.backgroundColor='blue'
  } else if (temperature >= 283 && temperature < 298) {
    // Moderate to warm (10 to 25 degrees Celsius or 283 to 298 Kelvin)
      document.body.style.backgroundColor='green'
  } else {
    // Hot (above 25 degrees Celsius or 298 Kelvin)
    document.body.style.backgroundColor='orange'
  }
  }

  // Modify the displayWeather function to call updateBackgroundImage
  function displayWeather(weatherData) {
const cityName = weatherData.name;
const temperatureKelvin = weatherData.main.temp;
const temperatureCelsius = (temperatureKelvin - 273.15).toFixed(1);
const weatherDescription = weatherData.weather[0].description;

// Update the background image based on temperature
updateBackgroundImage(temperatureKelvin);

const weatherInfoDiv = document.getElementById('weather-info');
weatherInfoDiv.textContent = weatherInfoDiv.textContent.toUpperCase();
weatherInfoDiv.innerHTML = `
  <h2>Weather Information</h2>
  <p><strong>City:</strong> ${cityName}</p>
  <p><strong>Temperature:</strong> ${temperatureCelsius} &#8451; (${temperatureKelvin} K)</p>
  <p><strong>Weather:</strong> ${weatherDescription}</p>
`;
}