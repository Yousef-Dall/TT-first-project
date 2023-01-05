import React, { Component } from "react";

export default class Pinput extends Component {
  render() {
    return (
      <div>
        <div className="field">
          <label htmlFor="pass">{this.props.mes}</label>
          <input
            className="inp"
            type="password"
            name=""
            id="pass"
            placeholder="Password"
          />
        </div>
      </div>
    );
  }
}
