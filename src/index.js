import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <div className="grid">
      <div className="center">
        {" "}
        <App />
      </div>
    </div>
  </Provider>,
  document.getElementById("root")
);
