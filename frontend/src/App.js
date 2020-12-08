import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";
import "./App.css";
import BaseRouter from "./base";
import Homepage from "./pages/Homepage";
import Pages from "./Pages";

class App extends Component {
  render() {
    return (
      <Router>
        <BaseRouter />
      </Router>
    );
  }
}

export default App;
