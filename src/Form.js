import React, { useEffect, useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import WeatherInfo from "./weatherInfo";
import "./Form.css";

export default function Form(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState(" ");
  const [loaded, setLoaded] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [locationCity, setLocationCity] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    let apiKey = "1fd8093fa5ff12d796d7de756cc9d6b9";
    let units = "metric";
    let currentApiEndPoint = "https://api.openweathermap.org/data/2.5/weather?";
    let currentLocationApiUrl = `${currentApiEndPoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(currentLocationApiUrl).then((response) => {
      setCity(response.data.name);
      setLocationCity(true);
    });
  }, [locationCity, latitude, longitude]);

  function handleResponse(response) {
    setLoaded(true);
    setWeather({
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let apiKey = `4091b06da263484df848822445999498`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let form = (
    <form className="mb-3 mt-0" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city.."
        className="btn btn-light"
        onChange={updateCity}
      />
      <input type="submit" value="search" className="btn btn-light ms-2" />
      <button
        className="ms-2 btn btn-warning"
        onClick={() => setLocationCity(true)}
      >
        Current Location
      </button>
    </form>
  );

  if (loaded) {
    return (
      <div className="Form">
        {form}
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();
    return (
      <div>
        <ClipLoader
          color="#36d7b7"
          loading={true}
          size={150}
          aria-label="FadeLoader"
        />
      </div>
    );
  }
}
