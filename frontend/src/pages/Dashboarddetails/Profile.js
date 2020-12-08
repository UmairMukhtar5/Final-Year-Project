import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PieChart from "./Piechart";
import YPiechart from "./YPiechart";
import ProfileUi from 'react-profile-card';
import { Hidden } from "@material-ui/core";



// code to get image and username from local storage ...
if (localStorage.getItem("localstoragedata")) {
  var user = JSON.parse(localStorage.getItem("localstoragedata"));
  var image = user.User.profilephoto;
  var username = user.User.username;
  var email = user.User.recoveryemail;
}
class Profile extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (

      <div

        style={{
          width: "100%", height: "100%",
          margin: "1%",
          overflow: "Hidden"
        }}
      >
        <div //starting div
          style={{
            display: "flex",
            width: "100%", height: "100%",
            margin: "1%"
          }}
        >
          {/* <div // image div left side
            style={{
              width: "30%",
              height: 300,
              backgroundColor: "#e6eaf8",
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              // borderRadius: 30,
            }}
          >
            <img
              src={image}
              style={{
                width: "100%",
                height: "100%",
                // borderRadius: 30,
                marginRight: "2%",
              }}
              alt="sdf"
            />
          </div> */}
          <div // form div having all
            style={{
              width: "98%",
              height: 300,
              backgroundColor: "#E6EAF8",
              // borderRadius: 10,
              // borderRadius: 30,

              marginLeft: 6,
              paddingLeft: "40%"

            }}
          >

            <ProfileUi
              imgUrl={image}
              name={username}
              designation={email} />
            {/* <div
              style={{
                marginTop: "5%",
                width: "100%",
                display: "flex",
                // height: "10%",
                // backgroundColor: "pink",
                borderRadius: 10,
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  fontFamily: "Roboto",
                  color: "#4A96BA",
                  marginLeft: "14%",
                  marginRight: "18%"

                }}
              >
                USERNAME :
            </h1>


              <TextField
                style={{
                  // marginTop: "5%",
                  // width: "70%",
                  // borderRadius: 70,
                }}
                id="outlined-basic"
                label=""
                variant="outlined"
                value={username}
                disabled
              /> </div> */}

            {/* <div
              style={{
                marginTop: "4%",
                width: "100%",
                display: "flex",
                // height: "10%",
                // backgroundColor: "pink",
                // borderRadius: 10,
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  fontFamily: "Roboto",
                  color: "#4A96BA",
                  marginLeft: "14%",
                  marginRight: "10%"

                }}
              >
                {" "}
              RECOVERY EMAIL :
            </h1>

              <TextField

                id="outlined-basic"
                value={email}
                variant="outlined"
                disabled
              />
            </div> */}

          </div>
        </div>

        <div //starting div
          style={{
            display: "flex",
            width: "100%", height: "100%",
            margin: "1%",

          }}
        >
          {/* <div // image div left side
            style={{
              width: "30%",
              height: 300,
              backgroundColor: "#e6eaf8",
              // borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              // borderRadius: 30,
            }}
          > */}
          {/* <img
              src={"https://images.squarespace-cdn.com/content/5beaeff0372b96e41c70df13/1549479548879-0734KYH67VF7KWAG5OGA/Webinar.png?content-type=image%2Fpng"}
              style={{
                width: "100%",
                height: "100%",
                // borderRadius: 30,
                marginRight: "2%",
              }}
              alt="sdf"
            />
          </div> */}
          <div // form div having all
            style={{
              width: "98%",
              height: 300,
              backgroundColor: "#E6EAF8",
              // borderRadius: 10,
              // borderRadius: 30,

              marginLeft: 6,
            }}
          >
            <div
              style={{
                marginTop: "2%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: 'center'
                // height: "10%",
                // backgroundColor: "pink",
                // borderRadius: 10,
              }}
            >
              {/* <h1
                style={{
                  textAlign: "center",
                  fontFamily: "Roboto",
                  color: "#4A96BA",
                  marginLeft: "14%",
                  marginRight: "11%"

                }}
              >
                IMPORTEXT STREAMS :
            </h1> */}


              <PieChart></PieChart>
              <YPiechart></YPiechart>

            </div>

            {/* <div
              style={{
                marginTop: "4%",
                width: "100%",
                display: "flex",

                // borderRadius: 10,
              }}
            > */}
            {/* <h1
                style={{
                  textAlign: "center",
                  fontFamily: "Roboto",
                  color: "#4A96BA",
                  marginLeft: "14%",
                  marginRight: "14%"

                }}
              >
                {" "}
              YOUTUBE STREAMS :
            </h1> */}

            {/* <TextField
                style={{

                }}
                id="outlined-basic"
                value={33}
                variant="outlined"
                disabled
              /> */}
            {/* </div> */}

          </div>
        </div>



      </div>
    );
  }
}
export default Profile;
