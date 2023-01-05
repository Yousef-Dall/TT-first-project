import React, { Component } from "react";
import "./index.css";

export default class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img className="logoimg" src={this.props.imlink} alt="" />
        <p class={this.props.pclass}>Gamers</p>
      </div>
    );
  }
}
