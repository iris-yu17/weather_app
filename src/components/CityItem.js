import React, { useState, useEffect } from "react";

function CityItem(props) {
  const { cityName, setLocation, setShowMask } = props;

  return (
    <>
      <div
        className="city_item"
        onClick={(e) => {
          setShowMask(0);
          setLocation(cityName);
        }}
      >
        {cityName}
      </div>
    </>
  );
}

export default CityItem;
