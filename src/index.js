import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <div className="grid">
      <header>Navigation</header>
      <div className="center">
        {" "}
        <App />
      </div>
      <footer>Footer (by samad)</footer>
    </div>
  </Provider>,
  document.getElementById("root")
);
