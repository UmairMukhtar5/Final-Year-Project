import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <React.Fragment>
      <Link to="/start-video-stream">
        <h1>Start Video Stream</h1>
      </Link>
      <h1>
        <Link to="/visualize-video-stream">Visualize Video Stream</Link>
      </h1>
    </React.Fragment>
  );
};

export default Home;
