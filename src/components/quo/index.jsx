// import React, { Component } from "react";
import React from "react";
import "./style.css";

function Quo(props) {
  let color = props.grey ? "grey" : "#BABABA";

  return (
    <figure className="qq">
      <blockquote style={{ color }}>
        <span style={{ color }} className="mark">
          “
        </span>
        <br />
        <p className="nn">{props.quote}</p>
      </blockquote>
      <figcaption style={{ color }}>{props.auth}</figcaption>
    </figure>
  );
}

export default Quo;

//   return (
//     <h1 }></h1>
