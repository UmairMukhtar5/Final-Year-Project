import React, { Component } from "react";
import $ from "jquery";
import io from "socket.io-client";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import StarIcon from "@material-ui/icons/Star";
import IconButton from "@material-ui/core/IconButton";
import { GooSpinner } from "react-spinners-kit";
import { WhisperSpinner } from "react-spinners-kit";

class StartVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queries: [
      ],
      streamname: "",
      answer: "",

    };

    var handleToUpdate = this.handleToUpdate.bind(this);
  }
  handleToUpdate(someArg) {
    alert('We pass argument from Child to Parent: ' + someArg);
    this.setState({ answer: someArg });
  }
  componentDidMount() {


    this.streamFunc();
    if (localStorage.getItem("streamname")) {
      this.setState({ streamname: localStorage.getItem("streamname") });
      console.log(this.state.streamname);

      // requests the server to access thsi stream so we can take out queries and display
      fetch("http://localhost:3000/streamings/getstream/" + localStorage.getItem("streamname"))
        .then((response) => response.json())
        .then((data) => this.setState({ queries: data[0].allqueries }));

    }



  }

  streamFunc = () => {
    const socket = io.connect("http://localhost:4001");
    var video = document.getElementById("video");
    var canvas = document.getElementById("preview");
    var context = canvas.getContext("2d");
    canvas.width = 600;
    canvas.height = 700;

    context.width = canvas.width;
    context.height = canvas.height;

    // var socket = io();

    function message(msg) {
      $("#logger").text(msg);
    }

    function loadCamera(stream) {
      try {
        video.srcObject = stream;
      } catch (error) {
        video.srcObject = stream;
      }
      message("Camera connected");
    }

    function loadFail() {
      message("Camera not connected");
    }
    // this function emits stram event to the backend
    // can you see it /
    // here instead of just emitting stream i need to emit it to a room

    function viewVideo(video, context) {
      context.drawImage(video, 0, 0, context.width, context.height);
      // console.log(localStorage.getItem("streamname"));
      socket.emit(
        "stream",
        canvas.toDataURL("image/webp"),
        localStorage.getItem("streamname")
      );
    }

    $(function () {
      navigator.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msgGetUserMedia;

      if (navigator.getUserMedia) {
        navigator.getUserMedia(
          { video: true, audio: true },
          loadCamera,
          loadFail
        );
      }

      setInterval(function () {
        viewVideo(video, context);
      }, 5);
    });
  };
  setArray(key) {
    var newA = this.state.queries;
    delete newA[key];
    this.setState({ queries: newA });
    console.log(this.state.queries);
  }


  printQuestions() {
    if (this.state.queries.length == 0) {
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
              paddingTop: "15%",
              paddingBottom: "0%",
            }}
          >
            <WhisperSpinner size={120} color="yellow"></WhisperSpinner>
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
    } else {
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
                >

                </StarIcon>
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

    return (
      <React.Fragment >
        <div style={{ textAlign: "center", width: "100%" }}>
          <div style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex"
          }}>
            <GooSpinner size={90} color="#57B0D4" />
            <h1
              style={{
                textAlign: "center",
                fontFamily: "Roboto",
                color: "#4A96BA",
                fontWeight: "bolder",
                fontSize: 40,
                marginBottom: "2%",
                marginLeft: "2%"
              }}
            >

              YOU ARE LIVE NOW ! {this.state.streamname} {" "}
            </h1>   <GooSpinner size={90} color="#57B0D4" /></div>
          <div
            style={{
              display: "flex",
              width: "98%", margin: "1%"
            }}
          >
            <div style={{ width: "50%", paddingRight: 10 }}>
              <video
                src=""
                id="video"
                style={{ width: "100%", height: "100%", }}
                autoPlay={false}
                controls={true}
              ></video>
            </div>

            <div
              style={{
                width: "48%",
                height: 600,
                backgroundColor: "#D6EAF8",
                // borderRadius: 20,

                justifyContent: "center",
                overflowY: "hidden",
                overflowY: "scroll",
              }}
            >
              <div
                style={{
                  width: "100%",

                  // borderRadius: 4,
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
              <div style={{}}>{this.printQuestions()}</div>
            </div>
          </div>
          <canvas style={{ display: "none" }} id="preview"></canvas>
        </div>
      </React.Fragment>
    );
  }
}

export default StartVideo;
