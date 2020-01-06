import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { IoMdSearch } from "react-icons/io";

import "./SearchBar.css";

const SearchBar = ({ inputValue, handleOnChange, fetchCity }) => {
  const cityName = inputValue.split(", ").shift();

  const renderFunc = ({
    getInputProps,
    getSuggestionItemProps,
    suggestions,
    loading
  }) => {
    return (
      <>
        <div className="inputContainer">
          <input
            {...getInputProps({ placeholder: "Search Places..." })}
            className="searchBar"
          />
          <button onClick={() => fetchCity(cityName)} className="searchButton">
            <IoMdSearch />
          </button>
        </div>
        {suggestions && (
          <div className="dropdownResult">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => (
              <div {...getSuggestionItemProps(suggestion)} className="result">
                <span>{suggestion.description}</span>
              </div>
            ))}
          </div>
        )}
      </>
    );
  };
  const searchOptions = { types: ["(cities)"] };

  return (
    <div>
      <div>
        <PlacesAutocomplete
          value={inputValue}
          onChange={handleOnChange}
          searchOptions={searchOptions}
          styles={{ autocompleteContainer: { zIndex: "1000" } }}
        >
          {renderFunc}
        </PlacesAutocomplete>
      </div>
    </div>
  );
};

export default SearchBar;
