import React, { useState } from "react";
import useAxios from "axios-hooks";
import ForecastCityWeather from "./ForecastCityWeather";

const CitiesWeather = ({ city, country, main, cityID }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [
    { data: forecast },
    fetchNewCity
  ] = useAxios(
    `http://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=metric&cnt=5&APPID=e9924d33e581093d0bc155e4fe87f138`,
    { manual: true }
  );

  const openForecast = () => {
    if (!isOpen) {
      fetchNewCity();
      setIsOpen(true);
    }
  };

  const closeForecast = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const { temp, feels_like, temp_min, temp_max } = main;

  const forecastContainer = isOpen ? "forecastContainer" : "close";
  return (
    <div className="citiesWeatherContainer">
      <div className="currentWeather">
        <div className="cities">
          <h3>
            {city}, {country}
          </h3>
        </div>
        <div className="weatherInfo">{temp}°C</div>
        <div className="weatherInfo">
          <div>feels like: {feels_like}°C</div>
          <div>temp min: {temp_min}°C</div>
          <div>temp max: {temp_max}°C</div>
        </div>
        <div
          role="button"
          tabIndex={0}
          onClick={openForecast}
          className="forecastButton"
        >
          forecast
        </div>
      </div>
      {forecast && (
        <div className={forecastContainer}>
          {forecast?.list.map(day => (
            <ForecastCityWeather
              key={day.dt}
              data={forecast?.list}
              main={day.main}
              weather={day.weather}
              date={day.dt_txt}
            />
          ))}
          <div
            role="button"
            tabIndex={0}
            onClick={closeForecast}
            className="closeButton"
          >
            x
          </div>
        </div>
      )}
    </div>
  );
};

export default CitiesWeather;
