import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Home.css";
import handslogo from "./mainhome.png";


function Home() {
  return (
    
      
    <div className="Home">
    
      
      <div className="GreenhandLogo">
        <img src={handslogo} width="900" height={790} alt="logo" />
      </div>

        <div className="welcomeFlavour">
        
Welcome to a new beginning.              
<br></br> <br></br>
<br></br> <br></br>
<br></br> <br></br>
<br></br> <br></br>


      
      <div className="MoreRecycling">
        <Link to="/HomeRedirect">
          <b>More on recycling?</b>
        </Link>
      </div>
      
    
      <div className="homeFlavour">
        
      </div>
    </div>
    </div>

  );
}

export default Home;
