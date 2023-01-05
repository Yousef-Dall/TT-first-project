import React, { Component } from 'react'

export default class Reg extends Component {
  render() {
    return (
        <div className='reg'>
            <h1>{this.props.regh}</h1>
            <p>{this.props.regp}</p>
        </div>
      
    )
  }
}
