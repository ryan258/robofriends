import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  // this is like the try/catch where if anything errors out, it will run this life cycle hook
  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Whoops, looks like our robots have revolted.</h1>
    }
    return this.props.children
  }
}
