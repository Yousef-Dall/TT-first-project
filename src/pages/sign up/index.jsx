import React, { Component } from "react";
// import Welcome from "../../components/welcome";
import Logo from "../../components/logo";
import Signupform from "../../components/signupform";
import Signupsiede from "../../components/signupside";
import "./style.css";

export default class Signup extends Component {
  render() {
    return (
      <div className="up">
        <div className="side">
          <Signupsiede
            children={<Logo pclass="ll" imlink="./imgs/Group 3.png" />}
          />
        </div>
        <Signupform />
      </div>
    );
  }
}
