import React, { Component } from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import Pages from "./Pages";
import history from "./history";
// import "./App.css";
import Addstream from "./pages/Dashboarddetails/Addstream";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboarddetails/DashboardHome";
import Profile from "./pages/Dashboarddetails/Profile";
import Dashboardcards from "./pages/Dashboarddetails/Card";

import StartVideo from "./pages/Dashboarddetails/StartVideo";
import VisualiseVideo from "./pages/Dashboarddetails/Visualize";
import CreateStream from "./pages/Dashboarddetails/CreateStream";
import othersplatform from "./pages/Dashboarddetails/OthersPlatform";
import Instragramplatform from "./pages/Dashboarddetails/instragramplatform";

var authenticated = false;

const BaseRouter = () => (
  <div>
    <Router history={history} forceRefresh={true}>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/sign-in" component={Pages}></Route>
        <Route path="/signup" component={Pages}></Route>

        <Dashboard>
          <Route exact path="/dashboard/" exact component={Dashboardcards}></Route>
          <Route path="/add" exact component={StartVideo}></Route>
          <Route path="/visualize/:name" exact component={VisualiseVideo}></Route>
          <Route path="/profile" exact component={Profile}></Route>
          <Route path="/createstream" exact component={CreateStream}></Route>
          <Route path="/otherplatform" exact component={othersplatform}></Route>
          <Route path="/otherplatform/instragram" exact component={Instragramplatform}></Route>
        </Dashboard>
      </Switch>
    </Router>
  </div>
);

export default BaseRouter;
