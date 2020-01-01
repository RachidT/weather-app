import React, { useState, useEffect } from 'react'
import useAxios from 'axios-hooks'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { IoMdSearch } from 'react-icons/io'
import CitiesWeather from '../CitiesWeather/CitiesWeather'

import './SearchBar.css'

const SearchBar = ({ inputValue, handleOnChange }) => {
  const [newCity, setNewCity] = useState({})
  const cityName = inputValue.split(', ').shift()

  
  const[{ data, loading, error }, fetchNewCity] = useAxios(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=e9924d33e581093d0bc155e4fe87f138`,
    { manual: true }
  )
  useEffect(() => {
    // console.log('data in useEffect', data)
    setNewCity(data)
  }, [data])
  console.log('newCity=>', newCity)
  const renderFunc = ({
    getInputProps,
    getSuggestionItemProps,
    suggestions,
    loading,
  }) => {
    return (
      <>
        <div className="inputContainer">
          <input {...getInputProps({ placeholder: "Search Places..." })} className="searchBar"/>
          <button onClick={fetchNewCity} className="searchButton"><IoMdSearch /></button>
        </div>
        {suggestions && (
          <div className="dropdownResult">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => (
              <div {...getSuggestionItemProps(suggestion)} className="result">
                <span>{suggestion.description}</span>
              </div>
              ))
            }
          </div>
        )}
      </>
    );
  }
  const searchOptions = {types: ['(cities)']}

  return (
    <div>
      <div>
        <PlacesAutocomplete
          value={inputValue}
          onChange={handleOnChange}
          searchOptions={searchOptions}
        >
          {renderFunc}
        </PlacesAutocomplete>
      </div>
      <div className="cityAdded">
      {
        data && (
          <CitiesWeather 
            city={data?.name}
            main={data?.main}
            country={data?.sys?.country}
          />
        )
      }
      </div>
    </div>
  );
}

export default SearchBar;
