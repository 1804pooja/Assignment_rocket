import React, { Component, isValidElement } from "react";
import ReactDOM from "react-dom";
import classes from "./RocketLaunch.css";

const rocketLaunch = (props) => {
  return (
    <div className="myrow">
      <div className="img">
        <img src={props.imageName} alt="mission-image" />
      </div>
      <div className="description">
        <p>
          Mission Name # Flight No.: {props.missionName} # {props.flightNo}
        </p>
        <p>MissionIDs: {props.missionIDs}</p>
        <p>Launch Year: {props.launchYear}</p>
        <p> Successful Launch: {props.launchStatus} </p>
        <p>Successful Landing: {props.landingStatus}</p>
      </div>
    </div>
  );
};

export default rocketLaunch;
