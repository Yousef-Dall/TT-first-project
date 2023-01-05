import React, { Component } from "react";
import Reg from "../reg";
import "./style.css";
import Einput from "../emailinput";
import Pinput from "../passinput";
import Regacc from "../regacc";
import { Link } from "react-router-dom";
export default class Signupform extends Component {
  render() {
    return (
      <div className="sec">
        <div className="back">
          <img src="./imgs/arrow_back_ios_24px.png" alt="" />
          <p>Back</p>
        </div>
        <div className="formfa">
          <Reg
            regh="Register Individual Account!"
            regp="For the purpose of gamers regulation, your details are required."
          />

          <form className="form" action="">
            <Einput mes="Enter email address" />
            <Pinput mes="Create password*" />
            <Pinput mes="Repeat password*" />
            <div>
              <input type="checkbox" name="" id="cb" />
              <label htmlFor="cb">I agree to terms & conditions</label>
            </div>
            <div className="field">
              <Regacc mes="Register Account" class="regacc" />

              <Link to={"/"}>
                <Regacc
                  class="loginbutt"
                  mes="login"
                  children={
                    <img className="google" src="./imgs/download.png" alt="" />
                  }
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
