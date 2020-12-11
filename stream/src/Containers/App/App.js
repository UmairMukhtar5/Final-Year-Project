import React from "react";
import { Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import StartVideo from "../Pages/StartVideo/StartVideo";
import Visualize from "../Pages/VisualizeVideo/Visualize";

const App = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/start-video-stream" component={StartVideo} />
      <Route path="/visualize-video-stream" component={Visualize} />
      {/* <Route path="/instragram" component={Visualize} /> */}

    </React.Fragment>
  );
};

export default App;
