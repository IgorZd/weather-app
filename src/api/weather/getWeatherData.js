import axios from "axios";

const API_KEY = "b9714a1bbe61340e5f153867fd0cd2a7";

export const getWeatherData = (searchValue, setData, setIsSearchInProgress) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${API_KEY}`
    )
    .then((res) => {
      setIsSearchInProgress(false);
      setData(res.data);
      console.log("res: ", res);
    })
    .catch((e) => {
      setIsSearchInProgress(false);
      console.error(e);
    });
};
