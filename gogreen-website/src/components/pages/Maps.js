import React, { useState } from "react";
import "./mapPage.css";
import handslogo from "./handslogo.png";

const MapCard = ({ url }) => {
  return (
    <div className="map">
      <iframe className="mapimg" src={url}></iframe>
    </div>
  );
};

export default MapCard;

