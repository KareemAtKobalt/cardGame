import React from "react";
import ReactDOM from "react-dom";
import classes from "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";


ReactDOM.render(
  <Provider store={store}>
    <div className={classes.Grid}>
      <div className={classes.Center}>
        {" "}
        <App />
      </div>
    </div>
  </Provider>,
  document.getElementById("root")
);
