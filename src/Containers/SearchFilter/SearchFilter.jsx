import Axios from "axios";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "../../axios-launch";

class SearchFilter extends Component {
  state = {
    launchSuccess: false,
  };

  render() {
    console.log(this.props);
    return (
      <table>
        <tbody>
          <tr>
            <th>SpaceX Launch Program</th>
          </tr>

          {this.props.years.map((year) => (
            <tr key={year.id}>
              <td style={{ borderSpacing: "15px" }}>
                <button
                  className="btn btn-success "
                  onClick={() => this.props.handleYearClick(year.value)}
                >
                  {year.value}
                </button>
                <p></p>
              </td>
            </tr>
          ))}

          <tr>
            <th>Successful Launch</th>
          </tr>
          <tr>
            <td>
              <input
                type="radio"
                name="launch"
                value="true"
                onChange={(event) => this.props.onhandleLaunching(event)}
              />
              <span style={{ marginLeft: "5px" }}>True</span>
            </td>
            <td>
              <input
                type="radio"
                name="launch"
                value="false"
                onChange={(event) => this.props.onhandleLaunching(event)}
              />
              <span style={{ marginLeft: "5px" }}>False</span>
            </td>
          </tr>
          <tr>
            <th>Successful Landing</th>
          </tr>
          <tr>
            <td>
              <input
                type="radio"
                name="landing"
                value="true"
                onChange={(event) => this.props.onHandleLanding(event)}
              />
              <span style={{ marginLeft: "5px" }}>True</span>
            </td>
            <td>
              <input
                type="radio"
                name="landing"
                value="false"
                onChange={(event) => this.props.onHandleLanding(event)}
              />
              <span style={{ marginLeft: "5px" }}>False</span>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default SearchFilter;
