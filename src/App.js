import React, { Component } from 'react'
import CardList from './components/CardList'
import SearchBox from './components/SearchBox'

// import { robots } from './data/robots'
import './App.css'

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
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }))
  }

  onSearchChange = (event) => {
    this.setState((prevState) => ({ searchField: event.target.value }))
  }

  render() {
    console.log('boom! render!')
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      )
    }
  }
}

export default App
