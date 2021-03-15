import React, { useState, useEffect } from "react";

import sun from "./../img/sun.svg";
import cloud from "./../img/cloud.svg";
import rain from "./../img/rain.svg";
import sun_cloud from "./../img/sun_cloud.svg";
import sun_rain from "./../img/sun_rain.svg";
import thunder from "./../img/thunder.svg";
import { faRing } from "@fortawesome/free-solid-svg-icons";

function Forecast(props) {
  const { location, dayCount } = props;
  const [forecastImg, setForecastImg] = useState(sun);

  const [forecast, setForecast] = useState({
    date: "",
    img: "",
    maxTemperature: "",
    minTemperature: "",
  });

  const getForecastData = () => {
    fetch(
      "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-BB6158E8-3E79-4C4D-BAFF-D0980161A2C5&locationName=" +
        location
    )
      .then((r) => r.json())
      .then((data) => {
        // const dataReceived = data.records.locations[0].location[0];
        const test = data.records.locations[0].location[0].weatherElement;

        // 這邊item是weatherElement[]裡的{}
        const dataProcessed = test.map(function (item, index) {
          // 這邊item是weatherElement[]裡的{}的time[]裡的{}
          return item.time.filter(function (item, index) {
            return item.startTime.slice(11, 16) === "06:00";
          });
        });
        console.log(dataProcessed);

        setForecast({
          maxTemperature: dataProcessed[12][dayCount].elementValue[0].value,
          minTemperature: dataProcessed[8][dayCount].elementValue[0].value,
          img: dataProcessed[6][dayCount].elementValue[1].value,
          date: dataProcessed[0][dayCount].startTime.slice(6, 10),
        });
      });
  };

  // 判斷用甚麼天氣圖示
  const decideImg = () => {
    if (forecast.img === "01") {
      setForecastImg(sun);
    } else if (forecast.img === "02") {
      setForecastImg(sun_cloud);
    } else if (
      forecast.img === "03" ||
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
      setForecastImg(cloud);
    } else if (
      forecast.img === "08" ||
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
      setForecastImg(rain);
    } else if (
      forecast.img === "15" ||
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
      setForecastImg(thunder);
    }
  };

  useEffect(() => {
    getForecastData();
  }, []);

  useEffect(() => {
    getForecastData();
  }, [location]);

  useEffect(() => {
    decideImg();
  }, [forecast]);

  return (
    <>
      <div className="forcast_box">
        <div className="forecast_date">{forecast.date}</div>

        <img className="farecast_img" src={forecastImg}></img>
        <div className="temp_range">
          {forecast.minTemperature}~{forecast.maxTemperature} °C
        </div>
      </div>
    </>
  );
}

export default Forecast;
