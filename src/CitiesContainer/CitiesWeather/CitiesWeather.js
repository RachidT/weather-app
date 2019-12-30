import React from 'react'
import useAxios from 'axios-hooks'
import ForcastCityWeather from './ForcastCityWeather'

const CitiesWeather = ({city, country, main, cityID}) => {
  const[{ data: forcast, loading, error }, fetchNewCity] = useAxios(
    `api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=metric&APPID=e9924d33e581093d0bc155e4fe87f138`,
    { manual: true}
  )

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
      <div role="button" tabIndex={0} onClick={fetchNewCity} style={{width: '30px', height: '20px'}}>Forcast</div>
      <div>  
        {
          forcast && (
            <ForcastCityWeather />
          )
        }
      </div>
    </div>
  );
};

export default CitiesWeather;
