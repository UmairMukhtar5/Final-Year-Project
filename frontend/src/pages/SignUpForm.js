import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { WaveTopBottomLoading } from "react-loadingg";

const API = "http://localhost:3000/users/signup";

class SignUpForm extends Component {
  constructor(props) {
    super();

    this.state = {
      password: "",
      name: "",
      hasAgreed: false,
      signedup: false,
      profilephoto: "",
      recoveryemail: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadimage = this.uploadimage.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
  }

  uploadimage(e) {
    console.log(e.target.files[0]);
    this.setState({ profilephoto: e.target.files[0] });
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", this.state.name);
    formData.append("password", this.state.password);
    formData.append("profilephoto", this.state.profilephoto);
    formData.append("recoveryemail", this.state.recoveryemail);
    //console.log(this.state.profilephoto);

    axios
      .post("http://localhost:3000/users/signup", formData, {})
      .then((res) => {
        console.log(res);

        this.setState({
          signedup: true,
        });
      });
  }

  render() {
    //  signed up  so redirect to login page with the return url
    if (this.state.signedup) {
      return <Redirect to={{ pathname: "/sign-in" }} />;
    } else {
      return (
        <div className='FormCenter'>
          <form onSubmit={this.handleSubmit} className='FormFields'>
            <div className='FormField'>
              <label className='FormField__Label' htmlFor='name'>
                Full Name
              </label>
              <input
                required='true'
                type='text'
                minLength='8'
                id='name'
                className='FormField__Input'
                placeholder='USER NAME'
                name='name'
                value={this.state.name}
                onChange={this.handleChange}
              >
              </input>
            </div>

            <div className='FormField'>
              <label className='FormField__Label' htmlFor='password'>
                Password
              </label>
              <input
                required='true'
                type='password'
                id='password'
                className='FormField__Input'
                placeholder='Enter your password'
                name='password'
                minLength='8'
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <div className='FormField'>
              <label className='FormField__Label' htmlFor='recoveryemail'>
                Recovery Email
              </label>
              <input
                required='true'
                type='email'
                id='recoveryemail'
                className='FormField__Input'
                placeholder='Enter Recovery Email '
                name='recoveryemail'
                value={this.state.recoveryemail}
                onChange={this.handleChange}
              />
            </div>

            <div className='FormField'>
              <label className='FormField__Label' htmlFor='profilephoto'>
                Upload Photo{" "}
              </label>
              <input
                required='true'
                type='file'
                accept='image/*'
                className='FormField__Input'
                onChange={this.uploadimage}
              />
            </div>

            <div className='FormField'>
              <label className='FormField__CheckboxLabel'>
                <input
                  className='FormField__Checkbox'
                  type='checkbox'
                  name='hasAgreed'
                  value={this.state.hasAgreed}
                  onChange={this.handleChange}
                />{" "}
                I agree all statements in{" "}
                <a href='' className='FormField__TermsLink'>
                  terms of service
                </a>
              </label>
            </div>

            <div className='FormField'>
              <button className='FormField__Button mr-20'>Sign Up</button>{" "}
              <Link to='/sign-in' className='FormField__Link'>
                I'm already member
              </Link>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default SignUpForm;
