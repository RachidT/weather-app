import React, { useState } from 'react'
import useAxios from 'axios-hooks'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

const SearchBar = ({ inputValue, handleOnChange }) => {
  const [newCity, setNewCity] = useState([])
  const cityName = inputValue.split(',').shift()
  const[{ data, loading, error }, fetchNewCity] = useAxios(
    `api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=e9924d33e581093d0bc155e4fe87f138`,
    { manual: true }
  )
  console.log('data =>', data)

  const renderFunc = ({
    getInputProps,
    getSuggestionItemProps,
    suggestions,
    loading,
  }) => {
    return (
      <div>
        <input {...getInputProps({ placeholder: "Search Places..." })} />
        <button onClick={fetchNewCity}>search</button>
        <div>
          {loading && <div>Loading...</div>}
          {suggestions.map(suggestion => (
            <div {...getSuggestionItemProps(suggestion)}>
              <span>{suggestion.description}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  const searchOptions = {types: ['(cities)']}

  return (
    <div style={{ margin: "0 auto", display: 'flex', justifyContent: 'center' }}>
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
