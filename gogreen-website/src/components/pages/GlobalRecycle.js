import React from "react";
import "./GlobalRecycle.css";
import handslogo from "./handslogo.png";

function GlobalRecycle() {
  return (
    <div className="GlobalR">
      <div className="GreenhandLogo">
        <img src={handslogo} alt="handslogo" width="100" />
      </div>

      <div className="Title">
        <h3>Global recycling as a whole</h3>
      </div>
      <div className="Information">
        <h3>
          Around the world, recycling rates are widely reported but different
          measurement methods make comparisons difficult. Recycling is a multi
          billion-dollar industry, according to the Bureau of International
          Recycling. In most countries, recycling is perceived to be a
          governmental issue rather than a personal responsibility. In countries
          such as the United Kingdom and Germany, recycling is regulated by the
          government and in others, consumers are forced to recycle by law. The
          global waste production is projected to increase by 70% by 2050 due to
          overpopulation, according to stats provided by the World Bank. This
          result can be prevented if people, organizations, and nations take
          urgent action. Humans now produce an average of 2 billion tons of
          waste every year. This highlights the need to reduce, reuse, and
          recycle. Countries like Germany, South Korea and Austria followed by
          smaller European countries are leading the index for waste management
          and recycling in terms of efficiency.
        </h3>
      </div>

      <div className="Recycleimage">
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Recycle001.svg/1200px-Recycle001.svg.png"
          }
          width="115"
        />
      </div>
    </div>
  );
}
export default GlobalRecycle;
