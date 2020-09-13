import React, { Component } from "react";
import logo from "./logo.svg";
// import "./App.css";
import RocketLaunches from "./Containers/RocketLaunches/RocketLaunches";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={RocketLaunches} />
          <Route path="/:" exact component={RocketLaunches} />
        </Switch>
      </Router>
    );
  }
}

export default App;
