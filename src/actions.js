//! remember actions are just objects

import { CHANGE_SEARCH_FIELD } from './constants'

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD, // the action that is being taken
  payload: text // the data that is needed to go on to the reducer
})
