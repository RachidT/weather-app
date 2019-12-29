import React from 'react'
import CurrentCityWeahter from './CurrentCityWeather'
import ForcastCityWeather from './ForcastCityWeather'


const CitiesWeather = ({name, main, country}) => {
  return (
    <div>
      <CurrentCityWeahter
        city={name}
        main={main}
        country={country}
      />
      <ForcastCityWeather />
    </div>
  );
}

export default CitiesWeather
