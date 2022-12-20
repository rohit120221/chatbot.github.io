import React from "react"; 
import "./Contact.js"
import BannerLeft from "../pages/gogreenlogo.PNG";

function Contact() {

  return (
    <div className="Splash">
      
    
    <div

    className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

       
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
       
      </div>
    </div>
  </div>


  );
}

export default Contact;