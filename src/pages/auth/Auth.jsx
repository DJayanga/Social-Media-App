import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
const Auth = () => {
  return (
    <div className="Auth">
      <div className="Auth-Left">
        <img src={Logo} alt="Logo" />
        <div className="WebName">
          <h1>DJ Media</h1>
          <h6>Bring the world in to your hand</h6>
        </div>
      </div>
      <LogIn />
    </div>
  );
};

function LogIn() {
    return (
      <div className="Auth-Right">
        <form className="InfoForm AuthForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="User Name"
              className="InfoInput"
              name="userName"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="InfoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    );
  }

function SignUp() {
  return (
    <div className="Auth-Right">
      <form className="InfoForm AuthForm">
        <h3>Sign Up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="InfoInput"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="InfoInput"
            name="lasstName"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="User Name"
            className="InfoInput"
            name="userName"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="InfoInput"
            name="confirmPassword"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="InfoInput"
            name="password"
          />
        </div>
        <div>
            <span style={{fontSize:"12px"}}>Already have an account? LOGIN!</span>
        </div>
        <button className="button infoButton" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Auth;
