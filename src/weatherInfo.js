import React from "react";
import FormattedDate from "./FormattedDate";
import Forecast from "./Forecast";
import Icon from "./Icon";
import Unit from "./Unit";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1 id="city">{props.data.city}</h1>
      <h4 id="current-date-time">{props.data.date}</h4>

      <div className="grid">
        <h5 id="weather-description">{props.data.description}</h5>

        <h6>
          Humidity: <span id="humidity"> {props.data.humidity}</span>%<br />
          Wind: <span id="speed">{props.data.wind}</span> km/h <br />
        </h6>
      </div>

      <Forecast coordinates={props.data.coordinates} />
    </div>
  );
}
