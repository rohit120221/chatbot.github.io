import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./ForgotPsw.css";

class ForgotPsw extends React.Component {
  render() {
    return (
      <div className="forgotPass">
        <h2>Recover Your Account</h2>
        <br></br>
        <br></br>
        <form action="/action_page.php" method="post"></form>
        <div class="imgcontainer"></div>
        <i>Enter the email address you want to try and recover. You will shortly recieve a link to enter a new password for your account.</i>

        <div class="container">
            <div class="Buttons">
                <label for="email ">
                    <small>Email for recovery</small>
                </label>  
                <input type="text" placeholder="Enter email" name="email" required />
                <button type="Recover">recover</button>
                </div>
                <div>
                    <Link to = "/Login">
                        <button type="button" class="ForgotPsw">
                            Already have an account? Login
                        </button>
                    </Link>
            
                <div className="SignUps">
                    <Link to = "/signup">
                        <button type="submit">Not registered? Signup</button>
                    </Link>
                </div>
            </div>    
        </div>
      </div>
    );
  }
}

export default ForgotPsw;
