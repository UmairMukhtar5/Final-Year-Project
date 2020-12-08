import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { WhisperSpinner } from "react-spinners-kit";
import { Link, Redirect } from "react-router-dom";
import MyChart from "./Youtubechart";
import { MDBRow, MDBIcon, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import "../caa/card.css";
class Cards extends Component {
  constructor() {
    super();
    this.state = {
      streams: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/streamings")
      .then((response) => response.json())
      .then((data) => this.setState({ streams: data }));
  }

  render() {
    const renderstreams = (stream, index) => {
      return (
        <div
          style={{
            width: "25%",
            padding: "1%",
          }}
        >
          <Link to={`/visualize/${stream.name}`}>
            <MDBRow>
              <MDBCol key={index} md="6">
                <MDBCard
                  testimonial
                  style={{
                    marginBottom: '20px',
                    textAlign: 'center',

                  }}
                >
                  <div className="uperCard"></div>
                  <div
                    style={{
                      marginTop: '-60px',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      className="rounded-circle img-responsive"
                      alt="woman avatar "
                      src={stream.photo}

                      height="200"
                      width="300"
                    />
                  </div>
                  <MDBCardBody>
                    <h1 className="card-title">{stream.name}</h1>
                    <hr />
                    <h4>{stream.description}</h4>{' '}
                    <p>
                      {/* <MDBIcon size="1x" icon="envelope-open">
                        john@gmail.com
                  </MDBIcon> */}
                      {/* <MDBIcon size="1x" icon="mobile">
                        0300-0000000
                  </MDBIcon> */}
                    </p>
                    <hr />

                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </Link>
        </div>
      );
    };

    if (this.state.streams.length == 0) {
      return (
        <div
          style={{
            justifyContent: "center",
            justifyItems: "center",
            textAlign: "center",
            width: "100%"
          }}
        >
          <h1
            style={{
              fontFamily: "Roboto",
              color: "#4A96BA",
              fontSize: 60,
              fontWeight: "bolder",
            }}
          >
            {" "}
            NO STREAM FOUND ! LOADING ...{" "}
          </h1>
          <div
            style={{
              paddingLeft: "40%",
              paddingTop: "5%",
              paddingBottom: "15%",
            }}
          >
            <WhisperSpinner size={150} color="black"></WhisperSpinner>
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

          {this.state.streams.map(renderstreams)}
        </div>
      );
    }
  }
}
export default Cards;
