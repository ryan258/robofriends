import { CHANGE_SEARCH_FIELD } from './constants'

const initialState = {
  searchField: '',
  robots: []
}

//! reducer reads the action and spits out state
// - if they care about the action they will do something to the state
//   (so, hello switch statement)

// export it because we'll be using it in different parts of our app
// named after the action that is being taken
//
export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload })
    //-a second approach
    // return Object.assign({...state, searchField: action.payload})
    default:
      return state
  }
}
