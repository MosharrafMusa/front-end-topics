import React, { Component } from 'react'

class Counter extends Component {
  constructor(props){
    super()
    this.state = {
      count:props.initialCount
    }
  }
  render() {
    return (
      <div>
        <button>-</button>
        <span>{this.props.initialCount}</span>
        <button>+</button>
      </div>
    )
  }
}

export default Counter


