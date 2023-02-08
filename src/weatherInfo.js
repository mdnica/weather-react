import React from "react";
import FormattedDate from "./FormattedDate";
import Forecast from "./Forecast";
import Icon from "./Icon";
import Unit from "./Unit";

export default function WeatherInfo(props) {
  return (
    <div>
      <h2 className="mb-0"> {props.data.city}</h2>
      <div className="mb-0">
        <FormattedDate date={props.data.date} />
      </div>
      <p className="text-capitalize">{props.data.description}</p>
      <div className="row mb-3">
        <div className="col-6 text-start">
          <div className="icon-temp">
            <Icon iconCode={props.data.icon} size={70} />
            <Unit celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <div>
            <p className="mb-0">Humidity: {props.data.humidity}% </p>
            <p className="mb-0">Wind: {props.data.wind}m/s</p>
          </div>
        </div>
      </div>

      <Forecast coordinates={props.data.coordinates} />
    </div>
  );
}
