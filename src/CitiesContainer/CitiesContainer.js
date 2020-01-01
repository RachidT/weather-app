import React, { useState } from 'react'
import useAxios from 'axios-hooks'
import CitiesWeather from './CitiesWeather/CitiesWeather'
import SearchBar from './SearchBar/SearchBar'

import styles from './CitiesContainer.css'

const CitiesContainer = () => {
  const [inputValue, setInputValue] = useState('')

  const handleOnChange = city => {
    setInputValue(city);
  }

  const [{ data: defaultCities, loading, error }, refetch] = useAxios(
    `http://api.openweathermap.org/data/2.5/group?id=2968815,4219762,2267056,2950157,6058560,6453974,6447142,6356055,2964574,524901,756135,2761369,658225,2800867,2759794&units=metric&APPID=e9924d33e581093d0bc155e4fe87f138`
  );
  if (loading) return <div>...loading</div>
  if (error) return console.log(error)
  console.log(defaultCities)
  return (
    <div className="container">
      <div>
        <SearchBar handleOnChange={handleOnChange} inputValue={inputValue} />
      </div>
      <div>
        {defaultCities.list.map(el => (  
          <CitiesWeather
            city={el.name}
            country={el.sys.country}
            refetch={refetch}
            key={el.id}
            weather={el.weather}
            main={el.main}
            cityID={el.id}
          />
        ))}
      </div>
    </div>
  );
}

export default CitiesContainer
