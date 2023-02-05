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
      <h2 className="fs-1 ms-3">
        <span className="temperature">{props.celsius}</span>{" "}
        <small>
          °C |{" "}
          <a href="/" onClick={showFahrenheit} className="text-decoration-none">
            °F
          </a>
        </small>
      </h2>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <h2 className="fs-1 ms-3">
        <span className="temperature">{fahrenheit}</span>{" "}
        <small>
          <a href="/" onClick={showCelsius} className="text-decoration-none">
            °C
          </a>{" "}
          | °F
        </small>
      </h2>
    );
  }
}
