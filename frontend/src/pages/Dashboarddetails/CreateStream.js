// import React, { Component } from "react";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";

// class CreateStream extends Component {
//   constructor() {
//     super();

//     this.state = {};
//   }

//   render() {
//     return (
//       <div
//         style={{
//           display: "flex",
//         }}
//       >
//         <div
//           style={{
//             width: "30%",
//             height: 500,
//             backgroundColor: "#D6EAF8",
//             borderRadius: 20,
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <img
//             src='https://www.logolynx.com/images/logolynx/a6/a63611513c59a6b9f507615e28fcc3e1.jpeg'
//             style={{
//               width: "100%",
//               height: "100%",
//             }}
//             alt='sdf'
//           />
//         </div>
//         <div
//           style={{
//             width: "70%",
//             height: 500,
//             backgroundColor: "#E6EAF8",
//             borderRadius: 10,
//             paddingLeft: 150,
//           }}
//         >
//           <TextField
//             style={{
//               marginTop: "5%",
//               width: "70%",
//               borderRadius: 70,
//             }}
//             id='outlined-basic'
//             label='Stream Name'
//             variant='outlined'
//           />

//           <TextField
//             style={{
//               marginTop: "5%",
//               width: "70%",
//               borderRadius: 70,
//             }}
//             id='outlined-basic'
//             label='Stream Description'
//             variant='outlined'
//           />

//           <TextField
//             style={{
//               marginTop: "5%",
//               width: "70%",
//               borderRadius: 70,
//             }}
//             id='outlined-basic'
//             // label='Stream Topic'
//             value=''
//             variant='outlined'
//             type='file'
//           />

//           <Button
//             variant='contained'
//             color='primary'
//             style={{
//               marginTop: "5%",
//               width: "70%",

//               borderRadius: 70,
//             }}
//           >
//             CHANGE PASSWORD
//           </Button>
//         </div>
//       </div>
//     );
//   }
// }
// export default CreateStream;

import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

const API = "http://localhost:3000/streamings";

class CreateStream extends Component {
  constructor(props) {
    super();

    this.state = {
      name: "",
      description: "",
      photo: "",
      streamcode: "",
      // authour: "aaa",
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
    this.setState({ photo: e.target.files[0] });
  }

  handleSubmit(e) {
    e.preventDefault();

    // console.log(this.state.name);
    // console.log(this.state.description);
    // console.log(this.state.photo);

    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("description", this.state.description);
    formData.append("photo", this.state.photo);
    formData.append("streamcode", this.state.streamcode);

    // formData.append("authour", this.state.authour);

    // console.log(this.state.photo);

    axios.post("http://localhost:3000/streamings", formData, {}).then((res) => {
      // console.log(res.data.name);
      if (res.status == 200) {
        localStorage.setItem("streamname", res.data.name);
        this.props.history.push({
          pathname: "/add/",
        });
      }
    });
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          width: "95%",
          paddingLeft: "1%",
          height: 700,
        }}
      >
        <div
          style={{
            width: "40%",
            height: 700,
            backgroundColor: "#D6EAF8",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
          }}
        >
          <img
            src="https://pbs.twimg.com/profile_images/905929328843669504/H0D9gBNQ.jpg"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 30,
            }}
            alt="sdf"
          />
        </div>

        <div
          className="FormCenter"
          style={{
            width: "70%",
            height: 700,
            marginLeft: 2,
            backgroundColor: "#E6EAF8",
            borderRadius: 30,
          }}
        >
          <form onSubmit={this.handleSubmit} className="FormFields">
            <div
              className="FormField"
              style={{
                width: "100%",
                marginTop: "5%",
                textAlign: "center",
              }}
            >
              <label
                className="FormField__Label"
                htmlFor="name"
                style={{ fontSize: 20, color: "#4A96BA", marginTop: 2 }}
              >
                Stream Name{" "}
              </label>

              <TextField
                style={{
                  marginTop: "2%",
                  width: "70%",
                  borderRadius: 70,
                }}
                label="Enter Title : "
                variant="outlined"
                required="true"
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />

              {/* <input
                required='true'
                type='text'
                id='name'
                className='FormField__Input'
                placeholder='Enter your full name'
                name='name'
                value={this.state.name}
                onChange={this.handleChange}
              /> */}
            </div>

            <div
              className="FormField"
              style={{
                width: "100%",
                marginTop: "5%",
                textAlign: "center",
              }}
            >
              <label
                className="FormField__Label"
                htmlFor="description"
                style={{ fontSize: 20, color: "#4A96BA" }}
              >
                STREAM DESCRIPTION:
              </label>

              <TextField
                style={{
                  marginTop: "2%",
                  width: "70%",
                  borderRadius: 70,
                }}
                label="Enter a brief description : "
                variant="outlined"
                required="true"
                type="text"
                id="description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />

              {/* <input
                required='true'
                type='description'
                id='description'
                className='FormField__Input'
                placeholder='Enter your description'
                name='description'
                value={this.state.description}
                onChange={this.handleChange}
              /> */}
            </div>

            <div
              className="FormField"
              style={{
                width: "100%",
                marginTop: "5%",
                textAlign: "center",
              }}
            >
              <label
                className="FormField__Label"
                htmlFor="streamcode"
                style={{ fontSize: 20, color: "#4A96BA" }}
              >
                STREAM CODE:
              </label>

              <TextField
                style={{
                  marginTop: "2%",
                  width: "70%",
                  borderRadius: 70,
                }}
                label="Enter a stream Code in case of Private Stream : "
                variant="outlined"
                required="true"
                type="text"
                id="streamcode"
                name="streamcode"
                value={this.state.streamcode}
                onChange={this.handleChange}
              />
            </div>

            <div
              className="FormField"
              style={{
                width: "100%",
                marginTop: "5%",
                textAlign: "center",
              }}
            >
              <label
                className="FormField__Label"
                htmlFor="photo"
                style={{ fontSize: 20, color: "#4A96BA" }}
              >
                {" "}
                Thumbnail Photo{" "}
              </label>

              {/* <TextField
                style={{
                  marginTop: "5%",
                  width: "70%",
                  borderRadius: 70,
                }}
                type='file'
                variant='outlined'
                required='true'
                accept='image/*'
                onChange={this.uploadimage}
              /> */}

              <input
                required="true"
                style={{
                  width: "30%",
                  marginTop: "2%",
                  color: "blue",
                  // marginLeft: "35%",
                }}
                type="file"
                accept="image/*"
                className="FormField__Input"
                onChange={this.uploadimage}
              />
            </div>

            <div
              className="FormField"
              style={{
                width: "100%",
                marginTop: "2%",
                color: "blue",
                textAlign: "center",
              }}
            >
              <button className="FormField__Button mr-80">Start Stream</button>{" "}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateStream;
