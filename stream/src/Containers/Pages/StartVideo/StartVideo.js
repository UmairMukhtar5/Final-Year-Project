import React, { Component } from "react";
import $ from "jquery";
import io from "socket.io-client";
class StartVideo extends Component {
  componentDidMount() {
    this.streamFunc();
  }
  streamFunc = () => {
    const socket = io.connect("http://localhost:3001");
    var video = document.getElementById("video");
    var canvas = document.getElementById("preview");
    var context = canvas.getContext("2d");

    canvas.width = 900;
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

    function viewVideo(video, context) {
      context.drawImage(video, 0, 0, context.width, context.height);
      socket.emit("stream", canvas.toDataURL("image/webp"));
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
  render() {
    return (
      <React.Fragment>
        <h1>THIS IS THE STREAMER SIDE</h1>
        <video
          src=""
          id="video"
          style={{ width: "700px", height: "350px" }}
          autoplay="true"></video>

        <canvas style={{ display: "none" }} id="preview"></canvas>
        <div id="logger"></div>
      </React.Fragment>
    );
  }
}

export default StartVideo;
