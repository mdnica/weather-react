import React from "react";
import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Form defaultCity="London" />
      </div>
      <p className="text-center">
        This project is an{" "}
        <a
          href="https://github.com/mdnica/weather-react"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          opensource
        </a>
        , coded by{" "}
        <a
          href="https://github.com/mdnica"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          Diana
        </a>
      </p>
    </div>
  );
}

export default App;
