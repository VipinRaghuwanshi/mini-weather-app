import { useState } from "react";
import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import "./weatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const updateInfo = (newInfo) => {
    if (newInfo) {
      setWeatherInfo(newInfo);
    }
  };

  return (
    <div className="weather-container">
      <div className="weather-content">
        <SearchBox updateInfo={updateInfo} />
        {weatherInfo && <InfoBox info={weatherInfo} />}
      </div>
    </div>
  );
}