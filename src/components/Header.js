import React, { Component } from 'react'
import CounterButton from './CounterButton'

export default class Header extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false
  // }
  render() {
    console.log('header rerendered')
    return (
      <div>
        <h1 className="f1">RoboFriends</h1>
        <CounterButton color={'red'} />
      </div>
    )
  }
}
