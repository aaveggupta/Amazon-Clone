import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Signup.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { auth } from "../../Firebase/firebase.js";
import { Rings } from "react-loader-spinner";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  let navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    setShowLoader(true);
    try {
      const user = await auth.createUserWithEmailAndPassword(email, password);
      user && (await auth.currentUser.updateProfile({ displayName: username }));
      user && navigate("/");
      setShowLoader(false);
    } catch (error) {
      alert(error.message);
      setShowLoader(false);
    }
  };

  return (
    <div className="signup-outer">
      <div className="signup">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="amazon_logo"
          className="signup__amazon-logo"
          onClick={() => navigate("/")}
        />
        <div className="signup__box">
          <h1 className="signup__box-signin">Sign up</h1>
          <form onSubmit={submitHandler} className="signup__box-form">
            <div className="signup__box-form-username">
              <label
                htmlFor="username"
                className="signup__box-form-username-label"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="signup__box-form-username-input"
              />
            </div>
            <div className="signup__box-form-email">
              <label htmlFor="email" className="signup__box-form-email-label">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="signup__box-form-email-input"
              />
            </div>
            <div className="signup__box-form-password">
              <label
                htmlFor="password"
                className="signup__box-form-password-label"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="signup__box-form-password-input"
              />
            </div>
            <button type="submit" className="signup__box-form-btn">
              {showLoader ? (
                <Rings color="#000" height={20} width={20} />
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
          <div className="signup__bottom">
            <p className="signup__bottom-perm">
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </p>
            <button
              onClick={() => navigate("/login")}
              className="signup__bottom-btn"
            >
              Already have account? SignIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
