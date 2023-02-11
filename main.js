// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise = fetch(FULL_URL);
  return weatherPromise
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

searchCity = () => {
  const city = document.getElementById("city-input").value;
  getWeatherData(city)
    .then((res) => {
      console.log(res);
      showWeatherData(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

showWeatherData = (weatherData) => {
  document.getElementById("weather-icon").src =
    "https://openweathermap.org/img/wn/" +
    weatherData.weather[0].icon +
    "@2x.png";
  //Icon fetching ends here
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText =
    weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
};
