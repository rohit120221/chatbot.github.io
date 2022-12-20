import React from "react";
import "./Recyclingocean.css";
import handslogo from "./handslogo.png";
import fish from "./fish.png";
import whale from "./whale.png";
import turtle from "./turtle.png";
import diver from "./diver.png";
import bottle from "./bottle.png";

function RecyclingoceanPage() {
  return (
    <div className="RecycleOceanSplash">
      <div className="GreenhandLogo">
        <img src={handslogo} width="75" alt="logo" />{" "}
      </div>

      <div className="RecyclingOceanTitle">
        <h2> Recycling and the Ocean </h2>
      </div>
  
      <div className="text1">
        <h3>
          Only 9% of all plastics produced are recycled, the rest end up in our
          oceans and harm wildlife. Approximately 8.3 million tons of plastic
          end up in oceans each year. These bottles, caps and grocery bags
          pollute our seas. It's our responsibility to change that.{" "}
        </h3>
        <img
          src={"https://i.ibb.co/WV2Lx8Y/oceanplastic.jpg"}
          alt="ocean"
          width="250"
        />
      </div>

<div className="turtle">
  <img src={turtle}
  width="270"/>
</div>


      <div className="whale">
<img src={whale}
width="350"/>
</div>

      <div className="whyrecycletext">
        <h3>
          Plastic debris, injures and kills fish, seabirds and other marine
          mammals. They accumulate and float on the oceans, polluting habitats.
          Over 100 Million marine animals die each year from plastic waste
          alone. About 100,000 deaths are by entaglement, and thats only the
          cases we see...{" "}
        </h3>
      </div>

<div className="fish">
<img src={fish}

width="200"/>
</div>


<div className="pollution">
  <h2>
If current pollution levels continue,
by 2025, there'll be more plastic in the ocean
than fish!

  </h2>
</div>
<div className="bottle">
<img src={bottle}
width="100"/>

</div>


      <div className="text3">
        <h2>
          We can all help in the fight against plastic pollution. First we can
          stop buying plastic water bottles and change to reusable bottles. We
          can also buy items in bulk and reuse plastic shopping bags. You can
          spread the word to family and friends about the importance of
          recycling and its effect on the environment. Finally, and the most
          important, RECYCLE!
        </h2>

      </div>

      <div className="diver">
<img src={diver}
width="350"/>

</div>


    </div>
  );
}
export default RecyclingoceanPage;
