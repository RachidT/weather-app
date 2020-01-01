import React, { useState } from 'react'
import useAxios from 'axios-hooks'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { IoMdSearch } from 'react-icons/io'

import './SearchBar.css'

const SearchBar = ({ inputValue, handleOnChange }) => {
  const [newCity, setNewCity] = useState([])
  const cityName = inputValue.split(',').shift()

  const[{ data, loading, error }, fetchNewCity] = useAxios(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=e9924d33e581093d0bc155e4fe87f138`,
    { manual: true }
  )

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
      <PlacesAutocomplete
        value={inputValue}
        onChange={handleOnChange}
        searchOptions={searchOptions}
      >
        {renderFunc}
      </PlacesAutocomplete>
    </div>
  );
}

export default SearchBar;
