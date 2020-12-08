import React, { Component, Button } from "react";
import { Link, Redirect } from "react-router-dom";
import history from "../history";
import { MagicSpinner } from "react-spinners-kit";

const API = "http://localhost:3000/users/login";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      password: "",
      loggedin: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  /// visisblity

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);

    let username = this.state.name;
    let password = this.state.password;

    let data = { username, password };

    fetch(API, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          console.log("Login Successfull" + res);
          localStorage.clear();
          localStorage.setItem("localstoragedata", JSON.stringify(res));
          this.props.history.push("/dashboard/");
          window.location.reload();
        }
      })
      .catch();
  }
  render() {
    return (
      <div>
        <div className="FormCenter">
          <form
            onSubmit={this.handleSubmit}
            className="FormFields"
            onSubmit={this.handleSubmit}
          >
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required="true"
                className="FormField__Input"
                placeholder="Enter your full name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="password">
                Password
              </label>
              <input
                required="true"
                type="password"
                id="password"
                className="FormField__Input"
                placeholder="Enter your password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <div className="FormField">
              <button className="FormField__Button mr-20">Sign In</button>{" "}
              <Link to="/signup" className="FormField__Link">
                Sign up with us ?
              </Link>
            </div>
          </form>
          <div
            style={{
              width: "100%",
              height: 40,
              paddingLeft: "30%",
              display: "none",
            }}
          >
            <MagicSpinner size={90} color="#57B0D4" />
          </div>
        </div>
      </div>
    );
  }
}

export default SignInForm;
