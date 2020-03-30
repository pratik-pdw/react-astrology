import React, { Component } from "react";

import Constellations from "./constellations.png";

class Welcome extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          className="w-50 mh-25 m-5 "
          src={Constellations}
          alt="Constellations"
        />
        <p className="alert alert-dark alert-bg">
          Choose your zodiac sign to get your free daily horoscope.
        </p>
      </div>
    );
  }
}

export default Welcome;
