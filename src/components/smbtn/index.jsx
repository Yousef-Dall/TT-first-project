import React, { Component } from 'react'
import "./style.css"

export default class Smbtn extends Component {
  render() {
    return (
      <div>
        <button className='smbtn'>
            <img src={this.props.btnimg} alt="" />
        </button>
      </div>
    )
  }
}
