import React from "react";
import * as Images from '../assets';

export const Horoscope = (props) => {
  console.log(props);
  const { horoscope: { sunsign, current_date, description, lucky_time, mood, compatibility }, onHandleCloseClick } = props;

  return (
    <div>
      <div className="border-bottom d-flex justify-content-start align-items-center">
        <div className="logo">
          <img
            className="w-100 mh-100"
            src={
              sunsign !== null
                ? Images[sunsign]
                : ""
            }
            alt={sunsign}
          />
        </div>
        <div className="header-text">
          <h4>
            Hey,{" "}
            <span className="text-capitalize">
              {sunsign}
            </span>
          </h4>
          <h6>
            <strong>Date: </strong>
            {current_date}
          </h6>
        </div>
        <div className="close">
          <button
            onClick={onHandleCloseClick}
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
          "{description}"
        </p>
        <p className="p-2 text-center">
          <strong>Lucky Time:</strong> {lucky_time}{" "}
          &nbsp;
          <br /> <strong>Mood: </strong>
          {mood} &nbsp; <br />{" "}
          <strong>Compatibility: </strong>{" "}
          {compatibility}
        </p>
      </div>
    </div>
  );
}

