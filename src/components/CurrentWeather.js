import React, { useState, useEffect } from "react";
import "./components.scss";
import Location from "./Location";

// import { ReactComponent as Sun } from "./../img/sun.svg";
import sun from "./../img/sun.svg";
import cloud from "./../img/cloud.svg";
import rain from "./../img/rain.svg";
import sun_cloud from "./../img/sun_cloud.svg";
import sun_rain from "./../img/sun_rain.svg";
import thunder from "./../img/thunder.svg";

function CurrentWeather(props) {
  const {
    weather,
    setWeather,
    location,
    setLocation,
    showMask,
    setShowMask,
  } = props;
  const [currentWeatherImg, setCurrentWeatherImg] = useState();

  const getCurrentPositionData = () => {
    fetch(
      "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-BB6158E8-3E79-4C4D-BAFF-D0980161A2C5&locationName=" +
        location
    )
      .then((r) => r.json())
      .then((data) => {
        const dataReceived = data.records.locations[0].location[0];

        setWeather({
          locationName: location,
          description:
            dataReceived.weatherElement[6].time[0].elementValue[0].value,
          averageTemperature:
            dataReceived.weatherElement[1].time[0].elementValue[0].value,
          rainPossibility:
            dataReceived.weatherElement[0].time[0].elementValue[0].value,
          maxTemperature:
            dataReceived.weatherElement[12].time[0].elementValue[0].value,
          minTemperature:
            dataReceived.weatherElement[8].time[0].elementValue[0].value,
          img: dataReceived.weatherElement[6].time[0].elementValue[1].value,
          date: dataReceived.weatherElement[0].time[0].startTime.slice(0, 10),
        });
      });
  };

  // 判斷用甚麼天氣圖示
  const decideImg = () => {
    if (weather.img === "01") {
      setCurrentWeatherImg(sun);
    } else if (weather.img === "02") {
      setCurrentWeatherImg(sun_cloud);
    } else if (
      weather.img === "03" ||
      "04" ||
      "05" ||
      "06" ||
      "07" ||
      "24" ||
      "25" ||
      "26" ||
      "27" ||
      "28"
    ) {
      setCurrentWeatherImg(cloud);
    } else if (
      weather.img === "08" ||
      "09" ||
      "10" ||
      "11" ||
      "12" ||
      "13" ||
      "14" ||
      "19" ||
      "20" ||
      "29" ||
      "30" ||
      "31" ||
      "32" ||
      "38" ||
      "39"
    ) {
      setCurrentWeatherImg(rain);
    } else if (
      weather.img === "15" ||
      "16" ||
      "17" ||
      "18" ||
      "21" ||
      "22" ||
      "33" ||
      "34" ||
      "35" ||
      "36" ||
      "41"
    ) {
      setCurrentWeatherImg(thunder);
    }
  };

  useEffect(() => {
    getCurrentPositionData();
  }, []);

  useEffect(() => {
    decideImg();
  }, [weather]);

  useEffect(() => {
    getCurrentPositionData();
  }, [location]);

  return (
    <>
      <Location
        location={location}
        setLocation={setLocation}
        setShowMask={setShowMask}
      />
      <div className="description">
        {weather.date} &nbsp;&nbsp;
        {weather.description}
      </div>
      <img className="currnt_weather_img" src={currentWeatherImg}></img>

      <div className="temp_n_detail_wrapper">
        <div className="temperature">{weather.averageTemperature}°C</div>

        <div className="detail">
          <div>
            <span>降雨機率:</span>
            <span>&nbsp;&nbsp;&nbsp; {weather.rainPossibility} %</span>
          </div>
          <div>
            <span>最低溫度:</span>
            <span>&nbsp;&nbsp;&nbsp; {weather.minTemperature}°C</span>
          </div>
          <div>
            <span>最高溫度:</span>
            <span>&nbsp;&nbsp;&nbsp; {weather.maxTemperature}°C</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentWeather;
