import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="col-6">
          <input
            type="submit"
            value="Current"
            className="btn btn-success w-100"
            id="current-location-button"
          />
        </div>

        <h1 id="city"> London</h1>
        <h4 id="current-date-time">/</h4>

        <div className="grid">
          <h5 id="weather-description">Foggy</h5>

          <h2>
            <span id="current-temp">4</span>
            <a href="/" id="celsius">
              ºC
            </a>
            <span id="between">|</span>
            <a href="/" id="fahrenheit">
              ºF
            </a>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="/"
              id="icon"
            />
          </h2>

          <h6>
            Humidity: <span id="humidity"> </span>%<br />
            Wind: <span id="speed"></span> km/h <br />
          </h6>
        </div>

        <div className="prediction-list">
          <div className="col">
            <div className="prediction-item">
              <br />
              <span className="prediction-day">Tue</span>
              <span>10°/5° C</span>
            </div>
          </div>
          <div className="col">
            <div className="prediction-item">
              <br />
              <span className="prediction-day">Wed</span>
              <span>15°/10°C</span>
            </div>
          </div>
          <div className="col">
            <div className="prediction-item">
              <br />
              <span className="prediction-day">Thu</span>
              <span>15°/9° C</span>
            </div>
          </div>
          <div className="col">
            <div className="prediction-item">
              <br />
              <span className="prediction-day">Fri</span>
              <span>14°/9° C</span>
            </div>
          </div>
          <div className="col">
            <div className="prediction-item">
              <br />
              <span className="prediction-day">Sat</span>
              <span>19°/8° C</span>
            </div>
          </div>
        </div>
        <footer>
          <form id="search-form">
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control"
                  id="city-input"
                />{" "}
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
        </footer>
      </div>
      <div className="footer">
        <small id="name">
          <a
            className="gitHub-link"
            href="https://github.com/mdnica/app-weather.git"
            target="_blank"
            rel="noreferrer"
            id="small"
          >
            Open-source code
          </a>
          <span className="creator">by Diana Nica </span>
        </small>
      </div>
    </>
  );
}

export default App;
