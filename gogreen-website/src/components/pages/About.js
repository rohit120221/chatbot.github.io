import React from "react";
import "./About.css";
import BannerImage from "../pages/gogreenlogo.PNG";
import people from "./people.png";


function About() {
  return (

    <div className="Splash">
      
    
    <div

     className="aboutustitle">
      <h2> About us </h2>
    </div>
    
    <div className="aboutustext">
        <h3>
         We are a group of 8 software aspiring individuals, who
         together created this web-application to encourage and
         influence people on the importance of recycling. On our page,
         you can record your recycling and even find your nearest recycling centre.
         We've also made it easy for you to track your habits. The fight against climate change 
         continues and our application is designed to inform and educate everyone on being more 
         green!
        </h3>
      </div>

<div className="thankyou">

<h2>
Thank you for doing your part!
</h2>
</div>

      <div class="circle"></div>


<div className="people">
<img src={people}
width="550"/>

</div>
      </div>


  );
}

export default About;