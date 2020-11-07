import React from "react";
import "./stars.scss";
import Typed from "react-typed";

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-small-title">Hello, I am</h1>
              <h1 className="intro-title mb-4"> Farhad Bhuiyan</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items">A Dedicated </span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Full Stack Web Developer",
                      "Programmer",
                      "Software Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4 custom-button"
                  href="https://drive.google.com/file/d/1MA--d6SQckbrFzYu9mkexJvM8mzMB-Gh/view?usp=sharing"
                  target="_blank"
                  role="button"
                >
                  Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
