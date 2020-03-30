import React, { Component } from "react";

class Horoscope extends Component {
  render() {
    return (
      <div>
        <div className="border-bottom d-flex justify-content-start align-items-center">
          <div className="logo">
            <img
              className="w-100 mh-100"
              src={
                this.props.horoscope.sunsign !== null
                  ? require("./assets/" +
                      this.props.horoscope.sunsign +
                      "-outline.png")
                  : ""
              }
              alt=""
            />
          </div>
          <div className="header-text">
            <h4>
              Hey,{" "}
              <span className="text-capitalize">
                {this.props.horoscope.sunsign}
              </span>
            </h4>
            <h6>
              <strong>Date: </strong>
              {this.props.horoscope.current_date}
            </h6>
          </div>
          <div className="close">
            <button
              onClick={this.props.onHandleCloseClick}
              type="button"
              className="close"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-justify h6 alert alert-dark alert-bg">
            "{this.props.horoscope.description}"
          </p>
          <p className="p-2 text-center">
            <strong>Lucky Time:</strong> {this.props.horoscope.lucky_time}{" "}
            &nbsp;
            <br /> <strong>Mood: </strong>
            {this.props.horoscope.mood} &nbsp; <br />{" "}
            <strong>Compatibility: </strong>{" "}
            {this.props.horoscope.compatibility}
          </p>
        </div>
      </div>
    );
  }
}

export default Horoscope;
