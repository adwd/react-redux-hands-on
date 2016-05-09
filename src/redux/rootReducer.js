import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import users from './modules/users'
import events from './modules/events'

export default combineReducers({
  counter,
  users,
  events,
  router
})
