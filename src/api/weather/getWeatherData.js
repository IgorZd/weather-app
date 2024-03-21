import axios from "axios";

const API_KEY = "b9714a1bbe61340e5f153867fd0cd2a7";

export const getWeatherData = (searchValue, setData, setIsSearchInProgress) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${API_KEY}`
    )
    .then(({ data }) => {
      const { name, sys, coord, main, weather } = data;
      setIsSearchInProgress(false);

      const preparedData = {
        cityData: [
          { fieldName: "Country", value: sys.country },
          { fieldName: "Name", value: name },
          {
            fieldName: "Coordinates",
            value: `lat: ${coord.lat}, long: ${coord.lon}`,
          },
        ],
        weatherData: [
          { fieldName: "Temperature", value: main.temp },
          { fieldName: "Feels like", value: main.feels_like },
          { fieldName: "Humidity", value: main.humidity },
        ],
        icon_url: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
      };

      setData(preparedData);
    })
    .catch((e) => {
      setData({});
      setIsSearchInProgress(false);
      console.error(e);
    });
};
