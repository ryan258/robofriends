import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from './constants'

const initialStateSearch = {
  searchField: ''
}

//! reducer reads the action and spits out state
// - if they care about the action they will do something to the state
//   (so, hello switch statement)

// export it because we'll be using it in different parts of our app
// named after the action that is being taken
//
export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload })
    //-a second approach
    // return Object.assign({...state, searchField: action.payload})
    default:
      return state
  }
}

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: ''
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true })
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, { robots: action.payload, isPending: false })
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false })
    //! w/ a reducer, always return the state if it doesn't match any of the criteria
    default:
      return state
  }
}
