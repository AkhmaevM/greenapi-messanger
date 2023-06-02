import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";

const defaultState = {
  contact: "",
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return { ...state, contact: state.contact + action.payload };

    case "GET_CONTACT":
      return { ...state, contact: state.contact - action.payload };

    default:
      return state;
  }
};
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
