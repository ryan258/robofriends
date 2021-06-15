import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// we use connect so we don't have to use store.subscribe
// - it'll make the component redux aware
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'

import thunkMiddleware from 'redux-thunk'
// ^ thunk waits and sees if any action returns a function instead of an object
// - actions returns an object

import { searchRobots, requestRobots } from './reducers'

import App from './containers/App'

import 'tachyons'
import './index.css'

const logger = createLogger()

// in real life we have many reducers, in the store we'll combine all of them into 1 rootReducer
const rootReducer = combineReducers({ searchRobots, requestRobots })
// const store = createStore(rootReducer)
// apply middleware is ordered, so thunkMiddleware happens before logger
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

// the <Provider> will take care of passing the store down to all the components down the component tree
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
//
