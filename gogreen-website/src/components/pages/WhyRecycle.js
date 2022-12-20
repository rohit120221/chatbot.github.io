import React from "react";
import "./WhyRecycle.css";
import handslogo from "./handslogo.png";

function whyRecycle() {
  return (
    <div className="WhyRecycleSplash">
      <div className="GreenhandLogo">
        <img src={handslogo} width="100" alt="logo" />{" "}
      </div>

      <div className="whyRecycleTitle">
        <h3> Why should we recycle?</h3>
      </div>

      <div className="plantinHands">
        <img
          src={
            "https://st2.depositphotos.com/4158817/i/600/depositphotos_76386299-stock-photo-holding-a-plant-between-hands.jpg"
          }
          width="400"
          alt="plantinhands"
        />
      </div>
      <div className="whyrecycletext1">
        <h3>
          What if you knew there was something you could do every day that’s
          free, easy to do, and creates jobs while saving money, energy and
          water? Well that is recycling in a nutshell. Recycling reduces the
          need to mine and process raw materials - instead, we create new items
          from old materials. When recycling, the materials are converted into
          new products, reducing the need to consume natural resources. You may
          think "Why cant we just get new materials instead of wasting time
          recycling?" Well the answer to this is quite simple. Instead of
          recycling and just getting new materials would mean even more time and
          costs - not forgetting the harm to wildlife and the Earth itself.
          Extracting fresh, raw material from the Earth is commonly done through
          mining and forestry. This would mean much larger CO2 emission -
          harming not only wildlife, but us as humans.
          <br></br> <br></br>
          <br></br> <br></br>

          <h3>
            Three main reasons of why recycling is so important: 
            <br></br> <br></br>
             1: Recycling reduces our need for new
            raw materials. 2: Recycling reduces pollution. 3: Recycling keeps
            trash out of the landfill.{" "}
            
          </h3>{" "}
        </h3>
      </div>

      <div className="globeImage">
        <img src={"earth-globe.png"} alt="globe" width="115" />

        <div className="energyImage" />
        <img src={"energy.png"} alt="energy" width="115" />

        <div className="wasteImage" />
        <img src={"waste.png"} alt="waste" width="115" />

        <div className="shieldImage" />
        <img src={"shield.png"} alt="shield" width="115" />
      </div>
      <div className="earthFlavour">
        <h3>
          {" "}
          Recycling maintains resources because of conversion of old material
          into new!
        </h3>
      </div>

      <div className="energyFlavour">
        <h3>
          {" "}
          Recycling uses considerably less energy than that required for
          producing new products from raw materials!{" "}
        </h3>
      </div>

      <div className="wasteFlavour">
        <h3>
          {" "}
          Waste in landfills is largely reduced because of recycling the waste,
          reducing amount of rubbish being sent to landfill reduces emissions of
          methane, a powerful greenhouse gas!{" "}
        </h3>
      </div>

      <div className="shieldFlavour">
      {" "}
        <h3>
          {" "}
          Recycling reduces need of extracting, refining and processing raw
          material, decreasing air and water pollution. Reduction in greenhouse
          gas emissions helps tackle climate change, thereby protecting the
          environment!{" "}
        </h3>
      </div>
      <div className="mapflavour">
      <h3>
        You may have many questions about recycling and why we should do it. So, we have compiled a few questions about recycling that may improve your understanding!  
        You can check them out on the FAQ's Page!{" "}
                <br></br> <br></br>

      </h3>
    </div>
    </div>
  );
}

export default whyRecycle;

