import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

console.log(
  "%c🕒 Even a stopped clock is right twice a day ⏰",
  "font-size:15px; background:#F9F9F9; color:#581845; padding:10px; border-radius:10px;"
);
