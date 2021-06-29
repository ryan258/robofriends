import React, { Component } from 'react'
// import React, { PureComponent } from 'react'
//! PureComponent means that it will only rerender when its props actually change.
// - but this only does shallow comparisons, so if you have complex data structures, like deeply nested objects, it may miss some prop changes and not update.
// - so not as cool as they seem...
//! - shouldComponentUpdate() does the same thing, but you have more control
// --- but this also has an additional performance penalty
//! ----- so use this cautiously, don't over use it

export default class CounterButton extends Component {
  // export default class CounterButton extends PureComponent {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps)
    // console.log(nextState)
    // return true
    if (this.state.count !== nextState.count) {
      return true // and rerender
    }
    return false
  }

  updateCount = () => {
    this.setState((state) => ({ count: this.state.count + 1 }))
  }

  render() {
    console.log('CounterButton rerendered')
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        count: {this.state.count}
      </button>
    )
  }
}
