import { useState } from "react";
import "./App.css";
import { getWeatherData } from "./api/weather/getWeatherData";
import { SearchBar } from "./components/searchBar/SearchBar";
import { Content } from "./components/content/Content";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [isSearchInProgress, setIsSearchInProgress] = useState(false);
  const title = "Welcome to weather app";
  const subTitle = "Please enter the name of the city to see the weather";

  const onChangeSearchInput = (value) => {
    setSearchValue(value);
  };

  const onClickSearchButton = () => {
    getWeatherData(searchValue, setWeatherData, setIsSearchInProgress);
  };

  return (
    <div className={"app-wrapper"}>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <SearchBar
        searchValue={searchValue}
        onChangeSearchInput={onChangeSearchInput}
        onClickSearchButton={onClickSearchButton}
      />
      <Content
        cityName={"Jerusalem"}
        data={weatherData}
        isSearchInProgress={isSearchInProgress}
      />
    </div>
  );
}

export default App;
