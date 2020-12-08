import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import Carousel from "react-bootstrap/Carousel";
import "./Pages.css";

class Pages extends Component {


  render() {
    return (
      <Router>
        <div className='App'>
          <div className='App__Aside'>
            <div style={{}}>
              <br></br>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src='assets/images/b.jpg' alt='Logo' />
              </div>
              <br></br>

              <div style={{ display: "flex", justifyContent: "center", marginTop: "7%" }}>
                <img src='assets/images/myimage.png' alt='Logo' />
              </div>
            </div>
          </div>
          <div className='App__Form'>
            <div className='PageSwitcher'>
              <NavLink
                to='/sign-in'
                activeClassName='PageSwitcher__Item--Active'
                className='PageSwitcher__Item'
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to='/signup'
                activeClassName='PageSwitcher__Item--Active'
                className='PageSwitcher__Item'
              >
                Sign Up
              </NavLink>
            </div>

            <div className='FormTitle'>
              <NavLink
                to='/sign-in'
                activeClassName='FormTitle__Link--Active'
                className='FormTitle__Link'
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to='/signup'
                activeClassName='FormTitle__Link--Active'
                className='FormTitle__Link'
              >
                Sign Up
              </NavLink>
            </div>
            {/* <Route path='/addstream' component={Addstream}></Route> */}
            <Route exact path='/signup' component={SignUpForm}></Route>
            <Route path='/sign-in' component={SignInForm}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default Pages;
