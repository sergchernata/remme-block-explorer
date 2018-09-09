import React, { Component } from "react";
import Iframe from 'react-iframe';

import "./style.css";

class Feedback extends Component {

  render() {
    return (
        <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSeDg-ojRITPCUTo0E5wLS60iBdVOShJ02Hi6mcFhA2Lo0oOdQ/viewform?embedded=true"
        width="640px"
        height="790px"
        id="myId"
        className="feedback-iframe"
        display="block"
        position="relative"
        allowFullScreen/>
    )
  }
}

export default Feedback;
