// useState - basically state handling
// useEffect - lifecycle component esq - componentDidMount ~= [], componentDidUpdate, componentWillUnmount
import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'

// import { robots } from './data/robots'
import './App.css'
import ErrorBoundary from '../components/ErrorBoundary'

const App = () => {
  const [robots, setRobots] = useState([])
  const [searchField, setSearchField] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setRobots(users))
    console.log('a fetch happened')
  }, [])
  useEffect(() => {
    console.log(count)
  }, [count])

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  // const { robots, searchField } = state
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

  console.log(robots, searchField)

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  )
}

/*
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
*/
export default App
