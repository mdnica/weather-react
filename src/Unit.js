import React, { useState } from "react";

export default function Unit(props) {
  const [tempUnit, setTempUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setTempUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setTempUnit("celsius");
  }

  if (tempUnit === "celsius") {
    return (
      <h2>
        <span className="current-temp">{props.celsius}</span> <a href="/">ºC</a>
        <span id="between">| </span>
        <a href="/" onClick={showFahrenheit} className="text-decoration-none">
          ºF
        </a>
        <Icon iconCode={props.data.icon} size={70} />
      </h2>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <h2>
        <span className="current-temp">{fahrenheit}</span>{" "}
        <a href="/" onClick={showCelsius} className="text-decoration-none">
          ºC
        </a>{" "}
        <span id="between">| </span>
        ºF
        <Icon iconCode={props.data.icon} size={70} />
      </h2>
    );
  }
}
