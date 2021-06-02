import React from "react";
import "./App.css";

function App() {
  return (
    <div className="background-image">
      <div className="container">
        <div className="heading padding-heading">Sign Up Now!</div>

        <div className="button-setting">
          <a href="#" className="button-link">Facebook</a>
          <a href="#" className="button-link">Google</a>
        </div>

        <div>
          <p>Username</p>
          <input type="text"></input>
          <p>Password</p>
          <input type="password"></input>
        </div>

        <div>
          <a href="#">Login</a>
        </div>
        
        <div>
          
          <p>Don't you have account?</p>
          <a href="#">Sign Up Now!</a>
        </div>
      </div>
    </div>
  );
}

export default App;
