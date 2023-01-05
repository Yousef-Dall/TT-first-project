import React, { Component } from "react";

export default class Einput extends Component {
  render() {
    return (
      <div>
        <div className="field">
          <label htmlFor="ema">{this.props.mes}</label>
          <input
            className="inp"
            type="email"
            name=""
            id="ema"
            placeholder="Enter email address"
          />
        </div>
      </div>
    );
  }
}
