import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

const SearchBar = ({ inputValue, handleOnChange }) => {
  // const [inputValue, setInputValue] = useState('')

  // const handleOnChange = city => {
  //   setInputValue(city);
  // }


  const renderFunc = ({
    getInputProps,
    getSuggestionItemProps,
    suggestions,
    loading,
  }) => {
    return (
      <div>
        <input {...getInputProps({ placeholder: "Search Places..." })} />
        <button>search</button>
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
