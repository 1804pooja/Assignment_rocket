import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "../../axios-launch";
import RocketLaunch from "../../Components/RocketLaunch/RocketLaunch";
import classes from "./RocketLaunches.css";
import SearchFilter from "../SearchFilter/SearchFilter";
import Spinner from "../../UI/Spinner/Spinner";

class RocketLaunches extends Component {
  state = {
    loading: true,
    launchData: [],
    years: [
      { id: 1, value: 2015 },
      { id: 2, value: 2016 },
      { id: 3, value: 2017 },
      { id: 4, value: 2018 },
      { id: 5, value: 2019 },
      { id: 6, value: 2020 },
    ],
  };

  handleYearClick = (year) => {
    this.props.history.push(``);
    this.props.history.push(
      `api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${year}`
    );
    axios
      .get(
        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${year}`
      )
      .then((res) => {
        const fetchedRecords = [];
        for (let key in res.data) {
          fetchedRecords.push({
            ...res.data[key],
            id: key,
          });
        }
        this.setState({ loading: false, launchData: fetchedRecords });
        console.log(
          `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${year}`
        );
      })

      .catch((err) => {
        this.setState({ loading: false });
      });
  };

  handleLaunching = (event) => {
    const target = event.target;
    const value = target.value;
    this.props.history.push(``);
    this.props.history.push(
      `api.spaceXdata.com/v3/launches?limit=100&launch_success=${value}`
    );
    axios
      .get(
        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${value}`
      )
      .then((res) => {
        const fetchedRecords = [];
        for (let key in res.data) {
          fetchedRecords.push({
            ...res.data[key],
            id: key,
          });
        }

        this.setState({ loading: false, launchData: fetchedRecords });
      })

      .catch((err) => {
        this.setState({ loading: false });
      });
  };
  handleLanding = (event) => {
    const target = event.target;
    const value = target.value;
    this.props.history.push(``);
    this.props.history.push(
      `api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=${value}`
    );
    axios
      .get(
        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=${value}`
      )
      .then((res) => {
        const fetchedRecords = [];
        for (let key in res.data) {
          fetchedRecords.push({
            ...res.data[key],
            id: key,
          });
        }
        this.setState({ loading: false, launchData: fetchedRecords });

        const landRoute = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=${value}`;
      })

      .catch((err) => {
        this.setState({ loading: false });
      });
  };

  componentDidMount() {
    this.props.history.push(``);
    axios
      .get("https://api.spaceXdata.com/v3/launches?limit=100")
      .then((res) => {
        const fetchedRecords = [];
        for (let key in res.data) {
          fetchedRecords.push({
            ...res.data[key],
            id: key,
          });
        }
        this.setState({ loading: false, launchData: fetchedRecords });
      })

      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  render() {
    let rocketLaunches = (
      <div className="rocket_row">
        <SearchFilter
          years={this.state.years}
          onhandleLaunching={this.handleLaunching}
          onHandleLanding={this.handleLanding}
          handleYearClick={this.handleYearClick}
          launchRoute={this.launchRoute}
        />

        {this.state.launchData.map((data) => (
          <RocketLaunch
            key={data.id}
            imageName={data.links.mission_patch_small}
            missionName={data.mission_name}
            flightNo={data.flight_number}
            missionIDs={data.mission_id}
            launchYear={data.launch_year}
            launchStatus={data.launch_success}
            landingStatus={data.rocket.first_stage.cores.land_success}
          />
        ))}
      </div>
    );
    console.log(this.props.match);
    if (this.state.loading) {
      rocketLaunches = <Spinner />;
    }
    return <React.Fragment>{rocketLaunches}</React.Fragment>;
  }
}

export default RocketLaunches;
