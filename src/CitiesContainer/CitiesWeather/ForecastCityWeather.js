import React from "react";

import "./CitiesWeather.css";

const ForcastCityWeather = ({ data, main, weather, date }) => {
  const { temp, feels_like, temp_min, temp_max } = main;

  return (
    <div className="forecastWeather">
      <span className="forecastDates">{date}</span>
      <div className="weatherInfo">{temp}°C</div>
      <div className="weatherInfo">feels like: {feels_like}°C</div>
      <div className="weatherInfo">temp min: {temp_min}°C</div>
      <div className="weatherInfo">temp max: {temp_max}°C</div>
    </div>
  );
};

export default ForcastCityWeather;
