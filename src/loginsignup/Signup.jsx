import React, { useState } from "react";
import { useFirebase } from "./Firebase"; // Import your context

import './signlogin.css';

const Signup = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  // const firebase = useFirebase(); // Use Firebase context

  // const handleSignUp = async (e) => {
  //   e.preventDefault();
  //   if (password !== confirmPassword) {
  //     setErrorMessage("Passwords do not match.");
  //     return;
  //   }
  //   try {
  //     await firebase.signupUserWithEmailAndPassword(email, password);
  //     alert("Sign-up successful!");
  //     // Redirect or take any action after successful sign-up
  //   } catch (error) {
  //     setErrorMessage(error.message);
  //   }
  // };

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign Up <i class="fa-solid fa-user-plus"></i></h2>
        {/* {errorMessage && <p className="error-message">{}</p>} */}
        <div className="signupform-div">

          <div className="input-group">
            {/* <label>Email</label> */}
            <input
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="input-group">
            {/* <label>Password</label> */}
            <input
              type="password"
              // onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className="input-group">
            {/* <label>Confirm Password</label> */}
            <input
              type="password"
              placeholder="Confirm Password"
              // onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>

        </div>
      </form>
    </div>
  );
};

export default Signup;