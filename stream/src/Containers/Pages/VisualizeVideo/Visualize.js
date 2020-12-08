import React, { Component } from "react";
import $ from "jquery";
import io from "socket.io-client";

class Visualize extends Component {
  componentDidMount() {
    this.VisualizeFunc();
  }
  VisualizeFunc = () => {
    var socket = io.connect("http://localhost:3001");
    socket.on("stream", function (image) {
      $("#play").attr("src", image);
      // $('#logger').text(image);
    });
  };
  render() {
    return (
      <React.Fragment>
        <h1>THIS IS THE VIEWER SIDE</h1>
        <img id="play" />
      </React.Fragment>
    );
  }
}

export default Visualize;
