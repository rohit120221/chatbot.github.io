import React from "react";
import "./RecordRecycling.css";
import handslogo from "./handslogo.png";

import Form from './inputrecycling'

function RecordRecyclingPage() {
  return (
    <div className="RecordTitle">
      <h1>Enter Your Recycling Here!</h1>

      <div className="GreenhandLogo">
        <img src={handslogo} width="100" alt="logo" />
      </div>

      <div></div>

      <div className="dropdown">
        <Form/>
        
      </div>

      <div className="recycling">
        The user must select the material/s they wish to recycle (tin, paper,
        plastic, cardboard or glass), then select the 'add' icon. You will then
        be prompted with a menu asking you when the date, time and location of
        this event, as well as the amount of items you are recycling. When
        clicking on one of the materials, it will show you when, where and how
        much of it you have recycled. You can also view the 'what have you
        recycled?' page to view your recycling history.
      </div>
    </div>
  );
}
export default RecordRecyclingPage;
