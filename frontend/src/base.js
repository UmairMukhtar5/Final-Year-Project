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
var authenticated = false;

const BaseRouter = () => (
  <div>
    <Router history={history} forceRefresh={true}>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/sign-in" component={Pages}></Route>
        <Route path="/signup" component={Pages}></Route>

        <Dashboard>
          <Route exact path="/dashboard/" component={Dashboardcards}></Route>
          <Route path="/add" component={StartVideo}></Route>
          <Route path="/visualize/:name" component={VisualiseVideo}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/createstream" component={CreateStream}></Route>
          <Route path="/otherplatform" component={othersplatform}></Route>
        </Dashboard>
      </Switch>
    </Router>
  </div>
);

export default BaseRouter;
