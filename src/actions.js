//! remember actions are just objects

import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from './constants'

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD, // the action that is being taken
  payload: text // the data that is needed to go on to the reducer
})

// we'll pass map from App.js mapDispatchToProps() to dispatch the actions
export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING })
  // now we have an asynchronous call to make
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}
