import React, { useState, useEffect } from "react";
import "./App.scss";
import CurrentWeather from "./components/CurrentWeather";
import Mask from "./components/Mask";
import Forecast from "./components/Forecast";

function App() {
  const [location, setLocation] = useState("新北市");
  const [showMask, setShowMask] = useState(0); // 0不顯示, 1顯示
  const [weather, setWeather] = useState({
    locationName: location,
    description: "",
    averageTemperature: "",
    rainPossibility: "",
    maxTemperature: "",
    minTemperature: "",
    img: "",
    date: "",
  });


  return (
    <>
      <div className="body">
        <div className="card">
          <div className="current_weather">
            <CurrentWeather
              weather={weather}
              setWeather={setWeather}
              location={location}
              setLocation={setLocation}
              showMask={showMask}
              setShowMask={setShowMask}
            />
          </div>

          <div className="seperattion_line"></div>

          <div className="forecasts">
            <Forecast
              location={location}
              dayCount={0}
            />

            <Forecast
              location={location}
              dayCount={1}
            />

            <Forecast
              location={location}
              dayCount={2}
            />
          </div>
        </div>

        {showMask == 0 ? (
          <div></div>
        ) : (
          <Mask
            showMask={showMask}
            setShowMask={setShowMask}
            setLocation={setLocation}
          />
        )}
      </div>
    </>
  );
}

export default App;
