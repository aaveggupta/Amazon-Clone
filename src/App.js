import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Page404 from "./Components/Page404/Page404";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

import { auth } from "./Firebase/firebase";
import { useDataLayer } from "./Helpers/StateProvider";

const App = () => {
  const [{}, dispatch] = useDataLayer();

  useEffect(() => {
    auth.onAuthStateChanged((currUser) => {
      currUser
        ? dispatch({ type: "SET_USER", user: currUser })
        : dispatch({ type: "SET_USER", user: null });
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
