import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/qr">
          <Rick />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
function Rick() {
  window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  return null;
}
function Home() {
  return (
    <div className="App">
      <div className="clouds">
        <div className="mover-1"></div>
      </div>
      <div className="clouds">
        <div className="mover-1"></div>
      </div>
      <div className="clouds">
        <div className="mover-1"></div>
      </div>
      <div id="super-wrapper">
        <div id="wrapper" className="centered">
          <header>
            <img alt="Ferglier Gif" src="images/ferglier.gif" />
            <br />
            <img alt="Than You Gif" src="images/thanyou.gif" />
            <br />
          </header>
          <button className="button" onClick={increaseTheMagic}>
            MOAR MAGIC
          </button>
        </div>
      </div>
      <audio loop>
        <source src="audio/power_of_love.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
export default App;

function increaseTheMagic() {
  document.querySelector("audio").play();
}
