import React from 'react'

const CurrentCityWeahter = ({city, country, main}) => {
  const {temp, feels_like, temp_min, temp_max} = main
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1rem",
        padding: "0.5rem",
        color: 'white',
        borderRadius: "4px",
        backgroundColor: 'rgba(34, 34, 34, 0.8)'
      }}
    >
      <div>
        <h3>
          {city}, {country}
        </h3>
      </div>
      <div>temperature: {temp}°C</div>
      <div>
        <div>feels like: {feels_like}°C</div>
        <div>temp min: {temp_min}°C</div>
        <div>temp max: {temp_max}°C</div>
      </div>
    </div>
  );
};

export default CurrentCityWeahter;
