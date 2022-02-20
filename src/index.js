import React from "react";
import Reactdom from "react-dom";
import App from "./App";
import { StateProvider } from "./Helpers/StateProvider";
import "./index.css";

import reducer, { initialState } from "./Helpers/reducer.js";

Reactdom.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
