import React, { useState } from "react";
import { useFirebase } from "./Firebase"; // Import your Firebase context

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  // const firebase = useFirebase(); // Use Firebase context for login

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await firebase.loginUserWithEmailAndPassword(email, password);
  //     alert("Login successful!");
  //     // Redirect or perform any action after successful login
  //   } catch (error) {
  //     setErrorMessage(error.message);
  //   }
  // };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login <i class="fa-solid fa-arrow-right-to-bracket"></i></h2>
        {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
        <div className="input-group">
          {/* <label>Email</label> */}
          <input
            placeholder="Email"
            type="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          {/* <label>Password</label> */}
          <input
            placeholder="Password"
            type="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;