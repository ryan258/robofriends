import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'

// import { robots } from './data/robots'
import './App.css'
import ErrorBoundary from '../components/ErrorBoundary'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
    // console.log('constructor triggers')

    // this.onSearchChange = this.onSearchChange.bind(this)
  }

  componentDidMount() {
    // console.log('component mounted!!')
    // since fetch isn't attached to anything, it's actually become part of the window object (window.fetch)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }))
  }

  onSearchChange = (event) => {
    this.setState((prevState) => ({ searchField: event.target.value }))
  }

  render() {
    // console.log('boom! render!')
    const { robots, searchField } = this.state
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    )
  }
}

export default App
