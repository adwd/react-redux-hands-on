import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import todo from './modules/todo'
import users from './modules/users'
import events from './modules/events'

export default combineReducers({
  counter,
  todo,
  users,
  events,
  router
})
