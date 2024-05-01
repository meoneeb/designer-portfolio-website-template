import React from "react";
import AboutMe from "../about/AboutMe";
import Stats from "../experience/Stats";
import Intro from "./Intro";

export default function Landing() {
  return (
    <div className="container" style={{}}>
      <div
        className="d-flex flex-column justify-content-start align-items-center"
        style={{ height: "100%", marginTop: 100 }}
      >
        <div className="row">
          <div className="col-md-7 d-flex justify-content-center align-items-center">
            <Intro />
          </div>
          <div className="col-md-5">
            <AboutMe />
            <Stats />
          </div>
        </div>
      </div>
    </div>
  );
}
