import React, { Component } from "react";

export default class Regacc extends Component {
  render() {
    return (
      <button class={this.props.class}>
        {this.props.children}
        {this.props.mes}
      </button>
    );
  }
}
