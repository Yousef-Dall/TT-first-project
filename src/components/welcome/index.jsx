// import React, { Children, Component } from "react";
import Quo from "../quo";
// import Logo from "../logo";
import "./style.css";
import React from "react";
// import { Children } from "react";

function Welcome(props) {
  return (
    <div className="welcome">
      {props.children}
      <Quo
        quote="I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them."
        auth="Hideo Kojima"
      />
      <div className="imgcon">
        <img src="./imgs/superscene-34-joystick_trans 1.png" alt="" />
      </div>
    </div>
  );
}

export default Welcome;
