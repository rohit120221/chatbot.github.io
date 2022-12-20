import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Login.css";
import React, { Component } from "react";

class LoginPage extends React.Component {
  render() {
    return (
      <div className="login">
        <h2>Login with GoGreen</h2>
        <br></br>
        <br></br>
        <form action="/action_page.php" method="post"></form>
        <div class="imgcontainer"></div>

        <div class="containers">
          
          <form for="email ">
            <small>EMAIL</small>  
          <input type="text" placeholder="Enter email" name="email" required />
          </form>
          <form for="psw">
            <small>PASSWORD</small>
          
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          </form>
        </div>

        <div class="buttons">
              <div class="LogsIn">
                <button 
                  type="Logsin"
                  class="LogsIn">
                  Login    
                </button>
              </div>
            <div class="ForgotPass">
              <Link to = "/ForgotPsw">
                  <button type="button" class="forgot password">
                      Forgot password?
                  </button>
              </Link>
            </div>
          <div class="SignUps">
                <Link to = "/signup">
                  <button type="submit">Not registered? Signup</button>
                </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;