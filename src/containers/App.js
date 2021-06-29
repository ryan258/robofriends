import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import CardList from '../components/CardList'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'

import { requestRobots, setSearchField } from '../actions'

import './App.css'
import ErrorBoundary from '../components/ErrorBoundary'

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}

//! tell what pieve of state to listen to and send it down as props
const mapStateToProps = (state) => {
  return {
    // searchField: state.searchField
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

// dispatch is what triggers the action
//! tell what props to listen to that are actions that need to get dispatched
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

const App = (props) => {
  // const [robots, setRobots] = useState([])
  const { searchField, onSearchChange, robots, isPending } = props

  useEffect(() => {
    props.onRequestRobots()
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
    //   .then((users) => setRobots(users))
  }, [])

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

  // console.log(robots)

  return isPending ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <Header />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  )
}

// higher order function is a function that returns another function, hence what's going on with connect, so it runs, then takes the second ()s and uses that argument
//! connect will run the first part of the function and say
// - "I'm listening to this part of the state"
// then mapDispatch
// - "I'm interested in these actions"
// then it will give those props to the App
export default connect(mapStateToProps, mapDispatchToProps)(App)
