import React, { useState, useEffect } from "react";
import "./components.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Location(props) {
  const { location, setLocation, setShowMask } = props;

  return (
    <>
      <div className="location_wrapper">
        <div className="city_name">{location}</div>

        <div
          className="location_icon"
          onClick={() => {
            setShowMask(1);
          }}
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
      </div>
    </>
  );
}

export default Location;
