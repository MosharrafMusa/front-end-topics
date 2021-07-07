import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// redux import
import { createStore } from "redux";

// ACTION
const increment = () => {
  return {
    type: "INCREMENT",
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
// Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
  }
};

let store = createStore(counter);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
