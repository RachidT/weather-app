import React, { useState, useEffect } from "react";
import useAxios from "axios-hooks";
import CitiesWeather from "./CitiesWeather/CitiesWeather";
import SearchBar from "./SearchBar/SearchBar";

import "./CitiesContainer.css";

const CitiesContainer = () => {
  const [cities, setCities] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = city => {
    setInputValue(city);
  };

  const [{ data: defaultCities, loading, error }, refetch] = useAxios(
    `http://api.openweathermap.org/data/2.5/group?id=2968815,4219762,2267056,2950157,6058560,6453974,6447142,6356055,2964574,524901,756135,2761369,658225,2800867,2759794&units=metric&APPID=e9924d33e581093d0bc155e4fe87f138`
  );

  useEffect(() => {
    if (defaultCities) {
      setCities([...defaultCities.list]);
    }
  }, [defaultCities]);

  const [, executeFetchNewCity] = useAxios({}, { manual: true });

  const fetchCity = async cityName => {
    const { data: newCity } = await executeFetchNewCity({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=e9924d33e581093d0bc155e4fe87f138`
    });
    setCities([newCity, ...cities]);
  };

  if (loading) return <div>...loading</div>;
  if (error) return console.log(error);

  return (
    <div className="container">
      <div className="header">
        <div className="title">
          <h1>Weather App</h1>
        </div>
        <div>
          <SearchBar
            handleOnChange={handleOnChange}
            inputValue={inputValue}
            fetchCity={fetchCity}
          />
        </div>
      </div>
      <div>
        {cities.map(el => (
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
};

export default CitiesContainer;
