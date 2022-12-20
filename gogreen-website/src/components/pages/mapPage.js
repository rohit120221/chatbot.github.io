import React, { useState } from "react";
import "./mapPage.css";
import handslogo from "./handslogo.png";
import MapCard from "./Maps";

function RecyclingDepotPage() {
  const [active, setActive] = useState("London");
  const [show, setShow] = useState(false);
  var mapshow;
  return (
    <div className="MapPageSplash">
      <h1>Find your nearest Recycling depot!</h1>
      <div className="GreenhandLogo">
        <img src={handslogo} width="100" alt="logo" />
      </div>
      <br />
      <br />
      <br />
      <div>
        <button className="toggleshowbutton" onClick={() => setShow(!show)}>
          Where are you?
        </button>
      </div>
      <div>
        {show ? (
          <div>
            <button
              className="locationbutton"
              onClick={() => setActive("London")}
            >
              London
            </button>
            <button
              className="locationbutton"
              onClick={() => setActive("Birmingham")}
            >
              Birmingham
            </button>
            <button
              className="locationbutton"
              onClick={() => setActive("Liverpool")}
            >
              Liverpool
            </button>
            <button
              className="locationbutton"
              onClick={() => setActive("Sheffield")}
            >
              Sheffield
            </button>
            <button
              className="locationbutton"
              onClick={() => setActive("Bristol")}
            >
              Bristol
            </button>
            <button
              className="locationbutton"
              onClick={() => setActive("Leicester")}
            >
              Leicester
            </button>
            <button
              className="locationbutton"
              onClick={() => setActive("Leeds")}
            >
              Leeds
            </button>
            <button
              className="locationbutton"
              onClick={() => setActive("Manchester")}
            >
              Manchester
            </button>
          </div>
        ) : null}
      </div>
      {active === "London" && (
        <MapCard url="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d79424.07541347494!2d-0.19836133541226272!3d51.53151660917814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRecycling%20centres%20in%20london!5e0!3m2!1sen!2suk!4v1646824218587!5m2!1sen!2suk" />
      )}
      {active === "Birmingham" && (
        <MapCard url="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d54994.08753912819!2d-1.8778986550906749!3d52.47156220478316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRecycling%20centres%20in%20birmingham!5e0!3m2!1sen!2suk!4v1646824576602!5m2!1sen!2suk" />
      )}
      {active === "Liverpool" && (
        <MapCard url="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d76049.95466527971!2d-2.9446377328523305!3d53.44055572179962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRecycling%20centres%20in%20liverpool!5e0!3m2!1sen!2suk!4v1646824641204!5m2!1sen!2suk" />
      )}
      {active === "Sheffield" && (
        <MapCard url="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d152212.7741365706!2d-1.4482345188986407!3d53.4090207978367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRecycling%20centres%20in%20sheffield!5e0!3m2!1sen!2suk!4v1646824705711!5m2!1sen!2suk" />
      )}
      {active === "Bristol" && (
        <MapCard url="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d66854.13097160433!2d-2.657830674255614!3d51.48603088687631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRecycling%20centres%20in%20bristol!5e0!3m2!1sen!2suk!4v1646824757717!5m2!1sen!2suk" />
      )}
      {active === "Leicester" && (
        <MapCard url="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d38749.503546623906!2d-1.1725134898000285!3d52.62666366189607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srecycling%20centre%20in%20Leicester!5e0!3m2!1sen!2suk!4v1646824861377!5m2!1sen!2suk" />
      )}
      {active === "Leeds" && (
        <MapCard url="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d75408.14222307976!2d-1.6232530149792035!3d53.7983070376388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srecycling%20centre%20in%20leeds!5e0!3m2!1sen!2suk!4v1646824908978!5m2!1sen!2suk" />
      )}
      {active === "Manchester" && (
        <MapCard url="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d90376.37459696531!2d-2.3002069188690424!3d53.47004093480186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srecycling%20centre%20in%20Manchester!5e0!3m2!1sen!2suk!4v1646824976286!5m2!1sen!2suk" />
      )}
      {mapFlavour()}
    </div>
  );
}

function mapFlavour() {
  return (
    <div className="mapflavour">
      <h3>
        We want you to recycle but it needs to be efficient and easy for you to
        do so. You can use the maps above to find where your nearest recycling
        depot is. The pointers on the map show the different recycling depots
        near your location. Tap the one closest to you to see where it is
        located.{" "}
      </h3>
    </div>
  );
}
export default RecyclingDepotPage;
