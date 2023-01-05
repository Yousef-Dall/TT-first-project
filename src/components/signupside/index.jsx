import React, { Component } from "react";
import Quo from "../quo";

export default class Signupsiede extends Component {
  render() {
    return (
      <div className="welcome side">
        {this.props.children}
        <Quo
          quote="I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them."
          auth="Hideo Kojima"
        />
        <div className="kk">
          <img src="./imgs/Vector 1.png" alt="" />
        </div>
      </div>
    );
  }
}
