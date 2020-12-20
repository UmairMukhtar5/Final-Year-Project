import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import StarIcon from "@material-ui/icons/Star";
import IconButton from "@material-ui/core/IconButton";
import { WhisperSpinner } from "react-spinners-kit";
import MyChart from "./Youtubechart";
import axios from "axios";

// import FusionCharts from './Fusionchart';

const API = "http://localhost:3000/othersPlatform";
const API2 = "http://localhost:3000/othersPlatform3";


class OthersPlatform extends Component {

  constructor() {
    super();

    this.state = {
      youtube: "",
      queries: [],
      error: false,
      click: false,
      disable: 'a'
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });


  };

  onClick = async () => {

    await this.setState({ ...this.state, disable: 'b' })

    setTimeout(async () => {
      await this.setState({ ...this.state, disable: 'c' })

    }, 10000);

    const { youtube } = this.state;

    const resposive = await axios.post(API, { youtube });
    this.setState({ ...this.state, youtube: '' });

  };

  handlequeriesclick = async () => {

    this.setState({ error: false, click: 'uncomplete' });

    const { youtube } = this.state;
    const resposive = await axios.post(API2 + '/button', { youtube })
    console.log(resposive.data.result);
    if (resposive.data.result) {
      this.setState({ queries: resposive.data.result, click: 'complete' });

    } else {
      this.setState({ error: true, click: false });
    }
  }
  queryfetch = () => {
    if (this.state.disable === 'a') {
      return null
    } else if (this.state.disable === 'b') {
      return 'Please wait loading'

    } else if (this.state.disable === 'c') {

      return <Button
        onClick={this.handlequeriesclick}
        color='primary'
        margin='normal'
        style={{
          margin: '1rem'
        }}
        variant='contained'

      >Show comments</Button>
    }
  }


  setArray(key) {
    var newA = this.state.queries;
    delete newA[key];
    this.setState({ queries: newA });
    console.log(this.state.queries);
  }

  printQuestions() {
    if (this.state.error) return <div>{'No data found for that query'}</div>
    if (!this.state.click) return <div>{<h1
      style={{
        textAlign: "center",
        fontFamily: "Roboto",
        color: "#4A96BA",
        fontWeight: "bolder",
        marginBottom: "3%",
      }}
    >
      Please Enter URL to get processed queries!
    </h1>}</div>


    if (this.state.click === 'uncomplete') {
      return (
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              paddingLeft: "40%",
              paddingTop: "10%",
              paddingBottom: "0%",
            }}
          >
            <WhisperSpinner size={100} color="yellow"></WhisperSpinner>
          </div>

          <h1
            style={{
              fontFamily: "Roboto",
              color: "#4A96BA",
              fontWeight: "bolder",
              marginTop: "14%",
            }}
          >
            {" "}
            PROCESSING QUERIES ...{" "}
          </h1>
        </div>
      );
    }

    if (this.state.click === 'complete') {
      return this.state.queries.map((data, key) => {
        return (
          <div>
            <div
              style={{
                display: "flex",
                marginLeft: "8%",
                width: "90%",
                backgroundColor: "#4A96BA",
                borderRadius: 10,
                padding: "3%",
                marginBottom: "2%",
              }}
            >
              <div
                style={{
                  width: "10%",
                }}
              >
                <StarIcon
                  style={{ color: "black", marginTop: "40%" }}
                ></StarIcon>
              </div>

              <div
                style={{
                  width: "90%",
                  marginLeft: "2%",
                  marginTop: 8,
                }}
              >
                <p style={{ textAlign: "left", color: "white", fontSize: 12 }}>
                  {data}
                </p>
              </div>
              <div style={{ width: "10%", textAlign: "center" }}>
                {" "}
                <IconButton
                  onClick={() => {
                    this.setArray(key);
                  }}
                >
                  <DeleteForeverIcon
                    style={{ color: "red", fontSize: 30 }}
                  ></DeleteForeverIcon>
                </IconButton>
              </div>
            </div>
          </div>
        );
      });
    }
  }


  render() {
    console.log(this.state);

    return (
      <div
        style={{

          width: "100%",
        }}>
        <div
          style={{
            display: "flex",
            // justifyContent: "center",
            padding: "0.5%",
            // backgroundColor: "pink",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "20%",
              height: 400,
              backgroundColor: "#e6eaf8",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 5,
            }}
          >
            <img
              src="https://lh3.googleusercontent.com/S4wylkvt2jz16hnG9IG0pAZosbB82nWWy8P-rQkb54uH-SCVd5L2j7z7x1Vz5pZvIRc"
              style={{
                width: "100%",
                height: "100%",
              }}
              alt="Youtube Logo"
            />
          </div>



          <div
            style={{
              width: "34%",
              height: 400,
              backgroundColor: "#E6EAF8",
              borderRadius: 10,
              marginRight: "1%",
              alignItems: "center",
              justifyContent: "center",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',


            }}
          >
            <div

            >
              <h3
                style={{
                  textAlign: "center",
                  fontsize: "13%",
                  fontFamily: "Roboto",
                  color: "#4A96BA",
                }}
              >
                {" "}
              YOUTUBE STREAM LINK
            </h3>
            </div>

            <TextField


              fullWidth id="outlined-basic"
              label="Just Enter Youtube Stream URL here"
              variant="outlined"
              name="youtube"
              value={this.state.youtube}
              onChange={this.onChange}
            />
            <Button
              onClick={this.onClick}
              variant="contained"
              color="primary"
              style={{ marginTop: '1rem' }}

            >
              Submit
          </Button>

          </div>

          <div
            style={{
              width: "45%",
              height: 400,
              backgroundColor: "#D6EAF8",
              borderRadius: 10,
              justifyContent: "center",
              overflowY: "hidden",
              overflowY: "scroll",
            }}
          >
            <div
              style={{
                width: "100%",

                borderRadius: 20,
                borderWidth: 20,
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  fontFamily: "Roboto",
                  color: "#4A96BA",
                  fontWeight: "bolder",
                  marginBottom: "3%",
                }}
              >
                {" "}
                  Most Important Queries !{" "}
              </h1>
            </div>



            <div style={{
              width: "100%",
              textAlign: "center",
              alignContent: "center",
              alignItems: "center",


              borderRadius: 20,
              borderWidth: 20,
            }}>

              {this.queryfetch()}
              {this.printQuestions()}</div>
          </div>




        </div>
        <div style={{
          width: "100%",
          marginTop: "2%"
        }}>

          {/* <PieChart
            style={{
              width: "100%", height: 300

            }}
            data={[
              { title: 'One', value: 10, color: '#E38627' },
              { title: 'Two', value: 15, color: '#C13C37' },
              { title: 'Three', value: 20, color: '#6A2135' },
            ]}
          />; */}
          <MyChart />
          {/* <FusionCharts /> */}
        </div>     </div>
    );
  }
}
export default OthersPlatform;
