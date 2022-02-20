import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { auth } from "../../Firebase/firebase.js";
import { Rings } from "react-loader-spinner";
import { useDataLayer } from "../../Helpers/StateProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  let navigate = useNavigate();

  let [{ user }, dispatch] = useDataLayer();

  useEffect(() => {
    user ? navigate("/") : navigate("/login");
  }, [user]);

  const submitHandler = async (event) => {
    event.preventDefault();
    setShowLoader(true);
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      user && navigate("/");
      setShowLoader(false);
    } catch (error) {
      alert(error.message);
      setShowLoader(false);
    }
  };

  const loginAsGuest = () => {
    setEmail("guest.user@guest.com");
    setPassword("guestuser1234");
  };

  return (
    <div className="login-outer">
      <div className="login">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="amazon_logo"
          className="login__amazon-logo"
          onClick={() => navigate("/")}
        />
        <div className="login__box">
          <h1 className="login__box-signin">Sign in</h1>
          <form onSubmit={submitHandler} className="login__box-form">
            <div className="login__box-form-email">
              <label htmlFor="email" className="login__box-form-email-label">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login__box-form-email-input"
              />
            </div>
            <div className="login__box-form-password">
              <label
                htmlFor="password"
                className="login__box-form-password-label"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login__box-form-password-input"
              />
            </div>
            <button type="submit" className="login__box-form-btn">
              {showLoader ? (
                <Rings color="#000" height={20} width={20} />
              ) : (
                "Sign In"
              )}
            </button>
          </form>
          <div className="login__bottom">
            <p className="login__bottom-perm">
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </p>
            <button
              onClick={() => navigate("/signup")}
              className="login__bottom-btn"
            >
              Create your Amazon Account
            </button>
            <button onClick={loginAsGuest} className="login__bottom-btn-guest">
              Login as Guest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
