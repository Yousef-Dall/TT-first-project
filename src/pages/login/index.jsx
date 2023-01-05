import React, { Component } from "react";
import Secc from "../../components/sec";
import Welcome from "../../components/welcome";
import "./style.css";
import Logo from "../../components/logo";

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <Welcome children={<Logo pclass="dd" imlink="./imgs/logoblue.png" />} />
        <Secc />
      </div>
    );
  }
}
