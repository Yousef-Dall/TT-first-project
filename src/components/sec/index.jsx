import React, { Component } from "react";
import { Link } from "react-router-dom";
import Einput from "../emailinput";
import Pinput from "../passinput";
import Reg from "../reg";
import Regacc from "../regacc";
import Smbtn from "../smbtn";
import "./style.css";
// import Signup from "../../pages/sign up";

export default class Secc extends Component {
  render() {
    return (
      <div className="secc">
        <Reg
          regh="Join the game!"
          regp="Go inside the best gamers social network!"
        />
        <div className="sms">
          <Smbtn btnimg="./imgs/download.png" />
          <Smbtn btnimg="./imgs/Vector (8).png" />
          <Smbtn btnimg="./imgs/cib_linkedin-in.png" />
          <Smbtn btnimg="./imgs/Vector (9).png" />
        </div>

        <Einput mes="Enter email" />
        <Pinput mes="Enter your password" />

        <Link to={"/games"}>
          <Regacc mes="login" class="regacc" />
        </Link>

        <p>
          don't have an account? <Link to={"/signup"}>register</Link>
        </p>
      </div>
    );
  }
}
