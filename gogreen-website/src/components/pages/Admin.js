import React from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../../services/user.service";
import { Link } from "react-router-dom";
import "./Admin.css";
import { db } from "./firebase-config";
import { getAuth, signInWithPopup, GoogleAuthProvider, EmailAuthCredential } from "firebase/auth";
import { authentication } from "./firebase-config";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};
const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};
const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: ""
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  handleRegister(e) {
    e.preventDefault();
    this.setState({
      message: "",
      successful: false
    });
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {



    const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(authentication, provider)
        .then((result) => {
          //THIS IS THE CONDITION FOR WHAT HAPPENS IF THE GOOGLE SIGNIN IS A SUCCESS
          console.log(result);
        })
        .catch((err) => {
          console.log(err); //CONDITION FOR IF IT ISNT
        });
    };

    return (
      <div className="register">
        <h2>SIGN UP TO GOGREEN</h2>
        <br></br>
        <br></br>
        <form action="/action_page.php" method="post"></form>
        <div class="container">
          <div class="sorting">
            <div class = "fname">
              <form for="fname">
                <small>FIRST NAME</small>
              <input
                type="text"
                placeholder="Enter first name"
                name="fname"
                
                value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}

              />
              </form>
              
            </div>
            <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            
          
         
            <div class = "email">
              <form for="sname">
                <small>EMAIL</small>
              <input 
                type="text" 
                placeholder="Enter email" 
                name="email" 
                value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
              />
              </form>
            </div>
         
            <div class = "psw">
              <form for="psw">
                <small>PASSWORD</small>
              
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
              />
              </form>
          
            <div class = "confpass">
              <form for="confpass">
                <small>CONFIRM PASSWORD</small>
              <input
                type="password"
                placeholder="Confirm Password"
                name="confpass"
                required
              />
              </form>
            </div>
            
            <div class="Signup">
              <button className="SignUp" 
                type="submit">Sign up!
              </button>
            </div>

            <div class="Google">
              <button className="Googlebutton" onClick={signInWithGoogle}>
                Sign in with Google
              </button>
            </div>  


            <div class="cancelbtn">
              <Link to = "/Login" >
                <button type="button" class="cancelbtn">
                  Already have an account? Sign In
                </button>
              </Link>
            </div>

            </div>
            </Form> 
          </div> 
        </div>
      </div>
    );
  }
}

export default Register;
